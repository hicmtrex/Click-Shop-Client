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
            src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F0c%2Fb0%2F0cb0a49e053aa39ae0264bdc460bb378adba8e08.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_shirt_dressed_slimfit%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
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
            src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F7c%2F86%2F7c8693b5730eb35bf96e723e5d32aa0dd665d5a2.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]"
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
            src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F17%2Ffe%2F17fe78cae6056f8162cd8b080297e1daacdd6846.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
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

<script setup></script>

<style scoped>
img {
  height: 450px;
  width: 400px;
}
</style>
