import Navbar from '@/components/admin/Navbar';
import Head from 'next/head';

export default function Home() {
    return (
        <div>
            <Head>
                <title>{/* dmin */}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* Navbar */}
            <Navbar/>
            {/* Tasks */}
            <div className="text-3xl">
                Hello Task
            </div>
        </div>
    );
}
