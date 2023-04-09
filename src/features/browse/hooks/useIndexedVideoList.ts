import { useQuery } from '@tanstack/react-query';

import { ListVideosResponse, PublicAPIError } from '@/pages/api/types';
import fetcher from '@/libs/fetcher';

interface UseIndexedVideoList {
  indexId: string;
}

function useIndexedVideoList({ indexId }: UseIndexedVideoList) {
  const response = useQuery<ListVideosResponse, PublicAPIError>(
    ['index', indexId, 'videos'],
    () => fetcher<ListVideosResponse>(`api/indexes/${indexId}/videos`),
    {
      // TODO: remove this option after upload feature. this assumes no mutations occur
      staleTime: Infinity,
    }
  );

  return {
    ...response,
    data: response.data?.data ?? [],
  };
}

export default useIndexedVideoList;
