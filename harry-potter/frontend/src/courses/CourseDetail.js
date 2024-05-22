import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PotterApi from "../api/api";

const CourseDetail = () => {
    const params = useParams();
    const [course, setCourse] = useState(null);

    useEffect(() => {
        async function loadCourse() {
            setCourse(await PotterApi.getCourse(params.id));
        }
        loadCourse();
    }, [params.id]);
    
    if(!course) return <h3>Loading...</h3>

    return (
        <div>
            <h1>Course Details</h1>
            <h2>{course.name}</h2>
            <h3>{course.description}</h3>
            <h3>{course.professor}</h3>
            <h3>{course.time}</h3>
            <button>Register for Course</button>
        </div>
    ); 
}

export default CourseDetail;