import React from 'react'
import {StyledItem} from './styled'
const Item = ({onClick})=>{
    return(
        <StyledItem onClick={onClick}>
            <img src="" alt=""/>
        </StyledItem>
    )
}
export default Item;