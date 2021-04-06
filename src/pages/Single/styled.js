import styled from "styled-components";

export const StyledContentWrapper = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
    align-items:flex-start;
    justify-content:space-between;
`
export const StyledImageWrapper = styled.div`
    width:70%;
    border-radius:5px;
    overflow:hidden;
    & img{
        width:100%;
    }
`