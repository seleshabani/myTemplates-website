import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react/cjs/react.development';
import { searchItems } from '../../actions/item';
import Modal from '../../components/Modal';
import { ShowItems } from '../../hooks/functions';
import { StyledContentWrapper, StyledResultWrapper } from './styled';

const Search = (props)=>{

    const SearchQuery = props.match.params.query;
    const dispatch = useDispatch();
    const itemsReducer = useSelector(state=>state.itemReducer);
    const [modalVisible,setModalVisible] = useState(false);
    const [modalId,setModalId] = useState(0)

    useEffect(()=>{
        window.document.querySelector('title').text = `MyTemplates | Recherche | ${SearchQuery}`
        dispatch(searchItems(SearchQuery,{page:1,limit:3}));
        console.log(itemsReducer)
    },[SearchQuery]);

    const showModal = (e,item) => {
        setModalId(item._id);
        setModalVisible(!modalVisible);
     }

    return(
        <>
            <h1>Résultat de Recherche pour : {SearchQuery}</h1>
            <StyledContentWrapper>
                <StyledResultWrapper>
                    {ShowItems(itemsReducer.results,showModal,true)}
                </StyledResultWrapper>
            </StyledContentWrapper>
            <Modal id={modalId} visible={modalVisible} onClick={()=>{setModalVisible(false)}}/>
        </>
    )
}
export default Search;