import React from 'react';
import './Posts.css';

export default function Posts(props) {
    const { currentUser } = props
    return (
        <div>
            {currentUser
                ? <div className="cont-post">
                    <div className="cont2-post">
                        <form >
                            <label>
                                <textarea
                                    type="text"
                                    // value={username}
                                    name="username"
                                    className="form-post"
                                    placeholder="Write something"
                                // onChange={handleChange}
                                />
                            </label>
                            <button className="btn-post">post</button>
                        </form>
                    </div>
                </div>
                : null}
        </div>
    )
}
