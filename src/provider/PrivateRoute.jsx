import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router-dom";
import Loader from "../reuseble-components/Loader";

export default function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <Loader></Loader>
  }

  if (user && user?.email) {
    return children;
  } else {
    return <Navigate to="/auth/login" />;
  }
}

