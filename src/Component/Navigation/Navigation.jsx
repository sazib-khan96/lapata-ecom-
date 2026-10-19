import React, { useState } from 'react';
import Links from '../Links/Links';

import { X ,Menu} from 'lucide-react';

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
const [open,setOpen] = useState(false)

    return (
        <div className='flex gap-5 justify-between items-center p-3 z-50  bg-gray-200 shadow-2xl'>
             <span onClick={()=> setOpen(!open) } className='flex gap-2 md:hidden'> 
              {
                open? <X className='text-red-400' /> : <Menu />
             }
             Menu
             </span>
          <h1 className='text-2xl font-bold '>Lapata</h1>
           <nav className='hidden md:flex gap-5 justify-center items-center'>
             {
              menu
            }
           </nav>
           {/* mobile  */}
           <nav className={`absolute z-30 -top-60 left-0 ${open ? "top-16" : ""} bg-gray-200 w-full px-3 text-blue-400 py-5 `}>
            {
              menu
            }
           </nav>
           <button className='px-4 py-2 btn'>Help</button>
        </div>
    );
};

export default Navigation;