import React from 'react';
import styled from 'styled-components';
import { darkTheme, mediaQueries } from '../style/Themes';

const LogoStyled = styled.h1`
    display: inline-block;
    color: ${props => props.color=== 'dark' ? darkTheme.text : darkTheme.body};
    font-family:'Pacifico', cursive ;

    position: fixed;
    top: 2rem;
    left: 2rem;
    z-index: 3;

      ${mediaQueries(40)`
      font-size:1.5em;
      left:1rem;
      top:2rem;
  `};

`;

const Logo = (props) => {
  return (
    <LogoStyled color={props.theme }>ARIKxl</LogoStyled>
  )
}

export default Logo