import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
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
`;

const SkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Main>
        <Box>
          <div>1</div>
        </Box>
        <Box>
          <div>2</div>
        </Box>
      </Main>
    </ThemeProvider>
  )
}

export default SkillsPage