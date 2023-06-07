import { call, all, spawn, takeEvery, take, fork } from 'redux-saga/effects'
import { loadBasicData } from './initialSaga'
import pageDataSaga from './pageDataSaga'



export function* loadOnAction() {
    while (true){
        yield take('LOAD_POST_COMMENTS')

    }
}


export default function* rootSaga(payload) {
    yield all([
        fork(loadBasicData),
        fork(pageDataSaga)
    ])
    
}



// const sagas = [loadBasicData, pageDataSaga]
// const retrySagas = sagas.map(saga => {
//     return spawn(function* () {
//         while (true) {
//             try {
//                 yield call(saga)
//                 break;
//             } catch (error) {
//                 console.error(error);
//             }

//         }
//     })
// })

// yield all(retrySagas)