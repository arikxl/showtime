import React, { lazy, Suspense, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

import Intro from '../components/Intro';
import Loader from '../components/Loader';
import DarkDiv from '../components/DarkDiv';
import { ReactSvg } from '../components/AllSvg';
import { mediaQueries } from '../style/Themes';

const Logo = lazy(() => import('../components/Logo'));
const Contact = lazy(() => import('../components/Contact'));
const PowerButton = lazy(() => import('../components/PowerButton'));
const SocialIcons = lazy(() => import('../components/SocialIcons'));
const ShowCaseLinkFromHome = lazy(() => import('../components/ShowCaseLinkFromHome'));

const MainContainer = styled(motion.div)`
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

const About = styled(NavLink)`
    color:${props => props.isclick ? props.theme.body : props.theme.text};
    text-decoration: none;
    z-index: 1;

    :hover{
      color: #61dafb;
    }
`;

const Skills = styled(About)``;

const Blog = styled(Skills)`
    position: absolute;
    top: 48%; 
    left: calc(1rem + 2vw);
    transform: translate(-50%,-50%)  rotate(-90deg);
    color:${props => props.isclick ? props.theme.body : props.theme.text};
    
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
    width: ${(props) => (props.isclick ? "72px" : "150px")};
    height: ${(props) => (props.isclick ? "72px" : "150px")};
  }
`;


const HomePage = () => {

  const [path, setPath] = useState("");
  const [isclick, setIsClick] = useState(false)
  const mq = window.matchMedia("(max-width: 50em)").matches;

  const handleClick = () => setIsClick(!isclick);

  const moveY = {
    y: "-100%",
  };
  const moveX = {
    x: `${path === "blog" ? "100%" : "-100%"}`,
  };

  return (
    <Suspense fallback={<Loader />}>
      <MainContainer key="modal" transition={{ duration: 0.5 }}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        exit={path === "about" || path === "skills" ? moveY : moveX}
      >
        <DarkDiv isclick={isclick} />
        <Container>
          <PowerButton />
          <Logo theme={isclick ? 'dark' : 'light'} />

          {mq ? (
            <SocialIcons theme='light' />
          ) : (
            <SocialIcons theme={isclick ? 'dark' : 'light'} />
          )}

          <Center isclick={isclick} onClick={() => handleClick()}>
            <ReactSvg fill='currentColor'
              width={isclick ? 150 : 200} height={isclick ? 150 : 200} />
            <span>Click me</span>
          </Center>

          {mq ? (
            <>
              <Contact theme="light" isclick={isclick} />
              <ShowCaseLinkFromHome theme="light" isclick={isclick}
                onClick={() => setPath("work")} />
            </>
          ) : (
            <>
              <Contact theme={isclick ? 'dark' : 'light'} />
              <ShowCaseLinkFromHome theme={isclick ? 'dark' : 'light'}
                onClick={() => setPath("work")} />
            </>
          )}

          <Blog to='/blog' isclick={isclick} >
            <motion.h2  onClick={() => setPath('blog')}
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
          <BottomBar>
            <About to='/about' isclick={mq ? +false : +isclick} >
              <motion.h2 onClick={() => setPath("about")}
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
              <motion.h2 onClick={() => setPath("skills")}
                initial={{
                  y: 200,
                  transition: { type: 'spring', duration: 1.5, delay: 1 }
                }}
                animate={{
                  y: 0,
                  transition: { type: 'spring', duration: 1.5, delay: 1 }
                }}
                whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
              >Skills.</motion.h2>
            </Skills>
          </BottomBar>
        </Container>
        {isclick ? <Intro /> : null}
      </MainContainer>
    </Suspense>
  )
}

export default HomePage