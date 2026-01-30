import { ArrowLeft, Loader2 } from "lucide-react";
import { NavLink, useParams } from "react-router";
import { useEffect, useState } from "react";
import { getSongById } from "@/services/songs.service";
import type { Song } from "@/types/songs";

export default function Lyrics() {
  const { id } = useParams<{ id: string }>();
  const [song, setSong] = useState<Song | null>(null);

  useEffect(() => {
    if (!id) return;
    getSongById(id).then(setSong);
  }, [id]);

  if (!song)
    return (
      <div className="flex justify-center items-center mt-20">
        <Loader2 className="animate-spin h-6 w-6 text-blue-500" />
      </div>
    );

  const formattedLyrics = song.lyrics
    .trim()
    .split(/\n{2,}/)
    .map((p) => p.split("\n"));

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <NavLink to="/" className="inline-flex items-center text-blue-500 mb-4">
        <ArrowLeft className="mr-1" /> Miverina
      </NavLink>

      <div className="bg-white shadow-md rounded p-6">
        <h1 className="text-2xl font-bold mb-2">{song.title}</h1>
        <h3 className="text-gray-500 mb-4">By {song.artist}</h3>

        {formattedLyrics.map((paragraph, i) => (
          <p key={i} className="mb-4 text-gray-700">
            {paragraph.map((line, j) => (
              <span key={j}>
                {line}
                <br />
              </span>
            ))}
          </p>
        ))}
      </div>
    </div>
  );
}
