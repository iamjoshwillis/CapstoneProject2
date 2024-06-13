import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../home/Home";
import LoginForm from "../auth/LoginForm";
import SignupForm from "../auth/SignupForm";
import ItemsList from "../hogsmeade/ItemsList";
import CourseList from "../courses/CourseList";
import StudentList from "../students/StudentList";
import ProfessorList from "../professors/ProfessorList";
import HouseList from "../houses/HouseList";
import SpellList from "../spells/SpellList";
import UserProfile from "../users/UserProfile";
import SortingHat from "../houses/SortingHat";
import RequireHouse from "../hooks/requireHouse";

function RoutesGroup({ login, signup }) {
  return (
    <div>
      <Routes>
        <Route path="/" element={<RequireHouse><Home /></RequireHouse>} />
        <Route path="/login" element={<LoginForm login={login} />} />
        <Route path="/signup" element={<SignupForm signup={signup} />} />
        <Route path="/hogsmeade" element={<RequireHouse><ItemsList /></RequireHouse>} />
        <Route path="/courses" element={<RequireHouse><CourseList /></RequireHouse>} />
        <Route path="/professors" element={<RequireHouse><ProfessorList /></RequireHouse>} />
        <Route path="/students" element={<RequireHouse><StudentList /></RequireHouse>} />
        <Route path="/houses" element={<RequireHouse><HouseList /></RequireHouse>} />
        <Route path="/spells" element={<RequireHouse><SpellList /></RequireHouse>} />
        <Route path="/users/:username" element={<RequireHouse><UserProfile /></RequireHouse>} />
        <Route path="/sortinghat" element={<SortingHat />} />
      </Routes>
    </div>
  );
}

export default RoutesGroup;
