import { call, all, spawn, take } from 'redux-saga/effects'
import { loadBasicData } from './initialSaga'
import userPageDataSaga from './userPageDataSaga' 





export default function* rootSaga(payload) {
    yield all([
        spawn(loadBasicData),
        spawn(userPageDataSaga)
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