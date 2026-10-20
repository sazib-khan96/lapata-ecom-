import React from 'react';
import Navigation from './../Component/Navigation/Navigation';
import { Outlet } from 'react-router';
import Footer from '../Component/Footer/Footer';

const Root = () => {
    //this file is main layout all project
    return (
        <div className=''>
            <Navigation></Navigation> 
           <main className='max-w-7xl mx-auto'>
             <Outlet></Outlet>
           </main>
           <div className='bg-black w-full'>
             <Footer></Footer>
           </div>
        </div>
    );
};

export default Root;