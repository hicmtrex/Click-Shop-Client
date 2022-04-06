<template>
  <header>
    <!-- Start Top Nav -->
    <nav
      class="navbar navbar-expand-lg bg-dark navbar-light d-none d-lg-block"
      id="templatemo_nav_top"
    >
      <div class="container text-light">
        <div class="w-100 d-flex justify-content-between">
          <div>
            <i class="fa fa-envelope mx-2"></i>
            <a
              class="navbar-sm-brand text-light text-decoration-none"
              href="mailto:info@company.com"
              >clickshop@company.com</a
            >
            <i class="fa fa-phone mx-2"></i>
            <a
              class="navbar-sm-brand text-light text-decoration-none"
              href="tel:010-020-0340"
              >010-020-0340</a
            >
          </div>
          <div>
            <a
              class="text-light"
              href="https://fb.com/templatemo"
              target="_blank"
              rel="sponsored"
              ><i class="fab fa-facebook-f fa-sm fa-fw me-2"></i
            ></a>
            <a
              class="text-light"
              href="https://www.instagram.com/"
              target="_blank"
              ><i class="fab fa-instagram fa-sm fa-fw me-2"></i
            ></a>
            <a class="text-light" href="https://twitter.com/" target="_blank"
              ><i class="fab fa-twitter fa-sm fa-fw me-2"></i
            ></a>
            <a
              class="text-light"
              href="https://www.linkedin.com/"
              target="_blank"
              ><i class="fab fa-linkedin fa-sm fa-fw"></i
            ></a>
          </div>
        </div>
      </div>
    </nav>
    <!-- Close Top Nav -->

    <!-- Header -->
    <nav class="navbar navbar-expand-lg navbar-light shadow">
      <div class="container d-flex justify-content-between align-items-center">
        <router-link
          class="navbar-brand text-success logo h1 align-self-center"
          to="/"
        >
          <em>Click Shop</em>
        </router-link>

        <button
          class="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#templatemo_main_nav"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          class="align-self-center collapse navbar-collapse flex-fill d-lg-flex justify-content-lg-between"
          id="templatemo_main_nav"
        >
          <div class="flex-fill">
            <ul
              class="nav navbar-nav d-flex justify-content-between mx-lg-auto"
            >
              <li class="nav-item">
                <router-link class="nav-link" to="/">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/about">About</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/shop">Shop</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/contact"
                  >Contact</router-link
                >
              </li>
            </ul>
          </div>
          <div class="navbar align-self-center d-flex">
            <router-link class="nav-link" to="/shop">
              <i class="fa fa-fw fa-search text-dark mr-2"></i>
            </router-link>
            <router-link
              class="nav-icon position-relative text-decoration-none"
              to="/cart"
            >
              <i class="fa fa-fw fa-cart-arrow-down text-dark mr-1"></i>
              <span
                class="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark"
              >
                {{ cartItems.length }}
              </span>
            </router-link>
            <a class="nav-icon position-relative" href="#" v-if="userInfo">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="fa fa-fw fa-user text-dark mr-3"></i>
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <router-link class="dropdown-item" to="/auth/profile"
                    >Profile</router-link
                  >
                </li>
                <li v-if="userInfo.user.isAdmin">
                  <router-link class="dropdown-item" to="/dashboard"
                    >Dashboard</router-link
                  >
                </li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <button @click="userLogout" class="dropdown-item">
                    Logout
                  </button>
                </li>
              </ul>
            </a>
            <div v-else>
              <router-link class="nav-icon d-lg-inline" to="/auth/login">
                Login
              </router-link>
              <router-link class="nav-icon d-lg-inline" to="/auth/register">
                Register
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <!-- Close Header -->
  </header>
</template>
<script setup>
import { computed } from '@vue/runtime-core';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const store = useStore();
const userInfo = computed(() => store.state.userInfo);
const cartItems = computed(() => store.state.cartItems);
const router = useRouter();

const userLogout = () => {
  store.commit('logout');
  router.push('/auth/login');
};
</script>

<style scoped>
em {
  font-weight: bold;
}
</style>
