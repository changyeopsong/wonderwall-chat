import styled from 'styled-components';

import ClickableContainer from '_components/_widgets/ClickableContainer';
import {Color, Dimension} from 'Constants';

export const Container = styled(ClickableContainer)`
    display: flex;
    width: 100%;
    min-height: 100vh;
    flex-direction: column;
    align-items: center;
    background: ${Color.black};
`;

export const Main = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    max-width: ${Dimension.maxWidth};
    min-height: 80vh;
    flex: 0 1 auto;
    flex-direction: column;
    align-items: center;
`;
