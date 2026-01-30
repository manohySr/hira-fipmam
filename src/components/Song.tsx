import { Music } from "lucide-react";
import { NavLink } from "react-router";

interface SongProps {
  title: string;
  author: string;
  id: string;
}
export default function Song({ title, author, id }: SongProps) {
  return (
    <NavLink to={`/song/${id}`}>
      <div className="flex items-center gap-3 p-2 rounded-md bg-gray-50 cursor-pointer mb-2 mt-2 hover:bg-gray-100">
        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-400">
          <Music color="white" className="h-5 w-5" />
        </div>
        <div>
          <h1 className="text-sm font-semibold text-gray-900">{title}</h1>
          <span className="text-xs text-gray-500">{author}</span>
        </div>
      </div>
    </NavLink>
  );
}
