import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import { Link, Pen } from './AllSvg';

const Container = styled.div`
    position: relative;
`;

const Slider = styled.div`
  position: fixed;
  top:0;
  right: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translateY(-100%);
  
  .chain{
    right:0;
    transform: rotate(135deg);
  }
`;


const BlogPen = (props) => {

  const ref = useRef(null);

  useEffect(() => {

    const handleScroll = () => {
      let scrollPosition = window.pageYOffset;
      let windowSize = window.innerHeight;
      let bodyHeight = document.body.offsetHeight;

      let diff = Math.max(bodyHeight - (scrollPosition + windowSize));
      let diffP = (diff * 100) / (bodyHeight - windowSize);

      ref.current.style.transform = `translateY(${-diffP}%)`
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  return (
    <Container>
      <Slider ref={ref}>
        {
          [...Array(props.numbers)].map((x, id) => {
            return <Link key={id} width={15} height={15}
              fill='currentColor' className='chain' />
          })
        }
        <Pen width={90} height={70} fill='currentColor' />
      </Slider>
    </Container>
  )
}

export default BlogPen