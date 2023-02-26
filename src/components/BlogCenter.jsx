import React from 'react';
import styled from 'styled-components';

import BlogItem from './BlogItem';
import { Blogs } from '../data/BlogData';
import { mediaQueries } from '../style/Themes';

const CenterStyled = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 10rem;

    ${mediaQueries(30)`
        padding-top: 7rem;
    `};
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
    grid-gap: calc(1rem + 3vw);

    ${mediaQueries(50)`
        grid-template-columns: 100%;
    `};
`;



const BlogCenter = () => {
    return (
        <CenterStyled >
            <Grid>
                {Blogs.map(blog => (
                    <BlogItem blog={blog} key={blog.id} />
                ))}
            </Grid>
        </CenterStyled>
    )
}

export default BlogCenter