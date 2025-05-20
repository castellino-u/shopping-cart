import { create } from "zustand";
import { persist } from "zustand/middleware";

interface useStoreCarrito {
  productosEnCarrito: any[];
  mostrarCarrito: boolean;
  addProduct: (product: any) => void;
  toggleCarrito: () => void;
}

export const useStoreCarrito = create<useStoreCarrito>()(
  persist(
    (set) => ({
      productosEnCarrito: [],
      mostrarCarrito: false,
      toggleCarrito: () =>
        set((state) => ({
          mostrarCarrito: !state.mostrarCarrito,
        })),
      addProduct: (product) =>
        set((state) => ({
          productosEnCarrito: [...state.productosEnCarrito, product],
        })),
    }),
    {
      name: "carrito-storage", // clave en localStorage
      partialize: (state) => ({
        productosEnCarrito: state.productosEnCarrito,
      }), // solo persistimos los productos, no el toggle de visibilidad
    }
  )
);