import {combineReducers} from 'redux'
import itemReducer from './item';
import oneItemReducer from './item/oneItemReducer';

const RootReducer = combineReducers({
    itemReducer:itemReducer,
    oneItemReducer:oneItemReducer
});
export default RootReducer;