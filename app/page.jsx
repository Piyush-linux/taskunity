"use client"
import Hero from '@/components/Hero';
import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import { useUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

// export const metadata = {
//   title: 'My Home Page',
// }

export default function Home() {

  const { isLoaded, user, isSignedIn } = useUser();
  if(!isLoaded) {return};
  // console.log(isSignedIn)
  if(isSignedIn){
    if (user.publicMetadata.role == 'admin') {
      redirect(`/admin`)
    }else if(user.publicMetadata.role == 'user'){
      redirect(`/user`)
    }

  }
  

  return (
    <div>
      <Navbar />
      <img src="/grid.png" className="absolute h-24 w-24 left-48 top-1/4" />
      <img src="/grid.png" className="absolute h-24 w-24 right-48 bottom-20" />
      <Hero />
      <Footer />
    </div>
  );
}
