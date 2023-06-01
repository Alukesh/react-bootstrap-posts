import { take, takeLatest, put, call, fork, takeEvery, all } from 'redux-saga/effects'
import axios from 'axios';


async function placeholderGet(pattern = '') {
    try {
        const {data} = await axios.get(`https://jsonplaceholder.typicode.com/${pattern}`)
        return data;
    } catch (error) {
        console.log(error);
    }
}

export function* loadPosts() {
    const posts = yield call(placeholderGet, 'posts?_page=0&_limit=9')
    yield put({ type: 'SET_POSTS', payload: posts || [] })    
    console.log('got posts from api');
}

export function* loadUsers() {
    const users = yield call(placeholderGet, 'users')
    yield put({ type: 'SET_USERS', payload: users || [] })
}


export function* workerSaga() {
    yield fork(loadPosts)
    yield fork(loadUsers)
}

export function* watchLoadDataSaga() {
    yield takeLatest('LOAD_POSTS', workerSaga)
    yield takeLatest('CHANGE_POSTS_PAGE', loadPosts)
}

export function saga1() {
    console.log('saga1');
}
export function saga2() {
    console.log('saga2');
}
export function saga3() {
    console.log('saga3');
}

export default function* rootSaga() {
    yield fork(watchLoadDataSaga);

    //wise
    yield all([
        fork(saga1), // auth
        fork(saga2), // users
        fork(saga3), // payment
    ])
}