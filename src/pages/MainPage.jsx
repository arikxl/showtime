import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../components/Logo';
import PowerButton from '../components/PowerButton';
import SocialIcons from '../components/SocialIcons';

const MainContainer = styled.section`
  background: ${props => props.theme.body};
  color: ${props => props.theme.text};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;

  h1,h2,h3,h4,h5,h6{
    /* font-family: 'Karla', sans-serif; */
    font-weight:500;
  }
`;

const Container = styled.div`
  padding:2rem;
`;

const Contact = styled.a`
    color:${props => props.theme.text};
    position: absolute;
    top: 2rem;
    right: calc(1rem + 2vw);
    text-decoration: none;
    z-index: 1;
`;

const Blog = styled(NavLink)`
    color:${props => props.theme.text};
    position: absolute;
    top: 50%;
    right: calc(1rem + 2vw);
    transform: rotate(90deg) translate(-50%,-50%);
    text-decoration: none;
    z-index: 1;
`;

const MainPage = () => {
  return (

    <MainContainer>
      <Container>
        <PowerButton />
        <Logo />
        <SocialIcons />
        <Contact href='mailto:arikxl@gmail.com' target='_blank'>
          <h3>Say hi...</h3>
        </Contact>
        <Blog to='/blog' >
          <h3>Blog</h3>
        </Blog>

      </Container>

    </MainContainer>
  )
}

export default MainPage