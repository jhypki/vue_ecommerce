<script setup>
import Button from "../ui/button/Button.vue";
</script>
<template>
  <div
    class="relative flex lg:flex-row flex-col bg-primary-foreground px-8 py-4 lg:py-0 w-full rounded-md shadow-primary shadow-lg items-center justify-center"
  >
    <img src="@/assets/images/banner_image.png" />

    <div class="flex flex-col w-full gap-12 lg:px-16">
      <h1 class="text-center lg:text-left lg:text-7xl text-4xl">
        Technology for your convenience
      </h1>
      <h3
        class="text-xl text-center text-muted-foreground lg:text-left lg:text-3xl"
      >
        For your job, study or housework, everything you need is here
      </h3>
      <Button>Shop now</Button>
    </div>
  </div>
</template>

<style scoped></style>
