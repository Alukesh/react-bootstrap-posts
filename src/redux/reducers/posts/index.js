import { LOAD_POSTS, LOAD_POSTS_FAILURE, LOAD_POSTS_SUCCESS } from "./actions";

const initialPostsState = {
    page: 0,
    search: '',
    loading: false,
    error: false,
    data: []
}

export default function postsReducer(state = initialPostsState, action) {
    switch (action.type) {
        case LOAD_POSTS: {
            const { page, search } = action.payload;
            return {
                ...state,
                loading: true,
                page,
                search,
            }
        }

        case LOAD_POSTS_SUCCESS: {
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        }
        
        case LOAD_POSTS_FAILURE: {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        }

        default:
            return state;
    }
}