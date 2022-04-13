import React, {FC} from 'react';

import {Container} from './styles';
import {ButtonProps} from './types';

const Button: FC<ButtonProps> = ({className, type = 'white', inactive = false, disable = false, onClick, children, ...sizeStyle}) => {
    return (
        <Container className={className} disable={disable} inactive={!disable && inactive} type={type} onClick={!disable ? onClick : undefined} {...sizeStyle}>
            {children}
        </Container>
    );
};

export default Button;
