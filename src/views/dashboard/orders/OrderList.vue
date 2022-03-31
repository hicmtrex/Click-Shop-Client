<template>
  <DashboardLayout>
    <div class="card shadow border-0 mb-7">
      <div
        class="card-header d-flex justify-content-between align-items-center bg-success"
      >
        <h5 class="mb-0 text-white">Applications</h5>
      </div>
      <div class="table-responsive">
        <Loader v-if="loading" />
        <table v-else class="table table-hover table-nowrap">
          <thead class="thead-light">
            <tr>
              <th scope="col">User</th>
              <th scope="col">Total Price</th>
              <th scope="col">Country</th>
              <th scope="col">Date</th>
              <th scope="col">Paid</th>
              <th scope="col">Paid At</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <OrdersTable
              v-for="order in orders"
              :key="order.id"
              :order="order"
            />
          </tbody>
        </table>
      </div>
      <div class="card-footer border-0 py-5">
        <span class="text-muted text-sm"
          >Showing 10 items out of 250 results found</span
        >
      </div>
    </div>
  </DashboardLayout>
</template>

<script setup>
import { computed, onMounted } from '@vue/runtime-core';
import { useStore } from 'vuex';
import DashboardLayout from '../../../components/layout/DashboardLayout.vue';
import OrdersTable from '../../../components/dashboard/tables/OrdersTable.vue';
import Loader from '../../../components/UI/Loader.vue';

const store = useStore();
const orders = computed(() => store.state.orders);
const loading = computed(() => store.state.loading);

const ordersList = async () => {
  await store.dispatch('getOrdersList');
};
onMounted(() => {
  ordersList();
});
</script>

<style scoped></style>
