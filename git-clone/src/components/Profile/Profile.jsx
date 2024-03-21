import React from 'react'

import "./Profile.css"
import Navbar from '../Dashboard/Navbar/Navbar/Navbar'
import { UnderlineNav } from '@primer/react'
import { BookIcon, RepoIcon, GitPullRequestIcon, CommentDiscussionIcon, EyeIcon } from '@primer/octicons-react';



function Profile() {
    return (
        <>
            <Navbar />

            <UnderlineNav aria-label="Repository">
                <UnderlineNav.Item
                    aria-current="page"
                    icon={BookIcon}
                    sx={{
                        backgroundColor: "transparent", // Make the background transparent
                        color: "whitesmoke", // Ensure the icon color is white
                        "&:hover": {
                            backgroundColor: "transparent",
                        },
                    }}
                >
                    Overview
                </UnderlineNav.Item>
                <UnderlineNav.Item

                    icon={RepoIcon}
                    sx={{
                        backgroundColor: "transparent", // Make the background transparent
                        color: "whitesmoke", // Ensure the icon color is white
                        "&:hover": {
                            backgroundColor: "transparent",
                        },
                    }}
                >
                    Repositories
                </UnderlineNav.Item>
                <UnderlineNav.Item

                    icon={GitPullRequestIcon}
                    sx={{
                        backgroundColor: "transparent", // Make the background transparent
                        color: "whitesmoke", // Ensure the icon color is white
                        "&:hover": {
                            backgroundColor: "transparent",
                        },
                    }}
                >
                    Projects
                </UnderlineNav.Item>
                <UnderlineNav.Item

                    icon={CommentDiscussionIcon}
                    sx={{
                        backgroundColor: "transparent", // Make the background transparent
                        color: "whitesmoke", // Ensure the icon color is white
                        "&:hover": {
                            backgroundColor: "transparent",
                        },
                    }}
                >
                    Packages
                </UnderlineNav.Item>
            </UnderlineNav>

            <div className='profile-page-wrapper'>

                <div className="user-profile-section">
                    <div className="profile-image">
                    </div>

                    <div className="name">
                        <h3>Name</h3>
                        <p>username</p>
                    </div>

                    <button className='follow-btn'>Follow</button>

                    <div className="follower">
                        <p>10 Follower</p>
                        <p>3 Following</p>
                    </div>
                </div>


                <div className="user-repo-section">
                    <div className="repo">
                        <h3 className='repo-name'>Repo Name</h3>
                        <p className='description'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui ipsa magni, error, quasi distinctio laudantium aperiam ducimus sit eligendi aut labore tempore </p>
                        <p className='language'>Language</p>
                    </div>
                    <div className="repo">
                        <h3 className='repo-name'>Repo Name</h3>
                        <p className='description'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui ipsa magni, error, quasi distinctio laudantium aperiam ducimus sit eligendi aut labore tempore </p>
                        <p className='language'>Language</p>
                    </div>
                    <div className="repo">
                        <h3 className='repo-name'>Repo Name</h3>
                        <p className='description'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui ipsa magni, error, quasi distinctio laudantium aperiam ducimus sit eligendi aut labore tempore </p>
                        <p className='language'>Language</p>
                    </div>
                    <div className="repo">
                        <h3 className='repo-name'>Repo Name</h3>
                        <p className='description'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui ipsa magni, error, quasi distinctio laudantium aperiam ducimus sit eligendi aut labore tempore </p>
                        <p className='language'>Language</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile