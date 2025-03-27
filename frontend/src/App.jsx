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
import ShowMorePage from './pages/ShowMorePage';
import AllPoojaPage from './pages/AllPoojaPage';
// Layout components
import MainLayout from './layouts/MainLayout';
import ShowMorePage1 from './pages/ShowMorePage1';
import ShowMorePage2 from './pages/ShowMorePage2';
import ShowMorePage4 from './pages/ShowMorePage4';

import PanditDashboard from './pages/PanditDashboard';

import Bookings from './pages/panditpages/Bookings';
import Calendar from './pages/panditpages/Calendar';
import Earnings from './pages/panditpages/Earnings';
import Profile from './pages/panditpages/Profile';
import Support from './pages/panditpages/Support';
import LiveStreamPage from './pages/panditpages/LiveStreaming'


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
        <Route path="/" element={<HomePage />} /> {/* Home Page */}
         <Route path="/show-more/0" element={<ShowMorePage />} />
         <Route path="/show-more/1" element={<ShowMorePage1 />} />
         <Route path="/show-more/2" element={<ShowMorePage2 />} />
         <Route path="/show-more/4" element={<ShowMorePage4 />} /> 

        <Route path="/all-pooja" element={<AllPoojaPage />} />
        {/* Protected Routes - add authentication check as needed */}
        <Route path="/home" element={
          // In a real app, you'd check auth status here
          
            <HomePage />
        
        } />


          {/* pandit start */}
         {/* <Route path="/pandit-dashboard" element={
          // In a real app, you'd check auth status here
         
            <PanditDashboard />
        
        } />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/earnings" element={<Earnings />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/support" element={<Support />} />
        <Route path="live" element={<LiveStreamPage />} /> */}
        <Route path="/pandit-dashboard" element={<PanditDashboard />}>
  {/* <Route index element={<PanditHome />} /> */}
  <Route path="calendar" element={<Calendar />} />
  <Route path="live" element={<LiveStreamPage />} />
  <Route path="bookings" element={<Bookings />} />
  <Route path="earnings" element={<Earnings />} />
  <Route path="profile" element={<Profile />} />
  <Route path="support" element={<Support />} />
</Route>
        {/* pandit end */}

        
        {/* 404 Page */}
        <Route path="/404" element={<NotFoundPage />} />
        
        {/* Redirect all unknown routes to 404 */}
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </Router>
  );
}

export default App;