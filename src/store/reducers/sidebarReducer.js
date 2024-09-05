const initialState = {
    showSidebar : false
}

export function sidebarReducer(state = initialState, action) {
    switch(action.type) {
        case 'TOGGLE_SIDEBAR' : 
            return {
                ...state,
                showSidebar : state.showSidebar ? false : true
            }
        default : return state
    }
}