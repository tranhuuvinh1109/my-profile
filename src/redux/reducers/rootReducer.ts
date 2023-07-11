import { combineReducers } from '@reduxjs/toolkit';
import active from './active';

const rootReducer = combineReducers({
	active: active
});

export default rootReducer;