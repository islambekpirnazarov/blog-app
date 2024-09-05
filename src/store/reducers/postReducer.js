

const initialState = {
    posts: [],
    isPostLoad: false,
    filterPosts: []
}

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCHING_POST':
            return {
                ...state,
                isPostLoad: true
            }
        case 'FETCHED_POST':
            return {
                ...state,
                isPostLoad: false,
                posts: action.payload
            }
        case 'FETCHED_POST_ERROR':
            return {
                ...state,
                isPostLoad: false
            }
        case 'FILTER_POSTS':
            return {
                ...state,
                filterPosts : action.payload
            }
        default: return state
    }
}