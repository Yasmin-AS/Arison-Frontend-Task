import { create } from "zustand";

interface MenuState {
  selectedItem: string | null;
  setSelectedItem: (key: string) => void;
}

export const useMenuStore = create<MenuState>((set) => ({
  selectedItem: null,
  setSelectedItem: (key) => set({ selectedItem: key }),
}));
