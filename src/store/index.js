import { createStore } from 'vuex';
import axiosClient, { API_URL, setError } from '../utils/help-api';
import axios from 'axios';
import { useToast } from 'vue-toastification';

const toast = useToast();
const store = createStore({
  state: {
    order: {},
    total: null,
    success: false,
    products: [],
    orders: [],
    users: [],
    userOrders: [],
    someProducts: [],
    cartItems: localStorage.getItem('vuemovieshop-cart')
      ? JSON.parse(localStorage.getItem('vuemovieshop-cart'))
      : [],
    product: null,
    loading: false,
    error: null,
    userInfo: localStorage.getItem('vuemovieshop-user')
      ? JSON.parse(localStorage.getItem('vuemovieshop-user'))
      : null,
    shippingAddress: localStorage.getItem('vuemovieshop-address')
      ? JSON.parse(localStorage.getItem('vuemovieshop-address'))
      : null,
  },
  mutations: {
    resetError(state) {
      state.error = null;
    },
    setProducts(state, payload) {
      state.products = payload.data;
      state.total = payload.total;
    },
    setProduct(state, payload) {
      state.product = payload;
    },
    fewProducts(state, payload) {
      state.someProducts = payload;
    },
    setOrder(state, payload) {
      state.order = payload;
    },
    setOrdersList(state, payload) {
      state.orders = payload;
    },
    setUserOrders(state, payload) {
      state.userOrders = payload;
    },

    setUsersList(state, payload) {
      state.users = payload;
    },

    addToCart(state, product) {
      const exist = state.cartItems.find((item) => item._id === product._id);

      if (exist) {
        exist.qty++;
        localStorage.setItem(
          'vuemovieshop-cart',
          JSON.stringify(state.cartItems)
        );
      } else {
        state.cartItems.unshift(product);
        localStorage.setItem(
          'vuemovieshop-cart',
          JSON.stringify(state.cartItems)
        );
      }
    },

    removeFromCart(state, product) {
      const exist = state.cartItems.find((item) => item._id === product._id);

      if (exist.qty === 1) {
        state.cartItems = state.cartItems.filter(
          (item) => item._id !== product._id
        );
        localStorage.setItem(
          'vuemovieshop-cart',
          JSON.stringify(state.cartItems)
        );
      } else {
        exist.qty--;
        localStorage.setItem(
          'vuemovieshop-cart',
          JSON.stringify(state.cartItems)
        );
      }
    },
    deleteFromCart(state, product) {
      state.cartItems = state.cartItems.filter(
        (item) => item._id !== product._id
      );
      localStorage.setItem(
        'vuemovieshop-cart',
        JSON.stringify(state.cartItems)
      );
    },
    clearCart(state) {
      state.cartItems = [];
      localStorage.removeItem('vuemovieshop-cart');
    },

    login(state, payload) {
      state.userInfo = payload;
    },
    logout(state) {
      state.userInfo = null;
      state.shippingAddress = null;
      state.cartItems = [];
      localStorage.removeItem('vuemovieshop-user');
      localStorage.removeItem('vuemovieshop-cart');
      localStorage.removeItem('vuemovieshop-address');
    },
    saveAddress(state, payload) {
      state.shippingAddress = payload;
      localStorage.setItem(
        'vuemovieshop-address',
        JSON.stringify(state.shippingAddress)
      );
    },
  },

  actions: {
    //Products CRUD
    /**
     *public fetch all products
     */
    async getAllsetProducts(context) {
      try {
        context.state.loading = true;
        const res = await axios.get(`${API_URL}/api/products`);
        if (res.data) {
          context.state.loading = false;
          context.commit('setProducts', res.data);
        }
      } catch (error) {
        context.state.loading = false;
        context.state.error = setError(error);
      }
    },
    /**
     *public fetch 9 products per page
     */
    async getProducts(context, page) {
      try {
        context.state.loading = true;
        const res = await axios.get(
          `${API_URL}/api/products_pages?page=${page}`
        );
        if (res.data) {
          context.state.loading = false;
          context.commit('setProducts', res.data);
        }
      } catch (error) {
        context.state.loading = false;
        context.state.error = setError(error);
      }
    },
    /**
     *
     * public fetch product by id
     * @param {String} id
     */
    async getProductById(context, id) {
      try {
        context.state.loading = true;
        const res = await axios.get(`${API_URL}/api/products/${id}`);
        if (res.data) {
          context.state.loading = false;
          context.commit('setProduct', res.data);
        }
      } catch (error) {
        context.state.loading = false;
        context.state.error = setError(error);
        return toast.error(context.state.error);
      }
    },
    /**
     * private admin create product
     */
    async createProduct(context, product) {
      try {
        context.state.loading = true;
        const res = await axiosClient.post('/products', product);
        if (res.data) {
          context.state.loading = false;
          context.state.success = !context.state.success;
        }
      } catch (error) {
        context.state.loading = false;
        context.state.error = setError(error);
        return toast.error(context.state.error);
      }
    },
    /**
     * private admin update product
     *  @param {String} id
     */
    async updateProduct(context, product, id) {
      try {
        context.state.loading = true;
        const res = await axiosClient.put(`/products/${id}`, product);
        if (res.data) {
          context.state.loading = false;
          return (context.state.success = !context.state.success);
        }
      } catch (error) {
        context.state.loading = false;
        context.state.error = setError(error);
        return toast.error(context.state.error);
      }
    },
    /**
     * private admin delete product
     *  @param {String} id
     */
    async deleteProduct(context, productId) {
      try {
        context.state.loading = true;
        const res = await axiosClient.delete(`/products/${productId}`);
        if (res.data) {
          context.state.loading = false;
          return (context.state.success = !context.state.success);
        }
      } catch (error) {
        context.state.loading = false;
        context.state.error = setError(error);
        return toast.error(context.state.error);
      }
    },
    /**
     * public fetch random product
     */
    async getFewProduct(context) {
      try {
        context.state.loading = true;
        const res = await axios.get(`${API_URL}/api/products_few`);
        if (res.data) {
          context.state.loading = false;
          context.commit('fewProducts', res.data);
        }
      } catch (error) {
        context.state.loading = false;
        context.state.error = setError(error);
        toast.error(context.state.error);
      }
    },
    /**
     * public fetch product by name
     * @param {String} name
     */
    async searchProduct(context, name) {
      try {
        context.state.loading = true;
        const res = await axios.get(`${API_URL}/api/products_search/${name}`);
        if (res.data) {
          context.state.loading = false;
          context.commit('setProducts', res.data);
        }
      } catch (error) {
        context.state.loading = false;
        context.state.error = setError(error);
        toast.error(context.state.error);
      }
    },
    /**
     * public fetch product by category
     * @param {String} category
     */
    async filter_product(context, category) {
      try {
        context.state.loading = true;
        const res = await axios.get(
          `${API_URL}/api/products_filter/${category}`
        );
        if (res.data) {
          context.state.loading = false;
          context.commit('setProducts', res.data);
        }
      } catch (error) {
        context.state.loading = false;
        context.state.error = setError(error);
        toast.error(context.state.error);
      }
    },
    /**
     * fetch add product to basket
     * @param {String} _id
     */
    async addToCart(context, product) {
      const res = await axios.get(`${API_URL}/api/products/${product._id}`);
      if (res.data) {
        context.commit('addToCart', {
          _id: res.data._id,
          name: res.data.name,
          image: res.data.image,
          price: res.data.price,
          category: res.data.category,
          gender: res.data.gender,
          color: product.color,
          size: product.size,
          qty: 1,
        });
      }
    },
    // users CRUD
    async getUserList(context) {
      try {
        context.state.loading = true;
        const res = await axiosClient.get('/users');

        if (res.data) {
          context.state.loading = false;
          context.commit('setUsersList', res.data);
        }
      } catch (error) {
        context.state.loading = false;
        return (context.state.error = setError(error));
      }
    },
    async userLogin(context, user) {
      try {
        const res = await axios.post(`${API_URL}/api/users/login`, user, {
          headers: {
            Accpect: 'application/json',
          },
        });
        if (res.data) {
          context.commit('login', res.data);
          localStorage.setItem('vuemovieshop-user', JSON.stringify(res.data));
          toast.success(`Welcome ${res.data.user.name}`);
        }
      } catch (error) {
        return (context.state.error = setError(error));
      }
    },
    async userRegister(context, user) {
      try {
        const res = await axios.post(`${API_URL}/api/users/register`, user, {
          headers: {
            Accpect: 'application/json',
          },
        });
        if (res.data) {
          context.commit('login', res.data);
          localStorage.setItem('vuemovieshop-user', JSON.stringify(res.data));
        }
      } catch (error) {
        return (context.state.error = setError(error));
      }
    },
    //orders
    async getOrdersList(context) {
      try {
        context.state.loading = true;
        const res = await axiosClient.get('/orders');

        if (res.data) {
          context.state.loading = false;
          context.commit('setOrdersList', res.data);
        }
      } catch (error) {
        context.state.loading = false;
        context.state.error = setError(error);
      }
    },

    async getOrderById(context, id) {
      try {
        context.state.loading = true;
        const res = await axiosClient.get(`/orders/${id}`);

        if (res.data) {
          context.state.loading = false;
          context.commit('setOrder', res.data);
        }
      } catch (error) {
        context.state.loading = false;
        context.state.error = setError(error);
      }
    },
    async getUserOrders(context) {
      try {
        context.state.loading = true;
        const res = await axiosClient.get('/orders_user');

        if (res.data) {
          const result = Object.values(res.data);
          context.state.loading = false;
          context.commit('setUserOrders', result);
        }
      } catch (error) {
        context.state.loading = false;
        context.state.error = setError(error);
      }
    },
    async createOrder(context, order) {
      try {
        const res = await axiosClient.post('/orders', order);
        if (res.data) {
          toast.success('Order has been created');
          context.commit('setOrder', res.data);
          context.commit('clearCart');
        }
      } catch (error) {
        context.state.error = setError(error);
      }
    },
    async deleteUserOrder(context, id) {
      try {
        const res = await axiosClient.delete(`/orders_user/${id}`);
        if (res.data) {
          return toast.success(res.data);
        }
      } catch (error) {
        context.state.error = setError(error);
      }
    },
  },
  getters: {},
});

export default store;
