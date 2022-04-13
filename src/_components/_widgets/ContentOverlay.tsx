import styled, {css} from 'styled-components';

const ContentOverlay = styled.div<{opacity?: number}>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({opacity}) => css`rgba(0, 0, 0, ${opacity ? opacity : 0.1})`};
`;

export default ContentOverlay;
