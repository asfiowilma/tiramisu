import { create } from "zustand";

export const useWhatsNew = create<{ show: boolean; setShow: (to: boolean) => void }>((set) => ({
  show: false,
  setShow: (to: boolean) => set({ show: to }),
}));
