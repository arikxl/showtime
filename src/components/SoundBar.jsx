import React, { useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';

import music from '../assets/audio/music.mp3';
import funny from '../assets/audio/funny.mp3';
import { mediaQueries } from '../style/Themes';

const Box = styled.section`
    display: flex;
    cursor: pointer;
    position: fixed;
    left: 12rem;
    top: 2.6rem;
    z-index: 10;

    &>*:nth-child(1){
        animation-delay: 0.2s;
    }
    &>*:nth-child(2){
        animation-delay: 0.3s;
    }
    &>*:nth-child(3){
        animation-delay: 0.4s;
    }
    &>*:nth-child(4){
        animation-delay: 0.5s;
    }
    &>*:nth-child(5){
        animation-delay: 0.8s;
    }

    ${mediaQueries(40)`
        left:1rem;
        top:5rem;
  `};
`;

const play = keyframes`
    0%{
        transform: scaleY(1);
    }
    50%{
        transform: scaleY(2);
    }
    100%{
        transform: scaleY(1);
    }

`;

const Line = styled.span`
    background: ${props => props.theme.text};
    border: solid 1px ${props => props.theme.body};
    height: 1rem;
    width: 2px;
    margin: 0 0.1rem;

    animation: ${play} 1s ease infinite;
    animation-play-state: ${props => props.click ? "running" : "paused"};
`;

const SoundBar = () => {

    const ref = useRef(null);
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);

        if (!click) {
            ref.current.play()
        } else {
            ref.current.pause()
        }
    }

    return (
        <Box onClick={() => handleClick()}>
            <Line click={click} />
            <Line click={click} />
            <Line click={click} />
            <Line click={click} />
            <Line click={click} />
            <audio src={funny} ref={ref} loop />
        </Box>
    )
}

export default SoundBar