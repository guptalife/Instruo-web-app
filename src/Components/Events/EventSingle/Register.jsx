import React from "react";
import { useStateContext } from "../../../Contexts/ContextProvider";
import RegisterModal from "./RegisterModal";
import TeamTable from "./TeamTable";

const Register = ({
  isRegistered,
  type,
  eventId,
  team,
  registration_amount,
  payment_link_iiest,
  payment_link,
  startDate,
}) => {
  const { loginUser } = useStateContext();

  if (!loginUser)
    return (
      <div className="bg-base-100 text-base-content mx-auto max-w-7xl my-4">
        <div className="w-full px-8 md:px-4 mx-auto flex flex-col">
          <div className="alert alert-info shadow-lg">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="stroke-current flex-shrink-0 w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span>Please login to register for this event</span>
            </div>
          </div>
        </div>
      </div>
    );
  if (new Date(startDate) < Date.now())
    return (
      <div className="bg-base-100 text-base-content mx-auto max-w-7xl my-4">
        <div className="w-full px-8 md:px-4 mx-auto flex flex-col">
          <div className="alert alert-error shadow-lg">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="stroke-current flex-shrink-0 w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span>Registrations are closed for this event</span>
            </div>
          </div>
        </div>
      </div>
    );
  return (
    <div className="bg-base-100 text-base-content mx-auto  max-w-md md:max-w-full">
      <div className="text-center font-bold text-xl">{`**Registration Amount: INR ${registration_amount}`}</div>
      <div className="text-center prose mx-auto my-4 font-semibold">
        {
          "**This amount will be collected at offline registration desk after verification of your details. You must confirm your participation at offline registration desk before starting of event."
        }
      </div>
      <div className="hero-content px-8 md:px-4 mx-auto flex flex-col">
        {isRegistered ? (
          <div className="w-full">
            <div className="alert alert-success shadow-lg">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current flex-shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Congratulations! You are registered for this event!</span>
              </div>
            </div>
            <div className="mt-4 flex justify-around">
              <a
                className="btn btn-secondary"
                href={payment_link_iiest}
                target="_blank"
              >
                REGISTER (IIEST)
              </a>
              <a
                className="btn btn-secondary"
                href={payment_link}
                target="_blank"
              >
                REGISTER (NON-IIEST)
              </a>
            </div>
          </div>
        ) : (
          <label
            id="reg"
            htmlFor="my-modal-6"
            className="btn btn-primary btn-wide lg:mx-4 my-2 lg:btn-lg"
          >
            Register
          </label>
        )}

        <div className="flex flex-col lg:flex-row">
          <input type="checkbox" id="my-modal-6" className="modal-toggle" />
          <div className="modal sm:modal-middle">
            <div className="modal-box">
              <label
                htmlFor="my-modal-6"
                className="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ✕
              </label>
              <RegisterModal type={type} eventId={eventId} />
            </div>
          </div>
        </div>
        {isRegistered && type === "Team" && <TeamTable {...team} />}
      </div>
    </div>
  );
};

export default Register;
