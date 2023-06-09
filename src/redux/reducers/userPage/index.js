export const LOAD_USER_PAGE = 'LOAD_USER_PAGE'
export const LOAD_USER_PAGE_SUCCESS = 'LOAD_USER_PAGE_SUCCESS'
export const LOAD_USER_PAGE_FAILURE = 'LOAD_USER_PAGE_FAILURE'


const initialUserPageState = {
    data: {},
    loading: false,
    error: null,
}


export default function userPageReducer(state = initialUserPageState, action) {
    switch (action.type) {
        case LOAD_USER_PAGE: {
            return {
                ...state,
                    loading: true,
            }
        }
        case LOAD_USER_PAGE_SUCCESS: {
            return {
                ...state,
                data: action.payload,
                loading: false,
                error: null,
            }
        }
        case LOAD_USER_PAGE_FAILURE: {
            return {
                ...state,
                loading: false,
                error: true,
            }
        }

        default:
            return state;
    }
}