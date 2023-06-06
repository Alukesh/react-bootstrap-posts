import axios from 'axios';
import { call, delay, fork, put } from 'redux-saga/effects';
import { apiPlaceholderGet } from '../../../axios/axiosApi';



// const wait = () => new Promise((resolve, reject) => {
//     setTimeout(resolve, 500);
// })

export function* loadPosts() {
    yield delay(500)
    
    const posts = yield call(apiPlaceholderGet, 'posts?_page=0&_limit=9')
    yield put({ type: 'SET_POSTS', payload: posts || [] })    
    console.log('got posts from api');
    
}

export function* loadUsers() {
    const users = yield call(apiPlaceholderGet, 'users')
    yield put({ type: 'SET_USERS', payload: users || [] })
}



export function* loadBasicData() {
    yield fork(loadPosts)
    yield fork(loadUsers)
}