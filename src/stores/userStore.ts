// // userStore.js
// import { ref } from 'vue';

// export const user = ref(null);

// export function setUser(userData: object) {
//   user.value = userData;
// }

// export function clearUser() {
//   user.value = null;
// }

import { defineStore } from 'pinia';
export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    user: null as any | null,
  }),
  actions: {
    setUser(userData: object) {
      
      this.user = userData;
    },
    clearUser() {
      this.user = null;
    },
  },
});