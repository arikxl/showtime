import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Logo from '../components/Logo';
import BlogPen from '../components/BlogPen';
import BigTitle from '../components/BigTitle';
import BlogCenter from '../components/BlogCenter';
import PowerButton from '../components/PowerButton';
import SocialIcons from '../components/SocialIcons';
import { motion } from 'framer-motion';

const BlogPageStyled = styled(motion.div)`
  background-image: url('https://res.cloudinary.com/arikxl/image/upload/v1675717875/Ella2023/oo4fip5929ukgxq8feoz.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
`;

const Container = styled.section`
  background-color: ${props => `rgba(${props.theme.bodyRgba}, 0.8)`};
  width: 100%;
  height: auto;
  position: relative;
  padding-bottom: 5rem;
`;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      duration: 0.5
    }
  }
}

const BlogPage = () => {

  const [numbers, setNumbers] = useState(0);

  useEffect(() => {
    let num = (window.innerHeight - 70) / 20;
    setNumbers(parseInt(num))
  }, [])

  return (
    <BlogPageStyled initial='hidden' variants={container}
      animate='show' exit={{ opacity: 0, transition: { duration: 0.5 } }}>
      <Container>
        <PowerButton />
        <Logo />
        <SocialIcons />
        <BlogPen numbers={numbers} />
        <BlogCenter />
        <BigTitle text="BLOG" top="5rem" left="5rem" />
      </Container>
    </BlogPageStyled>
  )
}

export default BlogPage