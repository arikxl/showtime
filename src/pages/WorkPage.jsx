import React, { useEffect, useRef } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { motion } from 'framer-motion';

import Logo from '../components/Logo';
import BigTitle from '../components/BigTitle';
import WorkCard from '../components/WorkCard';
import PowerButton from '../components/PowerButton';
import SocialIcons from '../components/SocialIcons';
import { Work } from '../data/WorkData';
import { ReactSvg } from '../components/AllSvg';
import { darkTheme } from '../style/Themes';

const Main = styled.main`
  background-color:${props => props.theme.body};
  height: 400vh;
  position: relative;
  display: flex;
  align-items: center;
`;

const Box = styled(motion.ul)`
  position: fixed;
  top: 12rem;
  left: calc(10rem + 15vw);
  height: 40vh;
  display: flex;
  color: white;
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
      duration:0.5
    }
  }
}

const WorkPage = () => {

  const ref = useRef();
  const react = useRef();

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
      <Main>
        <Logo theme='dark' />
        <SocialIcons theme='dark' />
        <PowerButton />
        <Box ref={ref} variants={ container} initial='hidden' animate='show'>
          {
            Work.map(w =>
              <WorkCard key={w.id} work={w} />
            )
          }
        </Box>
        <Rotate ref={react}>
          <ReactSvg width={80} height={80} />
        </Rotate>
        <BigTitle text="Work" top="10%" left=" " right="20%" />
      </Main>
    </ThemeProvider>
  )
}

export default WorkPage