import React, { lazy, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

import Intro from '../components/Intro';
import DarkDiv from '../components/DarkDiv';
import { ReactSvg } from '../components/AllSvg';
import { mediaQueries } from '../style/Themes';

const Logo = lazy(() => import('../components/Logo'));
const PowerButton = lazy(() => import('../components/PowerButton'));
const SocialIcons = lazy(() => import('../components/SocialIcons'));

const MainContainer = styled.main`
  background: ${props => props.theme.body};
  color: ${props => props.theme.text};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;

  h1,h2,h3,h4,h5,h6{
    font-weight:500;
  }

  h2 {
    ${mediaQueries(40)`
      font-size:1.2em;

  `};

    ${mediaQueries(30)`
      font-size:1.1em;
  `};
  }
`;

const Container = styled.section`
  padding:2rem;
`;

const Contact = styled.a`
    color: ${(props) => (props.isclick==='true' ? props.theme.body : props.theme.text)};
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
    /* @media only screen and (max-width: 50em) {
      color:${props =>  props.theme.text };
  } */
`;

const Blog = styled(About)`
    color: ${(props) => (props.isclick ? props.theme.body : props.theme.text)};

    position: absolute;
    top: 50%;
    right: calc(1rem + 2vw);
    transform: rotate(90deg) translate(-50%,-50%);

      @media only screen and (max-width: 50em) {
    text-shadow: ${(props) => (props.isclick ? "0 0 4px #000" : "none")};
  }
`;

const Skills = styled(About)``;

const Work = styled(Skills)`
    position: absolute;
    top: 50%; 
    left: calc(1rem + 2vw);
    transform: translate(-50%,-50%)  rotate(-90deg);
    color:${props => props.isclick === 'true' ? props.theme.body : props.theme.text};
    @media only screen and (max-width: 50em) {
    text-shadow: ${(props) => (props.isclick ? "0 0 4px #000" : "none")};
  }
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

  @media only screen and (max-width: 50em) {
    top: ${(props) => (props.isclick ? "90%" : "50%")};
    left: ${(props) => (props.isclick ? "90%" : "50%")};
    width: ${(props) => (props.isclick ? "80px" : "150px")};
    height: ${(props) => (props.isclick ? "80px" : "150px")};
  }
  @media only screen and (max-width: 30em) {
    width: ${(props) => (props.isclick ? "40px" : "150px")};
    height: ${(props) => (props.isclick ? "40px" : "150px")};
  }
`;

const HomePage = () => {

  const [isclick, setIsClick] = useState(false)
  const handleClick = () => setIsClick(!isclick);
  const mq = window.matchMedia("(max-width: 50em)").matches;

  return (

    <MainContainer>
      <Container>
        <PowerButton />
        <Logo theme={isclick ? 'dark' : 'light'} />

        {mq ? (
          <SocialIcons theme='light' />
        ) : (
            <SocialIcons theme={isclick ? 'light' : 'dark'} />
        )}

        {/* <SocialIcons theme={isclick ? 'dark' : 'light'} /> */}
        <DarkDiv isclick={isclick} />

        <Center isclick={isclick} onClick={() => handleClick()}>
          <ReactSvg fill='currentColor'
            width={isclick ? 120 : 200} height={isclick ? 120 : 200} />
          <span>Click here</span>
        </Center>

        {mq ? (
          <Contact theme="light"   />
        ) : (
            <Contact theme={isclick ? 'light' : 'dark'} />
        )}

         <Contact href='mailto:arikxl@gmail.com' target='_blank' isclick={isclick }>
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



        <Blog to='/blog' isclick={isclick.toString() }>
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
          <Skills to='/skills' >
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

export default HomePage