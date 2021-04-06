import styled from 'styled-components'

export const StyleModalWrapper = styled.div`
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    width:100%;
    height:100%;
    background:rgba(0,0,0,0.2);
    display:flex;
    justify-content:center;
    align-items:center;
    align-content:center;
    visibility:${({visible}) => visible ? 'visible':'hidden'};
`

export const StyledModal = styled.div`
    width:70%;
    height:80%;
    overflow-y:scroll;
    border: solid 2px whitesmoke;
    box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.3);
    padding:20px;
    background:rgba(0,0,0,0.9);
    color:whitesmoke;
`
export const StyledModalTitle = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    & h1{
        width:60%;
        text-transform: capitalize;
    }

    & div{
        width:5%;
        cursor:pointer;
    }
`
export const StyledModalImageAndSocialWrapper = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
    align-items:flex-start;
    justify-content:space-between;
`
export const StyledModalImageWrapper = styled.div`
    border-radius:5px;
    overflow:hidden;
    width:90%;
    height:80%
    & img{
        height:100%;
        width:100%;
    }
`
export const StyledSocialModalWrapper = styled.div`
    width:5%;
    display:flex;
    flex-direction:column;
    gap:1rem;
`
export const StyledIconeMediaWrapper = styled.div`
    width:100%;
    padding:5px;
    display:flex;
    justify-content:center;
    align-items:center;
    align-content:center;
    background:rgba(0,0,0,0.4);
    font-size:1.3rem;
    color: ${({color})=>{console.log(color);return color}};
    cursor:pointer;
`