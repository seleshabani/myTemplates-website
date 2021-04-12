import React from 'react'
import { useMemo } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useEffect } from 'react/cjs/react.development'
import { getOneItem } from '../../actions/item'
import { addLike, deleteLike, verifLike } from '../../actions/like'
import { API_PUBLIC_ROUTE, websiteName } from '../../config'
import { StyledIconeMediaWrapper, StyledModal,
     StyledModalImageAndSocialWrapper, StyledModalImageWrapper,
      StyledModalTitle, StyledSocialModalWrapper, StyleModalWrapper 
} from './styled'

const Modal = ({ visible, onClick, id }) => {
    const dispatch = useDispatch();
    const itemReducer = useSelector(state => state.oneItemReducer);
    const likeReducer = useSelector(state => state.likeReducer)
    // const [liked,setLiked] = useState(false);

    useEffect(() => {
        if (id !== 0) {
            dispatch(getOneItem(id))
            dispatch(verifLike(id))
        }
    }, [id]);
    
    const switchHeartIconeColor = async () => {
            if (likeReducer.isLiked === false) {
                dispatch(addLike(itemReducer._id))
            } else {
                dispatch(deleteLike(itemReducer._id))
            }
    }
    const showComponent = (id) => {
        if (id !== 0) {
            return (
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
                            <Link to={`${websiteName}/templates/${itemReducer._id}`}>
                                <img src={`${API_PUBLIC_ROUTE}${itemReducer.screen}`} alt={`capture d'écran ${itemReducer.name}`} />
                            </Link>
                        </StyledModalImageWrapper>
                        <StyledSocialModalWrapper>
                            <StyledIconeMediaWrapper color={likeReducer.color} onClick={switchHeartIconeColor}>
                                <i className="fa fa-heart"></i>
                            </StyledIconeMediaWrapper>
                        </StyledSocialModalWrapper>
                    </StyledModalImageAndSocialWrapper>
                </StyledModal>
            )
        }
    }
    return (
        <StyleModalWrapper visible={visible} >
            {showComponent(id)}
        </StyleModalWrapper>
    )
}
export default Modal;