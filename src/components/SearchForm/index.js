import React from 'react';
import { StyledFormContainer, StyledSearchFormWrapper, StyledFormInputContainer } from './styled'
// import {} from 'react-hook-form'
const Form = () => {
    return (
        <StyledSearchFormWrapper>
            <form>
                <StyledFormContainer>
                    <StyledFormInputContainer>
                        <input type="text" name="ff" />
                    </StyledFormInputContainer>
                    <div>
                        <button>Rechercher</button>
                    </div>
                </StyledFormContainer>
            </form>
        </StyledSearchFormWrapper>
    )
}
export default Form;