import Hero from '@/components/Hero';
import Navbar from '@/components/shared/Navbar';

export const metadata = {
  title: 'My Home Page',
}

export default function Home() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      <Hero />

    </div>
  );
}
