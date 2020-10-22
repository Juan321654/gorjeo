import React from 'react'
import './Comments.css'

export default function Comments(props) {
    const { currentUser, getPostFromUser } = props
    return (
        <div className="main-con-comm">
            <div className="header-comm">
                <img src="https://www.pngkit.com/png/detail/281-2812821_user-account-management-logo-user-icon-png.png" width="50px" height="40px" alt="userIcon" />
                {
                    currentUser
                        ? <p className="p-comm">{currentUser.username}</p>
                        : <p className="p-comm">Your Name</p>
                }
                <p className="p2-comm">Software Engineer</p>
            </div>
            <hr className="hr-comm" />
            <div className="comment-comm">
                {/* {console.log(getPostFromUser(0))} */}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi laoreet purus id ipsum viverra, non hendrerit massa dapibus. Donec ipsum elit, porttitor a pellentesque non, pharetra eget est. Maecenas faucibus tincidunt sapien, id sollicitudin nisl feugiat sed.
            </div>
        </div>
    )
}
