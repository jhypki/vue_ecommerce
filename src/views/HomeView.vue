<script setup>
import { ref, onMounted } from "vue";
import Banner from "@/components/Banner/Banner.vue";
import ProductCard from "@/components/Products/ProductCard.vue";
import { supabase } from "@/lib/utils/supabase";

const products = ref([
  {
    id: 1,
    name: "Product 1",
    desc: "Product 1 description",
    price: 100,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Product 2",
    desc: "Product 2 description",
    price: 200,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Product 3",
    desc: "Product 3 description afsdfa sdf asdfasdf asdgasd gsdg asdga sdgasdg ",
    price: 300,
    image: "https://via.placeholder.com/150",
  },
]);
</script>

<template>
  <div class="flex flex-col gap-8">
    <Banner />
    <div class="flex w-full justify-between flex-wrap gap-y-10">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<style scoped></style>
