import { create } from "zustand";

const useUserStore = create((set) => ({
    id: "1",
    name: "kiki",
    setUser: () => set((state) => ({name: state.name})),
}));

export default useUserStore;