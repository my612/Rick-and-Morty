
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
    <>
    <SearchAppBar inputChangehandler={inputChangehandler}></SearchAppBar>
    <CharacterGrid searchParameter={searchParameter}/>
    </>
  )

}

export default App;
