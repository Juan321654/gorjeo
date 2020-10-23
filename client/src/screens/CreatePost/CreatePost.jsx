import React, { useState } from 'react';
import './CreatePost.css';

export default function CreatePost(props) {
    const { currentUser, handlePostCreate } = props
    const [userInput, setUserInput] = useState({
        title: "",
        content: "",
        tag_id: 1,
    })

    function handleChange(evt) {
        const { value, name } = evt.target
        setUserInput(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    return (
        <div>
            {currentUser
                ? <div className="cont-post">
                    <div className="cont2-post">
                        {/* {console.log(currentUser)} */}
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            handlePostCreate(userInput)
                        }}>
                            <input
                                type="text"
                                value={userInput.title}
                                name="title"
                                placeholder="Write a title"
                                onChange={handleChange}
                            ></input>
                            <label>
                                <textarea
                                    type="text"
                                    value={userInput.content}
                                    name="content"
                                    className="form-post"
                                    placeholder="Write something"
                                    onChange={handleChange}
                                />
                            </label>
                            {/* <select>
                                <option value="1">Games</option>
                                <option value="2">Travel</option>
                                <option value="3">Music</option>
                            </select> */}
                            <button
                                className="btn-post"
                            >post</button>
                        </form>
                    </div>
                </div>
                : null}
        </div>
    )
}
