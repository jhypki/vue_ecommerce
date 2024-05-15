<script setup>
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { useCartStore } from "@/stores/cartStore";
const cartStore = useCartStore();
defineProps(["product"]);
</script>
<template>
  <RouterLink :to="`/products/${product.product_id}`">
    <Card
      class="w-96 overflow-hidden flex flex-col justify-between cursor-pointer"
    >
      <img
        :src="product.image_urls[0]"
        alt="Product Name"
        class="w-full h-64 object-cover"
      />
      <CardHeader>
        <CardTitle>{{ product.name }}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>
          {{ product.description }}
        </CardDescription>
      </CardContent>
      <CardFooter class="flex justify-between">
        <Button
          @click="
            (e) => {
              e.stopPropagation();
              e.preventDefault();
              cartStore.addToCart(product);
            }
          "
          class="btn btn-primary"
          >Add to cart</Button
        >
        <p>${{ product.price }}</p>
      </CardFooter>
    </Card>
  </RouterLink>
</template>

<style scoped></style>
