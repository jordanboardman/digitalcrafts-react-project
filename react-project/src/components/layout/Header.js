import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#CC8E69",
        display: "flex",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <Typography sx={{ fontWeight: "bolder" }}>
          <Link to="/">Spirit Guide</Link>
        </Typography>

        <Typography sx={{ fontWeight: "bolder" }}>
          <Link to="/favorites">Favorites</Link>
        </Typography>

        <Typography sx={{ fontWeight: "bolder" }}>
          <Link to="/about">About this Cool App</Link>
        </Typography>

        <Typography sx={{ fontWeight: "bolder" }}>
          <Link to="/jordan">Jordan's Favorites</Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
