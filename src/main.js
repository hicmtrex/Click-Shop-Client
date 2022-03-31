import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/style.css';
import store from './store';
import 'vue-toastification/dist/index.css';
import Toast from 'vue-toastification';

const options = {
  // You can set your default options here
  position: 'top-center',
  timeout: 3000,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: false,
  closeButton: 'button',
  icon: true,
  rtl: false,
};

const app = createApp(App);
app.use(Toast, options);
app.use(router);
app.use(store);

app.mount('#app');
