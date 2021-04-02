import React from 'react'
import {StyledModal, StyleModalWrapper} from './styled'

const Modal = ({visible,onClick})=>{
    return(
        <StyleModalWrapper visible={visible} onClick={onClick}>
            <StyledModal>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam suscipit labore aliquid necessitatibus quae maiores ducimus dolorem, fugit voluptatem veritatis.
            </StyledModal>
        </StyleModalWrapper>
    )
}
export default Modal;