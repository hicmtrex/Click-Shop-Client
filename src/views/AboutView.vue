<template>
  <DefaultLayout>
    <section class="bg-success">
      <div class="container">
        <div class="row align-items-center py-18">
          <div class="col-md-8 text-white">
            <h1 class="text-white">About Us</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div class="col-md-4">
            <!-- <img src="images/about-hero.svg" alt="About Hero" /> -->
          </div>
        </div>
      </div>
    </section>
    <!-- Close Banner -->

    <!-- Start Section -->
    <section class="container py-16">
      <div class="row text-center py-10">
        <div class="col-lg-6 m-auto">
          <h1 class="h1">Our Services</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 col-lg-3 pb-10">
          <div class="h-100 py-14 services-icon-wap shadow">
            <div class="h1 text-success text-center">
              <i class="fa fa-truck fa-lg"></i>
            </div>
            <h5 class="mt-4 text-center">Delivery Services</h5>
          </div>
        </div>

        <div class="col-md-6 col-lg-3 pb-10">
          <div class="h-100 py-14 services-icon-wap shadow">
            <div class="h1 text-success text-center">
              <i class="fas fa-exchange-alt"></i>
            </div>
            <h2 class="h5 mt-4 text-center">Shipping & Return</h2>
          </div>
        </div>

        <div class="col-md-6 col-lg-3 pb-10">
          <div class="h-100 py-14 services-icon-wap shadow">
            <div class="h1 text-success text-center">
              <i class="fa fa-percent"></i>
            </div>
            <h5 class="mt-4 text-center">Delivery Services</h5>
          </div>
        </div>

        <div class="col-md-6 col-lg-3 pb-10">
          <div class="h-100 py-14 services-icon-wap shadow">
            <div class="h1 text-success text-center">
              <i class="fa fa-user"></i>
            </div>
            <h5 class="mt-4 text-center">Delivery Services</h5>
          </div>
        </div>
      </div>
    </section>
    <Brand />
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from '../components/layout/DefaultLayout.vue';
import TopNavbar from '../components/TopNavbar.vue';
import Brand from '../components/Brand.vue';
</script>

<style scoped></style>
