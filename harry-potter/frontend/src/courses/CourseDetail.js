import React from "react";

const CourseDetail = ({ name, description, professor, time }) => {

  return (
    <div className="w-1/2 flex font-sans p-2">
      <div className="shadow-lg bg-gray-700 rounded-lg flex-auto p-6">
        <h6 className="text-2xl font-semibold text-slate-300">{name}</h6>
        <p className="w-full flex-none text-md text-slate-400 mt-2">{description}</p>
        <p className="w-full flex-none text-md text-slate-300 mt-2">{professor}</p>
        <p className="w-full flex-none text-md text-slate-400 mt-2">{time}</p>
      </div>
    </div>
);
};

export default CourseDetail;
