import { defineStore } from 'pinia';

export const useCartStore = defineStore({
    id: 'cart',
    state: () => ({
        cart: [] as object[],
        cartQuantity: 0
    }),
    actions: {
        addToCart(product: object) {
            
            const existingProduct = this.cart.find((item) => item.product_id === product.product_id);
            if(existingProduct) {
                existingProduct.quantity++;
            } else
            {

                this.cart.push({
                    ...product,
                    quantity: 1
                    
                });
            }
            this.cartQuantity++;
            this.saveState();
        },
        removeFromCart(product: object) {
            const currentProduct = this.cart.find((item) => item.product_id === product.product_id);
            this.cartQuantity = this.cartQuantity - currentProduct.quantity;
            this.cart = this.cart.filter((item) => item.product_id !== product.product_id);
            this.saveState();
        },
        clearCart() {
            this.cart = [];
            this.cartQuantity = 0;
            this.saveState();
        },
        increaseProductQuantity(product: object) {
            const existingProduct = this.cart.find((item) => item.product_id === product.product_id);
            if(existingProduct) {
                existingProduct.quantity++;
                this.cartQuantity++;
            }
            this.saveState();
        },
        decreaseProductQuantity(product: object) {
            const existingProduct = this.cart.find((item) => item.product_id === product.product_id);
            if(existingProduct) {
                existingProduct.quantity--;
                this.cartQuantity--;
                if(existingProduct.quantity <= 0) {
                    this.removeFromCart(product);
                }
            }
            this.saveState();
        },
        getTotalPrice(){
            let total = 0;
            this.cart.forEach((product) => {
                total += product.price * product.quantity;
            
            })
            return Math.round(total * 100) / 100
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
