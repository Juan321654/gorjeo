import React from 'react'
import { Link } from 'react-router-dom'
import './Posts.css'
//Icons
import { RiDeleteBin2Line } from "react-icons/ri";
import { GrEdit } from "react-icons/gr";

export default function Posts(props) {
  const { currentUser, posts, handleDelete } = props


  return (
    <div>
      {
        posts.length ?
          posts.map((post) => (
            <div className="main-con-comm" key={post.id}>
              <div className="header-comm">
                <img src="https://www.pngkit.com/png/detail/281-2812821_user-account-management-logo-user-icon-png.png" width="50px" height="40px" alt="userIcon" />
                <p className="p-comm">{currentUser.username}</p>
                <RiDeleteBin2Line size="15px" onClick={() => handleDelete(post.id)}></RiDeleteBin2Line>
                <Link to={`/posts/${post.id}/edit`}><GrEdit size="12px" /></Link>
              </div>
              <hr className="hr-comm" />
              <div className="comment-comm">
                {post.content}
              </div>
              <p>{post.tag.name}</p>
            </div>
          )) :
          <></>
        // <h3>... No Posts to display</h3>
      }
    </div>
  )
}
