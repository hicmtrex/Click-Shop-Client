<template>
  <DefaultLayout>
    <div class="container pb-5 mb-2">
      <div
        class="alert alert-danger alert-dismissible fade show text-center mb-30"
        v-if="cartItems.length === 0"
      >
        <span class="alert-close" data-dismiss="alert">Your Cart Is Empty</span>

        <i class="fas fa-cart-arrow-down ms-5"></i>
      </div>
      <!-- Cart Item-->

      <div
        class="cart-item d-md-flex justify-content-between rounded-3"
        v-else
        v-for="item in cartItems"
        :key="item.id"
      >
        <span @click="deleteCart(item)" class="remove-item"
          ><i class="fa fa-times"></i
        ></span>
        <div class="px-3 my-3">
          <a class="cart-item-product" href="#">
            <div class="cart-item-product-thumb">
              <img
                :src="item.image"
                alt="Product"
                class="img-fluid rounded-circle"
              />
            </div>
            <div class="cart-item-product-info">
              <h4 class="cart-item-product-title text-success">
                {{ item.name }}
              </h4>
              <span><strong>Size:</strong> {{ item.size }}</span
              ><span><strong>Color:</strong> {{ item.color }}</span>
            </div>
          </a>
        </div>
        <div class="px-3 my-3 text-center">
          <div class="cart-item-label text-success">Quantity</div>
          <div class="count-input">{{ item.qty }}</div>
        </div>
        <div class="px-3 my-3 text-center">
          <div class="cart-item-label text-success">Category</div>
          <div class="count-input">{{ item.category }}</div>
        </div>
        <div class="px-3 my-3 text-center">
          <div class="cart-item-label text-success">Price</div>
          <span class="text-xl font-weight-medium">
            ${{ (item.price * item.qty).toFixed(2) }}
          </span>
        </div>
        <div class="px-3 my-3 text-center">
          <div class="cart-item-label text-success">Opt</div>
          <span class="text-xl font-weight-medium">
            <i
              @click="addToCart(item)"
              class="fas fa-plus-circle text-success me-3"
            ></i>
            <i
              @click="removeFromCart(item)"
              class="fas fa-minus-circle text-success"
            ></i>
          </span>
        </div>
      </div>
      <!-- Coupon + Subtotal-->
      <div
        class="d-sm-flex justify-content-between align-items-center text-center text-sm-left"
      >
        <form class="form-inline py-2">
          <label class="sr-only">Coupon code</label>
          <input
            class="form-control form-control-sm my-2 mr-3"
            type="text"
            placeholder="Coupon code"
            required=""
          />
          <button
            class="btn btn-style-1 btn-secondary btn-sm my-2 mx-auto mx-sm-0"
            type="submit"
          >
            Apply Coupon
          </button>
        </form>
        <div class="py-2">
          <span
            class="d-inline-block align-middle text-sm text-muted font-weight-medium text-uppercase mr-2"
            >Subtotal:</span
          ><span class="d-inline-block align-middle text-xl font-weight-medium"
            >${{
              cartItems
                .reduce((acc, item) => acc + item.price * item.qty, 0)
                .toFixed(2)
            }}</span
          >
        </div>
      </div>
      <!-- Buttons-->
      <hr class="my-2" />
      <div class="row pt-3 pb-5 mb-2">
        <div class="col-sm-6 mb-3">
          <router-link class="btn btn-style-1 btn-primary col-12" to="/shop"
            ><i class="fe-icon-refresh-ccw"></i>&nbsp;Continue
            Shopping</router-link
          >
        </div>
        <div class="col-sm-6 mb-3">
          <button
            :disabled="!userInfo || cartItems.length === 0"
            @click="$router.push('/cart/address')"
            class="btn btn-style-1 btn-success col-12"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>
<script setup>
import { computed } from '@vue/runtime-core';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import DefaultLayout from '../../components/layout/DefaultLayout.vue';

const store = useStore();
const router = useRouter();
const cartItems = computed(() => store.state.cartItems);
const userInfo = computed(() => store.state.userInfo);

console.log(cartItems.value);
const addToCart = (p) => {
  store.commit('addToCart', p);
};
const removeFromCart = (p) => {
  store.commit('removeFromCart', p);
};
console.log(cartItems.value);
const deleteCart = (p) => {
  store.commit('deleteFromCart', p);
};
</script>

