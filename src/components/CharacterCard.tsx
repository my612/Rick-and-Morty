import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { ButtonBase } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface CharacterCardProps {
  id: number;
  name: string;
  status: string;
  species: string;
  location: string;
  gender: string;
  image: string;
}

export default function CharacterCard({
  id,
  name,
  status,
  species,
  location,
  gender,
  image,
}: CharacterCardProps) {
  const navigate = useNavigate();
  return (
    <ButtonBase
      component="span"
      style={{
        width: "100%", // Ensures ButtonBase takes the full width
        display: "block", // Makes ButtonBase a block element, covering the area of the Card
        textAlign: "initial", // Prevents text alignment issues within the ButtonBase
      }}
      onClick={() => {
        console.log(id);
        navigate(`/character/${id}`);
      }}
    >
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ height: 140 }} image={image} title="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <div style={{ display: "flex" }}>
            <Typography>{species}</Typography>
            <LocationOnIcon />
            <Typography>{location}</Typography>
          </div>
        </CardContent>
        <CardActions>
          <div>
            <Typography>{status}</Typography>
          </div>
          <div>
            <Typography>{gender}</Typography>
          </div>
        </CardActions>
      </Card>
    </ButtonBase>
  );
}
