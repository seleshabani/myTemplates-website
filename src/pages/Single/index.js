import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getOneItem } from '../../actions/item';
import { API_PUBLIC_ROUTE } from '../../config';
import { 
    StyledContentWrapper, StyledImageWrapper, 
    StyledLinksBlock, StyledPreviewLinkItem, StyledPreviewLinks, StyledSharedLinks, 
    StyledSharedLinksItem 
} from './styled';

const Single = (props)=>{
    
    const dispatch = useDispatch();
    const itemReducer = useSelector(state=>state.oneItemReducer);
    const itemId = props.match.params.id

    useEffect(()=>{
        dispatch(getOneItem(itemId));
        window.document.querySelector('title').text = `MyTemplates | ${itemReducer.name}`;
    },[itemId])
    
    return (
        <StyledContentWrapper>
            <h1>{itemReducer.name}</h1>
            <StyledImageWrapper>
                <img src={`${API_PUBLIC_ROUTE}${itemReducer.screen}`} alt={`capture d'écran ${itemReducer.name}`}/>
                <StyledLinksBlock>
                    <StyledSharedLinks>
                        <StyledSharedLinksItem>
                            <i className={"fa fa-facebook"}></i>
                        </StyledSharedLinksItem>
                        <StyledSharedLinksItem>
                            <i className={"fa fa-twitter"}></i>
                        </StyledSharedLinksItem>
                    </StyledSharedLinks>
                    <StyledPreviewLinks>
                        <StyledPreviewLinkItem>
                            <i className={"fa fa-download"}></i>
                        </StyledPreviewLinkItem>
                        <StyledPreviewLinkItem>
                            <h6>
                                <a href={itemReducer.linkPreview} target="_blank" rel="noopener noreferrer">
                                Live preview
                                </a>
                            </h6>
                        </StyledPreviewLinkItem>
                </StyledPreviewLinks>
                </StyledLinksBlock>
            </StyledImageWrapper>
        </StyledContentWrapper>
    )
}
export default Single;