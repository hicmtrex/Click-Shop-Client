<template>
  <div class="p-2 pb-3 col-md-3">
    <div class="product-wap card rounded-0">
      <div class="card rounded-0">
        <img class="card-img rounded-0 img-fluid" :src="item.images[0]" />
        <div
          class="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center"
        >
          <ul class="list-unstyled">
            <li>
              <router-link class="btn btn-success text-white" to="#"
                ><i class="far fa-heart"></i
              ></router-link>
            </li>
            <li>
              <router-link
                class="btn btn-success text-white mt-2"
                :to="`/product/${item._id}`"
                ><i class="far fa-eye"></i
              ></router-link>
            </li>
            <li>
              <a class="btn btn-success text-white mt-2" href="#"
                ><i class="fas fa-cart-plus"></i
              ></a>
            </li>
          </ul>
        </div>
      </div>
      <div class="card-body">
        <h5 class="text-decoration-none">
          {{ item.name }}
        </h5>
        <ul class="w-100 list-unstyled d-flex justify-content-between mb-0">
          <li>M/L/X/XL</li>
          <li class="pt-2">
            <span
              class="product-color-dot color-dot-red float-left rounded-circle ml-1"
            ></span>
            <span
              class="product-color-dot color-dot-blue float-left rounded-circle ml-1"
            ></span>
            <span
              class="product-color-dot color-dot-black float-left rounded-circle ml-1"
            ></span>
            <span
              class="product-color-dot color-dot-light float-left rounded-circle ml-1"
            ></span>
            <span
              class="product-color-dot color-dot-green float-left rounded-circle ml-1"
            ></span>
          </li>
        </ul>
        <ul class="list-unstyled d-flex justify-content-center mb-1">
          <li>
            <i class="text-warning fa fa-star"></i>
            <i class="text-warning fa fa-star"></i>
            <i class="text-warning fa fa-star"></i>
            <i class="text-warning fa fa-star"></i>
            <i class="text-muted fa fa-star"></i>
          </li>
        </ul>
        <p class="text-center mb-0">${{ item.price }}</p>
      </div>
    </div>
  </div>
</template>
<script setup>
const { item } = defineProps({
  item: Object,
});
</script>
<style lang=""></style>
