import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="w-full h-14 fixed top-0 left-0 z-50">
      <div className="bg-cyan-500 flex justify-between items-center px-14 py-3">
        <img className="h-14 mx-auto sm:mx-0" src={logo} alt="logo" />
        <div className="sm:flex gap-5 text-quaternary hidden">
          <h1 className="text-center text-[20px] font-serif text-[#FFFFFF] hover:text-green-600 duration-300">Sistem Manajemen Ekskul SMA Negeri 8 Batam</h1>
        </div>
        <Link to="/login" className="border border-[#FFFFFF]  text-[#FFFFFF] font-serif hover:text-[#32CD32] hover:border-[#32CD32] duration-300 rounded-xl sm:w-32 text-xs sm:text-base p-2 hidden sm:block px-10">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
