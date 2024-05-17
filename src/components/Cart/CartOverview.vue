<script setup>
import { useCartStore } from "@/stores/cartStore";
import { Button } from "@/components/ui/button";
const cartStore = useCartStore();
</script>

<template>
  <div
    class="absolute shadow-md right-0 top-16 min-w-96 bg-background border border-t-0 border-r-0 border-primary-foreground p-8 flex flex-col gap-10"
  >
    <h1 class="text-2xl font-bold">Cart Overview</h1>
    <div class="flex flex-col gap-4">
      <div v-if="cartStore.cart.length === 0">
        <p>Your cart is empty</p>
      </div>
      <div
        v-else
        v-for="product in cartStore.cart"
        class="flex gap-8 items-center"
      >
        <img :src="product.image_urls[0]" class="h-16" />
        <div class="flex-1">{{ product.name }}</div>
        <div class="flex gap-0 flex-1">
          <Button @click="cartStore.decreaseProductQuantity(product)">-</Button>
          <p class="flex items-center border-x-0 px-4 border">
            {{ product.quantity }}
          </p>
          <Button @click="cartStore.increaseProductQuantity(product)">+</Button>
        </div>

        <p class="flex-1">
          ${{ Math.round(product.price * product.quantity * 100) / 100 }}
        </p>
        <Button variant="outline" @click="cartStore.removeFromCart(product)"
          >X</Button
        >
      </div>
      <p
        v-if="cartStore.cart.length > 0"
        class="self-end text-xl font-bold text-primary"
      >
        Total: ${{ cartStore.getTotalPrice() }}
      </p>
      <Button>Go to checkout</Button>
    </div>
  </div>
</template>

<style scoped></style>
