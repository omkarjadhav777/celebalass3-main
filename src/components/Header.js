import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";

const Header = ({ toggleTheme }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Admin Dashboard
        </Typography>
        <IconButton color="inherit" onClick={toggleTheme}>
          <Brightness4Icon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
