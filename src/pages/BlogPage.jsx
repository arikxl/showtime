import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from '../components/Logo';
import PowerButton from '../components/PowerButton';

const BlogPageStyled = styled.main`
  background-image: url('https://res.cloudinary.com/arikxl/image/upload/v1675717875/Ella2023/oo4fip5929ukgxq8feoz.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  width: 100vw;
  height: 100vh;
`;

const Container = styled.section`
  background-color: ${props => `rgba(${props.theme.bodyRgba}, 0.8)`};
  width: 100%;
  height: auto;
  position: relative;
  padding-bottom: 5rem;
`;

const BlogPage = () => {

  const [isClick, setIsClick] = useState(false)


  return (
    <BlogPageStyled>
      <Container>
        <PowerButton />
        <Logo theme={isClick ? 'dark' : 'light'} />

      </Container>
    </BlogPageStyled>
  )
}

export default BlogPage