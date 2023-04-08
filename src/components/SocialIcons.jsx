import { motion } from 'framer-motion';
import React from 'react'
import styled from 'styled-components'
import { darkTheme } from '../style/Themes';

import { Facebook, Github, Link, Linkedin, Telegram, YouTube } from './AllSvg'

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

const Line = styled(motion.span)`
    width:2px;
    height:5rem;
    background-color: ${props => props.color === 'dark' ? darkTheme.text : darkTheme.body}
`;

const SocialIcons = (props) => {
    return (
        <Icons>

            <motion.div
                initial={{ transform: 0 }}
                animate={{ scale: [0, 1, 1.5, 1] }}
                transition={{ type: 'spring', duration: 1, delay: 1 }}
            >
                <a href='https://github.com/arikxl' target="_blank" rel="noreferrer"
                    style={{ color: "inherit" }}>
                    <Github width={25} height={25}
                        fill={props.theme === 'dark' ? darkTheme.text : darkTheme.body} />
                </a>
            </motion.div>
       
            <motion.div
                initial={{ transform: 0 }}
                animate={{ scale: [0, 1, 1.5, 1] }}
                transition={{ type: 'spring', duration: 1, delay: 1.4 }}
            >
                <a href='https://www.linkedin.com/in/arik-alexandrov/' target="_blank" rel="noreferrer">
                    <Linkedin width={28} height={28}
                        fill={props.theme === 'dark' ? darkTheme.text : darkTheme.body} />
                </a>
            </motion.div>
            <motion.div
                initial={{ transform: 0 }}
                animate={{ scale: [0, 1, 1.5, 1] }}
                transition={{ type: 'spring', duration: 1, delay: 1.2 }}
            >
                <a href="https://www.facebook.com/arik.alexandrov/" target="_blank" rel="noreferrer">
                    <Facebook width={25} height={25}
                        fill={props.theme === 'dark' ? darkTheme.text : darkTheme.body} />
                </a>
            </motion.div>
            <motion.div
                initial={{ transform: 0 }}
                animate={{ scale: [0, 1, 1.5, 1] }}
                transition={{ type: 'spring', duration: 1, delay: 1.6 }}
            >
                <a href='https://t.me/Arik_A' target="_blank" rel="noreferrer">
                    <Telegram width={25} height={25}
                        fill={props.theme === 'dark' ? darkTheme.text : darkTheme.body} />
                </a>
            </motion.div>
            <Line color={props.theme}
                initial={{
                    height: 0,
                }}
                animate={{
                    height: '5rem',
                }}
                transition={{
                    type: 'spring', duration: 1, delay: 0.8
                }}
            />
        </Icons>

    )
}

export default SocialIcons