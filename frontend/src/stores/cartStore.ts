import { defineStore } from 'pinia';

type CartItem = {
    product_id: string;
    quantity: number;
    price: number;  // Added price here to avoid type issues
};

type CartState = {
    cart: CartItem[];
    cartQuantity: number;
};

type Product = {
    product_id: string;
    price: number;
};

export const useCartStore = defineStore({
    id: 'cart',
    state: (): CartState => ({
        cart: [] as CartItem[],
        cartQuantity: 0
    }),
    actions: {
        addToCart(product: Product) {
            const existingProduct: CartItem | undefined = this.cart.find((item: CartItem) => item.product_id === product.product_id);
            if (existingProduct) {
                existingProduct.quantity++;
            } else {
                this.cart.push({
                    ...product,
                    quantity: 1
                });
            }
            this.cartQuantity++;
            this.saveState();
        },
        removeFromCart(product: { product_id: string }) {
            const currentProduct = this.cart.find((item: CartItem) => item.product_id === product.product_id);
            if (currentProduct) {
                this.cartQuantity -= currentProduct.quantity;
                this.cart = this.cart.filter((item: CartItem) => item.product_id !== product.product_id);
                this.saveState();
            }
        },
        clearCart() {
            this.cart = [];
            this.cartQuantity = 0;
            this.saveState();
        },
        increaseProductQuantity(product: { product_id: string }) {
            const existingProduct = this.cart.find((item: CartItem) => item.product_id === product.product_id);
            if (existingProduct) {
                existingProduct.quantity++;
                this.cartQuantity++;
                this.saveState();
            }
        },
        decreaseProductQuantity(product: { product_id: string }) {
            const existingProduct = this.cart.find((item: CartItem) => item.product_id === product.product_id);
            if (existingProduct) {
                existingProduct.quantity--;
                this.cartQuantity--;
                if (existingProduct.quantity <= 0) {
                    this.removeFromCart(product);
                } else {
                    this.saveState();
                }
            }
        },
        getTotalPrice() {
            let total = 0;
            this.cart.forEach((product: CartItem) => {
                total += product.price * product.quantity;
            });
            return Math.round(total * 100) / 100;
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
