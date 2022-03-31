<template>
  <tr>
    <td>
      <img
        alt="..."
        :src="product.image"
        class="avatar rounded-circle h-full me-2"
      />
      <router-link class="text-heading font-semibold" to="#">
        {{ product.name }}
      </router-link>
    </td>
    <td>{{ product.color[0] }}/ {{ product.color[1] }}</td>

    <td>${{ product.price }}</td>

    <td>
      <span class="badge badge-lg badge-dot">
        {{ product.created_at.substring(0, 10) }}
      </span>
    </td>
    <td class="text-end">
      <router-link
        :to="`/dashboard/edit-product/${product._id}`"
        class="btn btn-sm btn-neutral"
        >Edit</router-link
      >
      <button @click="deleteProduct(product._id)" class="btn text-danger">
        <i class="bi bi-trash"></i>
      </button>
    </td>
  </tr>
</template>

<script setup>
import { useStore } from 'vuex';

const { product } = defineProps({
  product: Object,
});
const store = useStore();

const deleteProduct = async (productId) => {
  if (window.confirm('Are you sure you want to delete this product?')) {
    store.dispatch('deleteProduct', productId);
  }
};
</script>

<style scoped></style>
