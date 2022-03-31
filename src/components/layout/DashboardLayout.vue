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

<script>
import Sidebar from '../dashboard/Sidebar.vue';
import Topbar from '../dashboard/Topbar.vue';
export default { components: { Sidebar, Topbar } };
</script>

<style lang="scss" scoped></style>
