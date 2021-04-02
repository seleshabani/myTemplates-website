import styled from 'styled-components'

export const StyleModalWrapper = styled.div`
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    width:100%;
    heigth:100%;
    background:rgba(0,0,0,0.2);
    display:flex;
    justify-content:center;
    align-items:center;
    visibility:${({visible}) => visible ? 'visible':'hidden'};
    cursor:pointer;
`

export const StyledModal = styled.div`
    width:50%;
    height: max-content;
    border: solid 2px whitesmoke;
    box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.3);
    padding:20px;
    background:rgba(0,0,0,0.9);
    color:whitesmoke;
`