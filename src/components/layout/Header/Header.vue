<script setup lang="ts">
import { Button } from "@/components/ui/button";
import ToggleThemeButton from "./ToggleThemeButton.vue";
import Branding from "./Branding.vue";
import { RouterLink } from "vue-router";
import { supabase } from "@/lib/utils/supabase";
import { user, clearUser } from "@/stores/userStore";

const handleLogout = async () => {
  await supabase.auth.signOut();
  clearUser();
};
</script>

<template>
  <div
    class="w-full min-h-16 bg-background border-b flex items-center justify-between px-4"
  >
    <RouterLink to="/">
      <Branding />
    </RouterLink>
    <div class="flex items-center gap-4">
      <div v-if="!user" class="flex gap-4">
        <RouterLink to="/login">
          <Button variant="outline">Sign in</Button>
        </RouterLink>
        <RouterLink to="/register">
          <Button>Sign up</Button>
        </RouterLink>
      </div>
      <div v-else class="flex gap-4 items-center">
        <span class="sm:block hidden">{{ user.email }}</span>
        <Button @click="handleLogout">Logout</Button>
      </div>
      <ToggleThemeButton />
    </div>
  </div>
</template>

<style lang=""></style>
