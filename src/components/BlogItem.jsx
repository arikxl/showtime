import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Box = styled(NavLink)`
    width: calc(10rem + 15vw);
    text-decoration: none;
    height: 18rem;
    padding: 1rem;
    color:  ${props => props.theme.text};
    border: 2px solid ${props => props.theme.text};
    backdrop-filter:blur(2px);
    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
    cursor: pointer;
    display: flex;
    flex-direction: column;
    z-index: 5;

    &:hover{
        background-color:  ${props => props.theme.text};
        color:  ${props => props.theme.body};
        color:  #61dafb;
        transition: all 0.3s ease;
    }
`;

const Image = styled.div`
    background-image: ${props => `url(${props.img})`};
    width: 100%;
    height: 60%;
    background-size: cover;
    border: 1px solid transparent;
    background-position: center center;

    ${Box}:hover &{
        border: 1px solid #61dafb;
    }
`;

const Title = styled.h3`
    padding: 0.5rem 0;
    padding-top: 1rem;
    font-family: 'Karla', sans-serif;
    font-weight: 700;
    border-bottom: 1px solid ${props => props.theme.text};

    ${Box}:hover &{
    border-bottom: 1px solid #61dafb;
    }
`;

const HashTags = styled.div`
    padding: 0.5rem 0;
 `;
const Tag = styled.span`
    padding-right: 0.5rem ;
`;
const Date = styled.span`
    padding: 0.5rem 0;
`;

const BlogItem = ({ blog }) => {

    const { name, tags, date, imgSrc, link } = blog;

  return (
      <Box target="_blank" to={ link }>
          <Image img={imgSrc}/>
          <Title>{name}</Title>
          <HashTags>
              {tags.map((tag, id) => {
                  return <Tag key={id}>#{tag}</Tag>;
              })}
          </HashTags>
          <Date>{date}</Date>
      </Box>
  )
}

export default BlogItem