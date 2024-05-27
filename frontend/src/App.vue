<script setup lang="ts">
import Layout from "@/components/layout/Layout.vue";
import { onMounted } from "vue";
import { supabase } from "@/lib/utils/supabase";
import { useUserStore } from "@/stores/userStore";
import { useProductsStore } from "./stores/productsStore";
const { setUser } = useUserStore();
const productsStore = useProductsStore();
onMounted(async () => {
  const response = await fetch("api/products");
  const data = await response.json();
  console.log(data);

  const {
    data: { user },
  } = await supabase.auth.getUser();
  const { data: products } = await supabase.from("products").select("*");
  productsStore.setProducts(products);
  setUser(user);
  console.log(user);
});
</script>

<template>
  <Layout>
    <router-view />
  </Layout>
</template>

<style scoped></style>
