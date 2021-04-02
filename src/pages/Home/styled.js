import styled from 'styled-components';

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
