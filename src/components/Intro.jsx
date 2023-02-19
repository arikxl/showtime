import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';


const IntroStyled = styled(motion.section)`
    width: 65vw;
    height: 55vh;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;

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
    background-repeat: no-repeat;
    background-size:100% 2px;
    z-index: 1;
`;

const SubBox = styled.div`
    width: 50%;
    position:relative;
    display: flex;

    img{
        position: absolute;
        bottom: -7%;
        left: 50%;
        transform: translate(-50%, 0);
        width: 100%;
        height: auto;

        @media (max-width:860px){
                bottom:-1%;
           }
    }

`;

const Text = styled.div`
    font-size: calc(1em + 1.5vw);
    color: ${props => props.theme.body};
    padding: 2rem;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    &>*:last-child{
        color: ${props => `rgba(${props.theme.bodyRgba}, 0.6)`};
        font-size: calc(0.5rem + 1.5vw);
        font-weight:300;
    }
`;

const Intro = () => {

    return (
        <IntroStyled initial={{ height: 0 }} animate={{ height: '55vh' }}
        transition={{type: 'spring', duration:2, delay:1}}>
            <SubBox>
                <Text>
                    <h1>Shalom,</h1>
                    <h3>I'm Arik Alexandrov.</h3>
                    <h6>Coding beautiful solutions, with a passion for education.</h6>
                </Text>
            </SubBox>
            <SubBox>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 2 }}>
                    <img src='https://res.cloudinary.com/arikxl/image/upload/v1675287070/Ella2023/qn0f8vou6kyvbldtexfp.png'
                        alt='Arik Alexandrov' />
                </motion.div>
            </SubBox>
        </IntroStyled>
    )
}

export default Intro