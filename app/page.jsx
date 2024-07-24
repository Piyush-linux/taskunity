// "use client"
import Hero from '@/components/Hero';
import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';

export const metadata = {
  title: 'Taskunity',
}

export default function Home() {

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
