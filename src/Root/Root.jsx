import React from 'react';
import Navigation from './../Component/Navigation/Navigation';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navigation></Navigation>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;