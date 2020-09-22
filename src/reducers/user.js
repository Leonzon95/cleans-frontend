function user (state={isLoggedIn: false, user: {}}, action) {
    switch (action.type) {
        case "LOGIN":
            console.log("Youre loggged in")
            return {isLoggedIn: true, user: action.user};
        default: 
            return state;
    }
}

export default user;