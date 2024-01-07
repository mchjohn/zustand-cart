import { create } from 'zustand'
import { Product } from '../interfaces/product';

import { products } from '../mock/products'

interface CartStore {
  cart: Product[],
  availableProducts: Product[],
  addToCart: (product: Product) => void,
  removeFromCart: (id: string) => void,
}

export const useCartStore = create<CartStore>((set) => ({
  cart: [] as Product[],
  availableProducts: products,
  addToCart: (product) => set((state) => ({ cart: state.cart = [...state.cart, product] })),
  removeFromCart: (id: string) => set((state) => ({ cart: state.cart.filter((p) => p.id !== id) })),
}))