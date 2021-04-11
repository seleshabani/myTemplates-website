import styled from 'styled-components';

export const StyledContainerWrapper  = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    gap:1rem;
    @media(max-width:800px){
        width:100%;
    }
`
export const StyledContainer = styled.div`
    width: 100%;
    padding-top: 20px;
    padding-bottom: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1em;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    @media(max-width:800px){
        flex-direction: column;
    }
`
export const StyledPaginatedButton = styled.div`
    width:100%;
    & button{
        width:100%;
        padding:10px;
    }

`
