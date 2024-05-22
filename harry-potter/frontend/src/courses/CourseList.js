import React, { useState, useEffect } from "react";
import PotterApi from "../api/api";
import CourseCard from "./CourseCard";

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

  // Function to get professor name based on the foreign key
  const getProfessorName = (professorId) => {
    if (professors) {
      const professor = professors.find((prof) => prof.id === professorId);
      return professor ? professor.name : "Unknown Professor";
    }
    return "Loading..."; // Or you can return null or handle loading state accordingly
  };

  return (
    <div className="text-center text-white">
      <h1 className="text-3xl font-bold text-white text-center">Explore Our Courses</h1>
      <div className="flex justify-center flex-wrap gap-4">
        {courses &&
          Object.values(courses).map((course) => (
            <CourseCard
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
