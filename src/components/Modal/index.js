import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react/cjs/react.development'
import { getOneItem } from '../../actions/item'
import {StyledModal, StyleModalWrapper} from './styled'

const Modal = ({visible,onClick,id})=>{
    const dispatch = useDispatch();
    const itemReducer = useSelector(state=>state.oneItemReducer);

    useEffect(()=>{
        dispatch(getOneItem(id))
    },[id]);

    return(
        <StyleModalWrapper visible={visible} onClick={onClick}>
            <StyledModal>
                <h1>{itemReducer.name}</h1>
            </StyledModal>
        </StyleModalWrapper>
    )
}
export default Modal;