"use client";
import React from "react";

const About = () => {
  return (
    <div>
      <div className="container">
        <h1>This is about me</h1>
        <p>Hey i am good boy</p>

        <style jsx global>
          {`
            .container {
              background-color: red;
              color: black;
            }
          `}
        </style>
      </div>
      <div className="container">Hey</div>
    </div>
  );
};

export default About;
