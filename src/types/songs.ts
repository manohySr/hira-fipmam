export interface Song {
  id: string;
  title: string;
  artist: string;
  album: string;
  year: number;
  lyrics: string;
  duration: number;
  genre: string;
  formattedDuration: string;
  createdAt: string;
  updatedAt: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}
