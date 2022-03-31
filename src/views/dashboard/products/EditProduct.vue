<template>
  <DashboardLayout>
    <Loader v-if="loading" />
    <FormContainer v-else>
      <h3 class="text-center">Update Product</h3>
      <form @submit.prevent="onSubmit">
        <div class="form-group mb-2">
          <label class="form-label" for="name">Name</label>
          <input
            class="form-control"
            type="text"
            name="name"
            id="name"
            v-model="productData.name"
          />
        </div>
        <div class="form-group mb-2">
          <label class="form-label" for="image">Image</label>
          <input
            class="form-control"
            type="file"
            name="image"
            id="image"
            @change="handleImageSelected"
          />
        </div>
        <div class="form-group mb-2">
          <label class="form-label" for="image1">Image 1</label>
          <input
            class="form-control"
            type="text"
            name="image1"
            id="image1"
            v-model="productData.image1"
          />
        </div>
        <div class="form-group mb-2">
          <label class="form-label" for="image2">Image2</label>
          <input
            class="form-control"
            type="text"
            name="image2"
            id="image2"
            v-model="productData.image2"
          />
        </div>
        <div class="form-group mb-2">
          <label class="form-label" for="price">Price</label>
          <input
            class="form-control"
            type="text"
            name="price"
            id="price"
            v-model.number="productData.price"
          />
        </div>
        <div class="form-group mb-2">
          <label class="form-label" for="color1">Color 1</label>
          <input
            class="form-control"
            type="text"
            name="color1"
            id="color1"
            v-model="productData.color1"
          />
        </div>
        <div class="form-group mb-2">
          <label class="form-label" for="color2">Color 2</label>
          <input
            class="form-control"
            type="text"
            name="color2"
            id="color2"
            v-model="productData.color2"
          />
        </div>
        <div class="form-group mb-2">
          <label class="form-label" for="description">Description</label>
          <textarea
            rows="3"
            class="form-control"
            type="text"
            name="description"
            id="description"
            v-model="productData.description"
          />
        </div>
        <button type="submit" class="btn btn-primary w-full mt-2">
          Update
        </button>
      </form>
    </FormContainer>
  </DashboardLayout>
</template>

<script setup>
import { reactive, ref, watch, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
import DashboardLayout from '../../../components/layout/DashboardLayout.vue';
import FormContainer from '../../../components/UI/FormContainer.vue';
import Loader from '../../../components/UI/Loader.vue';

const store = useStore();
const router = useRouter();
const route = useRoute();
const products = computed(() => store.state.products);
const product = products.value.find((p) => p._id === route.params.id);
const loading = computed(() => store.state.loading);
const { id } = route.params;
const imageFile = ref('');

const productData = reactive({
  name: product.name,
  image: product.image,
  image1: product.images[0],
  image2: product.images[1],
  price: product.price,
  color1: product.color[0],
  color2: product.color[1],
  description: product.description,
});

const getAllProductList = async () => {
  await store.dispatch('getAllProductList');
};

onMounted(() => {
  getAllProductList();
});

if (route.params.id) {
  getAllProductList();
}

const handleImageSelected = (e) => {
  if (e.target.files.length === 0) {
    imageFile.value = '';
    return;
  }
  imageFile.value = e.target.files[0];
  console.log(imageFile.value);
};

const onSubmit = () => {
  const data = new FormData();
  data.append('name', productData.name);
  data.append('image', imageFile.value);
  data.append('images', [productData.image1, productData.image2]);
  data.append('price', productData.price);
  data.append('color', [productData.color1, productData.color2]);
  data.append('description', productData.description);
  data.append('sizes', ['M', 'S', 'L', 'XL', 'XXL']);

  store
    .dispatch('updateProduct', data, id)
    .then(() => router.push('/dashboard/product-list'));
};

watch(imageFile, (imageFile) => {
  if (!(imageFile instanceof File)) {
    return;
  }

  let fileReader = new FileReader();

  fileReader.readAsDataURL(imageFile);
});
</script>

<style scoped></style>
