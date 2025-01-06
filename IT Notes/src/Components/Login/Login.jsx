import React from "react";
import "../Login/Login.css";
import booksImage from "../../assets/img/books.png";
import Button from "../Button/Button";
import { Outlet, Link } from "react-router-dom";
import { Signup } from "../Signup/Signup";

export const Login = () => {


  const onClick= ()=>{

  }

  return (
    <>
      <div className="container">
        <div className="login-conatiner">
          <div className="left-side">
            <img src={booksImage} alt="loding" />
          </div>
          <div className="right-side">
            <h1>Login</h1>
            <form className="login-form">
              <label htmlFor="email">E-mail:</label>
              <input type="text" placeholder="E-mail" />
              <label htmlFor="password">Password</label>
              <input type="password" placeholder="Password" />
              <Button 
                label="Login"
                style={{
                  backgroundColor: "#28a745",
                  width: "60px",
                  color: "White",
                  borderRadius: "50px",
                  textAlign: "Centre"
                }}
                onClick={onClick}
              />
            </form>
            <p>Create an account? <Link to="/signup">Sign Up</Link></p>                
          </div>
        </div>
      </div>
    </>
  );
};


