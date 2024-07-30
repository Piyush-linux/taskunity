
// import OrganizationTab from "@/components/admin/Organization"
import { OrganizationProfile } from "@clerk/nextjs"
// import { auth } from '@clerk/nextjs/server'

export default function Profiel () {
  
  // const data = useOrganization();
  // if(!isLoaded) return null;
  // console.log(data);
  return (
    <>
       <OrganizationProfile  />
       {/* <OrganizationTab/> */}
    </>
  )
}

