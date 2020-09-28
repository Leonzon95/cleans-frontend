import axios from 'axios'

export const addJob = (job) => ( { type: "ADD_JOB", job: job } );

export const fetchJobs = (userId) => {
    return dispatch => {
        dispatch({ type: 'LOADING_JOBS'})
        axios.get(`http://localhost:3001/users/${userId}/jobs` ,{withCredentials: true})
        .then(response => {
            dispatch({type: "ADD_JOBS", jobs: response.data.jobs});
          })
        .catch(error => console.log('api errors:', error));
    }
}

export const fetchAllJobs = () => {
    return dispatch => {
        dispatch({ type: 'LOADING_JOBS'})
        axios.get(`http://localhost:3001/jobs` ,{withCredentials: true})
        .then(response => {
            dispatch({type: "ADD_JOBS", jobs: response.data.jobs});
          })
        .catch(error => console.log('api errors:', error));
    }
}

export const applyToJob = (userId ,jobId) => {
    return dispatch => {
        axios.post(`http://localhost:3001/users/${userId}/applications`,{job_id: jobId} , {withCredentials: true})
        .then(response => {
            dispatch({type: "APPLY_FOR_JOB", jobId, user: response.data.user });
          })
        .catch(error => console.log('api errors:', error));
    }
}

