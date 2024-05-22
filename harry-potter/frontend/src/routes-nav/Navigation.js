import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import UserContext from "../auth/UserContext";

const Navigation = ({logout}) => {
  const { currentUser } = useContext(UserContext);

  function loggedInNav() {
    return (
      <div className="h-14 rounded-md bg-gradient-to-r from-purple-900 to-blue-900 mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <NavLink className="nav-link -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white" to="/">
        Home
        </NavLink>
        <NavLink className="nav-link -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white" to="/hogsmeade">
        Hogsmeade
        </NavLink>
        <NavLink className="nav-link -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white" to="/courses">
        Courses
        </NavLink>
        <NavLink className="nav-link -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white" to="/" onClick={logout}>
        Logout
        </NavLink>
      </div>
    );
  }
  
  function loggedOutNav() {
    return (
      <div className="h-14 rounded-md bg-gradient-to-r from-purple-900 to-blue-900 mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
            <NavLink className="nav-link -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white" to="/hogsmeade">
              Hogsmeade
            </NavLink>
            <NavLink className="nav-link -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white" to="/courses">
              Courses
            </NavLink>
        </div>
  );
  }

  return (
      <nav className="Navigation navbar navbar-expand-md">
        {currentUser ? loggedInNav() : loggedOutNav()}
      </nav>
  );
};

export default Navigation;
