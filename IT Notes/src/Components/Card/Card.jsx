import React from "react";
import "./Card.css";
import Button from "../Button/Button";

const Card = ({
  language_image,
  language_name,
  about,
  link,
  style,
  label,
}) => {
  return (
    <>
      <section className="card-section" style={style}>
        <div className="card-img">
          <img src={language_image} alt="loading" />
        </div>
        <div className="card-discreption">
          <h3>Language-Name: {language_name}</h3>
        </div>
        <div className="card-about">
          <p>About:{about}</p>
        </div>
        <div className="card-btn">
          <Button link={link} label={label} />
        </div>
      </section>
    </>
  );
};

export default Card;
