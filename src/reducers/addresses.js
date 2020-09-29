function addresses(state={loading: false, data: []}, action) {
    switch(action.type) {
        case "LOADING_ADDRESSES":
            return {loading: true, data: [...state.data]};
        case "ADD_ADDRESS":
            return {loading: false, data: [...state.data, action.address]};
        case "ADD_ADDRESSES":
            return {loading: false, data: [...action.addresses]};
        case "LOGOUT": 
            return {loading: false, data: []}
        default:
            return state;
    }
}

export default addresses;