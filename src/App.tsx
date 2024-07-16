
import { Route, Routes } from "react-router-dom";
import { SearchAppBar } from "./components/AppBar";
import { CharacterPage } from "./pages/characterpage";
import { HomePage } from "./pages/homepage";

import { useState } from 'react';
import { SearchAppBar } from './components/AppBar'
import CharacterCard from './components/CharacterCard'
import { CharacterGrid } from './components/CharacterGrid'


function App() {
  const [searchParameter, setSearchParameter] = useState("");

  const inputChangehandler=(e)=>{
    setSearchParameter(e.target.value);
  }

  return (

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/character" element={<SearchAppBar />} />
      <Route path="/character/:id" element={<CharacterPage />} />
    </Routes>
  );
}

    <>
    <SearchAppBar inputChangehandler={inputChangehandler}></SearchAppBar>
    <CharacterGrid searchParameter={searchParameter}/>
    </>
  )
}



export default App;
