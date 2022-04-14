import {StyledComponent} from 'styled-components';

export interface TabProps {
    width: string;
    text: string;
    path: string;
}

export interface TabItemProps {
    className?: string;
    width: string;
    isActivated: boolean;
}

export type TabType = StyledComponent<
    any,
    any,
    {
        className: 'clickable';
    } & TabItemProps,
    'className'
>;
