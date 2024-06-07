import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PotterApi from "../api/api";

const ProfessorDetail = ({ name, house, image, courses }) => {
  return (
    <div className="w-1/3 flex font-sans p-1 rounded-lg">
      <div className="flex-none w-48 h-48 relative rounded-l-md">
          <img
            src={image}
            alt=""
            className="w-full h-full rounded-l-lg object-cover object-top"
          />
        </div>
      <div className="shadow-lg bg-gray-800 rounded-r-lg flex-auto p-6">
        <h6 className="text-2xl font-semibold text-slate-200">{name}</h6>
        <p className="w-full flex-none text-md text-slate-100 mt-2">
        House: {house}
        </p>
        <p className="w-full flex-none text-sm font-medium text-slate-300 mt-2">
        Courses: {courses}
        </p>
      </div>
    </div>
  );
};

export default ProfessorDetail;
