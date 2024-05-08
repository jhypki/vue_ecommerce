// userStore.js
import { ref } from 'vue';

export const user = ref(null);

export function setUser(userData) {
  user.value = userData;
}

export function clearUser() {
  user.value = null;
}
