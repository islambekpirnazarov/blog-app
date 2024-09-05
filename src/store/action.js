import axios from "axios"

export function fetchingPost() {
    return {
        type : 'FETCHING_POST',
    }
}
export function fetchedPost(payload) {
    return {
        type : 'FETCHED_POST',
        payload
    }
}
export function fetchedPostError() {
    return {
        type : 'FETCHED_POST_ERROR',
    }
}
export function fetchingAuthor() {
    return {
        type : 'FETCHING_AUTHOR',
    }
}
export function fetchedAuthor(payload) {
    return {
        type : 'FETCHED_AUTHOR',
        payload
    }
}
export function fetchedAuthorError() {
    return {
        type : 'FETCHED_AUTHOR_ERROR',
    }
}
export function toggleSidebar() {
    return {
        type : 'TOGGLE_SIDEBAR'
    }
}
export function filterPost(payload) {
    return {
        type : 'FILTER_POSTS',
        payload
    }
}


export function fetchDataPost(url) {
    return async function fetchDataPost(dispatch) {
        dispatch(fetchingPost())
        try {
            const res = await axios.get(url)
            dispatch(fetchedPost(res.data))
        }catch(error) {
            console.log(error);
            dispatch(fetchedPostError())
        }
        
    }
}
export function fetchDataAuthor(url) {
    return async function fetchDataAuthor(dispatch) {
        dispatch(fetchingAuthor())
        try {
            const res = await axios.get(url)
            dispatch(fetchedAuthor(res.data))
        }catch(error) {
            console.log(error);
            dispatch(fetchedAuthorError())
        }
        
    }
}