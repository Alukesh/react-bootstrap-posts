import axios from 'axios';
import { call, delay, fork, put, takeEvery } from 'redux-saga/effects';
import { apiPlaceholderGet } from '../../../axios/axiosApi';
import { LOAD_POSTS, LOAD_POSTS_SUCCESS } from '../../reducers/posts/actions'; 




export function* loadPosts() {
    yield delay(500)
    
    const posts = yield call(apiPlaceholderGet, 'posts?_page=0&_limit=9&title_like=')

    yield put({ type: LOAD_POSTS_SUCCESS, payload: posts || [] })    
    console.log('got posts from api');
    
}

export function* loadUsers() {
    const users = yield call(apiPlaceholderGet, 'users')
    yield put({ type: 'SET_USERS', payload: users || [] })
}

export function* loadPostsOnAction(payload) {
    // const page = payload?.page , search  = payload?.search
    // console.log('page = ',page, 'search = ', search);

}

export function* loadBasicData() {
    // takeEvery(LOAD_POSTS, loadPosts)
    yield fork(loadPosts)
    yield fork(loadUsers)
}