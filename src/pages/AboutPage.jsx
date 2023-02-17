import React from 'react';
import styled, { keyframes, ThemeProvider } from 'styled-components';

import Logo from '../components/Logo';
import PowerButton from '../components/PowerButton';
import SocialIcons from '../components/SocialIcons';
import BlogParticle from '../components/BlogParticle';
import { darkTheme } from '../style/Themes';

const Main = styled.main`
  background-color:${props => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const float = keyframes`
  0% {transform: translateY(-10px)};
  50% {transform: translateY(15px) translateX(15px)};
  100% {transform: translateY(-10px)};
`;

const SpaceMan = styled.div`
  position:absolute;
  top:15%;
  right: 10%;
  width: 20vw;
  animation:${float} 4s infinite ease;

  img{
    width: 100%;
    height: auto;
    -moz-transform: scale(-1, -1);
    -o-transform: scale(-1, -1);
    -webkit-transform: scale(-1, -1);
    transform: scale(-1, 1);
  }

`;

const Box = styled.section`
  color: ${props => props.theme.text};
  border: 2px solid ${props => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(3px);
  position: absolute;
  left: calc(5rem + 5vw);
  top: 8rem;
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
`;

const AboutPage = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Main>
        <Logo theme='dark' />
        <SocialIcons theme='dark' />
        <PowerButton />
        <BlogParticle theme='dark' />
        <SpaceMan>
          <img src="https://res.cloudinary.com/arikxl/image/upload/v1676662205/Ella2023/ct4yl0raqzmclwzgztsh.png" alt="arik alexandrov" />
        </SpaceMan>

        <Box>
          I'm a front-end developer located in India. I love to create simple yet beautiful websites with great user experience.
          <br/> <br/>
          I'm interested in the whole frontend stack Like trying new things and building great projects. I'm an independent freelancer and blogger. I love to write blogs and read books.
          <br/> <br/>
          I believe everything is an Art when you put your consciousness in it. You can connect with me via social links.
        </Box>
       
      </Main>
    </ThemeProvider>
  )
}

export default AboutPage