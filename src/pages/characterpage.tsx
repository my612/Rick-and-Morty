import React, { useState } from "react";
import { SearchAppBar } from "../components/AppBar";
import { useEffect } from "react";
import { Character } from "../types/characterProp";
import { Box, Container, Typography } from "@mui/material";
import useBackground from "../hooks/background";
import { useParams } from "react-router-dom";
import axios from "axios";
const style = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
};
export const CharacterPage = () => {
  useBackground("src//assets//rick.jpeg");
  //   const { id } = useParams<{ id: string }>();
  const [character, setCharacter] = useState<Character>();
  useEffect(() => {
    if (true) {
      axios
        .get(`https://rickandmortyapi.com/api/character/${8}`)
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
  }, []);
  return (
    <>
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
            </Box>
          </Container>
        ) : (
          <p>Loading character...</p>
        )}
      </Box>
    </>
  );
};
