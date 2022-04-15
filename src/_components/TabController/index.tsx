import React, {FC, useCallback, useEffect, useState} from 'react';
import {Switch, useHistory} from 'react-router';

import {Container, TabHeader} from './styles';
import {TabControllerProps, TabInfo} from './types';
import {Path} from 'Constants';
import {TabProps, TabType} from './_components/Tab/types';

function isStyledComponent(tab: FC<TabProps> | TabType): tab is TabType {
    return (tab as TabType).styledComponentId !== undefined;
}

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

    const renderStyledComponent = useCallback(
        (tab: TabType, text: string, path: string, key: number) => {
            const StyledTab = tab;

            return <StyledTab key={key} path={path} text={text} width={width} />;
        },
        [width]
    );

    useEffect(() => {
        if (tabInfos && gutter) {
            calculateWidth(gutter, tabInfos);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [gutter, tabInfos]);

    return (
        <Container>
            <TabHeader>{isStyledComponent(tab) ? tabInfos.map((tabInfo, tabIndex) => renderStyledComponent(tab, tabInfo.text, tabInfo.path, tabIndex)) : React.Children.toArray(tabInfos.map(tabInfo => tab({...tabInfo, width})))}</TabHeader>
            <Switch>{children}</Switch>
        </Container>
    );
};

export default TabController;
