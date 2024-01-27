import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ThemeStore {
  darkMode: boolean;
  setDarkMode: (to: boolean) => void;
}

export const useTheme = create<ThemeStore>()(
  persist(
    (set, _) => ({
      darkMode: true,
      setDarkMode: (to: boolean) => set({ darkMode: to }),
    }),
    { name: "darkMode" }
  )
);
