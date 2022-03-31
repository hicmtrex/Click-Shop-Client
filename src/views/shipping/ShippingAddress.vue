<template>
  <DefaultLayout>
    <div class="container">
      <FormContainer>
        <h1 class="text-center text-success">
          Shipping Address
          <i className="fa fa-home icon text-success "></i>
        </h1>
        <AlertToast v-if="error">{{ error }}</AlertToast>
        <form @submit.prevent="saveShippingAddress">
          <div class="form-group mb-2">
            <label for="address" class="form-label">Address </label>
            <div className="d-flex">
              <input
                class="form-control"
                type="text"
                name="address"
                id="address"
                placeholder="address"
                v-model="address"
              />
              <i className="fa fa-home icon"></i>
            </div>
          </div>
          <div class="form-group mb-2">
            <label for="city" class="form-label">City</label>
            <div className="d-flex">
              <input
                class="form-control"
                v-model="city"
                type="text"
                name="city"
                id="city"
                placeholder="City"
              />
              <i className="fa fa-city icon"></i>
            </div>
          </div>
          <div class="form-group mb-2">
            <label for="phone" class="form-label">Phone</label>
            <div className="d-flex">
              <input
                class="form-control"
                v-model="phone"
                type="number"
                name="phone"
                id="phone"
                placeholder="Phone number"
              />
              <i className="fa fa-phone icon"></i>
            </div>
          </div>
          <div class="form-group mb-2">
            <label for="password" class="form-label">Postal Code</label>
            <div className="d-flex">
              <input
                class="form-control"
                v-model="postalCode"
                type="text"
                name="password"
                id="password"
                placeholder="Postal code"
              />
              <i className="fa fa-map icon"></i>
            </div>
          </div>
          <div class="form-group mb-2">
            <label for="password" class="form-label">Country</label>
            <div className="d-flex">
              <select class="form-control" v-model="country">
                <option v-for="c in countries" :key="c.name" :value="c.name">
                  {{ c.name }}
                </option>
              </select>
              <i className="fa fa-flag icon"></i>
            </div>
          </div>
          <button class="btn btn-success col-11 mt-2">Continue</button>
        </form>
      </FormContainer>
    </div>
  </DefaultLayout>
</template>
<script setup>
import { ref } from '@vue/reactivity';
import FormContainer from '../../components/UI/FormContainer.vue';
import countries from '../../utils/countries.json';
import { useStore } from 'vuex';
import { computed, onBeforeMount, watch } from '@vue/runtime-core';
import { useRouter } from 'vue-router';
import DefaultLayout from '../../components/layout/DefaultLayout.vue';

const store = useStore();
const router = useRouter();
const shippingAddress = computed(() => store.state.shippingAddress);
const userInfo = computed(() => store.state.userInfo);
const address = ref('');
const city = ref('');
const postalCode = ref('');
const country = ref('Afghanistan');
const phone = ref('');

const saveShippingAddress = () => {
  store.commit('saveAddress', {
    address: address.value,
    city: city.value,
    postalCode: postalCode.value,
    phone: phone.value,
    country: country.value,
  });
};

onBeforeMount(() => {
  if (shippingAddress.value) router.push('/cart/placeorder');

  if (!userInfo.value) router.push('/auth/login');
});

watch(shippingAddress, () => {
  if (shippingAddress.value) {
    router.push('/cart/placeorder');
  }
});
</script>
<style scoped>
i {
  padding: 10px;
  font-size: 25px;

  text-align: center;
}

h1 > i {
  font-size: 2rem;
  color: deepskyblue;
}
</style>
