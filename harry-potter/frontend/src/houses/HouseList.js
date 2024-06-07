import React, { useState, useEffect } from "react";
import PotterApi from "../api/api";
import HouseDetail from "./HouseDetail"

const HouseList = () => {
  const [houses, setHouses] = useState(null);

  useEffect(() => {
    async function loadData() {
      const housesData = await PotterApi.getHouses();
      setHouses(housesData);
    }
    loadData();
  }, []);

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold text-center">The Houses of Hogwarts</h1>
      <div className="flex justify-center flex-wrap gap-4">
        {houses &&
          Object.values(houses).map((house) => (
            <HouseDetail
              key={house.id}
              id={house.id}
              name={house.name}
              founder={house.founder}
              image={house.image_link}
              description={house.description}
            />
          ))}
      </div>
    </div>
  );
};

export default HouseList;