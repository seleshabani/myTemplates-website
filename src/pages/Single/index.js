import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react/cjs/react.development';
import { getOneItem } from '../../actions/item';
import { API_PUBLIC_ROUTE } from '../../config';
import { StyledContentWrapper, StyledImageWrapper, StyledSharedLinks, StyledSharedLinksItem } from './styled';

const Single = (props)=>{
    
    const dispatch = useDispatch();
    const itemReducer = useSelector(state=>state.oneItemReducer);
    const itemId = props.match.params.id

    useEffect(()=>{
        dispatch(getOneItem(itemId));
        window.document.querySelector('title').text = `MyTemplates | ${itemReducer.name}`;
    },[itemId])
    
    return (
        <>
        <h1>{itemReducer.name}</h1>
        <StyledContentWrapper>
            <StyledImageWrapper>
                <img src={`${API_PUBLIC_ROUTE}${itemReducer.screen}`} alt={`capture d'écran ${itemReducer.name}`}/>
                <StyledSharedLinks>
                    <StyledSharedLinksItem>
                        <i className={"fa fa-facebook"}></i>
                    </StyledSharedLinksItem>
                    <StyledSharedLinksItem>
                        <i className={"fa fa-twitter"}></i>
                    </StyledSharedLinksItem>
                </StyledSharedLinks>
            </StyledImageWrapper>
        </StyledContentWrapper>
        </>
    )
}
export default Single;