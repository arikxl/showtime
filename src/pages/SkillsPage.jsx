import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import Logo from '../components/Logo';
import PowerButton from '../components/PowerButton';
import SocialIcons from '../components/SocialIcons';
import BlogParticle from '../components/BlogParticle';
import { lightTheme } from '../style/Themes';
import {  Develope, Education } from '../components/AllSvg';

const Main = styled.main`
  background-color:${props => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
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
    color:${props => props.theme.body};
    background-color: ${props => props.theme.text};
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);

    ${Box}:hover &{
    fill: ${props => props.theme.body};
  }
  &>*:first-child{
    margin-right: 1rem;
  }
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
    color:${props => props.theme.body};
    background-color: ${props => props.theme.text};
  }
`;

const SkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Main>
        <Logo theme='light' />
        <SocialIcons theme='light' />
        <PowerButton />
        <BlogParticle theme='light'/>
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
            <br/>
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
      </Main>
    </ThemeProvider>
  )
}

export default SkillsPage