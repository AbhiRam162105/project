import React from "react";
import { IconButton } from "@primer/react";
import { IssueOpenedIcon } from "@primer/octicons-react";
import Box from "@mui/material/Box"; // Import Box from MUI
import "./Issues.css";

const Issues = () => {
  return (
    <div>
      <Box>
        {" "}
        {/* Apply the background color here */}
        <IconButton icon={IssueOpenedIcon} aria-label="Issues" />
      </Box>
    </div>
  );
};

export default Issues;
