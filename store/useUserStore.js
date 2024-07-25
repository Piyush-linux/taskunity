import { create } from "zustand";

export const useUserStore = create((set) => ({
    user: null,
    update: (user) => set(() => ({ user: user  })),
}));