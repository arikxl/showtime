import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

import { ReactSvg } from '../components/AllSvg';
import DarkDiv from '../components/DarkDiv';
import Intro from '../components/Intro';
import Logo from '../components/Logo';
import PowerButton from '../components/PowerButton';
import SocialIcons from '../components/SocialIcons';

const MainContainer = styled.main`
  background: ${props => props.theme.body};
  color: ${props => props.theme.text};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;

  h1,h2,h3,h4,h5,h6{
    /* font-family: 'Karla', sans-serif; */
    font-weight:500;
  }
`;

const Container = styled.section`
  padding:2rem;
`;

const Contact = styled.a`
    color:${props => props.theme.text};
    position: absolute;
    top: 2rem;
    right: calc(1rem + 2vw);
    text-decoration: none;
    z-index: 1;

    :hover{
      color: #61dafb;
    }
`;

const About = styled(NavLink)`
    color:${props => props.isclick ==='true'   ? props.theme.body : props.theme.text};
    text-decoration: none;
    z-index: 1;

    :hover{
      color: #61dafb;
    }
`;

const Blog = styled(About)`
    position: absolute;
    top: 50%;
    right: calc(1rem + 2vw);
    transform: rotate(90deg) translate(-50%,-50%);
`;

const Skills = styled(About)``;

const Work = styled(Skills)`
    position: absolute;
    top: 50%; 
    left: calc(1rem + 2vw);
    transform: translate(-50%,-50%)  rotate(-90deg);
    color:${props => props.isclick === 'true' ? props.theme.body : props.theme.text};

`;

const BottomBar = styled.section`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right:0;
  width: 100%;
  display:flex;
  justify-content: space-evenly;
`;

const rotate = keyframes`
    from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Center = styled.button`
  position: absolute;
  top:${props => props.isclick ? '85%' : '50%'};
  left:${props => props.isclick ? '92%' : '50%'};
  border:none;
  transform: translate(-50%, -50%);
  outline: none;
  background: transparent;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  transition: all 1s ease;

  &>:first-child{
    animation: ${rotate} infinite 5s linear;
  }

  &>:last-child{
    display:${props => props.isclick ? 'none' : 'inline-block'};
    padding-top: 1rem;
  }
`;

const MainPage = () => {

  const [isclick, setIsClick] = useState(false)
  const [isclick2, setIsClick2] = useState(false)

  const handleClick = () => setIsClick(!isclick);

  return (

    <MainContainer>
      <Container>
        <PowerButton />
        <Logo theme={isclick ? 'dark' : 'light'} />
        <SocialIcons theme={isclick ? 'dark' : 'light'} />
        <DarkDiv isclick={isclick} />
        <Center isclick={isclick} onClick={() => handleClick()}>
          <ReactSvg fill='currentColor'
            width={isclick ? 120 : 200} height={isclick ? 120 : 200} />
          <span>Click here</span>
        </Center>
        <Contact href='mailto:arikxl@gmail.com' target='_blank'>
          <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
            initial={{
              y: -200,
              transition: { type: 'spring', duration: 1.5, delay: 1 }
            }}
            animate={{
              y: 0,
              transition: { type: 'spring', duration: 1.5, delay: 1 }
            }}>
            Say hi...
          </motion.h2>
        </Contact>
        <Blog to='/blog'>
          <motion.h2
            initial={{
              y: -200,
              transition: { type: 'spring', duration: 1.5, delay: 1 }
            }}
            animate={{
              y: 0,
              transition: { type: 'spring', duration: 1.5, delay: 1 }
            }}
            whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
          >Blog</motion.h2>
        </Blog>
        <Work to='/work' isclick={isclick.toString()}>
          <motion.h2
            initial={{
              y: -200,
              transition: { type: 'spring', duration: 1.5, delay: 1 }
            }}
            animate={{
              y: 0,
              transition: { type: 'spring', duration: 1.5, delay: 1 }
            }}
            whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
          >Work</motion.h2>
        </Work>
        <BottomBar>
          <About to='/about' isclick={isclick.toString()}>
            <motion.h2
              initial={{
                y: 200,
                transition: { type: 'spring', duration: 1.5, delay: 1 }
              }}
              animate={{
                y: 0,
                transition: { type: 'spring', duration: 1.5, delay: 1 }
              }}
              whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
            >About.</motion.h2>
          </About>
          <Skills to='/skills'>
            <motion.h2 initial={{
              y: 200,
              transition: { type: 'spring', duration: 1.5, delay: 1 }
            }}
              animate={{
                y: 0,
                transition: { type: 'spring', duration: 1.5, delay: 1 }
              }}
              whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
            >My Skills.</motion.h2>
          </Skills>
        </BottomBar>

      </Container>
      {isclick ? <Intro /> : null}
    </MainContainer>
  )
}

export default MainPage