import React from 'react';
import styled from 'styled-components';

const LogoStyled = styled.h1`
    display: inline-block;
    color: ${props => props.theme.text};
    font-family:'Pacifico', cursive ;

    position: fixed;
    top: 2rem;
    left: 2rem;
    z-index: 3;

`;

const Logo = () => {
  return (
      <LogoStyled>ARIKxl</LogoStyled>
  )
}

export default Logo