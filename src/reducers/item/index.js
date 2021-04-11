import { defaultState } from "./defaulState";
import { FETCH_ITEMS, FETCH_ITEMS_ERROR } from "./type";

const itemReducer = (state=defaultState,action)=>{
    switch (action.type) {
        case FETCH_ITEMS:
            return {...action.payload}
        case FETCH_ITEMS_ERROR:
            return {msg:'Une erreur est survenue',payload:action.payload}
        default:
            return state;
    }
}
export default itemReducer;