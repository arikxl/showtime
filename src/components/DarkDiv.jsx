import React from 'react'
import styled from 'styled-components'
import { mediaQueries } from '../style/Themes';

const DarkDivStyle = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    background-color: #282c34;
    right: 50%;
    width: ${props => props.isclick ? '50%' : '0%'};
    height: ${props => props.isclick ? '100%' : '0%'};
    z-index:1;
    transition: height 0.5s ease , width 1s ease 0.5s;

    
    ${(props) => props.isclick ? mediaQueries(50)`
        height: 50%;
        right:0;
        width: 100%;
        transition: width 0.5s ease, height 1s ease 0.5s;`
  
      : mediaQueries(50)`
        height: 0;
        width: 0;
    `};
`;

const DarkDiv = ({ isclick }) => {

  return (
    <DarkDivStyle isclick={isclick}></DarkDivStyle>
  )
}

export default DarkDiv