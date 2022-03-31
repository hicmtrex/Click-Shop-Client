<template>
  <div>
    <TopNavbar />
    <HeadBanner v-if="router.currentRoute.value.name === 'Home'" />
    <TopProductSell v-if="router.currentRoute.value.name === 'Home'" />
    <div class="main py-3">
      <slot>
        <RouterView :key="$route.path" />
      </slot>
    </div>
    <FooterBot v-if="router.currentRoute.value.name === 'Home'" />
    <div class="w-100 bg-black">
      <div class="container">
        <div class="row pt-2">
          <div class="col-12">
            <p class="text-left text-light py-3">
              Copyright Hicmtrex &copy; 2022
              <em class="text-success">Click Shop</em>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import FooterBot from '../FooterBot.vue';
import ModalSearch from '../UI/ModalSearch.vue';
import HeadBanner from '../HeadBanner.vue';
import TopNavbar from '../TopNavbar.vue';
import TopProductSell from '../TopProductSell.vue';

const router = useRouter();
const route = useRoute();
</script>

<style scoped></style>
