<template>
  <DefaultLayout>
    <div class="container">
      <Loader v-if="loading" />
      <div class="row" v-else>
        <StripeCheckout :pk="publishableKey" />
        <h2>Order Summry</h2>
        <div class="col-md-8">
          <ul class="list-group list-group-flush">
            <li
              class="list-group-item mt-2"
              v-for="item in order.cartItems"
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
                <div class="col mt-3">Qty: {{ item.qty }}</div>
                <div class="col mt-3">${{ item.price }}</div>
              </div>
            </li>
          </ul>
        </div>
        <div class="col-md-4">
          <ul class="list-group list-group-flush">
            <li class="list-group-item mt-2">
              <h2>Payment</h2>
            </li>
            <li class="list-group-item mt-2 d-flex justify-content-between">
              <span>Address: </span>
              <span>
                {{ order.shippingAddress.address }}
                {{ order.shippingAddress.postalCode }}</span
              >
            </li>
            <li class="list-group-item mt-2 d-flex justify-content-between">
              <span>Country: </span>
              <span>
                {{ order.shippingAddress.country }}
              </span>
            </li>
            <li class="list-group-item mt-2 d-flex justify-content-between">
              <span>Total Price: </span>
              <span> ${{ order.totalPrice }}</span>
            </li>
            <li class="list-group-item mt-2">
              <a :href="checkout" class="btn col-12">Checkout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>

<script setup>
import { StripeCheckout } from '@vue-stripe/vue-stripe';
import axios from 'axios';
import {
  computed,
  onBeforeMount,
  onMounted,
  ref,
  watch,
} from '@vue/runtime-core';
import { useStore } from 'vuex';
import Loader from '../../components/UI/Loader.vue';
import { useRoute } from 'vue-router';
import DefaultLayout from '../../components/layout/DefaultLayout.vue';

const store = useStore();
const order = computed(() => store.state.order);
const loading = computed(() => store.state.loading);
const publishableKey =
  'pk_test_51KesRYH5cYomygyIVpcJgPzIuCxSTmCZVDP07aX5Rl6fkq3LxILNREpH5VuNCw9NnNNJey4LEnPsLFaTHJaq9AiP00FJmrxaq7';
const route = useRoute();
const checkout = ref('');
const { id } = route.params;

const getSesstion = async (sessionId) => {
  try {
    const { data } = await axios.get(
      `http://localhost:8000/api/sessions/${sessionId}`
    );

    checkout.value = data.url;
  } catch (error) {
    console.log(error);
  }
};
const getOrderDetail = async (orderId) => {
  await store.dispatch('getOrderById', orderId);
};

// onMounted(() => {
//   getSesstion(id);
// });

// onBeforeMount(() => {
//   getOrderDetail(id);
// });

watch(
  () => id,
  (newId) => {
    getOrderDetail(newId);
    getSesstion(newId);
  }
);

if (route.params.id) {
  getOrderDetail(id);
  getSesstion(id);
  console.log('test');
}
</script>

<style scoped>
.btn {
  background: #635bff;
  color: #fff;
}
img {
  width: 50px;
}
</style>
