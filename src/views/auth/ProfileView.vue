<template>
  <DefaultLayout>
    <div class="container">
      <div class="main-body">
        <div class="row gutters-sm">
          <div class="col-md-4 mb-3">
            <div class="card">
              <div class="card-body">
                <div class="d-flex flex-column align-items-center text-center">
                  <img
                    src="https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8="
                    alt="Admin"
                    class="rounded-circle"
                    width="150"
                  />
                  <div class="mt-3">
                    <h4>
                      {{ userInfo?.user.name }}
                    </h4>
                    <p class="text-secondary mb-1">
                      {{ userInfo?.user.isAdmin ? 'Admin' : 'Customer' }}
                    </p>

                    <!-- 
                    <button class="btn btn-dark col-12">Edit Profile</button> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-8">
            <div class="card mb-3">
              <div class="card-body">
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Full Name</h6>
                  </div>
                  <div class="col-sm-9">
                    {{ userInfo?.user.name }}
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Email</h6>
                  </div>
                  <div class="col-sm-9">
                    {{ userInfo?.user.email }}
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Phone</h6>
                  </div>
                  <div class="col-sm-9">
                    {{ shippingAddress?.phone }}
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Mobile</h6>
                  </div>
                  <div class="col-sm-9">(320) 380-4539</div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Address</h6>
                  </div>
                  <div class="col-sm-9">
                    {{ shippingAddress?.address }}
                    {{ shippingAddress?.country }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Orders -->
          <Loader v-if="loading" />
          <div class="row" v-else>
            <div
              class="d-flex align-items-center justify-content-between shadow mb-5 bg-success rounded py-3"
            >
              <h4 class="my-2 text-white">My Orders History</h4>
              <i
                v-if="!showOrders"
                @click="showOrders = true"
                class="fa fa-fw fa-chevron-circle-down mt-1"
              ></i>
              <i
                v-if="showOrders"
                @click="showOrders = false"
                class="fa fa-fw fa-chevron-circle-up mt-1"
              ></i>
            </div>
            <Transition name="slide-fade">
              <div class="row" v-if="showOrders">
                <div
                  class="col-md-4 mb-3"
                  v-for="(order, index) in userOrders"
                  :key="order._id"
                >
                  <div class="card h-100">
                    <span
                      v-if="!order.is_paid"
                      @click="deleteOrder(order._id)"
                      class="remove-item"
                      ><i class="fa fa-times"></i
                    ></span>
                    <div class="card-body">
                      <h6
                        class="d-flex align-items-center mb-3 justify-content-between"
                      >
                        <span> # Order {{ index + 1 }}</span>
                        <span> Price ${{ order.totalPrice }}</span>
                      </h6>
                      <ul class="list-group list-group-flush">
                        <li
                          class="list-group-item px-0 d-flex align-items-center"
                          v-for="item in order.cartItems"
                          :key="item._id"
                        >
                          <div class="row">
                            <div class="col-2">
                              <img
                                :src="item.image"
                                alt=""
                                class="rounded-circle"
                              />
                            </div>
                            <div class="col-5">
                              <p class="cardfont">
                                {{ item.name.substring(0, 15) }}
                              </p>
                            </div>
                            <div class="col-2">
                              <p class="cardfont">{{ item.qty }}</p>
                            </div>
                            <div class="col-3">
                              <p class="cardfont">${{ item.price }}</p>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <div
                        class="alert alert-danger d-flex justify-content-between align-items-center"
                        v-if="!order.is_paid"
                      >
                        <span> Not Paid</span>
                        <router-link
                          :to="`/cart/payment/${order._id}`"
                          class="btn btn-primary btn-sm"
                        >
                          Pay now</router-link
                        >
                      </div>
                      <div class="alert alert-success" v-else>
                        <span class="text-center">Paid </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import DefaultLayout from '../../components/layout/DefaultLayout.vue';

import { useStore } from 'vuex';
import { onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';
import Loader from '../../components/UI/Loader.vue';

const store = useStore();
const router = useRouter();
const userInfo = computed(() => store.state.userInfo);
const loading = computed(() => store.state.loading);
const shippingAddress = computed(() => store.state.shippingAddress);
const userOrders = computed(() => store.state.userOrders);
const showOrders = ref(false);

const deleteOrder = (orderId) => {
  if (window.confirm('are you sure ?')) {
    store.dispatch('deleteUserOrder', orderId).then(() => {
      getUserOrders();
    });
  }
};

const getUserOrders = async () => {
  await store.dispatch('getUserOrders');
};

// const deleteOrder = async (orderId) => {
//   await store.dispatch('deleteOrder', orderId);
// };

onMounted(() => {
  getUserOrders();
});

onBeforeMount(() => {
  if (!userInfo.value) {
    router.push({
      name: 'Login',
    });
  }
});
</script>

<style scoped>
.cardfont {
  font-size: 15px !important;
}
.remove-item {
  display: block;
  position: absolute;
  top: -5px;
  right: -5px;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background-color: #ff5252;
  color: #fff;
  line-height: 23px;
  text-align: center;
  box-shadow: 0 3px 12px 0 rgba(255, 82, 82, 0.5);
  cursor: pointer;
  transition: all 0.3s;
}
.col-md-2 img {
  max-width: 70px;
}
.remove-item:hover {
  opacity: 0.6;
}
.remove-item:active {
  transform: scale(1.2);
}

.fa-chevron-circle-down,
.fa-chevron-circle-up {
  font-size: 1.5rem;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s;
  padding: 5px;
}

.fa-chevron-circle-down:hover,
.fa-chevron-circle-up:hover {
  opacity: 0.8;
  font-size: 1.6rem;
}
.slide-fade-enter-active {
  transition: all 0.5s ease-in-out;
}

.slide-fade-leave-active {
  transition: all 0.5s ease-in-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>
