import React from "react";

const StoreDetail = ({ id, name, description }) => {

  return (
    <div className="w-1/3 flex font-sans p-2">
      <div className="shadow-lg bg-gray-700 rounded-lg flex-auto p-6">
        <h5 className="text-2xl font-semibold text-slate-300">{name}</h5>
        <p className="w-full flex-none text-md text-slate-400 mt-2">{description}</p>
      </div>
    </div>
);
};

export default StoreDetail;