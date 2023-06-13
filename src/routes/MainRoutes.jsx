import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function MainRoutes() {
  const user = useSelector((state) => state.auth.user);
  return user ? <Outlet /> : <Navigate to="login" />;
}
