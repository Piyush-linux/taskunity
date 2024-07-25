import { create } from "zustand";

export const useModalStore = create((set) => ({
    modal: "hidden",
    update: (modal) => set(() => ({ modal: modal  })),
}));