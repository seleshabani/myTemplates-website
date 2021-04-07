import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllItems } from '../../actions/item'
import Modal from '../../components/Modal'
import { ShowItems } from '../../hooks/functions'
import { StyledContainer } from './styled'

export const Home = ()=>{

    const [modalVisible,setModalVisible] = useState(false);
    const [modalId,setModalId] = useState(0)
    const dispatch = useDispatch();
    const itemRootState = useSelector(state=>state.itemReducer);

    useEffect(()=>{
        dispatch(getAllItems());
        window.document.querySelector('title').text = 'MyTemplates'
    },[])

    const showModal = (e,item) => {
       setModalId(item._id);
       setModalVisible(!modalVisible);
    }
    return(
        <StyledContainer>
            {ShowItems(itemRootState,showModal)}
            <Modal id={modalId} visible={modalVisible} onClick={()=>{setModalVisible(false)}}/>
        </StyledContainer>
    )
}