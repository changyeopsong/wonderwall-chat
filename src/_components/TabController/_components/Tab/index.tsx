import React, {FC, useCallback, useMemo} from 'react';
import {useHistory, useLocation} from 'react-router';

import {TabProps} from './types';
import {Path} from 'Constants';
import {TabItem} from './styles';

const Tab: FC<TabProps> = ({width, text, path}) => {
    const history = useHistory();
    const location = useLocation();

    const currentPath = useMemo(() => location.pathname.split('/')[2], [location]);
    const onTabItemClick = useCallback(() => {
        history.push(`${Path.Store}${path}`);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [path]);

    return (
        <TabItem className={'clickable'} isActivated={currentPath === path.replace('/', '')} width={width} onClick={onTabItemClick}>
            {text}
        </TabItem>
    );
};

export default Tab;
