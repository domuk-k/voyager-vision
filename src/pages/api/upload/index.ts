import { NextApiRequest, NextApiResponse } from 'next';
import FormData from 'form-data';

import { UploadVideoResponse, PublicAPIError } from '../types';
import formidable from 'formidable';
import fs from 'fs';
import api from '@/libs/axios';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function uploadVideo(
  req: NextApiRequest,
  res: NextApiResponse<UploadVideoResponse | PublicAPIError>
) {
  const { fields, files } = await formidablePromise(req);

  if (Array.isArray(files.file)) {
    return res.status(400).json({
      code: '400',
      message: 'Multiple files not supported for this API',
      docs_url:
        'https://docs.twelvelabs.io/reference/create-video-indexing-task',
    });
  }

  const video_file = fs.createReadStream(files.file.filepath);

  const formData = new FormData();
  formData.append('language', 'en');
  formData.append('video_file', video_file, {
    filename: files.file.originalFilename!,
  });
  formData.append('index_id', fields.index_id);

  try {
    const response = await api
      .post<UploadVideoResponse>('/tasks', formData, {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
          accept: 'application/json',
        },
      })
      .then((res) => res.data);

    return res.status(200).json({ _id: response._id });
  } catch (error) {
    return res.status(400).json({
      code: (error as PublicAPIError).code,
      message: (error as PublicAPIError).message,
      docs_url: 'TBD',
    });
  }
}

function formidablePromise(
  req: NextApiRequest
): Promise<{ fields: formidable.Fields; files: formidable.Files }> {
  return new Promise((accept, reject) => {
    const form = formidable();

    form.parse(req, (err, fields, files) => {
      if (err) {
        return reject(err);
      }
      return accept({ fields, files });
    });
  });
}
