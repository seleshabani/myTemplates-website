import React from 'react'
import { API_PUBLIC_ROUTE } from '../../config';
import {StyledItem} from './styled'
const Item = ({onClick,name,link,img,id})=>{
    return(
        <StyledItem onClick={onClick}>
            <img src={`${API_PUBLIC_ROUTE}${img}`} alt=""/>
        </StyledItem>
    )
}
export default Item;