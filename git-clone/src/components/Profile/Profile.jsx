import React from 'react'

import "./Profile.css"


function Profile() {
    return (
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

        </div>
    )
}

export default Profile