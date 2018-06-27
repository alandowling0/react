const defaultState = {
    users: []
};

function reducer(state = defaultState, action) {    
    switch(action.type) {
        case "SET_USERS":
            state = {
                ...state,
                users: action.payload
            }
            break;
        default:
            return state;
    }
    
    return state;
}

export default reducer;