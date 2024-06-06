import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";

const TopBar = () => {
  return (
    <AppBar position="static">
      {/* <Toolbar sx={{ color: "lightGrey" }}> */}
      {/* <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My Profile
        </Typography> */}
      {/* </Toolbar> */}
    </AppBar>
  );
};

export default TopBar;
