import React from 'react'
import './Profile.css'

export default function Profile(props) {
  const { currentUser } = props

  return (
    <div className="big-cont-pro">
      Profile
      <div className="head-cont-pro">
        <img className="profilepic-profile" src="https://www.pngkit.com/png/detail/281-2812821_user-account-management-logo-user-icon-png.png" width="110px" height="90px" alt="userIcon" />
        <div>
          {
            currentUser
              ? <li className="name-pro">{currentUser.username}</li>
              : <li className="name-pro">Your name</li>
          }
        </div>
      </div>
      <div className="mid-cont-pro">
        <li className="li-pro">Posts</li>
        <li className="li-pro">Following</li>
        <li className="li-pro">Followers</li>
      </div>
      <div className="mid2-cont-pro">
        <li className="li2-pro">0</li>
        <li className="li2-pro">0</li>
        <li className="li2-pro">0</li>
      </div>
    </div>
  )
}
