import React, { useState } from "react";
import "../Header/Header.css";
import myImage from "../../assets/okok.png";
import { Link } from "react-router-dom";
import { FaGitSquare, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <section className="header-container">
        <div className="hearder-logo">
          <img src={myImage} alt="loading" width="40px" height="40px" />
          <h2>
            book<span style={{ color: "orangered" }}>Store</span>
          </h2>
        </div>

        <div className={`header-list ${isMenuOpen ? "active" : ""}`}>
          <ul className="items">
            <li>
              {" "}
              <Link to="/"> Dashboard </Link>
            </li>
            <li>
              {" "}
              <Link to="/About"> About </Link>
            </li>
            <li>
              {" "}
              <Link to="/Contact"> Contact </Link>
            </li>
            <li>
              {" "}
              <Link to="/Notes"> Notes </Link>
            </li>
            <li>
              {" "}
              <Link to="/Login"> Login </Link>
            </li>
          </ul>
        </div>
        <div className="header-last">
          <ul className="social-media">
            <li>
              <Link target="_blank" to="https://www.instagram.com">
                {" "}
                <FaInstagramSquare
                  className="iconss"
                  size="2rem"
                  color="#E4405F"
                />
              </Link>
            </li>
            <li>
              <Link
                target="_blank"
                to="https://www.linkedin.com/in/shaurya-pratap-singh-5599391b5"
              >
                {" "}
                <FaLinkedin className="icons" size="2rem" color="#0A66C2" />
              </Link>
            </li>
            <li>
              <Link
                target="_blank"
                to="https://github.com/Shauryapratapsingh001"
              >
                {" "}
                <FaGitSquare className="icon" size="2rem" color="yellow" />{" "}
              </Link>
            </li>
          </ul>
        </div>
        <div className="menu">
           <a href="#"> <GiHamburgerMenu /> </a> 
        </div>
      </section>
    </>
  );
};
