import React, { useState } from 'react';
import { createPost } from '../../services/post'
import './Posts.css';

export default function Posts(props) {
    const { currentUser } = props
    const [userInput, setUserInput] = useState({
        userText: ""
    })

    function handleChange(evt) {
        const value = evt.target.value;
        setUserInput({
            ...userInput,
            [evt.target.name]: value
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const created = await createPost(userInput);
        setUserInput({ created });
    }


    return (
        <div>
            {currentUser
                ? <div className="cont-post">
                    <div className="cont2-post">
                        <form >
                            <label>
                                <textarea
                                    type="text"
                                    value={userInput.userText}
                                    name="userText"
                                    className="form-post"
                                    placeholder="Write something"
                                    onChange={handleChange}
                                />
                            </label>
                            <button
                                className="btn-post"
                                onSubmit={handleSubmit}
                            >post</button>
                        </form>
                    </div>
                </div>
                : null}
        </div>
    )
}
