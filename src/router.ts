import { createRouter, createWebHistory } from 'vue-router';

const HomeView = () => import('./views/HomeView.vue');
const ProductView = () => import('./views/ProductView.vue');
const LoginView = () => import('./views/LoginView.vue');
const RegisterView = () => import('./views/RegisterView.vue');
const CheckoutView = () => import('./views/CheckoutView.vue');


const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/products/:id',
    name: 'Product',
    component: ProductView,
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView,
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterView,
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: CheckoutView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
