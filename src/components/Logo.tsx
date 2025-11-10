import { Music } from "lucide-react";
export default function Logo() {
  return (
    <>
      <h1 className="flex items-center text-xl font-bold tracking-tight text-blue-600 gap-2">
        <span>
          Hira <span className="text-gray-900">FIPMAM</span>
        </span>
        <span className="flex items-center justify-center h-6 w-6 rounded-md bg-blue-400">
          <Music color="white" className="h-4 w-4" />
        </span>
      </h1>
    </>
  );
}
