import React from 'react';
import styled from 'styled-components';

const IntroStyled = styled.section`
    width: 55vw;
    height: 40vh;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;

    background-repeat: no-repeat;
    background-size:100% 2px;
    background: linear-gradient(
        to right,
        ${props => props.theme.body} 50%,
        ${props => props.theme.text} 50% ) bottom,
        linear-gradient( 
        to right,
            ${props => props.theme.body} 50%,
            ${props => props.theme.text} 50% ) top;
            
            border-left: ${props => props.theme.body} solid 2px;
            border-right: ${props => props.theme.text} solid 2px;
            z-index: 1;
`;

const Intro = ({ props }) => {

    return (
        <IntroStyled>
            Intro
        </IntroStyled>
    )
}

export default Intro