import { create } from "zustand";
import { persist } from "zustand/middleware";

interface SummaryControlStore {
  isShowDetails: boolean;
  isShowTax: boolean;
  toggleShowDetails: () => void;
  toggleShowTax: () => void;
}

export const useSummaryControlStore = create<SummaryControlStore>()(
  persist(
    (set, get) => ({
      isShowDetails: true,
      isShowTax: true,
      toggleShowDetails: () => set({ isShowDetails: !get().isShowDetails }),
      toggleShowTax: () => set({ isShowTax: !get().isShowTax }),
    }),
    { name: "summary-controls" }
  )
);
