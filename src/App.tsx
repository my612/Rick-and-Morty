import { Route, Routes } from "react-router-dom";
// import { SearchAppBar } from "./components/AppBar";
import { CharacterPage } from "./pages/characterpage";
import { HomePage } from "./pages/homepage";
// import { useState } from "react";
// import CharacterCard from "./components/CharacterCard";
// import { CharacterGrid } from "./components/CharacterGrid";
import CharacterSearchPage from "./pages/charactersPage";
import { SearchAppBar } from "./components/AppBar";
import { FavoritesPage } from "./pages/favoritesPage";

function App() {
  return (
    // <SearchAppBar></SearchAppBar>
    // <HomePage />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/character" element={<CharacterSearchPage />} />
      <Route path="/character/:id" element={<CharacterPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
    </Routes>
  );
}

export default App;
