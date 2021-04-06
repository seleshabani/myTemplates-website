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
    display:flex;
    flex-direction:column;
    gap:1rem;
    border-radius:5px;
    overflow:hidden;
    & img{
        width:100%;
        display:inline-block;
    }
`
export const StyledSharedLinks = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
    padding:5px;
`

export const StyledSharedLinksItem = styled.div`
    width:40px;
    height:40px;
    border-radius:50%;
    padding:5px;
    display:flex;
    justify-content:center;
    align-items:center;
    /* border:solid 1px whitesmoke; */
    color:whitesmoke;
    background-color: rgb(179, 197, 206);
    box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.3);
    cursor:pointer;
    margin-right:15px;
`