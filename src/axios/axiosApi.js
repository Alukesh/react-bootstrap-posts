import axios from "axios"

const API_BASE_URL = 'https://jsonplaceholder.typicode.com'

const instanse = axios.create({
    baseURL: API_BASE_URL
})




export async function apiPlaceholderGet(pattern = '') {
    try {
        const {data} = await axios.get(`https://jsonplaceholder.typicode.com/${pattern}`)
        return data;
    } catch (error) {
        console.log(error);
    }
}