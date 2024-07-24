
import { OrganizationProfile, useOrganization } from "@clerk/nextjs"

export default function Profiel () {
  
  const data = useOrganization();
  if(!isLoaded) return null;
  // console.log(data);

  return (
    <>
       <OrganizationProfile  />
    </>
  )
}

