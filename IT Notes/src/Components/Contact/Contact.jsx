import React from 'react'
import "../Contact/Contact.css"
import Button from '../Button/Button';

export const Contact = () => {
  return (
      <div className="contact-page">
        <h1 className="contact-title">Contact Us</h1>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Your Email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Your Message"></textarea>
          </div>
          <Button label="Send" />
        </form>
      </div>
    );
  };
  

