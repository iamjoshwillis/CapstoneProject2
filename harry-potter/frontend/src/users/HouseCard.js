import React from "react";

const HouseCard = ({ id, name, founder, image_link, description }) => {

  return (
    <div className="block max-w-sm p-1 bg-gray-900 border border-gray-200 rounded-lg shadow mx-2 ">
      <div className="border border-gray-300 rounded p-4">
        <h6 className="mb-2 text-2xl font-bold tracking-tight text-white">{name}</h6>
        <p className="mb-3 font-normal text-gray-200">{founder}</p>
        <p className="mb-3 font-normal text-gray-200">{description}</p>
      </div>
    </div>
);
};

export default HouseCard;