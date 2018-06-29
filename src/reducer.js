const defaultState = {
    loginCredentials: {
        username: "",
        password: ""
    },

    searchText: "",
    
    searchResult: {
        users: [],
        pageCount: 0
    },
    
    page: 1,
};

function reducer(state = defaultState, action) {    
    switch(action.type) {
        case "LOGIN":
            state = {
                ...state,
                loginCredentials: action.payload
            }
            break;
        case "LOGOUT":
            state = defaultState;
            break;
        case "SET_SEARCH_TEXT":
            state = {
                ...state,
                searchText: action.payload
            }
            break;
        case "SET_SEARCH_RESULT":
            state = {
                ...state,
                searchResult: action.payload
            }
            break;
        case "SET_PAGE":
            state = {
                ...state,
                page: action.payload
            }
            break;
        default:
            return state;
    }
    
    return state;
}

export default reducer;