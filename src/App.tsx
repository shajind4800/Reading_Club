import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import Toolbar from "./components/Toolbar/Toolbar";
import { FetchProvider } from "./context/FetchContext";
import { MainPage } from "./components/MainPage/Mainpage";



export const App: React.FC = () => (
  <AppProvider>
    <BrowserRouter>
      <Toolbar />
      <FetchProvider>
        <div style={{ marginTop: 56 }}>
          <Routes>
            <Route path="/" element={<MainPage />} />
          </Routes>
        </div>
      </FetchProvider>
    </BrowserRouter>
  </AppProvider>
);
