import { NextApiRequest, NextApiResponse } from 'next';
import { ListVideosResponse, PublicAPIError } from '../../types';
import { type AxiosError } from 'axios';

import api from '../../../../libs/axios';

export default async function getVideos(
  req: NextApiRequest,
  res: NextApiResponse<ListVideosResponse | PublicAPIError>
) {
  const query = req.query;
  const { indexId } = query;

  try {
    const response = await api.get(`/indexes/${indexId}/videos`);

    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      code: (error as AxiosError).code ?? '500',
      message: (error as AxiosError).message,
      docs_url: 'TBD',
    });
  }
}
