<script setup>
import Button from "../ui/button/Button.vue";
</script>
<template>
  <div
    class="relative flex md:flex-row flex-col bg-primary-foreground p-8 w-full rounded-md shadow-primary shadow-lg items-center justify-start"
  >
    <div class="w-full">
      <img src="@/assets/images/banner_image.png" class="object-cover" />
    </div>
    <div class="flex flex-col w-full gap-12">
      <h1 class="md:text-7xl text-4xl">Technology for your convenience</h1>
      <h3 class="text-xl md: text-4xl">
        For your job, study or housework, everything you need is here
      </h3>
      <Button>Shop now</Button>
    </div>
  </div>
</template>

<style scoped></style>
