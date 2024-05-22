import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../home/Home";
import LoginForm from "../auth/LoginForm";
import SignupForm from "../auth/SignupForm";
import ItemsList from "../hogsmeade/ItemsList";
import CourseList from "../courses/CourseList";
import ProfessorDetail from "../professors/ProfessorDetail";
import SpellDetail from "../spells/SpellDetail";
import UserProfile from "../users/UserProfile";
import SortingHat from "../users/SortingHat";

function RoutesGroup({ login, signup }) {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm login={login} />} />
        <Route path="/signup" element={<SignupForm signup={signup} />} />
        <Route path="/hogsmeade" element={<ItemsList />} />
        <Route path="/courses" element={<CourseList />} />
        <Route path="/professors/:id" element={<ProfessorDetail />} />
        <Route path="/spells" element={<SpellDetail />} />
        <Route path="/users/:username" element={<UserProfile />} />
        <Route path="/spells" element={<SpellDetail />} />
      </Routes>
    </div>
  );
}

export default RoutesGroup;
