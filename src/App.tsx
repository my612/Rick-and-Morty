import { Route, Routes } from "react-router-dom";
import { SearchAppBar } from "./components/AppBar";
import { CharacterPage } from "./pages/characterpage";
import { HomePage } from "./pages/homepage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/character" element={<SearchAppBar />} />
      <Route path="/character/:id" element={<CharacterPage />} />
    </Routes>
  );
}

export default App;
