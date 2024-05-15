<script setup lang="ts">
import { Button } from "@/components/ui/button";
import ToggleThemeButton from "./ToggleThemeButton.vue";
import Branding from "./Branding.vue";
import { RouterLink } from "vue-router";
import { supabase } from "@/lib/utils/supabase";
import { useUserStore } from "@/stores/userStore";
import { useCartStore } from "@/stores/cartStore";

const userStore = useUserStore();
const cartStore = useCartStore();
const handleLogout = async () => {
  await supabase.auth.signOut();
  userStore.clearUser();
};
</script>

<template>
  <div
    class="w-full min-h-16 bg-background border-b flex items-center justify-between px-4 sticky top-0 z-10"
  >
    <RouterLink to="/">
      <Branding />
    </RouterLink>
    <div class="flex items-center gap-4">
      <div class="relative">
        <v-icon name="co-cart" scale="1.4" />
        <span
          class="absolute -top-2 -right-2 bg-primary text-white rounded-full w-4 h-4 flex items-center justify-center"
        >
          {{ cartStore.cartQuantity }}
        </span>
      </div>
      <div v-if="!userStore.user" class="flex gap-4">
        <RouterLink to="/login">
          <Button variant="outline">Sign in</Button>
        </RouterLink>
        <RouterLink to="/register">
          <Button>Sign up</Button>
        </RouterLink>
      </div>
      <div v-else class="flex gap-4 items-center">
        <span class="sm:block hidden">{{ userStore.user.email }}</span>
        <Button @click="handleLogout">Logout</Button>
      </div>
      <ToggleThemeButton />
    </div>
  </div>
</template>

<style lang=""></style>
