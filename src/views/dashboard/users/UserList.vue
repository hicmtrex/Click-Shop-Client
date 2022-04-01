<template>
  <DashboardLayout>
    <div class="card shadow border-0 mb-7">
      <div
        class="card-header d-flex justify-content-between align-items-center bg-success"
      >
        <h5 class="mb-0 text-white">Applications</h5>
      </div>
      <div class="table-responsive">
        <Loader v-if="loading" />
        <table v-else class="table table-hover table-nowrap">
          <thead class="thead-light">
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Admin</th>
              <th scope="col">Created At</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <UsersTable v-for="user in users" :key="user._id" :user="user" />
          </tbody>
        </table>
      </div>
      <div class="card-footer border-0 py-5">
        <span class="text-muted text-sm"
          >Showing 10 items out of 250 results found</span
        >
      </div>
    </div>
    <!-- <Pagination :page="page" :setPage="setPage" :total="total" /> -->
  </DashboardLayout>
</template>

<script setup>
import { computed, onMounted, watch } from '@vue/runtime-core';
import { useStore } from 'vuex';
import DashboardLayout from '../../../components/layout/DashboardLayout.vue';

import Loader from '../../../components/UI/Loader.vue';
import Pagination from '../../../components/UI/Pagination.vue';
import { useState } from '../../../composables/state';
import UsersTable from '../../../components/dashboard/tables/UsersTable.vue';

const store = useStore();
const users = computed(() => store.state.users);
const loading = computed(() => store.state.loading);

const getUsersList = async () => {
  await store.dispatch('getUserList');
};

onMounted(() => {
  getUsersList();
});
</script>

<style scoped></style>
