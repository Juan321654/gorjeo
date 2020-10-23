import React, { useState } from 'react';
import { createPost } from '../../services/post'
import './CreatePost.css';

export default function CreatePost(props) {
    const { currentUser } = props
    const [userInput, setUserInput] = useState({
        title: "",
        content: "",
        tag_id: 1,
        user_id: currentUser && currentUser.id
    })

    function handleChange(evt) {
        const value = evt.target.value;
        setUserInput({
            ...userInput,
            [evt.target.name]: value
        });
    }

    const handleSubmit = async (formData) => {
        console.log(formData)
        const created = await createPost(formData);
        setUserInput({ created });
    }


    return (
        <div>
            {currentUser
                ? <div className="cont-post">
                    <div className="cont2-post">
                        {/* {console.log(currentUser)} */}
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            handleSubmit(userInput)
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
