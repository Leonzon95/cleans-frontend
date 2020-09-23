import { combineReducers } from 'redux';
import user from './user';
import jobs from './jobs'

const rootReducer = combineReducers({
    user,
    jobs
});

export default rootReducer