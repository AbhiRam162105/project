import React, { useState } from "react";
import "./SideContent.css"; // Import your CSS file
import AvatarIcon from "../../Navbar/Avatar/Avatar";
import { ActionMenu, ActionList, Avatar, IconButton } from "@primer/react";
import {
  BookIcon,
  BookmarkFillIcon,
  BookmarkSlashFillIcon,
  RepoPushIcon,
} from "@primer/octicons-react";
import Searchbar from "../../Navbar/Searchbar/Searchbar";
import { Button } from "@mui/material";

const Sidebar = ({ repositories = [] }) => {
  const [visibleRepos, setVisibleRepos] = useState(7); // Initially show 7 repositories
  const [showLess, setShowLess] = useState(false); // Initially show all repositories

  const loadMoreRepos = () => {
    setVisibleRepos((prevVisibleRepos) => prevVisibleRepos + 15);
    setShowLess(true);
    // Increase by 5 each time
  };

  const showLessRepos = () => {
    setVisibleRepos(7); // Show only 7 repositories
    setShowLess(false); // Set showLess state to true
  };

  return (
    <div className="sidebar">
      <div className="account">
        <div className="aicon">
          <Avatar
            src="https://avatars.githubusercontent.com/u/92997159?v=4"
            size={25}
          />
        </div>

        <div className="accountName">
          <ActionMenu>
            <ActionMenu.Button
              sx={{
                backgroundColor: "black", // Set the background to black
                border: "1px solid white", // Add a white border
                color: "white", // Ensure the text color is white
                "&:hover": {
                  backgroundColor: "black", // Keep the background black on hover
                  borderColor: "white", // Keep the border white on hover
                  color: "white", // Keep the text color white on hover
                },
              }}
            >
              John Doe
            </ActionMenu.Button>
            <ActionMenu.Overlay width="medium">
              <ActionList
                sx={{
                  backgroundColor: "rgb(40,44,52)", // Set the background to black
                  color: "white", // Ensure the text color is white
                }}
              >
                <ActionList.Item
                  onSelect={() => alert("Copy link clicked")}
                  sx={{
                    backgroundColor: "rgb(40,44,52)", // Set the background to black
                    color: "white", // Ensure the text color is white
                  }}
                >
                  New Repository
                </ActionList.Item>
                <ActionList.Item
                  onSelect={() => alert("Quote reply clicked")}
                  sx={{
                    backgroundColor: "rgb(40,44,52)", // Set the background to black
                    color: "white", // Ensure the text color is white
                  }}
                >
                  Import Repository
                </ActionList.Item>
                <ActionList.Divider />
                <ActionList.Item
                  onSelect={() => alert("Edit comment clicked")}
                  sx={{
                    backgroundColor: "rgb(40,44,52)", // Set the background to black
                    color: "white", // Ensure the text color is white
                  }}
                >
                  New Codespace
                </ActionList.Item>
                <ActionList.Item
                  onSelect={() => alert("Edit comment clicked")}
                  sx={{
                    backgroundColor: "rgb(40,44,52)", // Set the background to black
                    color: "white", // Ensure the text color is white
                  }}
                >
                  New Gist
                </ActionList.Item>
                <ActionList.Divider />
                <ActionList.Item
                  onSelect={() => alert("Edit comment clicked")}
                  sx={{
                    backgroundColor: "rgb(40,44,52)", // Set the background to black
                    color: "white", // Ensure the text color is white
                  }}
                >
                  New organization
                </ActionList.Item>
                <ActionList.Item
                  onSelect={() => alert("Edit comment clicked")}
                  sx={{
                    backgroundColor: "rgb(40,44,52)", // Set the background to black
                    color: "white", // Ensure the text color is white
                  }}
                >
                  New Project
                </ActionList.Item>
                <ActionList.Divider />
                <ActionList.Item
                  variant="danger"
                  onSelect={() => alert("Delete file clicked")}
                  sx={{
                    backgroundColor: "rgb(40,44,52)", // Set the background to black
                    color: "white", // Ensure the text color is white
                  }}
                >
                  Delete file
                </ActionList.Item>
              </ActionList>
            </ActionMenu.Overlay>
          </ActionMenu>
        </div>
      </div>

      <b className="sidebar-heading">Recent </b>
      <div className="recent">
        <Searchbar />
        <IconButton
          icon={BookmarkSlashFillIcon}
          size={"medium"}
          variant="primary"
        />
      </div>

      <ul className="repo-list">
        {repositories.slice(0, visibleRepos).map((repo, index) => (
          <li key={index}>
            <Avatar src={repo.thumbnail} size={15} />

            <a
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="repoTitle"
            >
              {repo.title}
            </a>
          </li>
        ))}
      </ul>
      {repositories.length > visibleRepos && !showLess && (
        <Button onClick={loadMoreRepos}>Load More</Button>
      )}
      {showLess && <Button onClick={showLessRepos}>See Less</Button>}
    </div>
  );
};

export default Sidebar;
