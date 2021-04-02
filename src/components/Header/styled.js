import styled from 'styled-components';

const StyledHeader = styled.header`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-content: center;

    @media(max-width:800px){
    flex-direction: column;
    & .brand{
        width: 100%;
    }
`
export default StyledHeader;