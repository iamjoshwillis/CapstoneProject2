import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../auth/UserContext";

const Home = () => {
  const { currentUser } = useContext(UserContext);

  function loggedInHome() {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="py-12 sm:py-9 mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <img
            className="h-auto max-w-m"
            src="../images/home-label.png"
            alt=""
          ></img>
          <h1 className="text-white">
            Hogwarts School of Witchcraft and Wizardry Student Portal
          </h1>
          <h3 className="text-white">Welcome, {currentUser.first_name}</h3>
          <h3 className="text-white">{currentUser.house}</h3>
          <h3 className="text-white">{currentUser.bio}</h3>
          <Link to="/users/{currentUser.username}" className="text-white round-md">Edit Profile</Link>
        </div>
      </div>
    );
  }

  function loggedOutHome() {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="py-12 sm:py-9 mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <img
            className="h-auto max-w-m"
            src="../images/home-label.png"
            alt=""
          ></img>
          <h1 className="text-white">
            Hogwarts School of Witchcraft and Wizardry Student Portal
          </h1>
          <p className="text-white">Driving innovation through magic.</p>
          <p className="text-blue-500">
            <Link to="/login">Log In</Link>
            <br />
            <Link to="/signup">New Student Registration</Link>
          </p>
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
