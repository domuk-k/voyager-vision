import { Video } from '@/pages/api/types';

import VideoListItemLayout from './VideoListItemLayout';

function IndexedVideoItem({ video }: { video: Video }) {
  return (
    <VideoListItemLayout>
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
    </VideoListItemLayout>
  );
}

export default IndexedVideoItem;
