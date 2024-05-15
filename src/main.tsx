import './styles/global.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext.tsx';
import ReactDOM from 'react-dom/client';
import React from 'react';
import LoginPage from './pages/LoginPage.tsx';
import UserPage from './pages/UserPage.tsx';
import ErrorPage from './pages/ErrorPage.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <AuthProvider>
              <LoginPage />
            </AuthProvider>
          }
        />
        <Route
          path="/user-page"
          element={
            <AuthProvider>
              <UserPage />
            </AuthProvider>
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
