function user (state={isLoggedIn: false, user: {}}, action) {
    switch (action.type) {
        case "LOGIN":
            return {isLoggedIn: true, user: action.user};
        case "LOGOUT":
            return {isLoggedIn: false, user: {}};
        case "UPDATE_USER":
            return {isLoggedIn: true, user: action.user};
        default: 
            return state;
    }
}

export default user;