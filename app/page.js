import Hero from '@/components/Hero';
import Navbar from '@/components/shared/Navbar';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Navbar */}
      <Navbar />
      <Hero />

    </div>
  );
}
