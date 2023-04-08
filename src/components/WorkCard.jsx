import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { Github } from './AllSvg';
import { mediaQueries } from '../style/Themes';

const Box = styled(motion.li)`
    width: 16rem;
    height:45vh;
    background-color:${props => props.theme.text};
    color:${props => props.theme.body};
    padding: 1.5rem 2rem;
    margin-right: 8rem;
    list-style-type: none;
    border-radius: 0 50px 0 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid ${props => props.theme.body};
    transition: all 0.2s ease;

    &:hover{
        border: 1px solid #61dafb;
        background-color:${props => props.theme.body};
        color:#61dafb;
    }
`;

const Title = styled.h2`
    font-size: calc(1em + 0.5vw);
`;
const Desc = styled.h2`
    font-size: calc(0.8em + 0.3vw);
    font-family: 'Karla', sans-serif;
    font-weight:500;

`;
const Tags = styled.div`
    border-top: 2px solid ${props => props.theme.body};
    padding: 0.5rem 0;
    display: flex;
    flex-wrap: wrap;
    ${Box}:hover &{
        border-top: 2px solid #61dafb;
    }

`;
const Tag = styled.span`
    margin-right: 1rem;
    font-size: calc(0.8em + 0.3vw);
`;
const Footer = styled.footer`
    display: flex;
    justify-content:space-between;

    .visit{
        color:  ${props => props.theme.text};
        background-color:  ${props => props.theme.body};
        text-decoration: none;
        padding: 0.5rem calc(2rem + 2vw);
        border-radius: 0 0 0 50px;
        font-size: calc(1em + 0.5vw);
        display:flex;
        justify-content: space-around;
        align-items: center;

        ${Box}:hover &{
            color:  ${props => props.theme.body};
            background-color: #61dafb;
        }
          .card-image{
        background-color:red;
         height: 90%;
        width:30px;
         margin-left:10px;
         display: flex;
         border-radius: 8px;
        }   
    }

  

    .github{

        fill:${props => props.theme.body};
        ${Box}:hover &{
            fill: #61dafb;
        }
    }
`;

const item = {
    hidden: {
        scale: 0
    },
    show: {
        scale: 1,
        transition: {
            type: 'spring',
            duration: 0.5
        }
    }
}

const Image  = styled.div`
    background-image: ${props => `url(${props.img})`};
    width: 100%;
    height: 60%;
    background-size: cover;
    border: 1px solid ${props => props.theme.body};
    background-position: top ;
    margin-bottom: 5px;
    border-radius: 0 10px 0 10px;
    

    ${Box}:hover &{
        border: 1px solid #61dafb;
    }
    ${mediaQueries(25)`
        height:70%;
    `};
`;


const WorkCard = ({ work }) => {

    const { id, name, description, tags, demo, github, imgSrc } = work;

    return (
        <Box key={id} variants={item}>
            <Title>{name}</Title>
            <Desc>{description.slice(0,80)}</Desc>
            <Image img={imgSrc} />

            <Tags>
                {
                    tags.map((t, id) => {
                        return <Tag key={id}>#{t}</Tag>
                    })
                }
            </Tags>
            <Footer>
                <a className="visit" href={demo} target="_blank" rel="noreferrer">
                    Visit
                    {/* <img src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/04/attachment_82290822-e1492536097660.png?auto=format&q=60&fit=max&w=930" alt="" className='card-image'/> */}
                </a>
                <a className="github" href={github} target="_blank" rel="noreferrer">
                    <Github width={40} height={40} />
                </a>
            </Footer>
        </Box>
    )
}

export default WorkCard