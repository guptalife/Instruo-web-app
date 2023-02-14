import React from "react";

const SponsorCard = ({ img, name, url }) => {
  return (
    <a
      className="card border-0 shadow-md border-base-200 card-compact bg-white/5 hover:bg-gray-300/10 transition-all duration-200 hover:shadow-xl hover:-translate-y-1 justify-evenly"
      href={url || "#"}
      target="\_blank"
      rel="noopener"
    >
      <figure className="p-4 w-full aspect-[2/1] items-end max-h-32">
        <img className="w-full h-full object-contain" src={img} alt={name} />
      </figure>
      <div className="mb-2 text-center">
        <span className="text-lg">{name}</span>
      </div>
    </a>
  );
};

export default SponsorCard;
