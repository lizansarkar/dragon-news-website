import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../reuseble-components/Loader";

export default function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();
  console.log(location)

  if (loading) {
    return <Loader></Loader>
  }

  if (user && user?.email) {
    return children;
  } else {
    return <Navigate state={location.pathname} to="/auth/login" />;
  }
}

