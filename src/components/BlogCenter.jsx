import React from 'react';
import styled from 'styled-components';

import BlogItem from './BlogItem';
import { Blogs } from '../data/BlogData';

const CenterStyled = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 10rem;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
    grid-gap: calc(1rem + 3vw);
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