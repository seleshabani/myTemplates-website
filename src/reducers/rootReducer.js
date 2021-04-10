import {combineReducers} from 'redux'
import itemReducer from './item';
import oneItemReducer from './item/oneItemReducer';
import likeReducer from './like';

const RootReducer = combineReducers({
    itemReducer:itemReducer,
    oneItemReducer:oneItemReducer,
    likeReducer:likeReducer
});
export default RootReducer;