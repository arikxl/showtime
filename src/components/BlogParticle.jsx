import React, { useCallback } from 'react';
import styled from 'styled-components';
import Particles from "react-particles";
import { loadFull } from "tsparticles";


import configDark from '../config/particlesjs-config.json';
import configLight from '../config/particlesjs-config-light.json';

const Box = styled.div`
  position: absolute;
  top:0;
  right:0;
  left:0;
  bottom:0;
  z-index:0;
`;


const BlogParticle = (props) => {

  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await console.log(container);
  }, []);

  return (
    <Box>
      {/* <Particles params={props.theme === 'light' ? configLight : configDark}
        style={{ position: 'absolute', top: 0 }} /> */}
      <Particles
        params={props.theme === 'light' ? configLight : configDark}
        style={{ position: 'absolute', top: 0 }}
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{ fpsLimit: 120 }}
      />
    </Box>
  )
}

export default BlogParticle