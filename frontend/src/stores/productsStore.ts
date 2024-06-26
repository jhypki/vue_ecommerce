import { defineStore } from "pinia";

export const useProductsStore = defineStore({
    id: "products",
    state: () => ({
        products: [] as object[],
        productsCount: 0,
    }),
    actions: {
        setProducts(products: object[]) {
        this.products = products;
        },
        getProductById(id: any) {
        return this.products.find((product: any) => product.product_id == id);
        },
    },
    });
