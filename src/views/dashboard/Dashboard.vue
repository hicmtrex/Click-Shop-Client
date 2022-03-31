<template>
  <DashboardLayout>
    <div class="row g-6 mb-6">
      <div class="col-xl-3 col-sm-6 col-12">
        <div class="card shadow border-0">
          <div class="card-body">
            <div class="row">
              <div class="col">
                <span class="h6 font-semibold text-muted text-sm d-block mb-2"
                  >Sells</span
                >
                <span class="h3 font-bold mb-0">${{ earnMoney }}</span>
              </div>
              <div class="col-auto">
                <div
                  class="icon icon-shape bg-tertiary text-white text-lg rounded-circle"
                >
                  <i class="bi bi-credit-card"></i>
                </div>
              </div>
            </div>
            <div class="mt-2 mb-0 text-sm">
              <span class="badge badge-pill bg-soft-success text-success me-2">
                <i class="bi bi-arrow-up me-1"></i>13%
              </span>
              <span class="text-nowrap text-xs text-muted"
                >Since last month</span
              >
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-sm-6 col-12">
        <div class="card shadow border-0">
          <div class="card-body">
            <div class="row">
              <div class="col">
                <span class="h6 font-semibold text-muted text-sm d-block mb-2"
                  >New projects</span
                >
                <span class="h3 font-bold mb-0">215</span>
              </div>
              <div class="col-auto">
                <div
                  class="icon icon-shape bg-primary text-white text-lg rounded-circle"
                >
                  <i class="bi bi-people"></i>
                </div>
              </div>
            </div>
            <div class="mt-2 mb-0 text-sm">
              <span class="badge badge-pill bg-soft-success text-success me-2">
                <i class="bi bi-arrow-up me-1"></i>30%
              </span>
              <span class="text-nowrap text-xs text-muted"
                >Since last month</span
              >
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-sm-6 col-12">
        <div class="card shadow border-0">
          <div class="card-body">
            <div class="row">
              <div class="col">
                <span class="h6 font-semibold text-muted text-sm d-block mb-2"
                  >Total hours</span
                >
                <span class="h3 font-bold mb-0">1.400</span>
              </div>
              <div class="col-auto">
                <div
                  class="icon icon-shape bg-info text-white text-lg rounded-circle"
                >
                  <i class="bi bi-clock-history"></i>
                </div>
              </div>
            </div>
            <div class="mt-2 mb-0 text-sm">
              <span class="badge badge-pill bg-soft-danger text-danger me-2">
                <i class="bi bi-arrow-down me-1"></i>-5%
              </span>
              <span class="text-nowrap text-xs text-muted"
                >Since last month</span
              >
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-sm-6 col-12">
        <div class="card shadow border-0">
          <div class="card-body">
            <div class="row">
              <div class="col">
                <span class="h6 font-semibold text-muted text-sm d-block mb-2"
                  >Orders</span
                >
                <span class="h3 font-bold mb-0">{{ orders.length }}</span>
              </div>
              <div class="col-auto">
                <div
                  class="icon icon-shape bg-warning text-white text-lg rounded-circle"
                >
                  <i class="bi bi-minecart-loaded"></i>
                </div>
              </div>
            </div>
            <div class="mt-2 mb-0 text-sm">
              <span class="badge badge-pill bg-soft-success text-success me-2">
                <i class="bi bi-arrow-up me-1"></i>10%
              </span>
              <span class="text-nowrap text-xs text-muted"
                >Since last month</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </DashboardLayout>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import Sidebar from '../../components/dashboard/Sidebar.vue';
import Topbar from '../../components/dashboard/Topbar.vue';
import DashboardLayout from '../../components/layout/DashboardLayout.vue';

const store = useStore();
const orders = computed(() => store.state.orders);
const loading = computed(() => store.state.loading);

const earnMoney = orders.value
  .reduce((acc, order) => acc + order.totalPrice, 0)
  .toFixed(2);
console.log(earnMoney);
const ordersList = async () => {
  await store.dispatch('getOrdersList');
};
onMounted(() => {
  ordersList();
});
</script>

<style scoped></style>
