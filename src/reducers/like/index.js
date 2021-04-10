import {defaultLikeState} from './defaultState';
import { ADD_LIKE, DELETE_LIKE } from './type';

const likeReducer = (state = defaultLikeState,actions)=>{

    switch (actions.type) {
        case ADD_LIKE:
            return {...actions.payload}
        case DELETE_LIKE:
            return {...actions.payload}
        default:
            return state;
    }
}
export default likeReducer;