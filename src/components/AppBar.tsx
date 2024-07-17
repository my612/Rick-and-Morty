import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

interface SearchAppBarProps {
  inputChangehandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export function SearchAppBar({ inputChangehandler }: SearchAppBarProps) {
  const navigate = useNavigate();
  return (
    <AppBar position="sticky">
      <Toolbar sx={{ bgcolor: "black" }}>
        <IconButton
          size="large"
          edge="start"
          color="primary"
          aria-label="open drawer"
          sx={{ mr: 2, color: "white" }}
        >
          <MenuIcon />
        </IconButton>
        <Button
          onClick={() => navigate("/")}
          sx={{ my: 2, color: "white", display: "block", font: "times" }}
        >
          Home
        </Button>
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          <Button
            onClick={() => navigate("/character")}
            sx={{ my: 2, color: "white", display: "block", font: "times" }}
          >
            Characters
          </Button>
          <Button
            onClick={() => navigate("/favorites")}
            sx={{ my: 2, color: "white", display: "block", font: "times" }}
          >
            Favorites
          </Button>
        </Box>
        <Search sx={{ flexGrow: 1 }}>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            onChange={inputChangehandler}
          />
        </Search>
      </Toolbar>
    </AppBar>
  );
}
