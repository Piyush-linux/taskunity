"use client"

import { useOrganizationList } from "@clerk/nextjs"
import { useState } from "react";
import useUserStore from "@/store/useUserStore.js";

export default function OrganizationTab() {

  const { name , setUser} = useUserStore();
  
  const { isLoaded, userMemberships } = useOrganizationList({
    userMemberships: {
      infinite: true,
    },
  })

  if (!isLoaded) return <h1>Loading...</h1>;

  let getMem = () => {
    // let { data } = await userMemberships.data[0]?.organization.getMemberships()
    // let name = userMemberships.data[0]?.organization.name ;
    // let id = userMemberships.data[0]?.organization.id ;
    setUser('samsam');
    // console.log(user) 
  }

  getMem();


  // console.log(userMemberships.data[0])
  // console.log(userMemberships.data[0])
  // console.log(userMemberships.data[0])


  return (
    <>
      <span> Org Name :  { name } </span>
      <br />
      <span> Org Role : {userMemberships.data[0]?.role} </span>
      {/* <ul>
        {userMemberships.data?.map((mem) => (
          <li key={mem.id}>
            <span>{mem.organization.name}</span>
            <button
             className="p-3 bg-rose-300 text-white font-extrabold"
              onClick={() => setActive({ organization: mem.organization.id })}
            >
              Select
            </button>
          </li>
        ))}
      </ul> */}

      {/* <button
        disabled={!userMemberships.hasNextPage}
        onClick={() => userMemberships.fetchNext()}
      >
        Load more
      </button> */}
      {/* <OrganizationList
      hidePersonal={true} /> */}

    </>
  )
}

