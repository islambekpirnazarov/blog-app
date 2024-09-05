const initialState = {
    authors: [],
    isAuthorLoad: false
}

export const authorReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCHING_AUTHOR':
            return {
                ...state,
                isAuthorLoad: true
            }
        case 'FETCHED_AUTHOR':
            return {
                ...state,
                isAuthorLoad: false,
                authors: action.payload
            }
        case 'FETCHED_AUTHOR_ERROR':
            return {
                ...state,
                isAuthorLoad: false
            }
        default: return state
    }
}