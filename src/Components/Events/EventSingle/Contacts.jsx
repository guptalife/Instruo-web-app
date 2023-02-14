import React from "react";

const Contacts = ({ contacts }) => {
  return (
    <>
      <h2 className="mb-8 text-5xl font-bold text-center">Contact</h2>
      <div className="flex flex-col lg:flex-row items-center justify-around">
        {contacts.map((contact, idx) => (
          <div key={idx} className="text-center">
            <h4 className="text-xl">{contact.name}</h4>
            <p className="">
              <span>
                {"Phone: "}
                <a href={`tel: ${contact.phone}`}>+{contact.phone}</a>
              </span>
              <br />
              {contact.email.length > 0 && (
                <span>
                  {"Email: "}
                  <a href={`mailto: ${contact.email}`}>{contact.email}</a>
                </span>
              )}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Contacts;
