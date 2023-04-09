import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

import { ListIndexingTasksResponse } from '@/pages/api/types';
import UploadingVideoItem from './ProcessingVideoItem';

function ProcessingVideoList() {
  const { data } = useQuery(['tasks'], fetchTasks, {
    select: (data) => data.data,
  });

  return (
    <ul>
      {data?.map(
        (task) =>
          task.status === 'ready' || (
            <UploadingVideoItem key={task._id} taskId={task._id} />
          )
      )}
    </ul>
  );
}

function fetchTasks(): Promise<ListIndexingTasksResponse> {
  return axios<ListIndexingTasksResponse>('/api/tasks').then((res) => res.data);
}
export default ProcessingVideoList;
