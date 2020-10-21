import React from 'react';
import './Posts.css';

export default function Posts() {
    return (
        <div className="cont-post">
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
                </form>
            </div>
        </div>
    )
}
