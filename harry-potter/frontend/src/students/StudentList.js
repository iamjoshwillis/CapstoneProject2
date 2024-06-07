import React, { useState, useEffect } from "react";
import axios from "axios";
import StudentDetail from "./StudentDetail"  

const StudentList = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function loadStudents() {
      const res = await axios.get("https://hp-api.onrender.com/api/characters/students");
      setData(res.data);
    }
    loadStudents();
  }, []);

  if (!data) return <h3>Loading...</h3>;

  return (
    <div className="text-center">
      <h1 className="text-3xl p-6 font-bold text-slate-100 text-center">Meet Your Community</h1>
      <div className="flex justify-center flex-wrap gap-4">
        {data &&
          Object.values(data).map((student) => (
            <StudentDetail
              key={student.id}
              id={student.id}
              name={student.name}
              species={student.species}
              house={student.house}
              ancestry={student.ancestry}
              patronus={student.patronus}
              image={student.image}
            />
          ))}
      </div>
    </div>
  );
};

export default StudentList;
