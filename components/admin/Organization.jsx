 "use client"
// import { useUserStore } from "@/store/useUserStore";
/*
Profile:
username
org : id, name, role,
*/
import { useOrganizationList } from "@clerk/nextjs"
import { useState } from "react";


export default function OrganizationTab() {
  // const { user, getUserInfo } = useUserStore;
  const { isLoaded, userMemberships } = useOrganizationList({
    userMemberships: {
      infinite: true,
    },
  })

  let [org,setOrg] = useState('');

  if (!isLoaded) return <h1>Loading...</h1>;
  let abc = userMemberships.data[0]?.organization.name;
  // if(abc){
  //   setOrg(abc)
  // }
  // if(isLoaded){
  //   setOrg({
  //     name: userMemberships.data[0].role,
  //     role:"",
  //     members:[""]
  //   })
  // }

  // let getUser = () => {

  // }

  
  // console.log(userMemberships.data[0])
  // console.log(userMemberships.data[0])
  // console.log(userMemberships.data[0])


  return (
    <>
      <span> Org Name : {abc} </span>
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

