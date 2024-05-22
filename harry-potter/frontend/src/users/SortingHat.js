import React, { useState, useEffect } from "react";
import PotterApi from "../api/api";
import HouseCard from "./HouseCard";

const SortingHat = () => {
  const [houses, setHouses] = useState(null);

  useEffect(() => {
    async function loadHouses() {
      const housesData = await PotterApi.getHouses();
      setHouses(housesData);
    }
    loadHouses();
  }, []);

  return (
    <div className="text-center text-white">
      <h1 className="text-3xl font-bold text-white text-center">
        It's Time to Be Sorted!
      </h1>
      <h2 className="text-3xl font-bold text-white text-center">Our Houses</h2>
      <div className="flex justify-center flex-wrap gap-4">
        {houses &&
          Object.values(houses).map((house) => (
            <HouseCard
              key={house.id}
              id={house.id}
              name={house.name}
              description={house.description}
              founder={house.founder}
            />
          ))}
      </div>
      <button className="text-3xl text-black rounded-full bg-white p-8">Get Sorted!</button>
    </div>
  );
};

export default SortingHat;
