import api from './api-config'

// const baseUrl = 'http://localhost:3000/posts'

export const getPosts = async () => {
    const resp = await api.get('/posts')
    console.log(resp)
    return resp.data
}


// export const getPost = async () => {
//     const resp = baseUrl
//     console.log(resp)
// }

// console.log(getPost())