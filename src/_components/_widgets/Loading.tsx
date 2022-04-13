import styled, {keyframes} from 'styled-components';

import {Color, BreakPoint} from 'Constants';

const rotateClock = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const rotateCounterClock = keyframes`
  to {
    transform: rotate(-360deg);
  }
`;

const Loading = styled.div`
    position: relative;
    width: 5rem;
    height: 5rem;
    box-sizing: border-box;
    border-top: 0.5rem solid ${Color.whiteAlpha(0.9)};
    margin: auto;
    animation: ${rotateClock} 2s linear infinite;
    border-radius: 50%;

    ${BreakPoint.Phone} {
        width: 3rem;
        height: 3rem;
        border-top: 0.3rem solid ${Color.whiteAlpha(0.9)};
    }

    &:before,
    &:after {
        position: absolute;
        top: -0.5rem;
        left: 0;
        width: 5rem;
        height: 5rem;
        box-sizing: border-box;
        border-radius: 50%;
        content: '';

        ${BreakPoint.Phone} {
            top: -0.3rem;
            width: 3rem;
            height: 3rem;
        }
    }

    &:before {
        border-top: 0.5rem solid ${Color.whiteAlpha(0.6)};
        transform: rotate(120deg);

        ${BreakPoint.Phone} {
            border-top: 0.3rem solid ${Color.whiteAlpha(0.6)};
        }
    }

    &:after {
        border-top: 0.5rem solid ${Color.whiteAlpha(0.3)};
        transform: rotate(240deg);

        ${BreakPoint.Phone} {
            border-top: 0.3rem solid ${Color.whiteAlpha(0.3)};
        }
    }

    span {
        position: absolute;
        width: 5rem;
        height: 5rem;
        animation: ${rotateCounterClock} 2s linear infinite;
        color: ${Color.white};
        font-size: 0.7rem;
        line-height: 5rem;
        text-align: center;

        ${BreakPoint.Phone} {
            width: 3rem;
            height: 3rem;
            line-height: 3rem;
        }
    }
`;

export default Loading;
