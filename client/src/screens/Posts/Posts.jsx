import React from 'react'
import { Link } from 'react-router-dom'
import './Posts.css'
//Icons
import { FcInspection } from "react-icons/fc";
import { TiDelete } from "react-icons/ti";

export default function Posts(props) {
  const { currentUser, posts, handleDelete } = props

  return (
    <div className="main-cont-posts">
      {
        posts.length ?
          posts.map((post) => (
            <div className="main-con-comm" key={post.id}>
              <div className="delete-edit-btns-posts">
                <TiDelete size="20px" color="white" onClick={() => handleDelete(post.id)}></TiDelete>
                <div className="delete-edit-btns2-posts2">
                  <Link to={`/posts/${post.id}/edit`}>
                    <FcInspection color="white" size="18px" />
                  </Link>
                </div>
              </div>
              <div className="header-comm">
                <div className="header-inner-comm">
                  <img src="https://www.pngkit.com/png/detail/281-2812821_user-account-management-logo-user-icon-png.png" width="50px" height="40px" alt="userIcon" className="img-post" />
                  <p className="p-comm">{currentUser.username}</p>
                </div>
                <div>
                  <p className="p-title-posts">Title: {post.title}</p>
                </div>
                <div className="post-tag-posts">
                  <p>#{post.tag.name}</p>
                </div>
              </div>
              {/* <hr className="hr-comm" /> */}
              <div className="comment-comm">
                {post.content}
              </div>
            </div>
          )) :
          <></>
      }
    </div>
  )
}
