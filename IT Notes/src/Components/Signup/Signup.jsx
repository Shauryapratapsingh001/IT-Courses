import React from "react";
import "../Signup/Signup.css";
import booksImage from "../../assets/img/books.png";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

export const Signup = () => {
  const onClick=()=>{

  }
  return (
    <>
      <div className="container">
        <div className="signup-conatiner">
          <div className="left-side">
            <img src={booksImage} alt="loding" />
          </div>
          <div className="right-side">
            <h1>Sign-up</h1>
            <form className="signup-form">
              <label htmlFor="username">Enter your name</label>
              <input type="text" placeholder="Your name" />
              <label htmlFor="email">E-mail:</label>
              <input type="text" placeholder="E-mail" />
              <label htmlFor="password">Password</label>
              <input type="text" placeholder="Password" />
              <Button 
                label="Sign-up"
                style={{
                  backgroundColor: "#28a745",
                  width: "60px",
                  color: "White",
                  borderRadius: "50px",
                 
                }}
                onClick={onClick}/>
           
            </form>
            <p>Already have an account? <Link to="/login">Login</Link></p>
          </div>
        </div>
      </div>
    </>
  );
};
