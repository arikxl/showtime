import React from 'react'
import styled from 'styled-components'

const DarkDivStyle = styled.div`
    position: absolute;
    top: 0;
    background-color: #282c34;
    bottom: 0;
    right: 50%;
    width: ${props => props.isClick ? '50%' : '0%'};
    height: ${props => props.isClick ? '100%' : '0%'};
    z-index:1;
    transition: height 0.5s ease , width 1s ease 0.5s;
`;

const DarkDiv = ({ isClick }) => {
    return (
        <DarkDivStyle isClick={isClick}></DarkDivStyle>
  )
}

export default DarkDiv