import { call, all, spawn, take } from 'redux-saga/effects'
import { loadBasicData } from './initialSaga'
import pageDataSaga from './pageDataSaga'



export function* loadOnAction() {
    while (true){
        yield take('LOAD_POST_COMMENTS')

    }
}


export default function* rootSaga(payload) {
    yield all([
        spawn(loadBasicData),
        spawn(pageDataSaga)
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