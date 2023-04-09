import { NextApiRequest, NextApiResponse } from 'next';
import { ListVideosResponse, PublicAPIError } from '../../../types';

import api from '../../../../../libs/axios';

import querystring from 'querystring';

export default async function getVideos(
  req: NextApiRequest,
  res: NextApiResponse<ListVideosResponse | PublicAPIError>
) {
  const query = req.query;
  const { indexId } = query;

  delete query.indexId;

  try {
    const response = await api.get(
      `/indexes/${indexId}/videos?${querystring.stringify(query)}`
    );

    res.status(200).json(response.data);
  } catch (error) {
    const errorData: PublicAPIError = (error as any).response.data;

    return res.status(400).json({
      code: errorData.code,
      message: errorData.message,
      docs_url: errorData.docs_url,
    });
  }
}
