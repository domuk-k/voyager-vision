export interface PageInfo {
  limit_per_page: number;
  page: number;
  total_page: number;
  total_result: number;
}

export interface PublicAPIError {
  code: string;
  message: string;
  docs_url?: string;
}

interface VideoMetadata {
  filename: string;
  duration: number;
  fps: number;
  width: number;
  height: number;
  size: number;
}

export interface Video {
  _id: string;
  created_at: string;
  updated_at: string;
  indexed_at: string;
  metadata: VideoMetadata;
}

export interface ListVideosResponse {
  data: Video[];
  page_info: PageInfo;
}

export interface UploadVideoParams {
  index_id: string;
  video_file: File;
  language?: string;
}

export interface UploadVideoResponse {
  _id: string;
}

type TaskProcessing =
  | 'validating'
  | 'pending'
  | 'indexing'
  | 'ready'
  | 'failed';

export interface ProcessingTask {
  _id: string;
  index_id: string;
  status: TaskProcessing;
  created_at: string;
  updated_at: string;
  estimated_time: string;
  metadata: {
    filename: string;
    duration: number;

    width: number;
    height: number;
  };
}

export interface TaskProcess {
  percentage: number;
  remain_seconds: number;
}

export interface ListIndexingTasksResponse {
  data: ProcessingTask[];
  page_info: PageInfo;
}

export interface GetProcessingTaskResponse extends ProcessingTask {
  process?: TaskProcess;
}
