import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { GetProcessingTaskResponse } from '@/pages/api/types';

function useTaskItem(taskId: string) {
  return useQuery<GetProcessingTaskResponse>(
    ['tasks', taskId],
    () => fetchTaskItem(taskId),
    { enabled: !!taskId }
  );
}

function fetchTaskItem(taskId: string): Promise<GetProcessingTaskResponse> {
  return axios<GetProcessingTaskResponse>(`/api/tasks/${taskId}`).then(
    (res) => res.data
  );
}

export default useTaskItem;
