import { call, delay, fork, put, select, take, takeEvery } from 'redux-saga/effects';
import { apiPlaceholderGet } from '../../../axios/axiosApi';
import { LOAD_POSTS, LOAD_POSTS_SUCCESS } from '../../reducers/posts/actions'; 
import { LOCATION_CHANGE } from 'redux-first-history';



export function* loadUsers() {
    const users = yield call(apiPlaceholderGet, 'users')
    yield put({ type: 'SET_USERS', payload: users || [] })
}


export function*  loadPostsOnAction({payload}) {
    const {page, search} = payload;
    yield delay(500)
    
    const posts = yield call(apiPlaceholderGet, `posts?_page=${page}&_limit=9&title_like=${search}`)
    
    yield put({ type: LOAD_POSTS_SUCCESS, payload: posts || [] })    
    console.log('load new posts');
    
}

export function* loadPostsOnRoutEnter() {
    while (true){
        const action = yield take(LOCATION_CHANGE)

        const state = yield select(s => s.posts)
        const {page, search } = state;
        yield put({
            type: LOAD_POSTS,
            payload: {
                page, search
            }
        })
        console.log('got posts from api');
    }
}




export function* loadBasicData() {
    yield takeEvery(LOAD_POSTS, loadPostsOnAction)
    yield fork(loadUsers)
    yield fork(loadPostsOnRoutEnter)
}