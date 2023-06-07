import { call, delay, fork, put, take, takeEvery } from "redux-saga/effects";
import { apiPlaceholderGet } from "../../../axios/axiosApi";
import { LOCATION_CHANGE } from "redux-first-history";


function* loadUserData(userId) {
  yield delay(500)
  const request = yield call(apiPlaceholderGet, `users/${userId[2]}/posts`)
  const userInfo = yield call(apiPlaceholderGet, `users/${userId[2]}`)

  console.log('Saga got user data', userId[2], request);
  yield put({ type: 'LOADED_USER_PAGE', payload: { ...userInfo, posts: request } })
}



export default function* pageDataSaga() {
  while (true) {

    const action = yield take(LOCATION_CHANGE);
    const pageRoute = action?.payload?.location?.pathname


    if (pageRoute?.includes('/user')) {
      yield fork(
        loadUserData,
        pageRoute.split('/')
      )
      console.log('payload page root', action.payload);
    }
  }

}