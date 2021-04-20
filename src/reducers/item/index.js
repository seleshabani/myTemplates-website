import { defaultState } from "./defaulState";
import { FETCH_ITEMS, FETCH_ITEMS_ERROR,ITEMS_ISLOADING, ITEMS_LOADED } from "./type";

const itemReducer = (state=defaultState,action)=>{
    switch (action.type) {
        case ITEMS_ISLOADING:
            return {isLoading:true};
        case ITEMS_LOADED:
            return {...action.payload,isLoading:false}
        case FETCH_ITEMS:
            return {...action.payload,isLoading:false}
        case FETCH_ITEMS_ERROR:
            return {msg:'Une erreur est survenue',payload:action.payload}
        default:
            return state;
    }
}
export default itemReducer;