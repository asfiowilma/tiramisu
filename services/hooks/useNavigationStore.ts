import { create } from "zustand";
import { persist } from "zustand/middleware";

type TiramisuApp = "split-bill" | "receipt-maker";
type SplitBillStep = "people" | "bill" | "summary";

interface NavigationState {
  activeApp: TiramisuApp;
  activeSplitBillStep: SplitBillStep;
  setActiveApp: (to: TiramisuApp) => void;
  setActiveSplitBillStep: (to: SplitBillStep) => void;
}

export const useNavigationStore = create<NavigationState>()(
  persist(
    (set, get) => ({
      activeApp: "split-bill",
      activeSplitBillStep: "people",
      setActiveApp: (to) => set({ ...get(), activeApp: to }),
      setActiveSplitBillStep: (to) => set({ ...get(), activeSplitBillStep: to }),
    }),
    {
      name: "navigation-store",
    }
  )
);
