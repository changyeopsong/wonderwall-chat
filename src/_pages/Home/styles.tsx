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
