import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { SiGmail } from "react-icons/si";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineUserAdd,
  AiOutlineWhatsApp,
  AiFillGithub,
  AiFillDribbbleCircle
} from "react-icons/ai";
import { BsMessenger, BsFillEnvelopeOpenFill } from "react-icons/bs";
import { useState } from "react";

const Header = () => {
  const menulist = [
    <li className="">
      <Link to="/" className=" text-black">
        Home
      </Link>
    </li>,
    <li className="hover:text-black">
      <Link to="/about" className="">
        About
      </Link>
    </li>,
    // <li className="">
    //   <Link to="/service" className="hover:bg-sky-900">
    //     Services
    //   </Link>
    // </li>,
    <li className="">
      <Link to="/work" className="hover:bg-black">
        Work
      </Link>
    </li>,
    
    <li className="">
      <Link to="/contact" className="hover:bg-black">
        Contact
      </Link>
    </li>,
  ];

  const [nabver, setNavber] = useState(false);

  // scroll function
  const changeBackgroundcolor = () => {
    if (window.scrollY>= 80) {
      setNavber(true);
    } else {
      setNavber(false);
    }
  };

  window.addEventListener("scroll", changeBackgroundcolor);

  return (
    <div className='flex justify-between  fixed z-[999] w-full'>
      {/* navber  */}
      <div className="navbar    ">
        {/* dropdown */}
        <div className="navbar-start lg:hidden  ">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#4e4e4e] rounded-box w-52"
            >
              {menulist}
              
            </ul>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal  ms-20">{menulist}</ul>
        </div>
       
        <div className="justify-end lg:flex gap-3 lg:mr-20 hidden">
          <Link
            to="https://www.facebook.com/profile.php?id=100008659691451"
            className="text-yellow-300"
          >
            <AiFillFacebook />
          </Link>
          <Link
            to="https://www.instagram.com/mohiuddin_tanvir/"
            className=" text-yellow-400"
          >
            <AiFillInstagram />
          </Link>
          <Link
            to="https://www.linkedin.com/in/mohiuddin-molla-935562255/"
            className=" text-yellow-400 "
          >
            <AiFillLinkedin />
          </Link>
          <Link
            to="https://www.linkedin.com/in/mohiuddin-molla-935562255/"
            className=" text-yellow-400"
          >
            <AiFillGithub />
          </Link>
          <Link
            to="https://www.linkedin.com/in/mohiuddin-molla-935562255/"
            className=" text-yellow-400"
          >
            <AiFillDribbbleCircle />
          </Link>
          <Link
            to="https://mail.google.com/mail/u/0/?tab=rm&ogbl"
            className=" text-yellow-400"
          >
            <SiGmail />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
