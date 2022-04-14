import {BreakPoint} from 'Constants';
import styled from 'styled-components';
import {Color} from '_design';

export const Container = styled.main`
    display: flex;
    width: 100%;
    flex-direction: column;
    margin-bottom: 15rem;
    color: ${Color.White};

    ${BreakPoint.Phone} {
        margin-bottom: 10rem;
    }
`;

export const SelectTabWrapper = styled.ul`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-top: 2.63rem;
    margin-bottom: 2.5rem;

    ${BreakPoint.Phone} {
        box-sizing: border-box;
        padding: 0 1.5rem;
        margin-top: 2.06rem;
        margin-bottom: 1.5rem;
    }
`;

export const Tab = styled.li.attrs(() => ({className: 'clickable'}))<{active: boolean}>`
    display: flex;
    justify-content: center;
    width: calc(33% - 1.56rem);
    align-items: center;
    border: ${({active}) => (active ? `1px solid ${Color.White}` : 'unset')};
    padding: 0.75rem 0;
    background-color: ${Color.Grey5};
    font-size: 1rem;
`;
