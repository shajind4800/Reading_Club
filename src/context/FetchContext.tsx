import React, { createContext, ReactNode, useContext, useEffect } from "react";
import { useMembers } from "../hooks/useMembers";
import { Overlay } from "../components/Overlay/Overlay";

type FetchContextType = ReturnType<typeof useMembers>;

export const FetchContext = createContext<FetchContextType | null>(null);

export const FetchProvider = ({ children }: { children: ReactNode }) => {
  const { loadBooks, loadMembers, error, ...state } = useMembers();

  useEffect(() => {
    loadMembers(1);
    loadBooks();
  }, []);
  return (
    <React.Fragment>
      {error ? (
        <Overlay message={"Error on opening application"} />
      ) : (
        <FetchContext.Provider
          value={{ ...state, error, loadBooks, loadMembers }}
        >
          {children}
        </FetchContext.Provider>
      )}
    </React.Fragment>
  );
};

export const useFetchContext = () => {
  const context = useContext<FetchContextType | null>(FetchContext);
  if (!context)
    throw new Error("useFetchContext must be used within FetchProvider");
  return context;
};
