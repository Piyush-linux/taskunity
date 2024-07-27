import { useOrganization } from "@clerk/nextjs";
import { create } from "zustand";
/*
users
    - id
    - org
    - username
    - role
members:[...]
    - Id
    - Username
    - Email
    - Image

*/ 

const useUserStore = create((set) => ({
    users:[],
    members:[],
    setUser: (newUser) => set((state) => ({users: [...state.users,newUser]})),
    setUser: (newMem) => set((state) => ({members: [...state.members,newMem]})),
    fetchUser: async ()=> {
        let  {organization } = useOrganization()
        let { data } = await organization.getMemberships()
        console.log(data)
        // set()
    }
}));

export default useUserStore;