import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const Button = ({ link, label, style,onClick }) => {
  // const handleClick = () => {
  //   window.open(url, "_blank");
  // };

  return (
    // <button className="main-btn" onClick={handleClick}>
    //   {children}
    // </button>

    <Link
      className="main-btn"
      style={style} 
      to={link}
      onClick={onClick}
      rel="noopener noreferrer"
    >
      {label}
    </Link>
  );
};

export default Button;
