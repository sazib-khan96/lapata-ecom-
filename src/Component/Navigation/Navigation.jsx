import React from 'react';
import Links from '../Links/Links';


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
    title: "Three-Piece",
    path: "/category/three-piece"
  },
  {
    id: "nav-04",
    title: "New Arrivals",
    path: "/new-arrivals"
  },
  {
    id: "nav-05",
    title: "Best Sellers",
    path: "/best-sellers"
  },
  {
    id: "nav-06",
    title: "Offers",
    path: "/offers"
  },
  {
    id: "nav-07",
    title: "About Us",
    path: "/about"
  },
  {
    id: "nav-08",
    title: "Contact",
    path: "/contact"
  }
];

const Navigation = () => {
    return (
        <div className='border flex gap-5 justify-center items-center p-3'>
            {
                navItems.map(nav => <Links nav={nav}></Links> )
            }
        </div>
    );
};

export default Navigation;