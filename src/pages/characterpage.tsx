// import { SearchAppBar } from "../components/AppBar";
import { ChangeEvent, useEffect, useState } from "react";
import { Character } from "../types/characterProp";
import { Box, Button, Container, Typography } from "@mui/material";
import useBackground from "../hooks/background";
// import { useParams } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import { SearchAppBar } from "../components/AppBar";
import {
  addFavorites,
  readCookie,
  removeFavorite,
} from "../utils/cookieshelpers";
const style = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
};
export const CharacterPage = () => {
  useBackground("src///assets///rick.jpeg");
  document.body.style.overflow = "hidden";
  const { id } = useParams();
  const [character, setCharacter] = useState<Character>();
  useEffect(() => {
    // console.log(id);
    if (id) {
      axios
        .get(`https://rickandmortyapi.com/api/character/${id}`)
        .then((response) => {
          setCharacter(response.data);
        })
        .catch((error) => {
          console.error(
            "There was an error fetching the character data:",
            error
          );
        });
    }
  }, [id]);

  const [isInFavorites, setIsInFavorites] = useState(false);

  useEffect(() => {
    // Assuming `item` is the item to check and `getFavoritesList` is a function that retrieves the favorites list
    const favoritesList = JSON.parse(readCookie("favorites") || "[]");
    const idIsInFavorites = favoritesList.includes(id); // Ensure this comparison is valid
    setIsInFavorites(idIsInFavorites);
  }, [id]);
  return (
    <>
      <SearchAppBar
        inputChangehandler={function (e: ChangeEvent<HTMLInputElement>): void {
          throw new Error("Function not implemented.");
        }}
      ></SearchAppBar>
      <Box sx={style}>
        {character ? (
          <Container
            maxWidth="md"
            sx={{
              display: "flex",
              backgroundColor: "rgba(255, 255, 255, 0.7)",
              borderRadius: "8px",
              padding: "2rem",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Box sx={{ marginRight: 10 }}>
              <Typography variant="h3">{character.name}</Typography>
              <img src={character.image} alt={character.name} />
            </Box>
            <Box sx={{ paddingTop: 10 }}>
              <Typography variant="h6">
                <strong>Status:</strong> {character.status}
              </Typography>
              <Typography variant="h6">
                <strong>Species:</strong> {character.species}
              </Typography>
              <Typography variant="h6">
                <strong>Type:</strong> {character.type}
              </Typography>
              <Typography variant="h6">
                <strong>Gender:</strong> {character.gender}
              </Typography>
              <Typography variant="h6">
                <strong>Origin:</strong> {character.origin.name}
              </Typography>
              <Typography variant="h6">
                <strong>Location:</strong> {character.location.name}
              </Typography>
              <Typography variant="h6">
                <strong>Episodes:</strong> {character.episode.length}
              </Typography>
              {!isInFavorites && (
                <Button
                  onClick={() => {
                    if (id) {
                      addFavorites(id);
                    }
                    let favoritesList = JSON.parse(
                      readCookie("favorites") || "[]"
                    );
                    console.log(favoritesList);
                  }}
                >
                  Add to favorites
                </Button>
              )}
              {isInFavorites && (
                <Button
                  onClick={() => {
                    if (id) {
                      removeFavorite(id);
                    }
                    let favoritesList = JSON.parse(
                      readCookie("favorites") || "[]"
                    );
                    console.log(favoritesList);
                  }}
                >
                  Remove from favorites
                </Button>
              )}
            </Box>
          </Container>
        ) : (
          <p>Loading character...</p>
        )}
      </Box>
    </>
  );
};
