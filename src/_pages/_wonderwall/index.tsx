import loadable from '@loadable/component';
import {Path} from 'Constants';
import React, {FC, useCallback, useMemo} from 'react';
import {Route, RouteComponentProps, Switch} from 'react-router';
import {Container, SelectTabWrapper, Tab} from './styles';

const Product = loadable(() => import('./Product'));
const Collaboration = loadable(() => import('./Collaboration'));
const Stage = loadable(() => import('./Stage'));

type TabType = 'product' | 'collaboration' | 'stage';

const Wonderwall: FC<RouteComponentProps> = ({history, location}) => {
    const selectedTab = useMemo(() => location.pathname.split('/')[2], [location]);

    const onClickSelectTab = useCallback(
        (category: TabType) => {
            history.push(`/wonderwall/${category}`);
        },
        [history]
    );

    return (
        <Container>
            <SelectTabWrapper>
                <Tab active={selectedTab === 'product'} onClick={() => onClickSelectTab('product')}>
                    PRODUCT
                </Tab>
                <Tab active={selectedTab === 'collaboration'} onClick={() => onClickSelectTab('collaboration')}>
                    COLLABORATION
                </Tab>
                <Tab active={selectedTab === 'stage'} onClick={() => onClickSelectTab('stage')}>
                    STAGE
                </Tab>
            </SelectTabWrapper>
            <Switch>
                <Route component={Product} path={`/wonderwall${Path.Product}`} exact></Route>
                <Route component={Collaboration} path={`/wonderwall${Path.Collaboration}`}></Route>
                <Route component={Stage} path={`/wonderwall${Path.Stage}`}></Route>
            </Switch>
        </Container>
    );
};

export default Wonderwall;
