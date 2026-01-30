import { useEffect, useState, type ChangeEvent } from "react";
import { Input } from "./components/ui/input";
import { Search, Loader2 } from "lucide-react";
import Logo from "./components/Logo";
import Song from "./components/Song";
import { getSongs, searchSongs } from "./services/songs.service.ts";
import type { Song as SongType } from "./types/songs.ts";
import { Button } from "./components/ui/button.tsx";

function App() {
  const [search, setSearch] = useState("");
  const [songs, setSongs] = useState<SongType[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      setLoading(true);

      try {
        const res =
          search.trim().length > 0
            ? await searchSongs(search, signal, page)
            : await getSongs(signal, page);

        setSongs(res.data);
        setTotalPages(res.totalPages);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [search, page]);

  return (
    <div className="p-5">
      <Logo />

      <div className="relative w-full mt-2 mb-2">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          value={search}
          onChange={handleChange}
          placeholder="Hitady hira"
          className="w-full pl-9"
        />
      </div>

      {loading && (
        <div className="flex justify-center items-center mt-4">
          <Loader2 className="animate-spin h-6 w-6 text-blue-500" />
        </div>
      )}

      {songs.map((song) => (
        <Song
          key={song.id}
          id={song.id}
          title={song.title}
          author={song.artist}
        />
      ))}

      {songs.length > 0 && (
        <div className="mt-4 flex justify-center space-x-2">
          <Button
            onClick={() => setPage(page - 1)}
            disabled={page <= 1}
            className={page <= 1 ? "" : "text-blue-500"}
          >
            Teo aloha
          </Button>

          <span className="flex items-center text-sm">
            Page {page} / {totalPages}
          </span>

          <Button
            onClick={() => setPage(page + 1)}
            disabled={page >= totalPages}
            className={page >= totalPages ? "" : "text-blue-500"}
          >
            Manaraka
          </Button>
        </div>
      )}
    </div>
  );
}

export default App;
