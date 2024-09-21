import React from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <>
      <header>
        <nav className="navbar flex justify-between items-center">
            
          <div className="left flex">
            <img src={logo} alt="" />
            <span className="font-bold text-2xl text-[#2F4F4F]">
              <Link to="/">
              PassLocker
              </Link>
              </span>
          </div>

          <div className="right">
            <ul className="flex">
              <li className="p-3 text-[#2F4F4F] hover:bg-black hover:text-white transition duration-150 font-bold">
                <Link to="/about">About us</Link>
              </li>
              <li className="p-3 text-[#2F4F4F] hover:bg-black hover:text-white transition duration-150 font-bold" >
                <Link to="/services">services</Link>
              </li>

              <li className="p-3 text-[#2F4F4F] hover:bg-black hover:text-white transition duration-150 font-bold" >
                <Link to="/">home</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default navbar;
