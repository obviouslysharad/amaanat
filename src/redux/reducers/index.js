import {combineReducers} from 'redux';
import { accountReducer } from './accountReducer';

const reducers = combineReducers({
    allAccounts: accountReducer,
});

export default reducers;