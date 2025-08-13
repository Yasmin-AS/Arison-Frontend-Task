import { create } from "zustand";

interface DriverState {
  searchText: string;
  activeCategory: string;
  activeApproveId: string | null;
  activeOverviewId: string | null;
  setActiveOverviewId: (id: string | null) => void;
  setActiveApproveId: (id: string | null) => void;
  setSearchText: (text: string) => void;
  setActiveCategory: (key: string) => void;
}

export const useDriverStore = create<DriverState>((set) => ({
  searchText: "",
  activeCategory: "all",
  activeOverviewId: null,
  activeApproveId: null,
  setActiveOverviewId: (id) => set({ activeOverviewId: id }),
  setActiveApproveId: (id) => set({ activeApproveId: id }), // fixed update key
  setSearchText: (text) => set({ searchText: text }),
  setActiveCategory: (key) => set({ activeCategory: key }),
}));
