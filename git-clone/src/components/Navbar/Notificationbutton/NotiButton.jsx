import { UnreadIcon } from "@primer/octicons-react";
import { IconButton } from "@primer/react";
import React from "react";

const NotiButton = () => {
  return (
    <div>
      <IconButton icon={UnreadIcon} aria-label="Notification" />
    </div>
  );
};

export default NotiButton;
