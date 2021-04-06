import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useEffect } from 'react/cjs/react.development'
import { getOneItem } from '../../actions/item'
import { API_PUBLIC_ROUTE } from '../../config'
import {StyledIconeMediaWrapper, StyledModal, StyledModalImageAndSocialWrapper, StyledModalImageWrapper, StyledModalTitle, StyledSocialModalWrapper, StyleModalWrapper} from './styled'

const Modal = ({visible,onClick,id})=>{
    const dispatch = useDispatch();
    const itemReducer = useSelector(state=>state.oneItemReducer);
    const [heartIconeColor,setHeartIconeColor] = useState('whitesmoke');

    useEffect(()=>{
        dispatch(getOneItem(id))
    },[id]);

    const switchHeartIconeColor = ()=>{
        if (heartIconeColor==='whitesmoke') {
            setHeartIconeColor('tomato')
        }else{
            setHeartIconeColor('whitesmoke');
        }
    }
    return(
        <StyleModalWrapper visible={visible} >
            <StyledModal>
                <StyledModalTitle>
                    <h1>{itemReducer.name}</h1>
                    <StyledIconeMediaWrapper onClick={onClick}>
                        X
                    </StyledIconeMediaWrapper>
                </StyledModalTitle>
                <h2><a href={itemReducer.linkPreview} target="_blank" rel="noopener noreferrer">Live Preview</a></h2>
                <StyledModalImageAndSocialWrapper>
                    <StyledModalImageWrapper>
                        <Link to={`/templates/${itemReducer._id}`}>
                            <img src={`${API_PUBLIC_ROUTE}${itemReducer.screen}`} alt={`capture d'écran ${itemReducer.name}`}/>
                        </Link>
                    </StyledModalImageWrapper>
                    <StyledSocialModalWrapper>
                        <StyledIconeMediaWrapper color={heartIconeColor} onClick={switchHeartIconeColor}>
                            <i className="fa fa-heart"></i>
                        </StyledIconeMediaWrapper>
                    </StyledSocialModalWrapper>
                </StyledModalImageAndSocialWrapper>
            </StyledModal>
        </StyleModalWrapper>
    )
}
export default Modal;