import {FC} from 'react';
import {TabProps} from './_components/Tab/types';

export interface TabInfo {
    text: string;
    path: string;
}

export interface TabContainerProps {
    width: string;
}

export interface TabControllerProps {
    startPath?: string;
    tab: FC<TabProps>;
    tabInfos: TabInfo[];
    gutter: number;
    children: JSX.Element[] | JSX.Element | undefined;
}
