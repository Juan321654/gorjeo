import React, { useEffect, useState } from 'react'
import { getPosts } from '../../services/post'
import './Posts.css'

export default function Posts(props) {
    const { currentUser } = props
    // const { currentUser, allPosts } = props
    const [userPosts, setUserPosts] = useState()
    const [isLoaded, setLoaded] = useState(false);


    useEffect(() => {
        const getPostFromUser = async () => {
            const resp = await getPosts();
            console.log(resp)
            setUserPosts(resp);
            setLoaded(true);
        }
        getPostFromUser()
    }, [])


    if (!isLoaded) {
        return <h1>... Not Loading</h1>
    }

    console.log(userPosts)
    // const mappedPosts = userPosts.map((e) => e)
    // const mappedPosts = userPosts.map((post, idx) => {
    //     return (
    //         <div key={idx}>
    //             <div>
    //                 {post[0].content}
    //             </div>
    //         </div>
    //     )
    // })
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
                {/* {mappedPosts} */}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi laoreet purus id ipsum viverra, non hendrerit massa dapibus. Donec ipsum elit, porttitor a pellentesque non, pharetra eget est. Maecenas faucibus tincidunt sapien, id sollicitudin nisl feugiat sed.
            </div>
        </div>
    )
}
