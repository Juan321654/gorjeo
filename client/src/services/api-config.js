import axios from 'axios';

// const baseUrl = 'http://localhost:3000'
const baseUrl = process.env.NODE_ENV === 'production' ? 'https://git.heroku.com/gorjeo-api.git' : 'http://localhost:3000'

// https://git.heroku.com/gorjeo-api.git
const api = axios.create({
    baseURL: baseUrl
})

export default api;