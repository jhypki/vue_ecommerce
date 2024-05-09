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
        },
        removeFromCart(product: object) {
            this.cart = this.cart.filter((item) => item !== product);
            this.cartQuantity--;
        },
        clearCart() {
            this.cart = [];
            this.cartQuantity = 0;
        },
    },
});