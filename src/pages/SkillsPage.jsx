import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import {  Develope, Education } from '../components/AllSvg';
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
  line-height: 1.5;

  font-family: 'Ubuntu Mono', monospace;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);
`;

const SkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Main>
        <Box>
          <Title>
            <Education width={40} height={40} />
            Teacher
          </Title>
        </Box>
        <Box>
          <Title>
            <Develope width={40} height={40} />
            Frontend Developer
          </Title>
        </Box>
      </Main>
    </ThemeProvider>
  )
}

export default SkillsPage