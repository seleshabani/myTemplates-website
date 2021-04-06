import React from 'react';
import { Link } from 'react-router-dom';
import Form from '../SearchForm';
import StyledHeader from './styled';
const Header = () => {
    return (
        <StyledHeader>
            <div className="brand">
                <h2>
                    Templates by <Link to={"/"}>Sele Shabani</Link>
                </h2>
            </div>
            <Form/>
        </StyledHeader>
    )
}
export default Header;