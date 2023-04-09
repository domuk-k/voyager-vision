import { Video } from '@/pages/api/types';

function IndexedVideoItem({ video }: { video: Video }) {
  return (
    <ItemLayout>
      <li className="flex gap-3">
        <span>created_at</span>
        <span>{video.created_at}</span>
      </li>
      <li className="flex gap-3">
        <span>filename</span>
        <span>{video.metadata.filename}</span>
      </li>
      <li className="flex gap-3">
        <span>duration</span>
        <span>{video.metadata.duration}</span>
      </li>
    </ItemLayout>
  );
}

function ItemLayout({ children }: { children: React.ReactNode }) {
  return (
    <ul className="max-w-sm flex flex-col gap-1 p-3 bg-white border border-gray-200 rounded-md">
      {children}
    </ul>
  );
}

export default IndexedVideoItem;
