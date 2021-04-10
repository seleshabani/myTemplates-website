import axios from "axios"
import { API_ROUTE } from "../../config"
import { ADD_LIKE } from "../../reducers/like/type";

export const addLike = (itemID) => async dispatch => {

    try {
        let data = new URLSearchParams();
        data.append('itemId', itemID)
        let like = await axios.post(`${API_ROUTE}likes`, data);
        dispatch({
            type: ADD_LIKE,
            payload: {
                isLiked: true,
                color: 'tomato',
                likeInfo: like.data
            }
        })
    } catch (error) {
        console.log(error);
    }
}

export const deleteLike = (itemID) => async dispatch => {
    try {
        let like = await axios.get(`${API_ROUTE}likes/${itemID}`);
        dispatch({
            type: ADD_LIKE,
            payload: {
                isLiked: false,
                color: 'whitesmoke',
                likeInfo: like.data
            }
        })
    } catch (error) {
        console.log(error);
    }
}
export const verifLike = (itemID) => async dispatch => {

    try{
        let isVerified = await axios.get(`${API_ROUTE}likes/${itemID}/isliked`);
        dispatch({
            type: ADD_LIKE,
            payload: {
                isLiked: isVerified.data,
                color: (isVerified.data === true)?'tomato':'whitesmoke'
            }
        })
    }catch(error){
        console.log(error);
    }
}