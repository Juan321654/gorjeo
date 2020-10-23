import React, { useEffect, useState } from 'react'
import { getTags } from '../../services/post';
import { useParams } from 'react-router-dom';

export default function EditPost(props) {
  const { currentUser, posts, handleUpdate } = props
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

  const { id } = useParams();

  useEffect(() => {
    const prefillData = () => {
      const postData = posts.find(post => post.id === parseInt(id))
      const { title, content, tag_id } = postData
      setUserInput({ title, content, tag_id })
    }
    if (posts.length) {
      prefillData()
    }
  }, [posts, id])

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
              handleUpdate(id, userInput)
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
              <select defaultValue="default" name="tag_id" onChange={handleChange}>
                <option value="default" disabled>--Select a tag--</option>
                {tags.map(tag => (
                  <option value={tag.id}>{tag.name}</option>
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
