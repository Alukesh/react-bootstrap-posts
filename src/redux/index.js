import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from 'redux-saga'
import { createReduxHistoryContext } from "redux-first-history";
import { createBrowserHistory } from "history";
import reducer from "./reducers";
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware({})

const {
    createReduxHistory,
    routerMiddleware,
    routerReducer
} = createReduxHistoryContext({ history: createBrowserHistory() })

export const store = createStore(
    combineReducers({
        router: routerReducer,
        app: reducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
        applyMiddleware(sagaMiddleware),
        applyMiddleware(routerMiddleware)
    )
)

sagaMiddleware.run(rootSaga)

export const history = createReduxHistory(store);