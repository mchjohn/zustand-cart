import { create } from 'zustand'
import { Product } from '../interfaces/product';

import { products } from '../mock/products'

interface CartStore {
  cart: Product[],
  availableProducts: Product[],
  addToCart: (product: Product) => void,
  removeFromCart: (product: Product) => void,
}

export const useCartStore = create<CartStore>((set) => ({
  cart: [] as Product[],
  availableProducts: products,
  addToCart: (product) => set((state) => ({ cart: state.cart = [...state.cart, product] })),
  removeFromCart: (product: Product) => set((state) => ({ cart: state.cart.filter((p) => p.id !== product.id) })),
}))