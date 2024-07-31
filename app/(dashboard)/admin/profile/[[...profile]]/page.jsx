"use client";
import Loader from "@/components/ui/loader";
// import OrganizationTab from "@/components/admin/Organization"
import { useOrganization, useUser } from "@clerk/nextjs";
// import { OrganizationProfile } from "@clerk/nextjs"
// import { auth } from '@clerk/nextjs/server'

export default function Profile() {
  const { user } = useUser();
  const { isLoaded, memberships } = useOrganization({
    memberships: {
      pageSize: 5,
      keepPreviousData: true,
    },
  });


  if (!isLoaded) {
    return <><Loader/></>
  }
  
  // const data = useOrganization();
  // if(!isLoaded) return null;
  console.log(memberships);
  return (
    <>
        <table>
        <thead>
          <tr>
            <th>User</th>
            <th>Joined</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {memberships?.data?.map((mem) => (
            <tr key={mem.id}>
              <td>
                {mem.publicUserData.identifier}{" "}
                {mem.publicUserData.userId === user?.id && "(You)"}
              </td>
              <td>{mem.createdAt.toLocaleDateString()}</td>
              <td>
                <SelectRole
                  defaultRole={mem.role}
                  onChange={async (e) => {
                    await mem.update({
                      role: e.target.value,
                    })
                    await memberships?.revalidate()
                  }}
                />
              </td>
              <td>
                <button
                  onClick={async () => {
                    await mem.destroy()
                    await memberships?.revalidate()
                  }}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

