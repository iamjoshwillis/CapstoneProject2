import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../auth/UserContext";

function RequireHouse({ children }) {
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser && currentUser.house === null) {
      navigate("/sortinghat");
    }
  }, [currentUser, navigate]);

  return children;
}

export default RequireHouse;