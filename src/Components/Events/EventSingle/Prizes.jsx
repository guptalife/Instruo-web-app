import React from "react";

const Prizes = ({ prizes }) => {
  return (
    <>
      <h2 className="mb-8 text-5xl font-bold text-center">Prize Money</h2>
      <h2 className="mb-16 text-5xl font-bold text-center text-secondary">
        {prizes[0].reward}
      </h2>
    </>
  );
};

export default Prizes;
