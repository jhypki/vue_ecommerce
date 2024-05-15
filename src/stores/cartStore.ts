import { defineStore } from 'pinia';

export const useCartStore = defineStore({
    id: 'cart',
    state: () => ({
        cart: [] as object[],
        cartQuantity: 0,
    }),
    actions: {
        addToCart(product: object) {
            this.cart.push(product);
            this.cartQuantity++;
            this.saveState();
        },
        removeFromCart(product: object) {
            this.cart = this.cart.filter((item) => item !== product);
            this.cartQuantity--;
            this.saveState();
        },
        clearCart() {
            this.cart = [];
            this.cartQuantity = 0;
            this.saveState();
        },
        saveState() {
            localStorage.setItem('cartStore', JSON.stringify(this.$state));
        },
        loadState() {
            const savedState = localStorage.getItem('cartStore');
            if (savedState) {
                this.$patch(JSON.parse(savedState));
            }
        }
    },
    persist: true
});
