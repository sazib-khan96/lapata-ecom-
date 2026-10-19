import React from 'react';
import { NavLink } from 'react-router';
const Links = ({nav}) => {
    return (
        <div>
            <NavLink to={nav.path}>{nav.title}</NavLink>
        </div>
    );
};

export default Links;