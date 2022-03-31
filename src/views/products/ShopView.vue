<template>
  <DefaultLayout>
    <!-- Start Content -->
    <div class="container">
      <div class="row">
        <Categories />
        <div class="col-lg-9">
          <div class="row">
            <div class="col-md-6">
              <ul class="list-inline shop-top-menu pb-3 pt-1">
                <li class="list-inline-item">
                  <a class="h3 text-dark text-decoration-none mr-3" href="#"
                    >All</a
                  >
                </li>
                <li class="list-inline-item">
                  <a class="h3 text-dark text-decoration-none mr-3" href="#"
                    >Men's</a
                  >
                </li>
                <li class="list-inline-item">
                  <a class="h3 text-dark text-decoration-none" href="#"
                    >Women's</a
                  >
                </li>
              </ul>
            </div>
            <div class="col-md-6 pb-4">
              <div class="d-flex">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  v-model="name"
                />
                <button @click="searchProduct" class="btn btn-success">
                  Search
                </button>
              </div>
            </div>
          </div>
          <Loader v-if="loading" />
          <div v-else class="row">
            <ShopCard
              v-for="product in products"
              :key="product._id"
              :product="product"
            />
            <!-- card-->
          </div>
          <div div="row">
            <Pagination :page="page" :total="total" :setPage="setPage" />
          </div>
        </div>
      </div>
    </div>
    <Brand />
    <!-- End Content -->
  </DefaultLayout>
</template>

<script setup>
import { computed, onMounted, ref, watch } from 'vue';
import { useStore } from 'vuex';
import DefaultLayout from '../../components/layout/DefaultLayout.vue';
import { useState } from '../../composables/state';
import ShopCard from '../../components/products/ShopCard.vue';
import Loader from '../../components/UI/Loader.vue';
import Pagination from '../../components/UI/Pagination.vue';
import Categories from './Categories.vue';
import Brand from '../../components/Brand.vue';

const store = useStore();
const products = computed(() => store.state.products);
const loading = computed(() => store.state.loading);
const total = computed(() => store.state.total);
const [page, setPage] = useState(1);
const name = ref('');

const pages = Math.ceil(total / 3);

const productList = async (p) => {
  await store.dispatch('getProducts', p);
};

const searchProduct = () => {
  if (name.value === '') {
    return productList(page);
  }
  store.dispatch('searchProduct', name.value);
};

onMounted(() => {
  productList(page);
});

watch(page, (newPage) => {
  productList(newPage);
});
</script>

<style scoped></style>
