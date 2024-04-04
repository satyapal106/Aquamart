import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProctedRoutes(props) {
  const { Component } = props;
  const navigate = useNavigate();
  useEffect(() => {
    let login = localStorage.getItem("currentUser");
    let googleUser = localStorage.getItem("googleUser");
    if (!login) {
      navigate("/login");
    } else if (!googleUser) {
      navigate("/login");
    }
  });

  return (
    <div>
      <Component />
    </div>
  );
}

export default ProctedRoutes;
