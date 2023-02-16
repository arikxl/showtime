import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import {  Develope, Education } from '../components/AllSvg';
import Logo from '../components/Logo';
import PowerButton from '../components/PowerButton';
import SocialIcons from '../components/SocialIcons';
import { lightTheme } from '../style/Themes';

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
        <Box>
          <Title>
            <Education width={40} height={40} />
            Teacher
          </Title>
          <Description>
            I love to create design which speaks, Keep it clean, minimal and simple.
          </Description>
          <Description>
            <strong>I LIKE TO DESIGN</strong>
            <ul>
              <li>Web Design</li>
              <li>Mobile Apps</li>
            </ul>
          </Description>
          <Description>
            <strong>TOOLS</strong>
            <ul>
              <li>Figma</li>
            </ul>
          </Description>
        </Box>
        <Box>
          <Title>
            <Develope width={40} height={40} />
            Frontend Developer
          </Title>
          <Description>
            I value business or brand for which i'm creating, thus i enjoy bringing new ideas to life.
          </Description>
          <Description>
            <strong>Skills</strong>
            <p>Html, Css, Js, React, Bootstrap, Tailwind, Firebase</p>
          </Description>
          <Description>
            <strong>TOOLS</strong>
            <p>VScode, Github, Codepen etc.</p>
          </Description>
        </Box>
      </Main>
    </ThemeProvider>
  )
}

export default SkillsPage