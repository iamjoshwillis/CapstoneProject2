import React from "react";

const StudentDetail = ({ name, species, house, ancestry, patronus, image }) => {

  return (
    <div className="w-1/3 flex font-sans p-1 rounded-lg">
      <div className="flex-none w-48 h-48 relative rounded-l-md">
          <img
            src={image}
            alt="No Image"
            className="w-full h-full text-slate-100 rounded-l-lg object-cover object-top"
          />
        </div>
      <div className="shadow-lg bg-white rounded-lg flex-auto p-6">
        <h6 className="text-lg font-semibold text-slate-900">{name}</h6>
        <p className="w-full flex-none text-sm font-medium text-slate-700 mt-2">Species: {species}</p>
        <p className="w-full flex-none text-sm font-medium text-slate-700 mt-2">House: {house}</p>
        <p className="w-full flex-none text-sm font-medium text-slate-700 mt-2">Ancestry: {ancestry}</p>
        <p className="w-full flex-none text-sm font-medium text-slate-700 mt-2">Patronus: {patronus}</p>
      </div>
    </div>
);
};

export default StudentDetail;