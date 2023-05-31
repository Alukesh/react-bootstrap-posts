import axios from "axios"

const API_BASE_URL = 'https://jsonplaceholder.typicode.com'

const instanse = axios.create({
    baseURL: API_BASE_URL
})


export const getAllPosts = async () => {
    try {
        const {data} = await instanse.get('/posts?_page=0&_limit=9')
        // console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
}
export const getAllUsers = async () => {
    try {
        const {data} = await instanse.get('/users')
        return data;
    } catch (error) {
        console.log(error);
    }
}