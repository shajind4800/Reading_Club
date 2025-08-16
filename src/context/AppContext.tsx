import React, { createContext, useContext, useReducer, ReactNode } from "react";
import { Action, AppContextProps, State } from "../types/types";


const initialState: State = {
  isAuthenticated: sessionStorage.getItem("isAuthenticated") === "true",
};

const AppContext = createContext<AppContextProps>({ state: initialState, dispatch: () => null });

const reducer = (state: State, action: Action): State  =>{
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
}

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext<AppContextProps>(AppContext);
