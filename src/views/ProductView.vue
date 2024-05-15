<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router"; // Import useRoute
import { useProductsStore } from "@/stores/productsStore";
import { Button } from "@/components/ui/button";
const route = useRoute(); // Use useRoute to access route details
const productsStore = useProductsStore();
const product = ref(null);
const loading = ref(false);
const currentImage = ref(0);
import { watchEffect } from "vue"; // Import watchEffect

watchEffect(() => {
  const id = route.params.id; // Get the id from the route params
  loading.value = true;
  if (productsStore.products.length) {
    product.value = productsStore.getProductById(id);
    loading.value = false;
  }
});
</script>

<template>
  <div v-if="loading">Loading...</div>
  <div
    v-if="product"
    class="w-full max-w-4xl m-auto flex md:flex-row flex-col gap-8"
  >
    <div class="flex flex-col gap-4 items-center">
      <img
        v-for="(image, index) in product.image_urls"
        v-show="index === currentImage"
        :src="image"
        alt="product image"
        class="h-96 object-cover rounded-md"
      />
      <div class="flex gap-4">
        <img
          v-for="(image, index) in product.image_urls"
          :key="index"
          :src="image"
          alt="product image"
          class="h-16 w-16 object-cover cursor-pointer rounded-md"
          @mouseenter="currentImage = index"
        />
      </div>
    </div>
    <div class="flex-1 flex flex-col gap-6 p-8 border-primary">
      <div class="flex flex-col gap-6">
        <h1 class="text-3xl font-bold">
          {{ product.name }}
        </h1>
        <p class="text-primary">${{ product.price }}</p>
        <p class="text-muted-foreground">{{ product.description }}</p>
        <p>Quantity: {{ product.stock_quantity }}</p>
      </div>
      <Button class="btn btn-primary md:max-w-64">Add to cart</Button>
    </div>
  </div>
</template>

<style scoped></style>
