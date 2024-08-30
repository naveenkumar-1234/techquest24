import React, { useState, useEffect, useRef } from "react";
import { Link } from 'react-scroll';
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { IoMdClose } from "react-icons/io";
import { RiMenu2Fill } from "react-icons/ri";
import navData from "../../data/NavData";

const NavBar = () => {
  const [isOpen, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        // console.log(menuRef)
        console.log(isOpen)
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 flex h-[4.5rem] justify-between items-center px-6 py-4 lg:px-10 lg:py-7 bg-glass-white backdrop-blur-md border border-white/20 rounded-lg shadow-lg z-50 ">

        <h1 className="font-bold text-xl text-black">MZCET</h1>
        <ul className="hidden lg:flex gap-10 font-semibold text-black">
          {navData.map((item, index) => (
            <li
              className="rounded-md cursor-pointer hover:bg-slate-600 transition-all duration-200"
              key={index}
            >
              <Link
                to={item.link}
                smooth={true}
                duration={500}
                className="block px-3 py-2"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="lg:hidden">
          {isOpen ? (
            <></>
          ) : (
            <RiMenu2Fill
              color="black"
              size={25}
              onClick={toggleMenu}
            />
          )}
        </div>
        <nav ref={menuRef} className={`fixed top-0 left-0 w-64 h-screen z-50 transition-transform duration-300 ${isOpen ? 'transform translate-x-0' : 'transform -translate-x-full'}`}>
          <Sidebar className="bg-white h-screen lg:hidden">
            <div className="bg-gray-300 px-3 py-5 flex justify-between items-center">
              <h1 className="font-bold text-xl text-white">MZCET</h1>
              <IoMdClose
                size={25}
                onClick={toggleMenu}
              />
            </div>
            <Menu className="font-semibold bg-gray-100 h-[90%]">
              {navData.map((item, index) => (
                <MenuItem key={index}>
                  <Link
                    to={item.link}
                    smooth={true}
                    duration={500}
                    className="block w-full"
                    onClick={toggleMenu}
                  >
                    {item.name}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Sidebar>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
