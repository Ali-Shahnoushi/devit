import { create } from "zustand";
import { persist } from "zustand/middleware";

type TAvailableThemes = "light" | "dark";

export interface IThemeState {
  theme: TAvailableThemes;
}

export interface IThemeAction {
  toggleTheme: () => void;
  setTheme: (theme: IThemeState["theme"]) => void;
}

const useThemeState = create<IThemeState & IThemeAction>()(
  persist(
    (set, get) => ({
      theme: "dark",
      toggleTheme: () =>
        set({ theme: get().theme === "dark" ? "light" : "dark" }),
      setTheme: (theme) => set({ theme }),
    }),
    { name: "theme" }
  )
);

export default useThemeState;
