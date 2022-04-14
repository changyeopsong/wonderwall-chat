import {HTMLAttributes} from 'react';
import styled, {StyledComponent} from 'styled-components';

export interface IconProps extends HTMLAttributes<HTMLImageElement> {
    src?: File | string;
}

const Icon: StyledComponent<any, IconProps> = styled.img<IconProps>`
    width: 100%;
    height: 100%;
    object-fit: contain;
`;

export default Icon;
