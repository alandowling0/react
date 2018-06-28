const defaultState = {
    users: [],
    selectedUser: {
        name: "",
        points: 0,
        image: window.location.origin + "/face.jpg"
    },
    searchText: "",
    searchResultsPage: 1,
    searchResultsPageCount: 1,
    loginCredentials: {
        username: "",
        password: ""
    }
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
        case "SET_SEARCH_TEXT":
            state = {
                ...state,
                searchText: action.payload
            }
            break;
        case "SET_SEARCH_RESULTS_PAGE":
            state = {
                ...state,
                searchResultsPage: action.payload
            }
            break;
        case "SET_SEARCH_RESULTS_PAGE_COUNT":
            state = {
                ...state,
                searchResultsPageCount: action.payload
            }
            break;
        case "SET_LOGIN_CREDENTIALS":
            state = {
                ...state,
                loginCredentials: action.payload
            }
            break;
        case "LOGOUT":
            state = defaultState;
            break;
        default:
            return state;
    }
    
    return state;
}

export default reducer;