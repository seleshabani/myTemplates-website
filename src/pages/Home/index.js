import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllItems } from '../../actions/item'
import Item from '../../components/Item'
import Modal from '../../components/Modal'
import { StyledContainer } from './styled'

export const Home = ()=>{

    const [modalVisible,setModalVisible] = useState(false);
    const [modalId,setModalId] = useState(0)
    const dispatch = useDispatch();
    const itemRootState = useSelector(state=>state.itemReducer);

    useEffect(()=>{
        dispatch(getAllItems());
    },[])

    const showModal = (e,item) => {
       setModalId(item._id);
       setModalVisible(!modalVisible);
    }
    const ShowItems = ()=>{
        if (Array.isArray(itemRootState)) {
            return  itemRootState.map((item,index)=>{
                return <Item key={index} id={item._id} onClick={(e)=>showModal(e,item)} name={item.name} link={item.linkPreview} img={item.screen}/>
            })
        }else{
            return <h1>Aucun templates n'est disponible pour l'instant</h1>
        }
    }
    return(
        <StyledContainer>
            {ShowItems()}
            <Modal id={modalId} visible={modalVisible} onClick={()=>{setModalVisible(false)}}/>
        </StyledContainer>
    )
}