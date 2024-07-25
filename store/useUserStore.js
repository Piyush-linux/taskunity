import { create } from "zustand";
import { useOrganizationList } from "@clerk/nextjs"

// const { userMemberships } = useOrganizationList({
//     userMemberships: {
//       infinite: true,
//     },
//   })

export const useUserStore = create((set) => ({
    user: null,
    getUserInfo: (user) => {
        // let { data } = await userMemberships.data[0].organization.getMemberships();
        set(() => ({ user: user  }))
    },
}));