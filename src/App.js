import React from "react";
import "./index.css";
import Home from "./routes/Home";
import DevHome from "./routes/dev/DevHome";
import ArtHome from "./routes/art/ArtHome";
import NotFound from "./routes/NotFound";
import { Route, Routes } from "react-router-dom";
import Privacy from "./routes/Privacy";
import Work from "./routes/art/Work";
import Illustration from "./routes/art/Illustration";
import BookCover from "./routes/art/BookCover";
import CharacterDesign from "./routes/art/CharacterDesign";
import EnvironmentDesign from "./routes/art/EnvironmentDesign";
import LineArt from "./routes/art/LineArt";
import Commission from "./routes/art/Commission";
import ACComic from "./routes/art/ACComic";
import TSTComic from "./routes/art/TSTComic";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dev" element={<DevHome />} />
        <Route path="/art" element={<ArtHome />} />
        <Route path="/art/work" element={<Work />} />
        <Route path="/art/illustration" element={<Illustration />} />
        <Route path="/art/chardesign" element={<CharacterDesign />} />
        <Route path="/art/envdesign" element={<EnvironmentDesign />} />
        <Route path="/art/bookcover" element={<BookCover />} />
        <Route path="/art/lineart" element={<LineArt />} />
        <Route path="/art/commissions" element={<Commission />} />
        <Route path="/art/ac" element={<ACComic />} />
        <Route path="/art/tst" element={<TSTComic />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
