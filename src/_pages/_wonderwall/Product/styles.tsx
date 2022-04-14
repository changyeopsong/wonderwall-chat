import styled from 'styled-components';
import {Color} from '_design';

export const ProductContainer = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${Color.White};
`;

export const Categories = styled.section`
    display: flex;
    width: 78.66%;
    flex-wrap: wrap;
`;

export const Category = styled.div`
    display: flex;
    width: 25%;
    align-items: center;
    justify-content: center;
    font-size: 0.875rem;
    margin-top: 2.625rem;
    font-weight: 500;
    opacity: 1;

    :nth-child(-n + 4) {
        margin-top: 0;
    }

    &.clickable {
        opacity: 0.3;
    }
`;
