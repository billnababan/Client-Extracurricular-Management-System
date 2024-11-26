import React from "react";
import { FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <>
      <footer className="lg:flex  px-10 bg-cyan-500 text-base-content ">
        <aside className="ml-5 mr-10">
          <img className="w-20 mx-auto mt-10 -mb-4" src={logo} alt="logo" />
          <p className="w-72 mt-16 text-white font-serif">Bengkong Pertiwi Blok D2 Nomor 13</p>
        </aside>
        <div className="grid lg:grid-cols-4 gap-20 mt-20 sm:mt-10">
          <nav className="flex flex-col">
            <h1 className="lg:text-3xl text-xl text-white font-semibold mb-5font-serif">Program</h1>
            <a className="link link-hover text-white">Ekskul</a>
            <a className="link link-hover text-white">Event</a>
            <a className="link link-hover text-white">Lomba</a>
            <a className="link link-hover text-white">Olimpiade</a>
          </nav>
          <nav className="flex flex-col">
            <h1 className="lg:text-3xl text-xl text-white font-semibold mb-5 font-serif">Komunitas</h1>
            <a className="link link-hover text-white">EWAKO sma 8 Batam</a>
            <a className="link link-hover text-white">News</a>
          </nav>
          <nav className="flex flex-col">
            <h1 className="lg:text-3xl text-xl text-white font-semibold mb-5 font-serif">About</h1>
            <a className="link link-hover text-white">About Us</a>
            <a className="link link-hover text-white">Career</a>
          </nav>
          <div className="text-center">
            <h1 className="lg:text-2xl text-xl text-white font-semibold mb-5 font-serif">Our Social Media</h1>
            <div className="flex justify-between mt-5">
              <FaInstagram size={50} className="text-red-600 hover:-translate-y-5 duration-300" />
              <FaLinkedin size={50} className="text-blue-100 hover:-translate-y-5 duration-300" />
              <FaTiktok size={50} className="text-black hover:-translate-y-5 duration-300" />
            </div>

            <p className="text-end mt-10 text-white">0895383418428</p>
            <p className="text-end text-white ">billnbbn@gmail.com</p>
          </div>
        </div>
      </footer>
      <div className="py-3 text-xs text-center bg-cyan-500 tracking-wide sm:text-xs">
        <h1>Copyright © 2024 | Bill Jeferson Nababan </h1>
      </div>
    </>
  );
};

export default Footer;
