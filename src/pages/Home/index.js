import React, { useEffect } from 'react'
import { useState } from 'react'
import ReactPaginate from 'react-paginate'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { getAllItems } from '../../actions/item'
import Modal from '../../components/Modal'
import { websiteName } from '../../config'
import { ShowItems } from '../../hooks/functions'
import { StyledContainer, StyledContainerWrapper } from './styled'

export const Home = () => {

    const [modalVisible, setModalVisible] = useState(false);
    const history = useHistory();
    const [modalId, setModalId] = useState(0)
    const dispatch = useDispatch();
    const itemRootState = useSelector(state => state.itemReducer);

    useEffect(() => {
       // dispatch(getAllItems(paginate));
        fetchPaginate();
        window.document.querySelector('title').text = 'MyTemplates'
    }, [])

    const showModal = (e, item) => {
        setModalId(item._id);
        setModalVisible(!modalVisible);
    }
    const fetchPaginate = (page=1) => {
        history.push(`${websiteName}?page=${page}`)
       dispatch(getAllItems({page:page}))
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
                {/* <StyledPaginatedButton>
                    <button onClick={fetchPaginate}>{itemRootState.next ? 'voir plus' : 'voir moins'}</button>
                </StyledPaginatedButton> */}
                <ReactPaginate 
                containerClassName={'reactPaginateContainer'}
                pageClassName={'page'}
                onPageChange={(page)=>fetchPaginate(page.selected + 1)}
                onPageActive={(page)=>fetchPaginate(page.selected+1)}
                pageCount={itemRootState.nbrPages} pageRangeDisplayed={1} 
                marginPagesDisplayed={2}
                activeClassName={'page-active'}
                />
                <Modal id={modalId} visible={modalVisible} onClick={() => { setModalVisible(false) }} />
            </StyledContainerWrapper>
        )
    }
}