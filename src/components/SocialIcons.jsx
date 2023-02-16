import React from 'react'
import styled from 'styled-components'
import { darkTheme } from '../style/Themes';

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
        margin: 0.3rem 0 ;

        &:hover{
        background-color:rgba(97, 218, 251,0.4);
        box-shadow: 0 0 8px 6px rgba(97, 218, 251,0.4);
        border-radius: 50%;
        }
    }
    
    a{    
        color:inherit;
    }
    
`;

const Line = styled.span`
    width:2px;
    height:5rem;
    background-color: ${props => props.color === 'dark' ? darkTheme.text : darkTheme.body}
`;

const SocialIcons = (props) => {
    return (
        <Icons>

            <div>
                <a href='https://github.com/arikxl' target="_blank" rel="noreferrer">
                    <Github width={25} height={25}
                        fill={props.theme === 'dark' ? darkTheme.text : darkTheme.body} />
                </a>
            </div>
            <div>
                <a href="https://www.facebook.com/arik.alexandrov/" target="_blank" rel="noreferrer">
                    <Facebook width={25} height={25}
                        fill={props.theme === 'dark' ? darkTheme.text : darkTheme.body} />
                </a>
            </div>
            <div>
                <a href='https://www.youtube.com/channel/UCK_Vs-k83r_IzFh9s1pGixA' target="_blank" rel="noreferrer">
                    <YouTube width={25} height={25}
                        fill={props.theme === 'dark' ? darkTheme.text : darkTheme.body} />
                </a>
            </div>
            <div>
                <a href='https://t.me/Arik_A' target="_blank" rel="noreferrer">
                    <Telegram width={25} height={25}
                        fill={props.theme === 'dark' ? darkTheme.text : darkTheme.body} />
                </a>
            </div>
            <Line color={props.theme} />
        </Icons>

    )
}

export default SocialIcons