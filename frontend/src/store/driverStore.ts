import { create } from "zustand";

interface DriverState {
  searchText: string;
  activeCategory: string;
  activeCardId: string | null; // store the selected card
  setSearchText: (text: string) => void;
  setActiveCategory: (key: string) => void;
  setActiveCardId: (id: string | null) => void;
}

export const useDriverStore = create<DriverState>((set) => ({
  searchText: "",
  activeCategory: "all",
  activeCardId: null,
  setActiveCardId: (id) => set({ activeCardId: id }),
  setSearchText: (text) => set({ searchText: text }),
  setActiveCategory: (key) => set({ activeCategory: key }),
}));
