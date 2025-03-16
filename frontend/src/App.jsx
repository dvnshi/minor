import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Page imports
import GetStartedPage from './pages/GetStartedPage';
import RegisterPage from './pages/RegisterPage';
import CustomerRegisterForm from './pages/CustomerRegisterForm';
import PanditRegisterForm from './pages/PanditRegisterForm';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

// Layout components
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing page */}
        <Route path="/" element={<GetStartedPage />} />
        
        {/* Authentication Routes */}
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/register/customer" element={<CustomerRegisterForm />} />
        <Route path="/register/pandit" element={<PanditRegisterForm />} />
        <Route path="/login" element={<LoginPage />} />
        
        {/* Protected Routes - add authentication check as needed */}
        <Route path="/home" element={
          // In a real app, you'd check auth status here
         
            <HomePage />
        
        } />
        
        {/* 404 Page */}
        <Route path="/404" element={<NotFoundPage />} />
        
        {/* Redirect all unknown routes to 404 */}
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </Router>
  );
}

export default App;