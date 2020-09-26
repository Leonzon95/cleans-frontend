function jobs(state={loading: true, data: []}, action) {
    switch(action.type) {
        case "LOADING_JOBS":
            return {loading: true, data: state.data}
        case "ADD_JOBS":
            return {loading: false, data: [...action.jobs]}
        case "ADD_JOB":
            return {loading: false, data: [...state.data, action.job]};
        default:
            return state;
    }
}

export default jobs;