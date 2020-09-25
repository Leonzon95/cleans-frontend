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