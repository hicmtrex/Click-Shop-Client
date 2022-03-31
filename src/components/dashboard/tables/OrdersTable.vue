<template>
  <tr>
    <td>
      <a class="text-heading font-semibold" href="#"> {{ order.user_name }} </a>
    </td>

    <td class="text-heading font-semibold">${{ order.totalPrice }}</td>

    <td class="text-heading font-semibold">
      {{ order.shippingAddress.country }}
    </td>
    <td class="text-heading font-semibold">
      {{ order.created_at.substring(0, 10) }}
    </td>

    <td class="text-heading font-semibold">
      <i v-if="order.is_paid" class="bi bi-check text-success"></i>

      <i v-else class="bi bi-x text-danger"></i>
    </td>
    <td class="text-heading font-semibold">
      {{ order.created_at.substring(0, 10) }}
    </td>
    <td class="text-end">
      <a href="#" class="btn btn-sm btn-neutral">Edit</a>
      <button class="btn text-danger">
        <i class="bi bi-trash"></i>
      </button>
    </td>
  </tr>
</template>

<script setup>
const { order } = defineProps({
  order: Object,
});
</script>

<style scoped>
.bi {
  font-size: 25px;
}
</style>
