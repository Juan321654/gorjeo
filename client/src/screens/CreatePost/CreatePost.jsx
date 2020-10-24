import React, { useEffect, useState } from 'react';
import { getTags } from '../../services/post';
import './CreatePost.css';

export default function CreatePost(props) {
  const { currentUser, handlePostCreate } = props
  const [userInput, setUserInput] = useState({
    title: "",
    content: "",
    tag_id: 1,
  })

  const [tags, setTags] = useState([]);

  useEffect(() => {
    const fetchTags = async () => {
      const tagList = await getTags()
      setTags(tagList)
    }
    fetchTags()
  }, [])

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
                className="title-form-create-post"
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
              <select
                className="drop-down-create-post"
                defaultValue="default"
                name="tag_id"
                onChange={handleChange}
              >
                <option value="default" disabled>--Select a tag--</option>
                {tags.map(tag => (
                  <option value={tag.id} key={tag.id}>{tag.name}</option>
                ))}
              </select>
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
