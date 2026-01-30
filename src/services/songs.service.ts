import type { Song } from "@/types/songs";

const API_BASE_URL = `http://${import.meta.env.VITE_API_DOMAIN}:${import.meta.env.VITE_API_PORT}/api/${import.meta.env.VITE_API_VERSION}`;

/**
 * Get all songs (paginated)
 */
export async function getSongs(signal?: AbortSignal, page = 1, limit = 10) {
  const res = await fetch(`${API_BASE_URL}/songs?page=${page}&limit=${limit}`, {
    signal,
  });
  if (!res.ok) throw new Error("Failed to fetch songs");
  return res.json();
}

/**
 * Search songs by query
 */
export async function searchSongs(
  query: string,
  signal?: AbortSignal,
  page = 1,
  limit = 10,
) {
  const res = await fetch(
    `${API_BASE_URL}/songs/search?q=${encodeURIComponent(query)}&page=${page}&limit=${limit}`,
    { signal },
  );
  if (!res.ok) throw new Error("Failed to search songs");
  return res.json();
}

/**
 * Get a single song by ID
 */
export async function getSongById(
  id: string,
  signal?: AbortSignal,
): Promise<Song> {
  const res = await fetch(`${API_BASE_URL}/songs/${id}`, { signal });

  if (!res.ok) {
    throw new Error("Failed to fetch song");
  }

  return res.json();
}
