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
defineProps(["product"]);
</script>
<template>
  <Card
    class="w-96 overflow-hidden flex flex-col justify-between cursor-pointer"
  >
    <img
      :src="product.image"
      alt="Product Name"
      class="w-full h-64 object-cover"
    />
    <CardHeader>
      <CardTitle>{{ product.name }}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription>
        {{ product.desc }}
      </CardDescription>
    </CardContent>
    <CardFooter class="flex justify-between">
      <Button class="btn btn-primary">Add to cart</Button>
      <p>${{ product.price }}</p>
    </CardFooter>
  </Card>
</template>

<style scoped></style>
