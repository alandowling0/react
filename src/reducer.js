const defaultState = {
    users: [],
    selectedUser: -1
};

function reducer(state = defaultState, action) {    
    switch(action.type) {
        case "SET_USERS":
            state = {
                ...state,
                users: action.payload
            }
            break;
        case "SELECT_USER":
            state = {
                ...state,
                selectedUser: action.payload
            }
            break;
        default:
            return state;
    }
    
    return state;
}

export default reducer;