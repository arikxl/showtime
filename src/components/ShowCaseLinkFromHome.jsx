import React from 'react'
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const ShowCaseLinkStyle = styled(NavLink)`
    color: ${(props) => (props.isclick ? props.theme.body : props.theme.text)};
    position: absolute;
    top: 52%;
    right: calc(1rem + 2vw);
    transform: rotate(90deg) translate(-50%,-50%);
    z-index: 1;

    :hover{
      color: #61dafb;
    }

    @media only screen and (max-width: 50em) {
        text-shadow: ${(props) => (props.isclick ? "0 0 4px #000" : "none")};
    }
`;

const ShowCaseLinkFromHome = ({ isclick }) => {
  return (
      <ShowCaseLinkStyle to='/work' isclick={isclick}>
          <motion.h2
              initial={{
                  y: -200,
                  transition: { type: 'spring', duration: 1.5, delay: 1 }
              }}
              animate={{
                  y: 0,
                  transition: { type: 'spring', duration: 1.5, delay: 1 }
              }}
              whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
          >Showcase</motion.h2>
      </ShowCaseLinkStyle>
  )
}

export default ShowCaseLinkFromHome