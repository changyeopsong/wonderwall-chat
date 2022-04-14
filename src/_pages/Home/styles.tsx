import styled from 'styled-components';

import {Color, Dimension} from 'Constants';
import {Tab} from '_components/TabController/_components';

export const Container = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    max-width: ${Dimension.maxWidth};
    min-height: 40rem;
    display: flex;
`;

export const StyledTab = styled(Tab)`
    background-color: ${Color.creamGold};
    color: ${Color.black};
    border-radius: 100px;
    padding: 0;
    display: block;
`;
