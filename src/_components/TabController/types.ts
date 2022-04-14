import React, {FC} from 'react';
import {Route} from 'react-router';

import {TabProps, TabType} from './_components/Tab/types';

export interface TabInfo {
    text: string;
    path: string;
}

export interface TabContainerProps {
    width: string;
}

export interface TabControllerProps {
    startPath?: string;
    tab: FC<TabProps> | TabType;
    tabInfos: TabInfo[];
    gutter: number;
    children: JSX.Element[] | JSX.Element | undefined;
}
