import axios from 'axios';
import { API_ROUTE } from '../../config';
import { FETCH_ITEMS, FETCH_ITEMS_ERROR, FETCH_ONE_ITEM, ITEMS_ISLOADING, ITEMS_LOADED } from '../../reducers/item/type';

export const getAllItems = (pagination) => async dispatch => {
    try {
        dispatch({
            type:ITEMS_ISLOADING
        })
        await axios.get(`${API_ROUTE}items?page=${pagination.page}&limit=6`).then(items=>{
            dispatch({
                type:ITEMS_LOADED,
                payload:items.data
            })
        })
    } catch (error) {
        console.log(error)
        dispatch({
            type: FETCH_ITEMS_ERROR,
            payload: error
        })
    }
}
export const getOneItem = (id) => async dispatch => {
    try {
        const item = await axios.get(API_ROUTE + `items/${id}`);
        dispatch({
            type: FETCH_ONE_ITEM,
            payload: item.data
        })
    } catch (error) {
        console.log(error)
        dispatch({
            type: FETCH_ITEMS_ERROR,
            payload: error
        })
    }
}
export const searchItems = (query,pagination) => async dispatch => {
    try {
        const items = await axios.get(API_ROUTE + `items/search/${query}?page=${pagination.page}&limit=${pagination.limit}`);
        dispatch({
            type: FETCH_ITEMS,
            payload: items.data
        })
    } catch (error) {
        console.log(error)
    }
}
