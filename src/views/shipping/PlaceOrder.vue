<template>
  <DefaultLayout>
    <div class="container">
      <div class="row my2">
        <h2 class="my-2 text-success">Order Summry</h2>
        <div class="col-md-8">
          <div class="alert bg-warning" v-if="cartItems.length === 0">
            Your cart is empty
          </div>

          <ul
            class="list-group list-group-flush shadow bg-white rounded-2 bg-success text-white"
            v-else
          >
            <li
              class="list-group-item text-white"
              v-for="item in cartItems"
              :key="item.id"
            >
              <div class="row">
                <div class="col-md-2">
                  <img
                    :src="item.image"
                    alt=""
                    class="img-fluid rounded-circle"
                  />
                </div>
                <div class="col-md-4 mt-3">
                  {{ item.name }}
                </div>
                <div class="col mt-3">{{ item.color }}</div>
                <div class="col mt-3">{{ item.size }}</div>
                <div class="col mt-3">{{ item.qty }}</div>
                <div class="col mt-3">${{ item.price }}</div>
              </div>
            </li>
          </ul>
        </div>
        <div class="col-md-4">
          <ul class="list-group list-group-flush shadow bg-white rounded">
            <li class="list-group-item">
              <h2 class="text-success">
                SubTotal ({{
                  cartItems.reduce((acc, item) => acc + item.qty, 0)
                }}) items
              </h2>
            </li>

            <li class="list-group-item my-2">
              <h6 class="d-flex justify-content-between">
                <span> Order Price: </span>
                <span>${{ itemsPrice }}</span>
              </h6>
            </li>
            <li class="list-group-item my-2">
              <h6 class="d-flex justify-content-between">
                <span>Shipping:</span>
                <span>${{ shippingPrice }}</span>
              </h6>
            </li>
            <li class="list-group-item my-2">
              <h6 class="d-flex justify-content-between">
                <span> Tax:</span>
                <span>${{ taxPrice }}</span>
              </h6>
            </li>
            <li class="list-group-item my-2">
              <h4 class="d-flex justify-content-between">
                <span> Total:</span>
                <span>${{ totalPrice }}</span>
              </h4>
            </li>
            <li class="list-group-item">
              <button
                @click="createOrderhandler"
                :disabled="!userInfo"
                class="btn btn-success col-12"
              >
                Placeorder
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>
<script setup>
import { computed, onBeforeMount } from '@vue/runtime-core';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import DefaultLayout from '../../components/layout/DefaultLayout.vue';

const store = useStore();
const router = useRouter();
const cartItems = computed(() => store.state.cartItems);
const order = computed(() => store.state.order);
const userInfo = computed(() => store.state.userInfo);
const shippingAddress = computed(() => store.state.shippingAddress);

const itemsPrice = cartItems.value
  .reduce((acc, item) => Number(acc + item.price * item.qty), 0)
  .toFixed(2);
const shippingPrice = itemsPrice >= 200 ? 0 : 30;
const taxPrice = (itemsPrice * 0.1).toFixed(2);
const totalPrice = (
  Number(itemsPrice) +
  Number(shippingPrice) +
  Number(taxPrice)
).toFixed(2);

const createOrderhandler = async () => {
  store.dispatch('createOrder', {
    cartItems: cartItems.value,
    shippingAddress: shippingAddress.value,
    totalPrice: Number(totalPrice),
  });

  setTimeout(() => {
    router.push(`/cart/payment/${order.value._id}`);
  }, 2000);
};

onBeforeMount(() => {
  if (!userInfo.value) router.push('/auth/login');
  if (cartItems.value.length === 0) router.push('/');
});
</script>

<style scoped>
img {
  width: 100%;
  height: 150px;
}
</style>
