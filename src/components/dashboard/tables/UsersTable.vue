<template>
  <tr>
    <td>{{ user._id }}</td>
    <td>
      <router-link class="text-heading font-semibold" to="#">
        {{ user?.name }}
      </router-link>
    </td>

    <td>{{ user.email }}</td>
    <td class="text-heading font-semibold">
      <i v-if="user.isAdmin" class="bi bi-check text-success"></i>

      <i v-else class="bi bi-x text-danger"></i>
    </td>
    <td>
      <span class="badge badge-lg badge-dot">
        {{ user?.created_at.substring(0, 10) }}
      </span>
    </td>

    <td class="text-end">
      <router-link
        :to="`/dashboard/edit-product/${user?._id}`"
        class="btn btn-sm btn-neutral"
        >Edit</router-link
      >
      <button @click="deleteProduct(user?._id)" class="btn text-danger">
        <i class="bi bi-trash"></i>
      </button>
    </td>
  </tr>
</template>

<script setup>
import { useStore } from 'vuex';

const { user } = defineProps({
  user: Object,
});
const store = useStore();

const deleteProduct = async (productId) => {};
</script>

<style scoped>
.bi {
  font-size: 25px;
}
</style>
