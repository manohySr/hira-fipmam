import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route } from "react-router";
import { Routes } from "react-router";
import Lyrics from "./Lyrics.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/song/:id" element={<Lyrics />} />
    </Routes>
  </BrowserRouter>,
);
