import api from './api-config'

export const getPosts = async (id) => {
  const resp = await api.get(`/posts`)
  return resp.data
}

export const createPost = async (postData) => {
  const resp = await api.post('/posts', { post: postData })
  return resp.data
}

export const deletePost = async id => {
  try {
    await api.delete(`/posts/${id}`)
  } catch (error) {
    throw error
  }
}

export const updatePost = async (id, postData) => {
  const resp = await api.put(`/posts/${id}`, { post: postData })
  return resp.data
}

export const getTags = async () => {
  const resp = await api.get(`/tags`)
  return resp.data
}