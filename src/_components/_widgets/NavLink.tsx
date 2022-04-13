import {HTMLAttributes} from 'react';
import {NavLink as Link} from 'react-router-dom';
import styled from 'styled-components';

const NavLink = styled(Link).attrs<HTMLAttributes<HTMLAnchorElement>>(({className}) => ({className: `clickable ${className ?? ''}`}))`
    color: inherit;
    text-decoration: none !important;
`;

export default NavLink;
