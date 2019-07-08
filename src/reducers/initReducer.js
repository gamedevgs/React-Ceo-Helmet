import { combineReducers } from "redux";
import HomeReducer from './HomeReducer';
import DetailReducer from './DetailReducer';

const initReducer = combineReducers({
    home: HomeReducer,
    detail: DetailReducer
});

export default initReducer;