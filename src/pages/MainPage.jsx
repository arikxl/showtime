import React from 'react';
import styled from 'styled-components';

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

const MainPage = () => {
  return (

    <MainContainer>
      <Container>

        <h1>
          MainPage
        </h1>
      </Container>
    </MainContainer>
  )
}

export default MainPage