export const SET_USERS = 'SET_USERS'

const initialState = {
    users: [],
}

export default function appReducer(state = initialState, action) {
    switch (action.type) {

        case SET_USERS: {
            return {
                ...state,
                users: [
                    ...action.payload
                ]
            }
        }

        default:
            return state
    }

}