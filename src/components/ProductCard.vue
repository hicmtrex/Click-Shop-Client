<script setup>
const { product } = defineProps({
  product: Object,
});
</script>
<template>
  <div class="card">
    <div class="px-2 pt-2 position-relative">
      <img alt="..." :src="product.image" class="card-img" />
      <router-link
        :to="`/product/${product._id}`"
        class="btn btn-square btn-white rounded-circle position-absolute top-6 end-6 transform scale-105-hover"
      >
        <i class="bi bi-basket"></i>
      </router-link>
    </div>
    <div class="card-body">
      <h3 class="text-base text-muted font-semibold mb-3">
        {{ product.name }}
      </h3>
      <span class="d-block h3 mb-0">${{ product.price }}</span>
    </div>
  </div>
</template>

<style scoped>
.card-title {
  font-size: 1.7rem;
  margin-top: 5px;
}
.card-text img {
  width: 50px;
}
.card-text strong {
  font-size: 1.5rem;
}
</style>
