<template>
  <div class="col-lg-3">
    <h1 class="pb-4">Categories</h1>
    <ul class="list-unstyled templatemo-accordion">
      <li class="pb-3">
        <a
          class="collapsed d-flex justify-content-between h3 text-decoration-none"
          href="#"
        >
          Gender
          <i
            v-if="!genderShow"
            @click="genderShow = !genderShow"
            class="fa fa-fw fa-chevron-circle-down mt-1"
          ></i>
          <i
            v-if="genderShow"
            @click="genderShow = !genderShow"
            class="fa fa-fw fa-chevron-circle-up mt-1"
          ></i>
        </a>
        <ul v-if="genderShow" class="list-group list-group-flush ps-3 my-3">
          <li class="list-group-item">
            <span>Men</span>
          </li>
          <li class="list-group-item">
            <span>Women</span>
          </li>
        </ul>
      </li>
      <li class="py-4">
        <a
          class="collapsed d-flex justify-content-between h3 text-decoration-none"
          href="#"
        >
          Brand
          <i
            v-if="!genderBrand"
            @click="genderBrand = !genderBrand"
            class="fa fa-fw fa-chevron-circle-down mt-1"
          ></i>
          <i
            v-if="genderBrand"
            @click="genderBrand = !genderBrand"
            class="fa fa-fw fa-chevron-circle-up mt-1"
          ></i>
        </a>
        <ul v-if="genderBrand" class="list-group list-group-flush ps-3 my-3">
          <li class="list-group-item">
            <span @click="filterProduct('t-shirt')"> T-Shirt </span>
          </li>
          <li class="list-group-item">
            <span @click="filterProduct('hoodie')">Hoodie</span>
          </li>
          <li class="list-group-item">
            <span @click="filterProduct('collar shirt')">Collar Shirt</span>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const genderShow = ref(false);
const genderBrand = ref(false);

const filterProduct = (c) => {
  store.dispatch('filter_product', c);
};
</script>

<style scoped>
.list-group-item span {
  transition: all 0.3s;
  cursor: pointer;
}
.list-group-item span:hover {
  color: #5cb85c;
  border-bottom: 1px solid;
}
</style>
