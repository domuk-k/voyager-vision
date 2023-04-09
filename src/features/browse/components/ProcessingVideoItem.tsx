import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

import { GetProcessingTaskResponse } from '@/pages/api/types';
import VideoListItemLayout from './VideoListItemLayout';

function ProcessingVideoItem({ taskId }: { taskId: string }) {
  const { data } = useQuery<GetProcessingTaskResponse>(
    ['tasks', taskId],
    () => fetchTaskItem(taskId),
    { enabled: !!taskId }
  );

  if (!data) return null;

  return (
    <VideoListItemLayout>
      {data.status}
      <div id="overlay" className="absolute">
        {data?.process?.percentage}
      </div>
      <ul className="bg-red-100">
        <li className="flex gap-3">
          <span>created_at</span>
          <span>{data?.created_at}</span>
        </li>
        <li className="flex gap-3">
          <span>duration</span>
          <span>{data?.metadata.duration}</span>
        </li>
        <li className="flex gap-3">
          <span>filename</span>
          <span>{data?.metadata.filename}</span>
        </li>
      </ul>
    </VideoListItemLayout>
  );
}

function fetchTaskItem(taskId: string): Promise<GetProcessingTaskResponse> {
  return axios<GetProcessingTaskResponse>(`/api/tasks/${taskId}`).then(
    (res) => res.data
  );
}

export default ProcessingVideoItem;
