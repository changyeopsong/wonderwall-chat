import styled from 'styled-components';
import NavLink from '_components/_widgets/NavLink';
import {BreakPoint, Dimension} from 'Constants';

export const Container = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    max-width: ${Dimension.maxWidth};
    height: 4.25rem;
    display: flex;
`;

export const Logo = styled(NavLink)`
    width: 9.38rem;

    ${BreakPoint.BelowThanTablet} {
        width: 7.5rem;
    }
`;
