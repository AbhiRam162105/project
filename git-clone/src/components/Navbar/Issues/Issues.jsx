import React from "react";
import { IconButton } from "@primer/react";
import { IssueOpenedIcon } from "@primer/octicons-react";

const Issues = () => {
  return (
    <div>
      <IconButton icon={IssueOpenedIcon} aria-label="Issues" />
    </div>
  );
};

export default Issues;
