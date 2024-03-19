import React from "react";
import { IconButton } from "@primer/react";
import { IssueOpenedIcon } from "@primer/octicons-react";
import Box from "@mui/material/Box"; // Import Box from MUI
import "./Issues.css";

const Issues = () => {
  return (
    <div>
      <Box>
        <IconButton
          icon={IssueOpenedIcon}
          aria-label="Issues"
          sx={{
            backgroundColor: "transparent", // Make the background transparent
            border: "1px solid white", // Add a white border
            color: "white", // Ensure the icon color is white
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.1)", // Optional: Add a hover effect
            },
          }}
        />
      </Box>
    </div>
  );
};

export default Issues;
