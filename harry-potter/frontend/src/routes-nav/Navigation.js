import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import UserContext from "../auth/UserContext";

const Navigation = ({logout}) => {
  const { currentUser } = useContext(UserContext);

  function loggedInNav() {
    return (
      <div className="h-14 rounded-md bg-gradient-to-r from-indigo-900 to-black mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <NavLink className="nav-link -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-300" to="/">
        My Profile
        </NavLink>
        <NavLink className="nav-link -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-300" to="/professors">
        Staff
        </NavLink>
        <NavLink className="nav-link -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-300" to="/spells">
        Spells
        </NavLink>
        <NavLink className="nav-link -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-300" to="/students">
        Community
        </NavLink>
        <NavLink className="nav-link -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-300" to="/hogsmeade">
        Hogsmeade
        </NavLink>
        <NavLink className="nav-link -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-300" to="/courses">
        Courses
        </NavLink>
        {/* <NavLink className="nav-link -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-300" to="/sortinghat">
        Sorting Hat
        </NavLink> */}
        <NavLink className="nav-link -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-300" to="/" onClick={logout}>
        Logout
        </NavLink>
      </div>
    );
  }
  
  function loggedOutNav() {
    return (
      <div className="h-14 rounded-md bg-gradient-to-r from-indigo-900 to-black mx-auto flex max-w-7xl items-center text-center justify-between p-6 lg:px-8">
        <NavLink className="nav-link -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-700" to="/">
        ohem
        </NavLink>
        <NavLink className="nav-link -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-700" to="/">
        ftfsa
        </NavLink>
        <NavLink className="nav-link -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-700" to="/">
        lsslpe
        </NavLink>
        <NavLink className="nav-link -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-700" to="/">
        mtcumoiyn
        </NavLink>
        <NavLink className="nav-link -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-700" to="/">
        aedsomhge
        </NavLink>
        <NavLink className="nav-link -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-700" to="/">
        eurossc
        </NavLink>
        <NavLink className="nav-link -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-700" to="/">
        iefymorlp
        </NavLink>
        <NavLink className="nav-link -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-700" to="/">
        lgootu
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
