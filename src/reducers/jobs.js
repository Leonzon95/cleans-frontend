function jobs(state=[], action) {
    switch(action.type) {
        case "ADD_JOB":
            return [...state, action.job];
        default:
            return state;
    }
}

export default jobs;