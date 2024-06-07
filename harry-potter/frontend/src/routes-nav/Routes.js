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

function RoutesGroup({ login, signup }) {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm login={login} />} />
        <Route path="/signup" element={<SignupForm signup={signup} />} />
        <Route path="/hogsmeade" element={<ItemsList />} />
        <Route path="/courses" element={<CourseList />} />
        <Route path="/professors" element={<ProfessorList />} />
        <Route path="/students" element={<StudentList />} />
        <Route path="/houses" element={<HouseList />} />
        <Route path="/spells" element={<SpellList />} />
        <Route path="/users/:username" element={<UserProfile />} />
        <Route path="/sortinghat" element={<SortingHat />} />
      </Routes>
    </div>
  );
}

export default RoutesGroup;
