function jobs(state={loading: true, data: []}, action) {
    switch(action.type) {
        case "LOADING_JOBS":
            return {loading: true, data: state.data}
        case "ADD_JOBS":
            console.log(action.jobs)
            return {loading: false, data: [...action.jobs]}
        case "ADD_JOB":
            return {loading: false, data: [...state.data, action.job]};
        case "APPLY_FOR_JOB":
            const jobs = state.data.map(job => {
                if (job.id === action.jobId) {
                    return {...job, applicants: [...job.applicants, action.user]}
                }
            });
        case "LOGOUT": 
            return {loading: false, data: []}
        default:
            return state;
    }
}

export default jobs;