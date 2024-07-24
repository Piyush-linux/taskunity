"use client"

import { useOrganizationList, OrganizationList } from "@clerk/nextjs"

export default function OrganizationTab () {
  
  const data = useOrganizationList();
  // if(!isLoaded) return null;
  // console.log(data);

  return (
    <>
       <OrganizationList
      hidePersonal={true}
    />
    </>
  )
}

