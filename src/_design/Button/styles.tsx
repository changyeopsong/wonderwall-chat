import styled, {css} from 'styled-components';

import {ButtonContainerProps} from './types';
import {Color, FontScale} from '_design';

export const Container = styled.div<ButtonContainerProps>`
    ${FontScale.Button}
    padding: ${({padding}) => (padding ? padding : '1.25rem 1.5rem')};
    border-radius: 0.25rem;
    color: ${Color.Black};
    cursor: ${({disable}) => (!disable ? 'pointer' : 'auto')};
    opacity: ${({inactive, disable}) => (inactive || disable ? 0.2 : 1)};
    text-align: center;

    ${({width}) => `
        ${width ? `width: ${width};` : ''}
    `}

    ${({paddingTop, paddingBottom, paddingLeft, paddingRight}) => `
        ${paddingTop ? `padding-top: ${paddingTop};` : ''}
        ${paddingBottom ? `padding-bottom: ${paddingBottom};` : ''}
        ${paddingLeft ? `padding-left: ${paddingLeft};` : ''}
        ${paddingRight ? `padding-right: ${paddingRight};` : ''}
    `}

    ${({type, disable}) =>
        disable || type === 'unclick'
            ? css``
            : css`
                  @media not all and (pointer: coarse), (-ms-high-contrast: none), (-ms-high-contrast: active) {
                      &:hover {
                          opacity: 0.8;
                      }
                  }
              `}

    ${({type}) => {
        switch (type) {
            case 'white':
                return css`
                    background-color: ${Color.White};
                `;
            case 'orange':
                return css`
                    background-color: ${Color.Orange};
                    color: ${Color.White};
                `;
            case 'grey':
                return css`
                    background-color: ${Color.Grey4};
                    color: ${Color.White};
                `;
            case 'outline':
                return css`
                    border: 1px solid ${Color.White};
                    background-color: ${Color.Black};
                    color: ${Color.White};
                `;
            case 'floatingWhite':
                return css`
                    padding: 1rem 1.5rem;
                    background-color: ${Color.White};
                `;
            case 'floatingOrange':
                return css`
                    padding: 1rem 1.5rem;
                    background-color: ${Color.Orange};
                    color: ${Color.White};
                `;
            case 'unclick':
                return css`
                    background-color: ${Color.Grey2};
                    color: ${Color.Grey3};
                    cursor: auto;
                `;
        }
    }}
`;
