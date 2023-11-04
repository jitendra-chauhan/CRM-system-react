import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { IconButton, Typography, Icon } from "@mui/material";
import "../css/sideNavBar.scss";
function SideNavBar() {
  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const listItems = [
    { text: "Home", onClick: () => {} },
    { text: "About", onClick: () => {} },
    { text: "Contact", onClick: () => {} },
  ];
  const st = {
    margin: "66px 0px 0px 0px",
  };
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton onClick={handleDrawerToggle}>
            {/* <MenuIcon />  */}
            {/* <Icon /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="50"
              height="50"
              viewBox="0 0 50 50"
            >
              <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
            </svg>
          </IconButton>
          <Typography variant="h6">CRM</Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={open}
        onClose={handleDrawerToggle}
        style={st}
        className="menuBar"
      >
        <List className="listName">
          {listItems.map((item) => (
            // button
            <ListItem key={item.text} onClick={item.onClick}>
              {item.text}
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}

export default SideNavBar;
