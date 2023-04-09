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
    console.error(error);
    res.status(500).json({
      code: (error as AxiosError).code ?? '500',
      message: (error as AxiosError).message,
      docs_url: 'TBD',
    });
  }
}
