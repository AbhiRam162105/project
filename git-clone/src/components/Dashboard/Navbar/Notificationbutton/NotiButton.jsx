import { UnreadIcon } from "@primer/octicons-react";
import { IconButton } from "@primer/react";
import React from "react";

const NotiButton = () => {
  return (
    <div>
      <IconButton
        icon={UnreadIcon}
        sx={{
          backgroundColor: "transparent", // Make the background transparent
          border: "1px solid white", // Add a white border
          color: "white", // Ensure the icon color is white
          "&:hover": {
            backgroundColor: "rgba(5,5,5,0.1)", // Optional: Add a hover effect
          },
        }}
        aria-label="Notification"
      />
    </div>
  );
};

export default NotiButton;
