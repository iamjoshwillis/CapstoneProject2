import React, { useState, useEffect } from "react";
import PotterApi from "../api/api";
import CourseDetail from "./CourseDetail";

const CourseList = () => {
  const [courses, setCourses] = useState(null);
  const [professors, setProfessors] = useState(null);

  useEffect(() => {
    async function loadData() {
      const coursesData = await PotterApi.getCourses();
      const professorsData = await PotterApi.getProfessors();
      setCourses(coursesData);
      setProfessors(professorsData);
    }
    loadData();
  }, []);

  
  const getProfessorName = (professorId) => {
    if (professors) {
      const professor = professors.find((prof) => prof.id === professorId);
      return professor ? professor.name : "Unknown Professor";
    }
    return "Loading...";
  };

  return (
    <div className="text-center">
      <h1 className="text-3xl p-6 font-bold text-slate-100 text-center">
          Explore Our Courses
        </h1>
      <div className="flex justify-center flex-wrap gap-4">
        {courses &&
          Object.values(courses).map((course) => (
            <CourseDetail
              key={course.id}
              id={course.id}
              name={course.name}
              description={course.description}
              professor={getProfessorName(course.professor)}
              time={course.time}
            />
          ))}
      </div>
    </div>
  );
};

export default CourseList;
