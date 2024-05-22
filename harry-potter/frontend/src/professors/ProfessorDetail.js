import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PotterApi from "../api/api";

const ProfessorDetail = () => {
    const params = useParams();

    const [professor, setProfessor] = useState(null);

    useEffect(() => {
        async function loadProfessor() {
            setProfessor(await PotterApi.getProfessor(params.id));
        }
        loadProfessor();
    }, [params.id]);
    
    if(!professor) return <h3>Loading...</h3>

    return (
        <div>
            <h1>Meet The Professor!</h1>
            <h2>{professor.name}</h2>
            <h3>{professor.house}</h3>
            <img src={professor.image} alt={professor.name}></img>
            <h3>{professor.courses}</h3>
        </div>
    ); 
}

export default ProfessorDetail;