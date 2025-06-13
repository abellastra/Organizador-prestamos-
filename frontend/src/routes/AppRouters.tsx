import { Navigate, Outlet } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import Login from "../feactures/auth/login";
import Dashboard from "../feactures/Dashboard";
import Register from "../feactures/auth/Register";
const useAuth = () => {
  const [users, setUsers] = useState(true);
  const user = users;
  return user;
};
const ProtectedRoute = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/login" replace />;
};

function AppRouters() {
  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default AppRouters;