<style scoped>
.product-card {
  position: relative;
  max-width: 380px;
  padding-top: 12px;
  padding-bottom: 43px;
  transition: all 0.35s;
  border: 1px solid #e7e7e7;
}
.product-card .product-head {
  padding: 0 15px 8px;
}
.product-card .product-head .badge {
  margin: 0;
}
.product-card .product-thumb {
  display: block;
}
.product-card .product-thumb > img {
  display: block;
  width: 100%;
}
.product-card .product-card-body {
  padding: 0 20px;
  text-align: center;
}
.product-card .product-meta {
  display: block;
  padding: 12px 0 2px;
  transition: color 0.25s;
  color: rgba(140, 140, 140, 0.75);
  font-size: 12px;
  font-weight: 600;
  text-decoration: none;
}
.product-card .product-meta:hover {
  color: #8c8c8c;
}
.product-card .product-title {
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: bold;
}
.product-card .product-title > a {
  transition: color 0.3s;
  color: #343b43;
  text-decoration: none;
}
.product-card .product-title > a:hover {
  color: #ac32e4;
}
.product-card .product-price {
  display: block;
  color: #404040;
  font-family: 'Montserrat', sans-serif;
  font-weight: normal;
}
.product-card .product-price > del {
  margin-right: 6px;
  color: rgba(140, 140, 140, 0.75);
}
.product-card .product-buttons-wrap {
  position: absolute;
  bottom: -20px;
  left: 0;
  width: 100%;
}
.product-card .product-buttons {
  display: table;
  margin: auto;
  background-color: #fff;
  box-shadow: 0 12px 20px 1px rgba(64, 64, 64, 0.11);
}
.product-card .product-button {
  display: table-cell;
  position: relative;
  width: 50px;
  height: 40px;
  border-right: 1px solid rgba(231, 231, 231, 0.6);
}
.product-card .product-button:last-child {
  border-right: 0;
}
.product-card .product-button > a {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all 0.3s;
  color: #404040;
  font-size: 16px;
  line-height: 40px;
  text-align: center;
  text-decoration: none;
}
.product-card .product-button > a:hover {
  background-color: #ac32e4;
  color: #fff;
}
.product-card:hover {
  border-color: transparent;
  box-shadow: 0 12px 20px 1px rgba(64, 64, 64, 0.09);
}
.product-category-card {
  display: block;
  max-width: 400px;
  text-align: center;
  text-decoration: none !important;
}
.product-category-card .product-category-card-thumb {
  display: table;
  width: 100%;
  box-shadow: 0 12px 20px 1px rgba(64, 64, 64, 0.09);
}
.product-category-card .product-category-card-body {
  padding: 20px;
  padding-bottom: 28px;
}
.product-category-card .main-img,
.product-category-card .thumblist {
  display: table-cell;
  padding: 15px;
  vertical-align: middle;
}
.product-category-card .main-img > img,
.product-category-card .thumblist > img {
  display: block;
  width: 100%;
}
.product-category-card .main-img {
  width: 65%;
  padding-right: 10px;
}
.product-category-card .thumblist {
  width: 35%;
  padding-left: 10px;
}
.product-category-card .thumblist > img:first-child {
  margin-bottom: 6px;
}
.product-category-card .product-category-card-meta {
  display: block;
  padding-bottom: 9px;
  color: rgba(140, 140, 140, 0.75);
  font-size: 11px;
  font-weight: 600;
}
.product-category-card .product-category-card-title {
  margin-bottom: 0;
  transition: color 0.3s;
  color: #343b43;
  font-size: 18px;
}
.product-category-card:hover .product-category-card-title {
  color: #ac32e4;
}
.product-gallery {
  position: relative;
  padding: 45px 15px 0;
  box-shadow: 0 12px 20px 1px rgba(64, 64, 64, 0.09);
}
.product-gallery .gallery-item::before {
  display: none !important;
}
.product-gallery .gallery-item::after {
  box-shadow: 0 8px 24px 0 rgba(0, 0, 0, 0.26);
}
.product-gallery .video-player-button,
.product-gallery .badge {
  position: absolute;
  z-index: 5;
}
.product-gallery .badge {
  top: 15px;
  left: 15px;
  margin-left: 0;
}
.product-gallery .video-player-button {
  top: 0;
  right: 15px;
  width: 60px;
  height: 60px;
  line-height: 60px;
}
.product-gallery .product-thumbnails {
  display: block;
  margin: 0 -15px;
  padding: 12px;
  border-top: 1px solid #e7e7e7;
  list-style: none;
  text-align: center;
}
.product-gallery .product-thumbnails > li {
  display: inline-block;
  margin: 10px 3px;
}
.product-gallery .product-thumbnails > li > a {
  display: block;
  width: 94px;
  transition: all 0.25s;
  border: 1px solid transparent;
  background-color: #fff;
  opacity: 0.75;
}
.product-gallery .product-thumbnails > li:hover > a {
  opacity: 1;
}
.product-gallery .product-thumbnails > li.active > a {
  border-color: #ac32e4;
  cursor: default;
  opacity: 1;
}
.product-meta {
  padding-bottom: 10px;
}
.product-meta > a,
.product-meta > i {
  display: inline-block;
  margin-right: 5px;
  color: rgba(140, 140, 140, 0.75);
  vertical-align: middle;
}
.product-meta > i {
  margin-top: 2px;
}
.product-meta > a {
  transition: color 0.25s;
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
}
.product-meta > a:hover {
  color: #8c8c8c;
}
.cart-item {
  position: relative;
  margin-bottom: 30px;
  padding: 0 50px 0 10px;
  background-color: #fff;
  box-shadow: 0 12px 20px 1px rgba(64, 64, 64, 0.09);
}
.cart-item .cart-item-label {
  display: block;
  margin-bottom: 15px;
  color: #8c8c8c;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
}
.cart-item .cart-item-product {
  display: table;
  width: 420px;
  text-decoration: none;
}
.cart-item .cart-item-product-thumb,
.cart-item .cart-item-product-info {
  display: table-cell;
  vertical-align: top;
}
.cart-item .cart-item-product-thumb {
  width: 110px;
}
.cart-item .cart-item-product-thumb > img {
  width: 100%;
}
.cart-item .cart-item-product-info {
  padding-top: 5px;
  padding-left: 15px;
}
.cart-item .cart-item-product-info > span {
  display: block;
  margin-bottom: 2px;
  color: #404040;
  font-size: 12px;
}
.cart-item .cart-item-product-title {
  margin-bottom: 8px;
  transition: color, 0.3s;
  color: #343b43;
  font-size: 16px;
  font-weight: bold;
}
.cart-item .cart-item-product:hover .cart-item-product-title {
  color: #ac32e4;
}
.cart-item .count-input {
  display: inline-block;
  width: 85px;
}
.cart-item .remove-item {
  right: -10px !important;
}
@media (max-width: 991px) {
  .cart-item {
    padding-right: 30px;
  }
  .cart-item .cart-item-product {
    width: auto;
  }
}
@media (max-width: 768px) {
  .cart-item {
    padding-right: 10px;
    padding-bottom: 15px;
  }
  .cart-item .cart-item-product {
    display: block;
    width: 100%;
    text-align: center;
  }
  .cart-item .cart-item-product-thumb,
  .cart-item .cart-item-product-info {
    display: block;
  }
  .cart-item .cart-item-product-thumb {
    margin: 0 auto 10px;
  }
  .cart-item .cart-item-product-info {
    padding-left: 0;
  }
  .cart-item .cart-item-label {
    margin-bottom: 8px;
  }
}
.comparison-table {
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;
}
.comparison-table table {
  min-width: 750px;
  table-layout: fixed;
}
.comparison-table .comparison-item {
  position: relative;
  margin-bottom: 10px;
  padding: 13px 12px 18px;
  background-color: #fff;
  text-align: center;
  box-shadow: 0 12px 20px 1px rgba(64, 64, 64, 0.09);
}
.comparison-table .comparison-item .comparison-item-thumb {
  display: block;
  width: 80px;
  margin-right: auto;
  margin-bottom: 12px;
  margin-left: auto;
}
.comparison-table .comparison-item .comparison-item-thumb > img {
  display: block;
  width: 100%;
}
.comparison-table .comparison-item .comparison-item-title {
  display: block;
  margin-bottom: 14px;
  transition: color 0.25s;
  color: #404040;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
}
.comparison-table .comparison-item .comparison-item-title:hover {
  color: #ac32e4;
}
.remove-item {
  display: block;
  position: absolute;
  top: -5px;
  right: -5px;
  width: 22px;
  height: 22px;
  padding-left: 1px;
  border-radius: 50%;
  background-color: #ff5252;
  color: #fff;
  line-height: 23px;
  text-align: center;
  box-shadow: 0 3px 12px 0 rgba(255, 82, 82, 0.5);
  cursor: pointer;
}
i {
  cursor: pointer;
  transition: all 0.3s ease-in;
}
i:hover {
  opacity: 0.8;
}
i:active {
  transform: scale(1.2);
}
.card-wrapper {
  margin: 30px -15px;
}
@media (max-width: 576px) {
  .card-wrapper .jp-card-container {
    width: 260px !important;
  }
  .card-wrapper .jp-card {
    min-width: 250px !important;
  }
}
</style>
