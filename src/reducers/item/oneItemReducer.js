import { oneItemDefaultState } from "./defaulState";
import { FETCH_ONE_ITEM } from "./type";

const oneItemReducer = (state=oneItemDefaultState,action)=>{
    switch (action.type) {
        case FETCH_ONE_ITEM:
            return {...action.payload}
        default:
            return state;
    }
}
export default oneItemReducer;