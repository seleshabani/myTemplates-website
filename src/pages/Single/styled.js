import styled from "styled-components";

export const StyledContentWrapper = styled.div`
    /* display:flex;
    flex-direction:row;
    align-items:flex-start;
    justify-content:space-between; */
    width:100%;
    height:80vh;
    @media(max-width:800px){
        flex-direction: column;
        gap:1rem;
    }
`
export const StyledImageWrapper = styled.div`
    width:70%;
    height: max-content ;
    display:flex;
    flex-direction:column;
    gap:1rem;
    border-radius:5px;
    overflow:hidden;
    & img{
        width:100%;
        height: 55vh;
        display:inline-block;
    }
    @media(max-width:800px){
       width:100%;
    }
`
export const StyledLinksBlock = styled.div`
    width:100%;
    padding:5px;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:flex-start;
` 
export const StyledSharedLinks = styled.div`
    width:70%;
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
    background: rgba(255, 255, 255,0.1);
    box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.3);
    cursor:pointer;
    margin-right:15px;
`

export const StyledPreviewLinks = styled.div`
    width:25%;
    display:flex;
    flex-direction:row;
`
export const StyledPreviewLinkItem = styled.div`
    width:80px;
    height:35px;
    padding:5px;
    display:flex;
    justify-content:center;
    align-items:center;
    color:whitesmoke;
    background: rgba(255, 255, 255,0.1);
    box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.3);
    border-radius:5px;
    cursor:pointer;
    margin-right:10px;
`