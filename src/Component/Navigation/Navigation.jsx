import React, { useState } from "react";
import Links from "../Links/Links";

import { X, Menu } from "lucide-react";
import { useNavigate } from "react-router";

const navItems = [
  {
    id: "nav-01",
    title: "Home",
    path: "/",
  },
  {
    id: "nav-02",
    title: "Shop",
    path: "/shop",
  },

  {
    id: "nav-03",
    title: "New Arrivals",
    path: "/new-arrivals",
  },

  {
    id: "nav-04",
    title: "Offers",
    path: "/offers",
  },
  {
    id: "nav-05",
    title: "About Us",
    path: "/about",
  },
  {
    id: "nav-06",
    title: "Contact",
    path: "/contact",
  },
  {
    id: "nav-07",
    title: "Wish List",
    path: "/wishList",
  },
];
const menu = navItems.map((nav) => <Links nav={nav} key={nav.id}></Links>);
const Navigation = () => {
  const navigate = useNavigate();
  const contactHandle = () => {
    navigate("/contact");
  };
  const [open, setOpen] = useState(false);

  return (
    <div className="relative z-50 flex items-center justify-between gap-4 sticky top-0  bg-white px-4 py-4 shadow-md md:px-8 ">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 text-gray-700 md:hidden"
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        {open ? (
          <X className="h-6 w-6 text-red-500" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
        <span className="text-sm font-medium">Menu</span>
      </button>

      {/* Logo */}
      <h1 className="text-xl font-bold tracking-wide text-gray-900 sm:text-2xl">
        <span className="text-3xl text-pink-500">L</span>a<span className="text-pink-600">pata</span>
      </h1>

      {/* Desktop Navigation */}
      <nav className="hidden items-center justify-center gap-6 md:flex">
        {menu}
      </nav>

      {/* Help Button */}
      <button
        onClick={contactHandle}
        className="rounded-lg bg-gray-700 px-4 py-2 text-sm font-semibold text-white transition duration-300 hover:bg-pink-700 sm:px-5"
      >
        Help
      </button>

      {/* Mobile Navigation */}
      <nav
        className={`absolute left-0 top-full w-full overflow-hidden bg-white shadow-lg transition-all duration-300 md:hidden ${
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="flex flex-col gap-4 px-5 py-5 text-gray-700"
          onClick={() => setOpen(false)}
        >
          {menu}
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
