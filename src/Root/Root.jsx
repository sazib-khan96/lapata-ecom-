import React from 'react';
import Navigation from './../Component/Navigation/Navigation';
import { Outlet } from 'react-router';
import Footer from '../Component/Footer/Footer';

const Root = () => {
    //this file is main layout all project
    return (
        <div className='max-w-7xl mx-auto'>
            <Navigation></Navigation> 
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;