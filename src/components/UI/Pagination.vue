<template>
  <ul class="pagination pagination-lg justify-content-end">
    <li class="page-item" v-for="p in pages" :key="p">
      <a
        class="page-link rounded-0 mr-3 shadow-sm border-top-0 border-left-0"
        @click="setPage(p)"
        :class="{ active: page === p }"
        tabindex="-1"
        >{{ p }}</a
      >
    </li>
  </ul>
  <!--             
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item" v-for="p in pages" :key="p">
        <a
          @click="setPage(p)"
          :class="{ active: page === p }"
          class="page-link"
          >{{ p }}</a
        >
      </li>
    </ul>
  </nav> -->
</template>

<script setup>
const { page, setPage, total } = defineProps({
  setPage: Function,
  total: Number,
  page: Number,
});

const pages = Math.ceil(total / 9);
</script>

<style scoped>
a {
  cursor: pointer;
}
</style>
