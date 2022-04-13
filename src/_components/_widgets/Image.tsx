import {HTMLAttributes} from 'react';
import styled, {StyledComponent} from 'styled-components';

import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import 'lazysizes/plugins/attrchange/ls.attrchange';

export interface ImageProps extends HTMLAttributes<HTMLImageElement> {
    fadeIn?: boolean;
    objectFit?: 'cover' | 'fill';
    src?: File | string;
    'data-src'?: File | string;
}

const Image: StyledComponent<any, ImageProps> = styled.img.attrs<ImageProps>(({className, objectFit = 'cover'}) => ({className: `lazyload ${className ?? ''}`, objectFit}))<ImageProps>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    font-family: 'object-fit: ${({objectFit}) => objectFit};', serif;
    object-fit: ${({objectFit}) => objectFit};

    ${({fadeIn}) =>
        fadeIn &&
        `opacity: 0;

        &.lazyloaded {
            animation: 0.3s linear 0s 1 forwards imgFade;
        
            @keyframes imgFade {
                0% {
                    opacity: 0;
                }
                100% {
                    opacity: 1;
                }
            }
        }`}
`;

export default Image;
