import React from 'react';
import '../About/About.css';

export const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <h1 className="about-title">About Us</h1>
        <p className="about-tagline">Discover Our Story and Mission</p>
      </section>
      <section className="about-content">
        <h2>Who We Are</h2>
        <p>
          We are a passionate team dedicated to delivering exceptional experiences. Our journey began with a simple goal: 
          to make a difference by providing quality services and building lasting relationships. Through innovation and 
          a customer-first approach, we strive to create value in everything we do.
        </p>

        <h2>Our Mission</h2>
        <p>
          At the heart of our work lies a mission to inspire, innovate, and impact lives positively. We aim to empower 
          individuals and businesses through our expertise, ensuring that every interaction leaves a meaningful impression.
        </p>

        <h2>Our Values</h2>
        <ul>
          <li><strong>Integrity: </strong> We believe in honesty and transparency in all our endeavors.</li>
          <li><strong>Innovation: </strong> Continuously pushing boundaries to deliver creative solutions.</li>
          <li><strong>Excellence: </strong> Striving for the highest standards in everything we do.</li>
          <li><strong>Community: </strong> Building connections and giving back to society.</li>
        </ul>
      </section>
    </div>
  );
};


