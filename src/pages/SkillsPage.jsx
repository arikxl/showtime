import React, { lazy, Suspense } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import Loader from '../components/Loader';
import { Develope, Education } from '../components/AllSvg';
import { lightTheme, mediaQueries } from '../style/Themes';

const Logo = lazy(() => import('../components/Logo'));
const BigTitle = lazy(() => import('../components/BigTitle'));
const SocialIcons = lazy(() => import('../components/SocialIcons'));
const PowerButton = lazy(() => import('../components/PowerButton'));
const BlogParticle = lazy(() => import('../components/BlogParticle'));

const Main = styled.main`
  background-color:${props => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  ${mediaQueries(50)`
    flex-direction:column-reverse;  
    padding:8rem 0;
    height:auto;

    &>*:nth-child(5){
      margin-top:5rem;
    }       
  `};

  ${mediaQueries(30)`
    &>*:nth-child(5){
      margin-bottom:4rem;
    }       
  `};
`;

const Box = styled.section`
  background-color:${props => props.theme.body};
  width: 30vw;
  height: 60vh;
  border: 2px solid ${props => props.theme.text};
  color:  ${props => props.theme.text};
  padding: 2rem;
  z-index: 3;
  cursor: pointer;
  line-height: 1.5;

  font-family: 'Ubuntu Mono', monospace;
  display:flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover{
    color:#61dafb;
    background-color: ${props => props.theme.text};
  }

  ${mediaQueries(60)`
     height: 55vh;
  `};

  ${mediaQueries(50)`
    width: 50vw;
    height: max-content;
  `};
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);

  ${Box}:hover &{
    fill: #61dafb;
  }
  &>*:first-child{
    margin-right: 1rem;
  }

  ${mediaQueries(60)`
    font-size:calc(0.8em + 1vw);
  `};

  ${mediaQueries(50)`
    font-size:calc(1em + 2vw);
    margin-bottom:1rem;
  `};

  ${mediaQueries(30)`
    font-size:calc(1em + 1vw);
  `};
  ${mediaQueries(25)`
    font-size:calc(0.8em + 1vw);
    svg{
      width:30px;
      height:30px;
    }
  `};
`;

const Description = styled.div`
  color: ${props => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;

  strong{
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  ul,p{
    margin-left:2rem;
  }
    ${Box}:hover &{
    color:#61dafb;
    background-color: ${props => props.theme.text};
  }

  ${mediaQueries(50)`
    font-size: calc(0.8em + 1vw);
  `};

  ${mediaQueries(30)`
    font-size:calc(0.7em + 1vw);
  `};

  ${mediaQueries(25)`
    font-size:calc(0.5em + 1vw);
  `};
`;

const SkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Suspense fallback={<Loader />}>
        <Main>
          <Logo theme='light' />
          <SocialIcons theme='light' />
          <PowerButton />
          <BlogParticle theme='light' />
          <Box>
            <Title>
              <Education width={40} height={40} />
              Teacher
            </Title>
            <Description>
              Programming teacher and guide for all ages at all levels.
            </Description>
            <Description>
              <strong>Learning platforms</strong>
              <ul>
                <li>Trainings for companies</li>
                <li>Private lessons</li>
                <li>In person & online meetings</li>
              </ul>
            </Description>
            <Description>
              <strong>TOOLS</strong>
              <ul>
                <li>Zoom, PowerPoint, exercises.</li>
              </ul>
            </Description>
          </Box>
          <Box>
            <Title>
              <Develope width={40} height={40} />
              Web Developer
            </Title>
            <Description>
              From the planning phase to build.
              <br />
              Bringing new ideas to life.
            </Description>
            <Description>
              <strong>Skills</strong>
              <p>Html, Css, Js, Ts, Node, React, Vue, MUI, Tailwind, Firebase, MongoDB, MySQL, Figma, Canva...</p>
            </Description>
            <Description>
              <strong>TOOLS</strong>
              <p>VScode, Github, WordPress etc.</p>
            </Description>
          </Box>
          <BigTitle text="SKILLS" top="80%" right="20%" />
        </Main>
      </Suspense>
    </ThemeProvider>
  )
}

export default SkillsPage