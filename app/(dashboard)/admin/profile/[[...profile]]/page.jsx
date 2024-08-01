// "use client";
import Loader from "@/components/ui/loader";
// import OrganizationTab from "@/components/admin/Organization"
// import { useOrganization, useUser } from "@clerk/nextjs";
import { OrganizationProfile } from "@clerk/nextjs"
// import { auth } from '@clerk/nextjs/server'

export default function Profile() {
  // const { user } = useUser();
  // const { isLoaded, memberships } = useOrganization({
  //   memberships: {
  //     pageSize: 5,
  //     keepPreviousData: true,
  //   },
  // });


  // if (!isLoaded) {
  //   return <><Loader/></>
  // }
  
  // const data = useOrganization();
  // if(!isLoaded) return null;
  // console.log(memberships);
  return (
    <>
        <div className="w-screen min-h-screen flex justify-center items-center">
          <OrganizationProfile />
        </div>
    </>
  );
}

