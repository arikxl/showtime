import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { Github } from './AllSvg';

const Box = styled(motion.li)`
    width: 16rem;
    height:40vh;
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
        border: 1px solid ${props => props.theme.text};
        background-color:${props => props.theme.body};
        color:${props => props.theme.text};
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
    padding-top: 0.5rem;
    display: flex;
    flex-wrap: wrap;
    ${Box}:hover &{
        border-top: 2px solid ${props => props.theme.text}
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

        ${Box}:hover &{
            color:  ${props => props.theme.body};
            background-color:  ${props => props.theme.text};
        }
    }

    .github{
        fill:${props => props.theme.body};
        ${Box}:hover &{
            fill:  ${props => props.theme.text};
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

const WorkCard = ({ work }) => {

    const { id, name, description, tags, demo, github } = work;

    return (
        <Box key={id} variants={ item}>
            <Title>{name}</Title>
            <Desc>{description}</Desc>
            <Tags>
                {
                    tags.map((t, id) => {
                        return <Tag key={id}>#{t}</Tag>
                    })
                }
            </Tags>
            <Footer>
                <a className="visit" href={ demo } target="_blank" rel="noreferrer">
                    Visit
                </a>
                <a className="github" href={github } target="_blank" rel="noreferrer">
                    <Github width={ 30}  height={ 30 }/>
                </a>
            </Footer>
        </Box>
    )
}

export default WorkCard