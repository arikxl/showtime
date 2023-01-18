import React from 'react';
import styled from 'styled-components';
import { darkTheme } from '../style/Themes';

const LogoStyled = styled.h1`
    display: inline-block;
    color: ${props => props.color=== 'dark' ? darkTheme.text : darkTheme.body};
    font-family:'Pacifico', cursive ;

    position: fixed;
    top: 2rem;
    left: 2rem;
    z-index: 3;

`;

const Logo = (props) => {
  return (
    <LogoStyled color={props.theme }>ARIKxl</LogoStyled>
  )
}

export default Logo