import { SearchIcon } from "@primer/octicons-react";
import "./Searchbar.css";
import React from "react";

const Searchbar = () => {
  return (
    <div className="search">
      <div className="searchbar">
        <SearchIcon />
        <input
          type="text"
          name="search"
          id="searchBar"
          placeholder="Search GitHub"
          className="github-search-input"
        />
      </div>
    </div>
  );
};

export default Searchbar;
