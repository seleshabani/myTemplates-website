import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { websiteName } from '../../config';
import { StyledFormContainer, StyledSearchFormWrapper, StyledFormInputContainer } from './styled'
// import {} from 'react-hook-form'
const Form = () => {
    const {register,handleSubmit} = useForm();
    const history = useHistory();

    const submit = (data)=>{
      //  e.preventDefault();
        if (data.query !== '') {
            history.push(`${websiteName}/search/${data.query}`)
        }
    }
    return (
        <StyledSearchFormWrapper>
            <form onSubmit={handleSubmit(submit)}>
                <StyledFormContainer>
                    <StyledFormInputContainer>
                        <input type="text" name="query" ref={register} />
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