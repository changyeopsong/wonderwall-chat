import React, {FC, useCallback, useEffect, useState} from 'react';
import {Switch, useHistory} from 'react-router';

import {Container, TabHeader} from './styles';
import {TabControllerProps, TabInfo} from './types';
import {Path} from 'Constants';

const TabController: FC<TabControllerProps> = ({startPath, tab, tabInfos, gutter, children}) => {
    const history = useHistory();

    const [width, setWidth] = useState('');

    useEffect(() => {
        if (startPath) {
            history.push(`${Path.Store}${startPath}`);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [startPath]);

    const calculateWidth = useCallback((gutter: number, tabInfos: TabInfo[]) => {
        const width = `calc(100% / ${tabInfos.length} - (${gutter}rem - ${gutter}rem / ${tabInfos.length}))`;

        setWidth(width);
    }, []);

    useEffect(() => {
        if (tabInfos && gutter) {
            calculateWidth(gutter, tabInfos);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [gutter, tabInfos]);

    return (
        <Container>
            <TabHeader>{React.Children.toArray(tabInfos.map(tabInfo => tab({...tabInfo, width})))}</TabHeader>
            <Switch>{children}</Switch>
        </Container>
    );
};

export default TabController;
