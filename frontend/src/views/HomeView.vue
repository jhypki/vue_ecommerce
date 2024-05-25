<script setup>
import { ref, onMounted } from "vue";
import Banner from "@/components/Banner/Banner.vue";
import ProductCard from "@/components/Products/ProductCard.vue";
import { supabase } from "@/lib/utils/supabase";
import { useProductsStore } from "@/stores/productsStore";
const productsStore = useProductsStore();
</script>

<template>
  <div class="flex flex-col gap-8">
    <Banner />
    <div class="flex w-full justify-between flex-wrap gap-y-10">
      <ProductCard
        v-for="product in productsStore.products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<style scoped></style>
