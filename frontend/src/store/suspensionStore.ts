import { create } from "zustand";

interface SuspensionState {
  isOpen: boolean;
  driver: any;
  open: (driver: any) => void;
  close: () => void;
}

export const useSuspensionStore = create<SuspensionState>((set) => ({
  isOpen: false,
  driver: null,
  open: (driver) => set({ isOpen: true, driver }),
  close: () => set({ isOpen: false, driver: null }),
}));
