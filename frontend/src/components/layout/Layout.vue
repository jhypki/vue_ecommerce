<script setup>
import Header from "./Header/Header.vue";
import Footer from "./Footer/Footer.vue";
</script>
<template>
  <div class="flex flex-col min-h-screen gap-12">
    <Header />
    <div class="flex-1 md:w-10/12 w-11/12 max-w-7xl m-auto">
      <slot></slot>
    </div>
    <Footer />
  </div>
</template>

<style scoped></style>
