<template lang="">
  <div
    class="modal fade bg-white"
    id="templatemo_search"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg" role="document">
      <div class="w-100 pt-1 mb-5 text-right">
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <form
        @submit.prevent="getResaultProduct"
        class="modal-content modal-body border-0 p-0"
      >
        <div class="input-group mb-2">
          <input
            type="text"
            class="form-control"
            id="inputModalSearch"
            v-model="name"
            placeholder="Search ..."
          />
          <button type="submit" class="input-group-text bg-success text-light">
            <i class="fa fa-fw fa-search text-white"></i>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup>
import { ref } from '@vue/reactivity';
import { useStore } from 'vuex';
const name = ref('');

const store = useStore();

const getResaultProduct = () => {
  store.dispatch('searchProduct', name.value);
};
</script>
<style scoped></style>
