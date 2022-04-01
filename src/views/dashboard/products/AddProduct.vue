<template>
  <DashboardLayout>
    <FormContainer>
      <h2 class="text-center text-success">Add Product</h2>
      <form @submit.prevent="onSubmit">
        <div class="form-group mb-2">
          <label class="form-label" for="name">Name</label>
          <input
            class="form-control"
            type="text"
            name="name"
            id="name"
            v-model="product.name"
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
            v-model="product.image1"
          />
        </div>
        <div class="form-group mb-2">
          <label class="form-label" for="image2">Image2</label>
          <input
            class="form-control"
            type="text"
            name="image2"
            id="image2"
            v-model="product.image2"
          />
        </div>
        <div class="form-group mb-2">
          <label class="form-label" for="price">Price</label>
          <input
            class="form-control"
            type="text"
            name="price"
            id="price"
            v-model.number="product.price"
          />
        </div>
        <div class="form-group mb-2">
          <label class="form-label" for="color1">Color 1</label>
          <input
            class="form-control"
            type="text"
            name="color1"
            id="color1"
            v-model="product.color1"
          />
        </div>
        <div class="form-group mb-2">
          <label class="form-label" for="color2">Color 2</label>
          <input
            class="form-control"
            type="text"
            name="color2"
            id="color2"
            v-model="product.color2"
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
            v-model="product.description"
          />
        </div>
        <button type="submit" class="btn btn-success w-full mt-2">
          Submit
        </button>
      </form>
    </FormContainer>
  </DashboardLayout>
</template>

<script setup>
import { reactive, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import DashboardLayout from '../../../components/layout/DashboardLayout.vue';
import FormContainer from '../../../components/UI/FormContainer.vue';

const store = useStore();
const router = useRouter();
const imageFile = ref('');

const product = reactive({
  name: '',
  image: '',
  image1: '',
  image2: '',
  price: '',
  color1: '',
  color2: '',
  description: '',
});

const handleImageSelected = (e) => {
  if (e.target.files.length === 0) {
    imageFile.value = '';
    return;
  }
  imageFile.value = e.target.files[0];
};

const onSubmit = () => {
  const data = new FormData();
  data.append('name', product.name);
  data.append('image', imageFile.value);
  data.append('images', [product.image1, product.image2]);
  data.append('price', product.price);
  data.append('color', [product.color1, product.color2]);
  data.append('sizes', ['M', 'S', 'L', 'XL', 'XXL']);
  data.append('description', product.description);

  store
    .dispatch('createProduct', data)
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
