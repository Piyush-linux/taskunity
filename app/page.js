import Hero from '@/components/Hero';
import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import { auth } from '@clerk/nextjs/server';
import { redirect } from "next/navigation";

export const metadata = {
  title: 'My Home Page',
}

export default function Home() {

  const { userId } = auth();

  if (!!userId) {
    redirect(`/admin`)
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
