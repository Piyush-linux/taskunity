"use client"
import { useOrganization, useUser } from "@clerk/nextjs"

export const OrgMembers = () => {

  const { user } = useUser();
  const { isLoaded, memberships } = useOrganization({
    memberships: {
      pageSize: 5,
      keepPreviousData: true,
    },
  });

  if (!isLoaded) {
    return <>Loading</>
  }

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

      <div className="flex">
        <button
          className="inline-block"
          disabled={!memberships?.hasPreviousPage || memberships?.isFetching}
          onClick={() => memberships?.fetchPrevious?.()}
        >
          Previous
        </button>

        <button
          className="inline-block"
          disabled={!memberships?.hasNextPage || memberships?.isFetching}
          onClick={() => memberships?.fetchNext?.()}
        >
          Next
        </button>
      </div>
    </>
  )
}