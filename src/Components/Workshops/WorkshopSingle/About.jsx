import React from "react";

const About = ({ desc }) => {
  return (
    <>
      <h2 className="mb-8 text-5xl font-bold text-center">About</h2>
      <p className="mx-auto mb-5 w-full text-center px-2">{desc}</p>
    </>
  );
};

export default About;
