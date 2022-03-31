<template>
  <!-- Start Categories of The Month -->
  <section class="container py-5">
    <div class="row text-center pt-3">
      <div class="col-lg-6 m-auto">
        <h1 class="text-success">Categories of The Month</h1>
        <p>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-md-4 p-5 mt-3">
        <a href="#"
          ><img
            src="/images/Muscle_Fit_white.jfif"
            class="rounded-circle img-fluid border"
        /></a>
        <h5 class="text-center mt-3 mb-3">Collar Shirt</h5>
        <p class="text-center">
          <router-link to="/shop" class="btn btn-success">Go Shop</router-link>
        </p>
      </div>
      <div class="col-12 col-md-4 p-5 mt-3">
        <a href="#"
          ><img
            src="/images/Relaxed_hoodie_2.jfif"
            class="rounded-circle img-fluid border"
        /></a>
        <h2 class="h5 text-center mt-3 mb-3">Hoodie</h2>
        <p class="text-center">
          <router to="/shop" class="btn btn-success">Go Shop</router>
        </p>
      </div>
      <div class="col-12 col-md-4 p-5 mt-3">
        <a href="#"
          ><img
            src="/images/Printed_T-shirt_1.jfif"
            class="rounded-circle img-fluid border"
        /></a>
        <h2 class="h5 text-center mt-3 mb-3">T-Shirt</h2>
        <p class="text-center">
          <router-link to="/shop" class="btn btn-success">Go Shop</router-link>
        </p>
      </div>
    </div>
  </section>
  <!-- End Categories of The Month -->
</template>

<script>
export default {};
</script>

<style scoped>
img {
  height: 400px;
  width: 400px;
}
</style>
