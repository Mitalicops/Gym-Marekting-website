"use client";

import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
import { BiSearch } from "react-icons/bi";
import { HiHeart, HiOutlineHeart } from "react-icons/hi";
import { CiHeart } from "react-icons/ci";
const Menu = () => (
  <>
    <p>
      <a href="#aboutus">About us</a>
    </p>
    <p>
      <a href="#programs">Programs</a>
    </p>
    <p>
      <a href="#freebies">Freebies</a>
    </p>
    <p>
      <a href="#testimonials">Testimonials</a>
    </p>
    <p>
      <a href="#contact">Contact</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav>
      <div className="nav-items">
        <a href="#" className="logo">
          O
        </a>
        <ul className="navbar">
          <Menu />
        </ul>

        <div className="nav-search">
          <input type="text" placeholder="Search..."/>
          <CiHeart color="#fff" size={26} className="heart-icon"/>
          
        </div>

        <div className="sm-devices-menu">
          {toggleMenu ? (
            <RiCloseLine
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div
              className={`sm-devices-menu-container ${
                toggleMenu ? "scale-up-center" : ""
              }`}
            >
              <div className="sm-devices-menu-content">
                <Menu />
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
