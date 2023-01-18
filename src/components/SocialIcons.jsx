import React from 'react'
import styled from 'styled-components'

import { Facebook, Github, Telegram, YouTube } from './AllSvg'

const Icons = styled.section`
    display:flex;
    flex-direction:column;
    align-items:center;
    position: fixed;
    bottom: 0;
    left:2rem;
    z-index:3;

    &>*:not(:last-child){
        margin: 0.5rem 0 ;
    }
`;

const Line = styled.span`
    width:2px;
    height:8rem;
    background-color: ${props => props.theme.text}
`;

const SocialIcons = () => {
    return (
        <Icons>

            <div>
                <a href='https://github.com/arikxl' target="_blank" style={{color: 'inherit'}} rel="noreferrer">
                    <Github width={25} height={25} fill='currentColor' />
                </a>
            </div>
            <div>
                <a href='https://www.facebook.com/arik.alexandrov/' style={{ color: 'inherit' }} target="_blank" rel="noreferrer">
                    <Facebook width={25} height={25} fill='currentColor' />
                </a>
            </div>
            <div>
                <a href='https://www.youtube.com/channel/UCK_Vs-k83r_IzFh9s1pGixA' style={{ color: 'inherit' }} target="_blank" rel="noreferrer">
                    <YouTube width={25} height={25} fill='currentColor'  />
                </a>
            </div>
            <div>   
                <a href='https://t.me/Arik_A' style={{ color: 'inherit' }} target="_blank" rel="noreferrer">
                    <Telegram width={25} height={25} fill='currentColor'  />
                </a>
            </div>
            <Line />
        </Icons>
 
    )
}

export default SocialIcons