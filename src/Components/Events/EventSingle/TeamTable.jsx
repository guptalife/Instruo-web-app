import React from "react";

const TeamTable = ({ _id, teamName, leader, participants }) => {
  return (
    <>
      <div className="w-full flex flex-col px-2">
        <h2 className="mt-8 mb-6 text-4xl font-bold md:text-5xl">
          Team Information
        </h2>
        <h3 className="mb-4 text-md lg:text-xl">
          Team Name:
          <span className="mx-4 inline-block border-2 border-primary py-2 px-4 rounded-full">
            {teamName}
          </span>
        </h3>
        <h3 className="mb-4 text-sm lg:text-xl">
          Team ID:
          <span className="mx-4 inline-block border-2 border-primary py-2 px-4 rounded-full">
            {_id}
          </span>
        </h3>
      </div>
      <div className="overflow-x-auto w-full mb-16">
        <table className="table table-zebra w-full ">
          <thead>
            <tr>
              <td></td>
              <td>Name</td>
              <td>Institution</td>
              <td>Email</td>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td>
                <div className="font-bold whitespace-normal">
                  {`${leader.name} (leader)`}
                </div>
              </td>
              <td className="whitespace-normal">{leader.college}</td>
              <td className="whitespace-normal">{leader.email}</td>
            </tr>

            {participants?.map((parti, i) => (
              <tr key={i}>
                <td>{i + 2}</td>
                <td>
                  <div className="font-bold whitespace-normal">
                    {parti.name}
                  </div>
                </td>
                <td className="whitespace-normal">{parti.college}</td>
                <td className="whitespace-normal">{parti.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TeamTable;
