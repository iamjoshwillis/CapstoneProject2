import React from "react";

const HouseDetail = ({ name, founder, image, description }) => {
  return (
    <div className="w-1/3 flex font-sans p-1 rounded-lg mb-4 ">
      <div className="flex-none w-48 h-48 relative rounded-l-md">
          <img
            src={image}
            alt=""
            className="w-full h-full rounded-l-lg object-cover object-top"
          />
        </div>
      <div className="shadow-lg bg-gray-800 rounded-r-lg flex-auto p-1">
        <h6 className="text-2xl font-semibold text-slate-200">{name}</h6>
        <p className="w-full flex-none text-md text-slate-100 mt-2">
          Founder: {founder}
        </p>
        <p className="w-full flex-none text-sm text-slate-400 mt-2">
          {description}
        </p>
      </div>
    </div>
  );
};

export default HouseDetail;