import React, { useState } from 'react';
import { createPost } from '../../services/post'
import './Posts.css';

export default function Posts(props) {
    const { currentUser } = props
    const [userInput, setUserInput] = useState({
        content: "",
        title: ""
    })

    function handleChange(evt) {
        const value = evt.target.value;
        setUserInput({
            ...userInput,
            [evt.target.name]: value
        });
    }

    const handleSubmit = async (formData) => {
        const created = await createPost(formData);
        setUserInput({ created });
    }


    return (
        <div>
            {currentUser
                ? <div className="cont-post">
                    <div className="cont2-post">
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
