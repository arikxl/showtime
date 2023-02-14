import React, { useRef } from 'react';
import styled from 'styled-components';
import { Anchor, Link } from './AllSvg';


const Container = styled.div`
    position: relative;
`;

const Slider = styled.div`
  position: fixed;
  top:0;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translateY(-100%);
`;

const BlogAnchor = () => {
  
  const ref = useRef(null);
  const hiddenRef = useRef(null);
  
  return (
    <Container>
      <Slider ref={ref}>
        {
          [...Array(25)].map((x, id) => {
            return <Link key={id} width={25} height={25}
              fill='currentColor' className='chain' />
          })
        }
        <Anchor width={70} height={70} fill='currentColor' />
      </Slider>
    </Container>
  )
}

export default BlogAnchor