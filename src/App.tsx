import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import Toolbar from "./components/Toolbar/Toolbar";
import { FetchProvider } from "./context/FetchContext";
import { MainPage } from "./components/MainPage/Mainpage";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { AdminPage } from "./components/AdminPage/AdminPage";
import { PageContainer } from "./App.styles";

export const App: React.FC = () => (
  <BrowserRouter>
    <AppProvider>
      <FetchProvider>
        <Toolbar />
        <PageContainer>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <AdminPage />
                </ProtectedRoute>
              }
            />
          </Routes>
        </PageContainer>
      </FetchProvider>
    </AppProvider>
  </BrowserRouter>
);
