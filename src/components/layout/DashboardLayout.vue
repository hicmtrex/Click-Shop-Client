<template>
  <div class="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
    <Sidebar />
    <div class="h-screen flex-grow-1 overflow-y-lg-auto">
      <Topbar />
      <main class="py-6">
        <div class="container-fluid">
          <slot></slot>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import Sidebar from '../dashboard/Sidebar.vue';
import Topbar from '../dashboard/Topbar.vue';
</script>

<style scoped></style>
