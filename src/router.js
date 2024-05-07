// src/router.js
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./views/HomeView.vue";
import ProductView from "./views/ProductView.vue";
import LoginView from "./views/LoginView.vue";
import RegisterView from "./views/RegisterView.vue";

const routes = [
  {
    path: "/",
    component: HomeView,
  },
  {
    path: "/product/:id",
    component: ProductView,
  },
  {
    path: "/login",
    component: LoginView,
  },
  {
    path: "/register",
    component: RegisterView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
