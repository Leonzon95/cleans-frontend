import { combineReducers } from 'redux';
import user from './user';
import jobs from './jobs'
import addresses from './addresses'

const rootReducer = combineReducers({
    
    user,
    jobs,
    addresses
});

export default rootReducer