import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllItems } from '../../actions/item'
import Modal from '../../components/Modal'
import { ShowItems } from '../../hooks/functions'
import { StyledContainer, StyledContainerWrapper, StyledPaginatedButton } from './styled'

export const Home = () => {

    const [modalVisible, setModalVisible] = useState(false);
    const [paginate, setPaginate] = useState({ page: 1, limit: 4 })
    const [modalId, setModalId] = useState(0)
    const dispatch = useDispatch();
    const itemRootState = useSelector(state => state.itemReducer);

    useEffect(() => {
        dispatch(getAllItems(paginate));
        window.document.querySelector('title').text = 'MyTemplates'
    }, [paginate])

    const showModal = (e, item) => {
        setModalId(item._id);
        setModalVisible(!modalVisible);
    }
    const fetchPaginate = () => {
        if (itemRootState.next) {
            setPaginate(itemRootState.next);
        } else {
            setPaginate({ page: 1, limit: paginate.limit })
        }
    }

    if (itemRootState.isLoading) {
        return (
            <StyledContainerWrapper>
                <h1>en cours de chargement</h1>
            </StyledContainerWrapper>
        )
        
    } else {
        return(
            <StyledContainerWrapper>
                <StyledContainer>
                    {ShowItems(itemRootState.results, showModal)}
                </StyledContainer>
                <StyledPaginatedButton>
                    <button onClick={fetchPaginate}>{itemRootState.next ? 'voir plus' : 'voir moins'}</button>
                </StyledPaginatedButton>
                <Modal id={modalId} visible={modalVisible} onClick={() => { setModalVisible(false) }} />
            </StyledContainerWrapper>
        )
    }
}