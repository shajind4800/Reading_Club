import { createContext, useContext, useReducer, ReactNode, useEffect } from "react";
import {  AppContextProps, AuthAction, AuthState } from "../types/types";
import { useNavigate } from "react-router-dom";

const initialState: AuthState = {
  isAuthenticated: false,
};

const AppContext = createContext<AppContextProps>({
  state: initialState,
  dispatch: () => null,
});

const reducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "LOGIN":
      sessionStorage.setItem("isAuthenticated", "true");
      return { ...state, isAuthenticated: true };
    case "LOGOUT":
      sessionStorage.removeItem("isAuthenticated");
      return { ...state, isAuthenticated: false };
    default:
      return state;
  }
};

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate  = useNavigate();

  useEffect(() => {
    const isAuth = sessionStorage.getItem("isAuthenticated") === "true";
    if (isAuth) {
      dispatch({ type: "LOGIN" });
      navigate("/admin")
    } else {
      dispatch({ type: "LOGOUT" });
      navigate("/")
    }
  }, []);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
