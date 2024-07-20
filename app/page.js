import Hero from '@/components/Hero';

export const metadata = {
  title: 'My Home Page',
}

export default function Home() {
  return (
    <div>
      <img src="/grid.png" className="absolute h-24 w-24 left-48 top-1/4"  />
      <img src="/grid.png" className="absolute h-24 w-24 right-48 bottom-20"  />
      <Hero />
    </div>
  );
}
