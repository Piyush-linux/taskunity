import { create } from "zustand";

export const useModalStore = create((set) => ({
    modal: "hidden",
    update: (modal) => set(() => ({ modal: modal  })),
    putModal: "hidden",
    updateModal: (modal) => set(() => ({ putModal: modal  })),
    
    putTodo:{todo:"", status:false},
    updatePutTodo: (modal) => set(() => ({ putTodo: modal  })),


}));