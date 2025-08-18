import React, { ReactElement } from "react";
import { Navigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

interface Props {
  children: ReactElement;
}

export const ProtectedRoute: React.FC<Props> = ({ children }) => {
  const { state } = useAppContext();
  return state.isAuthenticated ? children : <Navigate to="/" />;
};
