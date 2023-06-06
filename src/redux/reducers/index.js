

const initialState = {
    posts: [],
    users: [],
    userPage: {}
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_POSTS': {
            return {
                ...state,
                posts: [
                    // ...state.posts,
                    ...action.payload
                ]
            }
        }
        case 'SET_USERS': {
            return {
                ...state,
                users: [
                    // ...state.users,
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