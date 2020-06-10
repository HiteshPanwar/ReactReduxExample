
import { combineReducers } from 'redux';

// Imports: Reducers

import itemReducer from './itemReducer';

// Redux: Root Reducer
const rootReducer = combineReducers({
    itemReducer: itemReducer,
});

export default rootReducer;