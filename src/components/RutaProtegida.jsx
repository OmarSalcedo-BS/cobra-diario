import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const RutaPortegida = ({ children }) => {
  const isAuthenticated = localStorage.getItem("token");
  return isAuthenticated ? children : <Navigate to="/" />;
};

export default RutaPortegida;
