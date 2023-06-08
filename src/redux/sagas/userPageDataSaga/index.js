import { call, delay, fork, put, take, takeEvery } from "redux-saga/effects";
import { apiPlaceholderGet } from "../../../axios/axiosApi";
import { LOCATION_CHANGE } from "redux-first-history";
import { matchPath } from "react-router";
import { USER_DETAILS_ROUTE, getRouteConfig } from "../../../App";


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

    if (matchPath(getRouteConfig( USER_DETAILS_ROUTE ), pageRoute)) {
      yield put({ type: 'LOADED_USER_PAGE', payload: {} })
      yield fork(
        loadUserData,
        pageRoute.split('/') // передаю айди из /user/:id
        )
        
      }
      //вместо > pageRoute?.includes('/user/') 
      /* попробую использовать метод matchPath из react-router
       который должен проверисть сходство текущего адреса с user/:id для того
       случая если создастся роут с путем /user/comments или /user/***  
       то этот код не будет учавствовать в процессах */
  }
  
}
/* console.log(matchPath(pageRoute, getRouteConfig(USER_DETAILS_ROUTE)));
 в react-router v6 аргументы поменяли местами и паттерн выдается первым, а адрес вторым. 
 я был в шоке почему ничего не работало!) */