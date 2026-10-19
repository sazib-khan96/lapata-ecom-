import React from 'react';
import Links from '../Links/Links';
import { Link } from 'lucide-react';


const navItems = [
  {
    id: "nav-01",
    title: "Home",
    path: "/"
  },
  {
    id: "nav-02",
    title: "Shop",
    path: "/shop"
  },
 
  {
    id: "nav-03",
    title: "New Arrivals",
    path: "/new-arrivals"
  },
  
  {
    id: "nav-04",
    title: "Offers",
    path: "/offers"
  },
  {
    id: "nav-05",
    title: "About Us",
    path: "/about"
  },
  {
    id: "nav-06",
    title: "Contact",
    path: "/contact"
  }
];
const menu  =    navItems.map(nav => <Links nav={nav} key={nav.id}></Links>)
const Navigation = () => {

    return (
        <div className='border flex gap-5 justify-between items-center p-3'>

          <h1 className='text-2xl font-bold '>Lapata</h1>
           <nav className='flex gap-5 justify-center items-center'>
             {
              menu
            }
           </nav>
           <button className='px-4 py-2 btn'>Help</button>
        </div>
    );
};

export default Navigation;