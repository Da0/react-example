import { combineReducers } from 'redux';
import settings from './settings';
import list from './list';
import video from './video';

const rootReducer = combineReducers({
    settings,
    list,
    video
});

export default rootReducer;