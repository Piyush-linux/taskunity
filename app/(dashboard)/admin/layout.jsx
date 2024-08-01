import Navbar from '@/components/admin/Navbar';
import { currentUser } from '@clerk/nextjs/server';

export default async function Layout({ children }) {
    const { user } = await currentUser();  
  
  return (
    <div>
     <Navbar user={user?.publicMetadata.username} />
      { children }
    </div>
  )
}
