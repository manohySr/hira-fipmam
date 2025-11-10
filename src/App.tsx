import { useState, type ChangeEvent } from "react";
import "./App.css";
import { Input } from "./components/ui/input";
import { Search } from "lucide-react";
import Logo from "./components/Logo.tsx";
import Song from "./components/Song.tsx";

function App() {
  const [search, setSearch] = useState<string>("");
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }
  return (
    <div className="p-5">
      <Logo />

      {/* search */}
      <div className="relative w-full mt-2 mb-2">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          value={search}
          onChange={handleChange}
          placeholder="Hitady hira"
          className="w-full pl-9"
        />
      </div>

      <Song author="Tahiana Andry Nandrasana" title="Ry voronkely soa" id={1} />
    </div>
  );
}

export default App;
