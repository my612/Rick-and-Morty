import { Box, Typography, Button, Container } from "@mui/material";
import { SearchAppBar } from "../components/AppBar";
import { useEffect } from "react";
import useBackground from "../hooks/background";

const style = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
};

export const HomePage = () => {
    useBackground("src//assets//rick.jpeg");
    return (
    <>
      <Box>
        <SearchAppBar />
      </Box>
      <Box sx={style}>
      <Container maxWidth="md" sx={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', borderRadius: '8px', padding: '2rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <Typography variant="h3" gutterBottom>Welcome to Rick and Morty</Typography>
        <Typography variant="h6">
          "Rick and Morty" is an animated sci-fi comedy series that follows the misadventures of Rick Sanchez, a brilliant but alcoholic and reckless scientist, and his good-hearted but easily influenced grandson, Morty Smith. Together, they travel across the multiverse, encountering bizarre aliens, alternate realities, and existential dilemmas. Known for its dark humor, intricate plotlines, and sharp social commentary, "Rick and Morty" captivates audiences with its unique blend of absurdity and profound storytelling.
        </Typography>
      </Container>
    </Box>
    </>
  );
};
