import { create } from 'zustand'
import { Product } from '../interfaces/product';

const skate: Product = {
  id: 1,
  name: 'Skate montado Element',
  price: 900.99,
  image: 'https://cdn.awsli.com.br/2500x2500/2570/2570535/produto/218393139/1xg-cjkjn2bzoj.jpg',
  quantity: 8,
  description: 'Skate montado shape Zero, roda bones, rolamento Red Bones, Lixa Jessup, truck Indy'
}

const useStore = create((set) => ({
  cart: [] as Product[],
  addToCart: () => set((state) => ({ cart: state.cart.push(product) })),
  removeToCart: () => set((state) => ({ products: state.products.filter((product) => product.id !== skate.id) })),
}))