import AppHeader from '@/components/AppHeader';
import IndexedVideoList from '@/features/browse/components/IndexedVideoList';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main
      className={`${inter.className} bg-gray-300 grid grid-rows-[60px_1fr] min-h-screen`}
    >
      <AppHeader />
      <section className="grid grid-cols-[150px_1fr]">
        <section></section>
        <IndexedVideoList />
      </section>
    </main>
  );
}

function UploadModal() {}
