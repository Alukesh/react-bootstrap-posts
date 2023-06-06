import { call, all, spawn, takeEvery, take } from 'redux-saga/effects'
import { loadBasicData } from './initialSaga'
import pageDataSaga, { changeLocation } from './pageDataSaga'



export function* loadOnAction() {
    while (true){
        yield take('LOAD_POST_COMMENTS')

        const data = yield call('')
    }
}


export default function* rootSaga(payload) {
    const sagas = [loadBasicData, pageDataSaga]


    const retrySagas = sagas.map(saga => {
        return spawn(function* () {
            while (true) {
                try {
                    yield call(saga)
                    break;
                } catch (error) {
                    console.error(error);
                }

            }
        })
    })

    yield all(retrySagas)
}