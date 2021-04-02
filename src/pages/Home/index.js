import React, { useEffect } from 'react'
import { useState } from 'react'
import Item from '../../components/Item'
import Modal from '../../components/Modal'
import { StyledContainer } from './styled'

export const Home = ()=>{

    const [modalVisible,setModalVisible] = useState(false);

    const showModal = () => {
       setModalVisible(!modalVisible)
    }
    return(
        <StyledContainer>
            <Item onClick={showModal}/>
            <Item onClick={showModal}/>
            <Modal visible={modalVisible} onClick={()=>{setModalVisible(false)}}/>
        </StyledContainer>
    )
}