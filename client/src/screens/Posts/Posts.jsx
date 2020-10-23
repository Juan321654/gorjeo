import React from 'react'
import './Posts.css'

export default function Posts(props) {
  const { currentUser, posts } = props

  return (
    <div>
      {
        posts.length ?
          posts.map((post) => (
            <div className="main-con-comm" key={post.id}>
              <div className="header-comm">
                <img src="https://www.pngkit.com/png/detail/281-2812821_user-account-management-logo-user-icon-png.png" width="50px" height="40px" alt="userIcon" />
                <p className="p-comm">{currentUser.username}</p>

                <p className="p2-comm">Software Engineer</p>
              </div>
              <hr className="hr-comm" />
              <div className="comment-comm">
                {post.content}
              </div>
            </div>
          )) :
          <h1>... Not Loading</h1>
      }
    </div>
  )
}
