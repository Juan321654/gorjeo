import api from './api-config'

// const baseUrl = 'http://localhost:3000/posts'

export const getPosts = async (id) => {
    // const resp = await api.get(`/posts/${id}`)
    const resp = await api.get(`/posts`)
    console.log(resp.data)
    return resp.data
}

export const createPost = async (postData) => {
    const resp = await api.post('/posts', { post: postData })
    return resp.data
}

export const deletePost = async id => {
    try {
        // const response = await api.delete(`/products/${id}`)
        const response = await api.delete(`/products`)
        return response.data
    } catch (error) {
        throw error
    }
}