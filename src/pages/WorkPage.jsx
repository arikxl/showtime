import React from 'react';
import styled, {  ThemeProvider } from 'styled-components';

import Logo from '../components/Logo';
import PowerButton from '../components/PowerButton';
import SocialIcons from '../components/SocialIcons';
import { darkTheme } from '../style/Themes';
import { Work } from '../data/WorkData';
import WorkCard from '../components/WorkCard';
import { ReactSvg } from '../components/AllSvg';

const Main = styled.main`
  background-color:${props => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;


const Box = styled.section`
  position: fixed;
  top: 12rem;
  left: calc(10rem + 15vw);
  height: 40vh;
  display: flex;
  color: white;
`;

const WorkPage = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Main>
        <Logo theme='dark' />
        <SocialIcons theme='dark' />
        <PowerButton />
        
        <Box>
          {
            Work.map(w =>
              
              <WorkCard key={w.id} work={ w} />

              )
          }
        </Box>
        <ReactSvg width={120} height={ 120} />
      </Main>

    </ThemeProvider>
  )
}

export default WorkPage