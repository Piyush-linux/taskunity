import { useOrganization } from "@clerk/nextjs";
import { create } from "zustand";


const useUserStore = create((set) => ({
    users:[],
    setUser: (newUser) => set((state) => ({users: [...state.users,newUser]})),
    fetchUser: async ()=> {
        let  {organization } = useOrganization()
        let { data } = await organization.getMemberships()
        console.log(data)
        // set()
    }
}));

export default useUserStore;