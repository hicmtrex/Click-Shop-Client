<template>
  <DefaultLayout>
    <section>
      <div class="container py-5">
        <Loader v-if="loading" />
        <div class="row" v-else>
          <div class="m-auto">
            <h1 class="h1">Featured Product</h1>
            <p class="mb-5">
              Reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
          </div>

          <div
            class="col-12 col-sm-12 col-md-3 col-lg-4 col-xl-4 mb-4"
            v-for="product in products"
            :key="product.id"
          >
            <ProductCard :product="product" />
          </div>
          <Pagination :page="page" :setPage="setPage" :total="total" />
        </div>
      </div>
    </section>
    <Brand />
  </DefaultLayout>
</template>

<script setup>
import { computed, onMounted, reactive, ref, watch } from '@vue/runtime-core';
import { useStore } from 'vuex';
import ProductCard from '../components/ProductCard.vue';
import Loader from '../components/UI/Loader.vue';
import DefaultLayout from '../components/layout/DefaultLayout.vue';
import { useState } from '../composables/state';
import Pagination from '../components/UI/Pagination.vue';
import Brand from '../components/Brand.vue';

const store = useStore();
const products = computed(() => store.state.products);
const loading = computed(() => store.state.loading);
const total = computed(() => store.state.total);
const [page, setPage] = useState(1);

const pages = Math.ceil(total / 3);

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

<style scoped>
a {
  cursor: pointer;
}
</style>
