import { take, takeLatest, put, call, fork } from 'redux-saga/effects'
import axios from 'axios';

// const wait = (t) => new Promise((resolve, reject) => {
//   setTimeout(resolve, t);  
// })
async function placeholderGet(pattern) {
    try {
        const {data} = await axios.get(`https://jsonplaceholder.typicode.com/${pattern}`)
        return data;
    } catch (error) {
        console.log(error);
    }
}
export function* loadPosts() {
    
}

export function* workerSaga() {
    const posts = yield call(placeholderGet, 'posts?_page=0')
    const users = yield call(placeholderGet, 'users')
    console.log('posts posts => ',posts, 'users => ', users);
    yield put({ type: 'SET_POSTS', payload: posts || [] })
    yield put({ type: 'SET_USERS', payload: users || [] })
}


export function* watchPostsSaga() {
    yield takeLatest('LOAD_POSTS', workerSaga)

}

export default function* rootSaga() {
    yield watchPostsSaga();
}