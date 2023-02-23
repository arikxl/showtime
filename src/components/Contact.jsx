import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const ContactStyle = styled.a`
    color: ${(props) => (props.isclick === 'true' ? props.theme.body : props.theme.text)};
    position: absolute;
    top: 2rem;
    right: calc(1rem + 2vw);
    text-decoration: none;
    z-index: 1;

    :hover{
      color: #61dafb;
    }
`;

const Contact = ({ isclick }) => {
  return (
      <ContactStyle href='mailto:arikxl@gmail.com' target='_blank' isclick={isclick}>
          <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
              initial={{
                  y: -200,
                  transition: { type: 'spring', duration: 1.5, delay: 1 }
              }}
              animate={{
                  y: 0,
                  transition: { type: 'spring', duration: 1.5, delay: 1 }
              }}>
              Say hi...
          </motion.h2>
      </ContactStyle>
  )
}

export default Contact