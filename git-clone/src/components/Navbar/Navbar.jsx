import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="leftnav">
        {" "}
        <div className="sidebarIcon">
          <label class="hamburger">
            <input type="checkbox" />
            <svg viewBox="0 0 32 32">
              <path
                class="line line-top-bottom"
                d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
              ></path>
              <path class="line" d="M7 16 27 16"></path>
            </svg>
          </label>
        </div>
        <div className="logo">
          <h2>Dashboard</h2>
        </div>
      </div>
      <div className="rightnav">
        <div className="searchbar">
          <input type="text" name="search" id="searchrepo" />
        </div>
        <div className="createnewdrop">
          <label class="popup">
            <input type="checkbox" />
            <div class="burger" tabindex="0">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <nav class="popup-window">
              <legend>Actions</legend>
              <ul>
                <li>
                  <button>
                    <svg
                      stroke-linejoin="round"
                      stroke-linecap="round"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                      height="14"
                      width="14"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle r="4" cy="7" cx="9"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                    <span>Colloborators</span>
                  </button>
                </li>
                <li>
                  <button>
                    <svg
                      stroke-linejoin="round"
                      stroke-linecap="round"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                      height="14"
                      width="14"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                    </svg>
                    <span>Magic Link</span>
                  </button>
                </li>
                <hr />
                <li>
                  <button>
                    <svg
                      stroke-linejoin="round"
                      stroke-linecap="round"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                      height="14"
                      width="14"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        ry="2"
                        rx="2"
                        height="13"
                        width="13"
                        y="9"
                        x="9"
                      ></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                    <span>Clone</span>
                  </button>
                </li>
                <li>
                  <button>
                    <svg
                      stroke-linejoin="round"
                      stroke-linecap="round"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                      height="14"
                      width="14"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polygon points="16 3 21 8 8 21 3 21 3 16 16 3"></polygon>
                    </svg>
                    <span>Edit</span>
                  </button>
                </li>
                <hr />
                <li>
                  <button>
                    <svg
                      stroke-linejoin="round"
                      stroke-linecap="round"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                      height="14"
                      width="14"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line y2="18" x2="6" y1="6" x1="18"></line>
                      <line y2="18" x2="18" y1="6" x1="6"></line>
                    </svg>
                    <span>Delete</span>
                  </button>
                </li>
              </ul>
            </nav>
          </label>
        </div>
        <div className="dropdown"></div>
        <div className="circle">
          <button class="button">
            <svg viewBox="0 0 448 512" class="bell">
              <path d="M224 0c-17.7 0-32 14.3-32 32V49.9C119.5 61.4 64 124.2 64 200v33.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V200c0-75.8-55.5-138.6-128-150.1V32c0-17.7-14.3-32-32-32zm0 96h8c57.4 0 104 46.6 104 104v33.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V200c0-57.4 46.6-104 104-104h8zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z"></path>
            </svg>
          </button>
        </div>
        <div className="issues">
          {" "}
          <button class="button">
            <svg viewBox="0 0 448 512" class="bell">
              <path d="M224 0c-17.7 0-32 14.3-32 32V49.9C119.5 61.4 64 124.2 64 200v33.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V200c0-75.8-55.5-138.6-128-150.1V32c0-17.7-14.3-32-32-32zm0 96h8c57.4 0 104 46.6 104 104v33.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V200c0-57.4 46.6-104 104-104h8zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z"></path>
            </svg>
          </button>
        </div>
        <div className="pullrequests">
          <button class="button">
            <svg viewBox="0 0 448 512" class="bell">
              <path d="M224 0c-17.7 0-32 14.3-32 32V49.9C119.5 61.4 64 124.2 64 200v33.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V200c0-75.8-55.5-138.6-128-150.1V32c0-17.7-14.3-32-32-32zm0 96h8c57.4 0 104 46.6 104 104v33.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V200c0-57.4 46.6-104 104-104h8zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
