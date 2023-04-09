import { useQuery } from '@tanstack/react-query';

import { ListVideosResponse, PublicAPIError, Video } from '@/pages/api/types';
import range from '@/utils/range';
import axios from 'axios';

interface UseIndexedVideoList {
  indexId: string;
}

const MAXIUM_PAGE_LIMIT = 50; // To list all the videos, setting page limit as its maximum would reduce api call count

function useIndexedVideoList({ indexId }: UseIndexedVideoList) {
  const response = useQuery<Video[], PublicAPIError>(
    ['index', indexId, 'videos'],
    async () => {
      const result: ListVideosResponse[] = [
        await fetchVideoList({ indexId, page: 1 }),
      ];

      const { page_info } = result[0];

      if (page_info.total_page > 1) {
        const callsForFurtherPages = range(2, page_info.total_page).map(
          (page) => fetchVideoList({ indexId, page })
        );

        result.push(...(await Promise.all(callsForFurtherPages)));
      }

      return result.flatMap((r) => r.data);
    },
    {
      enabled: false,
      // TODO: remove this option after upload feature. this assumes no mutations occur
      staleTime: Infinity,
    }
  );

  return {
    ...response,
    data: response.data ?? [],
  };
}

export default useIndexedVideoList;

const fetchVideoList = ({ indexId, page }: { indexId: string; page: number }) =>
  axios<ListVideosResponse>(
    `api/indexes/${indexId}/videos?page=${page}&page_limit=${MAXIUM_PAGE_LIMIT}`
  ).then((res) => res.data);
