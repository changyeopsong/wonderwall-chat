import React, {FC} from 'react';
import loadable from '@loadable/component';

import {Container} from './styles';
import {TabInfo} from '_components/TabController/types';
import {Route, RouteComponentProps} from 'react-router-dom';
import {Path} from 'Constants';
import Collaboration from './_components/Collaboration';
import Product from './_components/Product';
import Store from './_components/Store';
import CollaborationHome from './_components/CollaborationHome';
import {Tab} from '_components/TabController/_components';

const TabController = loadable(() => import('_components/TabController'));

export const Home: FC<RouteComponentProps> = ({match}) => {
    const tabInfo: TabInfo[] = [
        {
            text: 'PRODUCT',
            path: Path.Product
        },
        {
            text: 'COLLABORATION',
            path: Path.Collaboration
        },
        {
            text: 'STAGE',
            path: Path.Stage
        },
        {
            text: 'NIMO',
            path: '/error'
        },
        {
            text: 'TITAN',
            path: '/koo'
        }
    ];

    return (
        <Container>
            <TabController gutter={1.56} startPath={Path.Collaboration} tab={Tab} tabInfos={tabInfo}>
                <Route component={Product} path={`${match.path}${Path.Product}`} />
                <Route component={CollaborationHome} path={`${match.path}${Path.Collaboration}`} exact />
                <Route component={Collaboration} path={`${match.path}${Path.Collaboration}/:path`} />
                <Route component={Store} path={`${match.path}${Path.Store}`} />
            </TabController>
        </Container>
    );
};
