import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../views/auth/LoginView.vue';
import RegisterView from '../views/auth/RegisterView.vue';
import HomeView from '../views/HomeView.vue';
import ProductDetail from '../views/ProductDetail.vue';
import CartView from '../views/shipping/CartView.vue';
import ShippingAddress from '../views/shipping/ShippingAddress.vue';
import PlaceOrder from '../views/shipping/PlaceOrder.vue';
import ProfileView from '../views/auth/ProfileView.vue';
import Payment from '../views/shipping/Payment.vue';
import Dashboard from '../views/dashboard/Dashboard.vue';
import ProductList from '../views/dashboard/products/ProductList.vue';
import OrderList from '../views/dashboard/orders/OrderList.vue';
import AddProduct from '../views/dashboard/products/AddProduct.vue';
import EditProduct from '../views/dashboard/products/EditProduct.vue';
import UserList from '../views/dashboard/users/UserList.vue';
import AboutViewVue from '../views/AboutView.vue';
import ContactVue from '../views/ContactView.vue';
import ShopViewVue from '../views/products/ShopView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/shop',
      name: 'Shop',
      component: ShopViewVue,
    },
    {
      path: '/about',
      name: 'About',
      component: AboutViewVue,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: ContactVue,
    },
    {
      path: '/product/:id',
      name: 'product-detail',
      component: ProductDetail,
      props: true,
    },
    {
      path: '/cart',
      name: 'cart-view',
      component: CartView,
    },
    {
      path: '/cart/address',
      name: 'shipping-address',
      component: ShippingAddress,
    },
    {
      path: '/cart/placeorder',
      name: 'cart-placeorder',
      component: PlaceOrder,
    },
    {
      path: '/cart/payment/:id',
      name: 'cart-payment',
      component: Payment,
      props: true,
    },

    {
      path: '/auth/login',
      name: 'Login',
      component: LoginView,
    },
    {
      path: '/auth/register',
      name: 'Register',
      component: RegisterView,
    },
    {
      path: '/auth/profile',
      name: 'Profile',
      component: ProfileView,
    },
    //admin
    {
      path: '/dashboard',
      name: 'Dashboard',
      components: {
        default: Dashboard,
      },
    },
    {
      path: '/dashboard/product-list',
      name: 'ProductList',
      component: ProductList,
    },
    {
      path: '/dashboard/add-product',
      name: 'AddProduct',
      component: AddProduct,
    },
    {
      path: '/dashboard/edit-product/:id',
      name: 'EditProduct',
      component: EditProduct,
    },
    {
      path: '/dashboard/order-list',
      name: 'OrderList',
      component: OrderList,
    },
    {
      path: '/dashboard/user-list',
      name: 'UserList',
      component: UserList,
    },
  ],

  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 };
  },
});

export default router;
