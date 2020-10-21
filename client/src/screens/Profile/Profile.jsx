import React from 'react'
import './Profile.css'

export default function Profile() {
    return (
        <div className="big-cont-pro">
            Profile
            {/* <div className="prof-pro">Profile</div> */}

            <div className="head-cont-pro">
                <img src="https://www.pngkit.com/png/detail/281-2812821_user-account-management-logo-user-icon-png.png" width="110px" height="90px" />
                <div>
                    <li className="name-pro">Juan Camacho</li>
                    <li className="name-pro">Software Engineer</li>
                </div>
            </div>
            <div className="mid-cont-pro">
                <li className="li-pro">Posts</li>
                <li className="li-pro">Following</li>
                <li className="li-pro">Followers</li>
            </div>
            <div className="mid2-cont-pro">
                <li className="li2-pro">5</li>
                <li className="li2-pro">0</li>
                <li className="li2-pro">0</li>
            </div>
        </div>
    )
}
