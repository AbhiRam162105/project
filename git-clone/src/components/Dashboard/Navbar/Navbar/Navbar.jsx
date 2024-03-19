import React from "react";
import CreateNew from "../CreateNew/CreateNewButton";
import Sidebar from "../../Sidebar/Sidebar";
import Searchbar from "../Searchbar/Searchbar";

import Issues from "../Issues/Issues";
import Prbutton from "../PullRequest/Prbutton";
import NotiButton from "../Notificationbutton/NotiButton";
import "./Navbar.css";
import AvatarIcon from "../Avatar/Avatar";
import {
  IssueOpenedIcon,
  ListUnorderedIcon,
  LogoGithubIcon,
  MarkGithubIcon,
} from "@primer/octicons-react";

const Navbar = () => {
  return (
    <div className="navbarMain">
      <div className="leftnav">
        <div className="logo">
          <MarkGithubIcon size={"medium"} />
        </div>
        <div className="name">Dashboard</div>
      </div>

      <div className="rightnav">
        <Searchbar />
        <div className="verticalLine">|</div>
        <div className="icons">
          <CreateNew />
          <Issues />
          <Prbutton />
          <NotiButton />
          <AvatarIcon />
        </div>
      </div>
    </div>
  );
};

export default Navbar;