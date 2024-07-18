import React, { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { CharacterPage } from "./pages/characterpage";
import { HomePage } from "./pages/homepage";
import CharacterSearchPage from "./pages/charactersPage";
import { FavoritesPage } from "./pages/favoritesPage";
import Signup from "./components/Signup";
import Login from "./components/Login";

const FavoritesContext = createContext({
  favorites: [] as string[],
});

function App() {
  const [favorites, setFavorites] = useState<string[]>([]);
  // const favs = { favorites, setFavorites };

  return (
    <FavoritesContext.Provider value={{ favorites }}>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/character/:id" element={<CharacterPage />} />
        <Route path="/character" element={<CharacterSearchPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </FavoritesContext.Provider>
  );
}

export default App;
export { FavoritesContext };
