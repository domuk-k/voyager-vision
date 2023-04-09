import { NextApiRequest, NextApiResponse } from 'next';

import { type AxiosError } from 'axios';

import { ListIndexingTasksResponse, PublicAPIError } from '../types';
import api from '@/libs/axios';

export default async function getTasks(
  req: NextApiRequest,
  res: NextApiResponse<ListIndexingTasksResponse | PublicAPIError>
) {
  try {
    const response = await api.get('/tasks');

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
