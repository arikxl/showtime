import React from 'react';
import styled, { keyframes, ThemeProvider } from 'styled-components';

import Logo from '../components/Logo';
import BigTitle from '../components/BigTitle';
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
  padding:2.7rem 2rem;
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
  flex-direction: column;

  a{
    color: inherit;
    text-decoration: underLine;
    font-weight: bold;
    text-decoration-color: #61dafb;;
  }

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
          I'm a web developer located in Beer Sheva.
          I love to create simple yet beautiful websites with great user experience & a lot of imagination.
          <br /> <br />
          My interests in programming  are mainly the frontend stack.
          Like to try new ideas and building great projects.
          <br />
          In addition to being a independent freelancer,
          <br />
          I'm also a teacher.
          {/* I'm an independent freelancer and also a teacher. */}
          <br /> <br />
          My finest creation (a real piece of art) are my two kids.
          Most of my inspiration comes from them.

          <a href=" tel:+972-506860169">Let's talk</a>
        </Box>
        <BigTitle text="ABOUT" top="10%" left="5%"/>
      </Main>
    </ThemeProvider>
  )
}

export default AboutPage