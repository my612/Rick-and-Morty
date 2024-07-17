import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import CharacterCard from "../components/CharacterCard";
import { SearchAppBar } from "../components/AppBar";
import PaginationControlled from "../components/BottomPagination";
import useBackground from "../hooks/background";
import { readCookie } from "../utils/cookieshelpers";
interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  location: string;
  gender: string;
  image: string;
}
export function FavoritesPage() {
  useBackground("src//assets//rick.jpeg");
  let favoritesList = JSON.parse(readCookie("favorites") || "[]");
  //   const [ids, setIds] = useState(favoritesList);
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${favoritesList}`)
      .then((response) => {
        setCharacters(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [favoritesList]);

  return (
    <div>
      <SearchAppBar
        inputChangehandler={function (e: ChangeEvent<HTMLInputElement>): void {
          throw new Error("Function not implemented.");
        }}
      ></SearchAppBar>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "1rem",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        {characters.map((character) => {
          return (
            <CharacterCard
              key={character.id}
              id={character.id}
              name={character.name}
              status={character.status}
              species={character.species}
              location={character.location.name}
              image={character.image}
              gender={character.gender}
            />
          );
        })}
      </div>
    </div>
  );
}
