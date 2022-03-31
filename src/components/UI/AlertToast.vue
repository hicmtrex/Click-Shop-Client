<template>
  <div class="alert alert-danger alert-dismissible show rounded" role="alert">
    <strong><slot></slot></strong>
    <button
      @click="store.commit('resetError')"
      type="button"
      class="btn-close"
    ></button>
  </div>
</template>

<script setup>
import { useStore } from 'vuex';

const store = useStore();
</script>

<style scoped>
.alert {
  background-color: red;
  color: #fff;
}
</style>
