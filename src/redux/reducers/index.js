import { LOAD_POSTS, LOAD_POSTS_SUCCESS } from './posts/actions';


const initialState = {
    users: [],
    userPage: {}
}

export default function appReducer(state = initialState, action) {
    switch (action.type) {

        case 'SET_USERS': {
            return {
                ...state,
                users: [
                    ...action.payload
                ]
            }
        }
        case 'LOADED_USER_PAGE': {
            return {
                ...state,
                userPage: {
                    ...action.payload
                }
            }
        }

        default:
            return state
    }

}