import React, { lazy, Suspense, useEffect, useRef } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { motion } from 'framer-motion';

import Loader from '../components/Loader';
import WorkCard from '../components/WorkCard';
import { Work } from '../data/WorkData';
import { ReactSvg } from '../components/AllSvg';
import { darkTheme, mediaQueries } from '../style/Themes';

const Logo = lazy(() => import('../components/Logo'));
const BigTitle = lazy(() => import('../components/BigTitle'));
const SocialIcons = lazy(() => import('../components/SocialIcons'));
const PowerButton = lazy(() => import('../components/PowerButton'));

const Main = styled(motion.div)`
  background-color:${props => props.theme.body};
  height: 400vh;
  position: relative;
  display: flex;
  /* align-items: center; */
`;

const Box = styled(motion.ul)`
  position: fixed;
  top: 10rem;
  left: calc(10rem + 15vw);
  height: 40vh;
  display: flex;
  color: white;

  ${mediaQueries(50)`
    left:calc(8rem + 15vw);
  `};

  ${mediaQueries(40)`
  top: 25%;
    left:calc(6rem + 15vw);
  `};

  ${mediaQueries(40)`
    left:calc(2rem + 15vw);
  `};

  ${mediaQueries(25)`      
    left:calc(1rem + 15vw);
  `};
`;

const Rotate = styled.span`
  position: fixed;
  bottom: 1rem;
  right:1rem;
  width: 80px;
  height: 80px;
  display: block;
  z-index:1;
`;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      duration: 0.5
    }
  }
}

const WorkPage = () => {

  const ref = useRef();
  const react = useRef();
  const mq = window.matchMedia("(max-width: 50em)").matches;

  useEffect(() => {
    let element = ref.current;

    const rotate = () => {
      element.style.transform = `translateX(${-window.pageYOffset}px)`;
      return (react.current.style.transform = "rotate(" + -window.pageYOffset + "deg)");
    }

    window.addEventListener('scroll', rotate)
    return () => window.removeEventListener('scroll', rotate);
  }, [])

  return (
    <ThemeProvider theme={darkTheme}>
      <Main key="work" initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
      >
        <Logo theme='dark' />
        <SocialIcons theme='dark' />
        <PowerButton />
        <Suspense fallback={<Loader />}>

          <Box ref={ref} variants={container} initial='hidden' animate='show'>
            {
              Work.map(w =>
                <WorkCard key={w.id} work={w} />
              )
            }
          </Box>
        </Suspense>
        <Rotate ref={react}>
          <ReactSvg width={80} height={80} />
        </Rotate>
        <BigTitle text="SHOWCASE" top="10%" left={mq ? "-7%" : '10%'} />
      </Main>
    </ThemeProvider>
  )
}

export default WorkPage