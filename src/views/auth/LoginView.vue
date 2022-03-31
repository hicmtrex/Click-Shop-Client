<template>
  <div class="px-5 py-5 p-lg-0 bg-surface-secondary">
    <div class="d-flex justify-content-center">
      <div
        class="col-lg-5 col-xl-4 p-12 p-xl-20 position-fixed start-0 top-0 h-screen overflow-y-hidden d-none d-lg-flex flex-column"
      >
        <!-- Logo -->
        <div class="d-flex justify-content-between">
          <router-link to="/" class="btn btn-light d-flex align-items-center">
            Go back
          </router-link>
        </div>
        <!-- Title -->

        <!-- Circle -->
      </div>
      <div
        class="col-12 col-md-9 col-lg-7 offset-lg-5 border-left-lg min-h-lg-screen d-flex flex-column justify-content-center py-lg-16 px-lg-20 position-relative"
      >
        <div class="row">
          <div class="col-lg-10 col-md-9 col-xl-6 mx-auto ms-xl-0">
            <div
              class="mt-10 mt-lg-5 mb-6 d-flex align-items-center d-lg-block"
            >
              <span class="d-inline-block d-lg-block h1 mb-lg-6 me-3">👋</span>
              <h1 class="ls-tight font-bolder h2">Nice to see you!</h1>
              <h1 class="text-success">Login your account</h1>
              <AlertToast v-if="error">{{ error }}</AlertToast>
            </div>
            <form @submit.prevent="submitHandler">
              <div class="mb-5">
                <label class="form-label" for="email">Email address</label>

                <input
                  type="email"
                  class="form-control form-control-muted"
                  id="email"
                  placeholder="johndoe@gmail.com"
                  v-model="email"
                  :class="{ 'is-invalid': formError === 'email' }"
                />
                <div class="invalid-feedback">Please choose a email</div>
              </div>
              <div class="mb-5">
                <label class="form-label" for="password">Password</label>

                <input
                  type="password"
                  class="form-control form-control-muted"
                  id="password"
                  autocomplete="current-password"
                  placeholder="********"
                  :class="{ 'is-invalid': formError === 'password' }"
                  v-model="password"
                />
                <div class="invalid-feedback">Please choose a Password</div>
              </div>
              <div class="mb-5">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="check_example"
                    id="check_example"
                  />
                  <label class="form-check-label" for="check_example">
                    Keep me logged in
                  </label>
                </div>
              </div>
              <div>
                <button type="submit" class="btn btn-success w-full">
                  Sign in
                </button>
              </div>
            </form>

            <div class="my-6">
              <small>Don't have an account?</small>
              <router-link to="/auth/register" class="text-success ms-2"
                >Sign up</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed, onBeforeMount, ref, watch } from '@vue/runtime-core';
import { useStore } from 'vuex';
import FormContainer from '../../components/UI/FormContainer.vue';
import AlertToast from '../../components/UI/AlertToast.vue';
import { useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();
const userInfo = computed(() => store.state.userInfo);
const error = computed(() => store.state.error);
const email = ref('');
const password = ref('');
const formError = ref(null);

const submitHandler = async () => {
  if (email.value.trim() === '' || !email.value.includes('@')) {
    formError.value = 'email';
  } else if (password.value.trim() === '') {
    formError.value = 'password';
  }

  await store.dispatch('userLogin', {
    email: email.value,
    password: password.value,
  });
};

watch(userInfo, () => {
  if (userInfo.value) {
    router.push('/');
  }
});
onBeforeMount(() => {
  if (userInfo.value) {
    router.push('/');
  }
});
</script>

<style scoped>
h1 {
  font-weight: bold;
}
.col-md-12 > img {
  width: 100%;
  height: 250px;
}
i {
  padding: 10px;
  font-size: 30px;

  text-align: center;
}
.col-lg-5 {
  background-image: url('https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
