"use client"

import { useOrganizationList } from "@clerk/nextjs"

export default function OrganizationTab () {
  
  const {isLoaded, setActive, userMemberships} = useOrganizationList({
    userMemberships: {
      infinite: true,
    },
  });
  if(!isLoaded) return null;
  role: 
  console.log(userMemberships);

  return (
    <>
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

