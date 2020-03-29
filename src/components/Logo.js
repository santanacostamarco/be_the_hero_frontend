import React from 'react';
import logo from '../assets/logo.svg';
import styled from 'styled-components';

const ImgWrapper = styled.div`
    margin-bottom: 5rem;
`;

function Logo() {
    return (
        <ImgWrapper>
            <img src={logo} alt="Be the hero" />
        </ImgWrapper>
    )
}

export default Logo;