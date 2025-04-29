import { create } from "zustand";

type AccountType = {
  userName: string;
  password: string;
};

type StoreType = {
  currentColor: string;
  setCurrentColor: (v: string) => void;
  isScroll: boolean;
  setIsScroll: (v: boolean) => void;
  showMenu: boolean;
  setShowMenu: (v: boolean | ((v: boolean) => boolean)) => void;
  account: AccountType;
  setAccountType: (v: AccountType) => void;
};

export const usePanelAdminStore = create<StoreType>()((set) => ({
  currentColor:
    typeof window !== "undefined"
      ? localStorage.getItem("currentColor") || "#edb611"
      : "#edb611",
  isScroll: false,
  showMenu: true,
  account: {
    userName: "user",
    password: "1234",
  },
  setAccountType: (v: AccountType) => {
    set({ account: v });
  },
  setShowMenu: (v: boolean | ((v: boolean) => boolean)) => {
    set((state) => ({
      showMenu: typeof v === "function" ? v(state.showMenu) : v,
    }));
  },
  setCurrentColor: (value: string) => {
    set(() => ({ currentColor: value }));
    if (typeof window !== "undefined") {
      document.documentElement.style.setProperty("--primary-color", value);
      localStorage.setItem("currentColor", value);
    }
  },
  setIsScroll: (v: boolean) => set({ isScroll: v }),
}));
