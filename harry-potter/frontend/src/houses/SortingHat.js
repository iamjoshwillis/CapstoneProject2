import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import PotterApi from "../api/api";
import HouseDetail from "./HouseDetail";
import UserContext from "../auth/UserContext";

const SortingHat = () => {
  const navigate = useNavigate();
  const [houses, setHouses] = useState(null);
  const { currentUser, setCurrentUser } = useContext(UserContext);

  useEffect(() => {
    async function loadHouses() {
      const housesData = await PotterApi.getHouses();
      setHouses(housesData);
    }
    loadHouses();
  }, []);

  //Sorting Button
  async function handleSort(e) {
    e.preventDefault();
    if (!currentUser) {
      console.error("Current user not available");
      return;
    }
    let result = await PotterApi.sortingHat(currentUser.username);
    setCurrentUser(result);
    if (result) {
      navigate("/");
    } else {
      navigate("/hogsmeade");
    }
  }

  return (
    <div className="text-center">
      <h1 className="text-3xl p-6 text-slate-100 font-bold text-center">
        The Sorting Hat
      </h1>
      <h6 className="text-xl p-2 text-slate-300 font-bold text-center">
        You will now be sorted into one of the following houses:
      </h6>
      <div className="flex justify-center flex-wrap gap-4">
        {houses &&
          Object.values(houses).map((house) => (
            <HouseDetail
              key={house.id}
              id={house.id}
              name={house.name}
              description={house.description}
              founder={house.founder}
              image={house.image_link}
            />
          ))}
      </div>
      <h6 className="text-xl p-2 text-slate-300 font-bold text-center">
        After sorting, your new magic will unlock all of the portal's features to explore
      </h6>
      <form className="space-y-6" onSubmit={handleSort}>
        <button
          type="submit"
          className="h-10 mr-3 px-6 py-1.5 font-semibold rounded-md border border-slate-200 text-white"
          onSubmit={handleSort}
        >
          Get Sorted
        </button>
      </form>
    </div>
  );
};

export default SortingHat;
