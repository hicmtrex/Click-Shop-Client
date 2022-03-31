<template>
  <DefaultLayout>
    <div class="container">
      <Loader v-if="loading" />
      <div v-else>
        <div class="row">
          <div class="col-lg-6 mt-5">
            <div class="card mb-3">
              <img
                class="card-img img-fluid"
                :src="product.images[selectedImage]"
                alt="Card image cap"
                id="product-detail"
              />
            </div>
            <div class="row">
              <!--Start Controls-->
              <div class="col-1 align-self-center">
                <a
                  href="#multi-item-example"
                  role="button"
                  data-bs-slide="prev"
                >
                  <i class="text-dark fas fa-chevron-left"></i>
                  <span class="sr-only">Previous</span>
                </a>
              </div>
              <!--End Controls-->
              <!--Start Carousel Wrapper-->
              <div
                id="multi-item-example"
                class="col-10 carousel slide carousel-multi-item"
                data-bs-ride="carousel"
              >
                <!--Start Slides-->
                <div class="carousel-inner product-links-wap" role="listbox">
                  <!--First slide-->
                  <div class="carousel-item active">
                    <div class="row">
                      <div
                        class="col-4"
                        v-for="(img, index) in product.images"
                        :key="img"
                      >
                        <a href="#" @click="setSelectedImage(index)">
                          <img
                            class="card-img img-fluid"
                            :src="img"
                            alt="Product Image 1"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <!--/.First slide-->
                </div>
                <!--End Slides-->
              </div>
              <!--End Carousel Wrapper-->
              <!--Start Controls-->
              <div class="col-1 align-self-center">
                <a
                  href="#multi-item-example"
                  role="button"
                  data-bs-slide="next"
                >
                  <i class="text-dark fas fa-chevron-right"></i>
                  <span class="sr-only">Next</span>
                </a>
              </div>
              <!--End Controls-->
            </div>
          </div>
          <!-- col end -->
          <div class="col-lg-6 mt-5">
            <div class="card right">
              <div class="card-body">
                <h1 class="h2">{{ product.name }}</h1>
                <p class="h3 py-2">$25.00</p>
                <p class="py-2">
                  <i class="fa fa-star text-warning"></i>
                  <i class="fa fa-star text-warning"></i>
                  <i class="fa fa-star text-warning"></i>
                  <i class="fa fa-star text-warning"></i>
                  <i class="fa fa-star text-secondary"></i>
                  <span class="list-inline-item text-dark"
                    >Rating 4.8 | 36 Comments</span
                  >
                </p>
                <ul class="list-inline">
                  <li class="list-inline-item">
                    <h6>Brand:</h6>
                  </li>
                  <li class="list-inline-item">
                    <p class="text-muted"><strong>Easy Wear</strong></p>
                  </li>
                </ul>

                <h6>Description:</h6>
                <p>
                  {{ product.description }}
                </p>
                <div class="selected my-5">
                  <p class="mb-2">
                    Selected Color: <strong class="h4 ms-2">{{ color }}</strong>
                  </p>

                  <p class="d-flex">
                    Selected Size:
                    <strong class="h4 mt-1 ms-2">{{ size }}</strong>
                  </p>
                </div>
                <ul class="list-inline my-2">
                  <li class="list-inline-item">
                    <h6>Avaliable Color :</h6>
                  </li>
                  <li class="list-inline-item">
                    <button
                      :style="{ backgroundColor: product.color[0] }"
                      @click="setColor(product.color[0])"
                      class="btn border border-dark mx-2"
                    ></button>

                    <button
                      @click="setColor(product.color[1])"
                      class="btn border-dark"
                      :style="{ backgroundColor: product.color[1] }"
                    ></button>
                  </li>
                </ul>
                <div class="d-flex align-items-center">
                  <h6 class="me-5">Avaliable Sizes :</h6>
                  <div
                    class="col-auto mx-2"
                    v-for="s in product.sizes"
                    :key="s"
                  >
                    <button @click="setSize(s)" class="btn btn-sm border-dark">
                      {{ s }}
                    </button>
                  </div>
                </div>
                <form @submit.prevent="">
                  <input
                    type="hidden"
                    name="product-title"
                    value="Activewear"
                  />

                  <div class="row pt-5 mt-5">
                    <div class="col d-grid">
                      <button
                        class="btn btn-success btn-lg"
                        name="submit"
                        @click="addToCartBuy(product)"
                      >
                        Buy
                      </button>
                    </div>
                    <div class="col d-grid">
                      <button
                        @click="addToCart(product)"
                        class="btn btn-success btn-lg"
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <section class="py-5">
          <div class="container">
            <div class="row text-left p-2 pb-3">
              <h4>Related Products</h4>
            </div>
            <!--Start Carousel Wrapper-->
            <div class="row" id="carousel-related-product">
              <Articals
                :item="item"
                v-for="item in someProducts"
                :key="item._id"
              />

              <!---->
            </div>
          </div>
        </section>
      </div>
    </div>
  </DefaultLayout>
</template>

<script setup>
import { computed, onBeforeMount, ref, watch } from '@vue/runtime-core';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';
import Loader from '../components/UI/Loader.vue';
import Articals from '../components/Articals.vue';
import { useToast } from 'vue-toastification';
import DefaultLayout from '../components/layout/DefaultLayout.vue';
import { useState } from '../composables/state';

const store = useStore();
const toast = useToast();
const product = computed(() => store.state.product);
const someProducts = computed(() => store.state.someProducts);
const loading = computed(() => store.state.loading);
const router = useRouter();
const route = useRoute();
const [size, setSize] = useState('L');
const [color, setColor] = useState('Black');
const [selectedImage, setSelectedImage] = useState(0);

const getProductDetail = async (productId) => {
  await store.dispatch('getProductById', productId);
};

const getFewProduct = async () => {
  await store.dispatch('getFewProduct');
};

const addToCart = async (p) => {
  await store.dispatch('addToCart', {
    _id: p._id,
    color: color.value,
    size: size.value,
  });
  toast.success(`${p.name} has been added`);
};

const addToCartBuy = async (p) => {
  await store.dispatch('addToCart', {
    _id: p._id,
    color: color.value,
    size: size.value,
  });
  router.push('/cart');
};

onBeforeMount(() => {
  getFewProduct();
  getProductDetail(route.params.id);
});

watch(
  () => route.params.id,
  (newId) => {
    getProductDetail(newId);
  }
);
</script>

<style scoped>
.card img {
  height: 700px;
}
.right {
  height: 700px;
}
</style>
