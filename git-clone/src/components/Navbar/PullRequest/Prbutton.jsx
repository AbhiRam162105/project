import { GitPullRequestIcon } from "@primer/octicons-react";
import { IconButton } from "@primer/react";
import React from "react";

const Prbutton = () => {
  return (
    <div>
      <IconButton icon={GitPullRequestIcon} aria-label="Pull Requests" />
    </div>
  );
};

export default Prbutton;
