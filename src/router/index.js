import Vue from 'vue';
import VueRouter from 'vue-router';
import MainPage from '@/pages/MainPage';
import NotFoundPage from '@/pages/NotFoundPage';
import ProductPage from '@/pages/ProductPage';
import CartPage from '@/pages/CartPage';
import OrderPage from '@/pages/OrderPage';
import OrderInfoPage from '@/pages/OrderInfoPage';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainPage
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartPage
  },
  {
    path: '/order',
    name: 'order',
    component: OrderPage
  },
  {
    path: '/product/:id',
    name: 'product',
    component: ProductPage
  },
  {
    path: '/order/:id',
    name: 'orderInfo',
    component: OrderInfoPage
  },
  {
    path: '*',
    name: 'NotFoundPage',
    component: NotFoundPage
  }
]

const router = new VueRouter({
  routes
})

export default router
