import React, { useState, useEffect } from "react";
import PotterApi from "../api/api";
import ProfessorDetail from "./ProfessorDetail";

const ProfessorList = () => {
  const [professors, setProfessors] = useState(null);
  const [houses, setHouses] = useState(null);

  useEffect(() => {
    async function loadData() {
      const professorsData = await PotterApi.getProfessors();
      const housesData = await PotterApi.getHouses();
      setProfessors(professorsData);
      setHouses(housesData);
    }
    loadData();
  }, []);

  const getHouseName = (houseId) => {
    if (houses) {
      const house = houses.find((hse) => hse.id === houseId);
      return house ? house.name : "Unknown House";
    }
    return "Loading...";
  };

  return (
    <div className="text-center">
      <h1 className="text-3xl p-6 font-bold text-slate-100 text-center">Meet Our Staff</h1>
      <div className="flex justify-center flex-wrap gap-4">
        {professors &&
          Object.values(professors).map((professor) => (
            <ProfessorDetail
              key={professor.id}
              id={professor.id}
              name={professor.name}
              house={getHouseName(professor.house)}
              image={professor.image}
              courses={professor.courses}
            />
          ))}
      </div>
    </div>
  );
};

export default ProfessorList;