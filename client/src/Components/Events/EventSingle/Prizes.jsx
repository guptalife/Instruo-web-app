import React from "react";

const Prizes = ({ prizes }) => {
  return (
    <>
      <h2 className="mb-16 text-5xl font-bold text-center">Prizes</h2>
      <div className="flex justify-center">
        <div className="stats stats-vertical lg:stats-horizontal">
          {prizes.map((prize, idx) => (
            <div key={idx} className="stat place-items-center">
              <div className="stat-title ">{prize.standing}</div>
              <div className={`stat-value text-${prize.color}`}>
                {prize.reward}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Prizes;
