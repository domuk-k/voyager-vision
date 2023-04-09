import AppHeader from '@/components/AppHeader';
import IndexedVideoList from '@/features/browse/components/IndexedVideoList';
import IndexingVideoList from '@/features/browse/components/ProcessingVideoList';
import UploadForm from '@/features/upload/components/UploadForm';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main
      className={`${inter.className} bg-gray-300 grid grid-rows-[60px_1fr] min-h-screen`}
    >
      <AppHeader />
      <section className="grid grid-cols-[150px_1fr]">
        <section>
          <UploadForm />
        </section>
        <section>
          <IndexingVideoList />
          <IndexedVideoList indexId={'641d53987b1f2230dfcd6c03'} />
        </section>
      </section>
    </main>
  );
}

function UploadModal() {}
