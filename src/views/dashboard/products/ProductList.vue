<template>
  <DashboardLayout>
    <div class="card shadow border-0 mb-7">
      <div
        class="card-header d-flex justify-content-between align-items-center bg-success"
      >
        <h5 class="mb-0 text-white">Applications</h5>
        <router-link
          to="/dashboard/add-product"
          class="btn d-inline-flex btn-sm btn-light mx-1"
        >
          <span class="pe-2">
            <i class="bi bi-plus"></i>
          </span>
          <span>Create</span>
        </router-link>
      </div>
      <div class="table-responsive">
        <Loader v-if="loading" />
        <table v-else class="table table-hover table-nowrap">
          <thead class="thead-light">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Color</th>
              <th scope="col">Price</th>
              <th scope="col">Created At</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <ProductTable
              v-for="product in products"
              :key="product.id"
              :product="product"
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
    <Pagination :page="page" :setPage="setPage" :total="total" />
  </DashboardLayout>
</template>

<script setup>
import { computed, onMounted, watch } from '@vue/runtime-core';
import { useStore } from 'vuex';
import DashboardLayout from '../../../components/layout/DashboardLayout.vue';
import ProductTable from '../../../components/dashboard/tables/ProductTable.vue';
import Loader from '../../../components/UI/Loader.vue';
import Pagination from '../../../components/UI/Pagination.vue';
import { useState } from '../../../composables/state';

const store = useStore();
const products = computed(() => store.state.products);
const loading = computed(() => store.state.loading);
const total = computed(() => store.state.total);
const success = computed(() => store.state.success);

const [page, setPage] = useState(1);

const productList = async (p) => {
  await store.dispatch('getProducts', p);
};
onMounted(() => {
  productList(page);
});

watch(page, (newPage) => {
  productList(newPage);
});
</script>

<style scoped></style>
