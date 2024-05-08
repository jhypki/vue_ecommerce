<script setup lang="ts">
import Layout from "@/components/layout/Layout.vue";
import { setUser } from "./stores/userStore";
import { onMounted } from "vue";
import { supabase } from "@/lib/utils/supabase";
onMounted(async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  setUser(user);
});
</script>

<template>
  <Layout>
    <router-view />
  </Layout>
</template>

<style scoped></style>
