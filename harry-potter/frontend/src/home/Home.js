import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PotterApi from "../api/api";
import { useNavigate } from "react-router-dom";
import UserContext from "../auth/UserContext";

const Home = () => {
  const { currentUser } = useContext(UserContext);
  const [houses, setHouses] = useState(null);

  useEffect(() => {
    async function loadData() {
      const housesData = await PotterApi.getHouses();
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

  const chooseImage = (currentUser) => {
    if (!currentUser || typeof currentUser.house === "undefined") {
      return "/images/HogwartsEmblem.jpg";
    }
    switch (currentUser.house) {
      case 1:
        return "/images/SlytherinEmblem.jpg";
      case 2:
        return "/images/GryffindorEmblem.jpg";
      case 3:
        return "/images/RavenclawEmblem.jpg";
      case 4:
        return "/images/HufflepuffEmblem.jpg";
      default:
        return "/images/HogwartsEmblem.jpg";
    }
  };

  function loggedInHome() {
    {
      return (
        <div className="flex h-full">
          <div className="py-6 sm:py-9 mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <img src="/images/home-label.png" />
            <div className="flex flex-wrap font-sans p-1 rounded-lg">
              <div className="flex-none w-48 h-48 relative rounded-l-md">
                <img
                  src={chooseImage(currentUser)}
                  alt=""
                  className="w-full h-full rounded-l-lg object-cover object-top"
                />
              </div>
              <div className="shadow-lg bg-gray-800 rounded-r-lg flex-auto p-6">
                <h6 className="text-2xl font-semibold text-slate-300">
                  Welcome, {currentUser.first_name}
                </h6>
                <h3 className="w-full flex-none text-md text-slate-300 mt-2">
                  Student in {getHouseName(currentUser.house)}
                </h3>
                <h3 className="w-full flex-none text-md text-slate-400 mt-2">
                  {currentUser.bio}
                </h3>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  function loggedOutHome() {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="py-12 sm:py-9 mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <img src="/images/home-label.png" />
          <div className="mt-6 py-12 flex items-center justify-center">
            <Link
              to="/login"
              className="h-10 mr-3 px-6 py-1.5 font-semibold rounded-md border border-slate-200 text-white"
            >
              Log In
            </Link>
            <Link
              to="/signup"
              className="h-10 ml-3 px-6 py-1.5 font-semibold rounded-md border border-slate-200 text-white"
            >
              New Student Registration
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <nav className="Navigation navbar navbar-expand-md">
      {currentUser ? loggedInHome() : loggedOutHome()}
    </nav>
  );
};

export default Home;
