import { useQuery } from '@tanstack/react-query';

import { ListVideosResponse, PublicAPIError, Video } from '@/pages/api/types';

interface UseIndexedVideoList {
  indexId: string;
}

function useIndexedVideoList({ indexId }: UseIndexedVideoList) {
  return useQuery<ListVideosResponse, PublicAPIError>(
    ['index', indexId, 'videos'],
    async () => ({
      data: [
        {
          created_at: '2023-04-08T11:38:37.693Z',
          updated_at: '2023-04-08T11:38:37.693Z',
          indexed_at: '2023-04-08T11:38:37.693Z',
          metadata: {
            filename: 'northwest_world.z8',
            duration: 17,
            fps: 30,
            width: 1920,
            height: 1080,
            size: 123456789,
          },

          _id: '1',
        },
        {
          created_at: '2023-04-08T11:38:37.693Z',
          updated_at: '2023-04-08T11:38:37.693Z',
          indexed_at: '2023-04-08T11:38:37.693Z',
          metadata: {
            filename: 'interface_obnoxiously.dmg',
            duration: 42,
            fps: 30,
            width: 1920,
            height: 1080,
            size: 123456789,
          },
          _id: '2',
        },
      ],
      page_info: {
        limit_per_page: 1,
        page: 1,
        total_page: 2,
        total_result: 2,
      },
    })
  );
}

export default useIndexedVideoList;
