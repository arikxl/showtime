import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
    position: fixed;
    top: ${props => props.top};
    left: ${props => props.left};
    right: ${props => props.right};
    color: ${props => `rgba(${props.theme.textRgba}, 0.1)`};
    font-size: calc(5rem + 5vw);
    z-index: 0;
`;

const BigTitle = (props) => {

    const { text, top, left, right, bottom } = props;

    return (
        <Title top={top} left={left} right={right} bottom={bottom}>
            {text}
        </Title>
    )
}

export default BigTitle