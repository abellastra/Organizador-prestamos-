import { Navigate, Outlet } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import Login from "../feactures/auth/login";
import Dashboard from "../feactures/auth/Dashboard";
import Register from "../feactures/auth/Register";
import NewLoan from "../feactures/auth/NewLoan";
import ShowLoan from "../feactures/auth/showLoan";
import InactiveLoans from "../feactures/auth/inactiveLoans";
const useAuth = () => {
  const [users, setUsers] = useState(true);//hacer algo funcionalllllllll
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
        <Route path="/newloan" element={<NewLoan />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/showloans" element={<ShowLoan />} />
        <Route path="/inactiveLoans" element={<InactiveLoans />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default AppRouters;
