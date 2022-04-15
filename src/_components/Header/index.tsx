import React, {FC} from 'react';

import {Container, Logo} from './styles';
import {Path} from 'Constants';
import Icon from '_components/_widgets/Icon';

import logo from '_res/_assets/ic_header_logo_white.svg';

export const Header: FC = () => {
    return (
        <Container>
            <Logo to={Path.Home}>
                <Icon src={logo} />
            </Logo>
        </Container>
    );
};
