import axios from 'axios';
import { PublicAPIError, UploadVideoResponse } from '@/pages/api/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';

type UploadVideoParams = {
  index_id: string;
  file: File;
};

function useUploadVideo() {
  const queryClient = useQueryClient();

  return useMutation<UploadVideoResponse, PublicAPIError, UploadVideoParams>(
    ['upload'],
    uploadVideo,
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['tasks']);
      },
    }
  );
}

function uploadVideo({ index_id, file }: UploadVideoParams) {
  const formData = new FormData();

  formData.append('index_id', index_id);
  formData.append('file', file);

  return axios
    .post<UploadVideoResponse>('/api/upload', formData, {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((res) => res.data);
}

export default useUploadVideo;
