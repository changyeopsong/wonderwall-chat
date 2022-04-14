import styled from 'styled-components';

import {TabItemProps} from './types';
import {Color} from 'Constants';

export const TabItem = styled.div.attrs(() => ({className: 'clickable'}))<TabItemProps>`
    display: flex;
    width: ${({width}) => width};
    align-items: center;
    justify-content: center;
    padding: 0.75rem 0;
    border: ${({isActivated}) => (isActivated ? `1px solid ${Color.white}` : 'unset')};
    background-color: ${Color.Grey5};
    color: ${Color.white};
    font-size: 1rem;
    text-align: center;
`;
