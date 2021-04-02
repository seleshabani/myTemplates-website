import styled from 'styled-components'

export const StyledItem = styled.div`
    width: 30%;
    height: max-content;
    border: solid 2px whitesmoke;
    box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.3);
    overflow: hidden;
    transition: all 300ms;
    object-fit:cover;
    cursor:pointer;

    &:hover{
        transform: translateY(5px);
    }
    @media(max-width:800px){
        width: 100%;
    }
`