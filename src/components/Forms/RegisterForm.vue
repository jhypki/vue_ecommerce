<script setup>
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";
import { ref } from "vue";
import { supabase } from "@/lib/utils/supabase";
import { useRouter } from "vue-router";
import { setUser } from "@/stores/userStore";

import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const schema = toTypedSchema(
  z.object({
    username: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(6),
    confirmPassword: z.string().min(6),
  })
);
const form = useForm({
  validationSchema: schema,
});
const loading = ref(false);

const onSubmit = form.handleSubmit(async (values) => {
  loading.value = true;
  try {
    let { data, error } = await supabase.auth.signUp({
      email: values.email,
      password: values.password,
    });
    if (error) {
      throw error;
    }
    if (data) {
      setUser(data.user);
      router.push("/");
    }
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <form @submit="onSubmit" class="flex flex-col gap-4">
    <FormField name="username" v-slot="{ field }">
      <FormItem>
        <FormControl>
          <Input placeholder="Username" v-bind="field" />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
    <FormField name="email" v-slot="{ field }">
      <FormItem>
        <FormControl>
          <Input placeholder="Email" type="email" v-bind="field" />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
    <FormField name="password" v-slot="{ field }">
      <FormItem>
        <FormControl>
          <Input placeholder="Password" type="password" v-bind="field" />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
    <FormField name="confirmPassword" v-slot="{ field }">
      <FormItem>
        <FormControl>
          <Input
            placeholder="Confirm Password"
            type="password"
            v-bind="field"
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
    <Button :disabled="loading" type="submit">Sign up</Button>
  </form>
</template>

<style scoped></style>
