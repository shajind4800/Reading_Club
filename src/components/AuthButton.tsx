import React from "react";

import { Button } from "./Button/Button";
import { useAppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

export const AuthButton: React.FC = () => {
  const { state, dispatch } = useAppContext();
  const navigate = useNavigate();

  return state.isAuthenticated ? (
    <Button onClick={() => dispatch({ type: "LOGOUT" })} text="Logout" />
  ) : (
    <Button
      onClick={() => {
        dispatch({ type: "LOGIN" });
        navigate("/admin");
      }}
      text="Login"
    />
  );
};
