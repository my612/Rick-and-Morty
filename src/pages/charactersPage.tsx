import React, { useState } from 'react';
import { SearchAppBar } from '../components/AppBar';
import { CharacterGrid } from '../components/CharacterGrid';

function CharacterSearchPage() {
  const [searchParameter, setSearchParameter] = useState("");

  const inputChangeHandler = (e) => {
    setSearchParameter(e.target.value);
  };

  return (
    <>
      <SearchAppBar inputChangehandler={inputChangeHandler} />
      <CharacterGrid searchParameter={searchParameter} />
    </>
  );
}

export default CharacterSearchPage;