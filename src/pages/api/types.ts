export interface PageInfo {
  limit_per_page: number;
  page: number;
  total_page: number;
  total_result: number;
}

export interface PublicAPIError {
  code: string;
  message: string;
  docs_url: string;
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
