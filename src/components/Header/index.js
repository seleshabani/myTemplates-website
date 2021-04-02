import React from 'react';
import Form from '../SearchForm';
import StyledHeader from './styled';
const Header = () => {
    return (
        <StyledHeader>
            <div className="brand">
                <h2>
                    Templates by <a target="_blank" rel="noreferrer" href="http://seleshabani.github.io/Templates/portfolio_v5">Sele Shabani</a>
                </h2>
            </div>
            <Form/>
        </StyledHeader>
    )
}
export default Header;