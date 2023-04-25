// import { create } from "zustand";

// export const useStore = create((set) => ({
//   cartArray: [],
//   cartLoading: false,
// }));

// import { create } from "zustand";

// export const useStore = create((set) => ({
//   cartArray: [],
//   cartLoading: false,
// }));

"use client";

import { create } from "zustand";

export const bearStore = create((set) => ({
  openauth: false,
  toggleauth: () => set((state) => ({ openauth: !state.openauth })),

  authtype: "login",
  setauthtype: (type) => set((state) => ({ authtype: type })),

  selectedBrand: "",
  setSelectedBrand: (brand) => set((state) => ({ selectedBrand: brand })),
}));
