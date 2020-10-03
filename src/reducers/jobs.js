function jobs(state={loading: true, data: []}, action) {
    switch(action.type) {
        case "LOADING_JOBS":
            return {loading: true, data: state.data}
        case "ADD_JOBS":
            return {loading: false, data: [...action.jobs]}
        case "ADD_JOB":
            return {loading: false, data: [...state.data, action.job]};
        case "APPLY_FOR_JOB":
            const jobs = state.data.map(job => {
                if (job.id === action.jobId) {
                    return {...job, applicants: [...job.applicants, action.user]}
                }
                return job;
            });
            return {loading: false, data: jobs}
        case "UPDATE_JOB":
            const jobss = state.data.map(job => {
                if (job.id === action.jobId) {
                    return action.job
                }
                return job;
            });
            return {loading: false, data: jobss}
        case "UPDATE_CLEANERS_RATING": 
            const jobsss = state.data.map(job => {
                if (job.hiredCleaner && job.hiredCleaner.id === action.user.id) job.hiredCleaner = action.user;
                job.applicants.map(applicant => {
                    if (applicant.id === action.user.id) return action.user;
                    return applicant;
                })
                return job
            });
            return {loading: false, data: jobsss}
        case "LOGOUT": 
            return {loading: false, data: []}
        default:
            return state;
    }
}

export default jobs;