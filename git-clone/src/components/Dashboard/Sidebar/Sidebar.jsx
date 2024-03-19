import * as React from "react";
import { useNavigate } from "react-router-dom";

import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";

import "./Sidebar.css";
import { IconButton } from "@primer/react";
import { ThreeBarsIcon } from "@primer/octicons-react";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = () => (
    <div className="side-bar">
      <div className="title">
        <h1>Github</h1>
      </div>

      <div className="side-bar-options">
        <div className="upper-options">
          <ul>
            <li>Profile</li>
            <li>My Note</li>
            <li>PDF's</li>
          </ul>
        </div>

        <div className="lower-options">
          <ul>
            <li>Logout</li>
          </ul>
        </div>
      </div>
    </div>
  );
  const anchor = "left"; // Set anchor to 'left' only

  return (
    <div>
      <React.Fragment key={anchor}>
        <IconButton
          aria-label="Search"
          icon={ThreeBarsIcon}
          onClick={toggleDrawer(anchor, true)}
          sx={{
            backgroundColor: "transparent", // Make the background transparent
            border: "1px solid white", // Add a white border
            color: "white", // Ensure the icon color is white
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.1)", // Optional: Add a hover effect
            },
          }}
        />

        <Drawer
          anchor={anchor}
          open={state[anchor]}
          onClose={toggleDrawer(anchor, false)}
        >
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
