import axios from "axios"
import { create } from "zustand"

export const useProductStore = create((set) => ({
    products: [],
    fetch : async () => {
        const data = await axios("/api/products/getAll")
        set({products:await data.data})
    }
  }))