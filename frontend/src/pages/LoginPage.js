
// LoginPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-orange-50 to-yellow-100 p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-orange-800 mb-6 text-center">Welcome Back</h1>
        <p className="text-center text-gray-600 mb-8">Sign in to your PanditConnect account</p>
        
        {/* Form will be implemented here */}
        <div className="bg-orange-100 rounded-lg p-4 text-orange-800 text-center">
          Login form will be implemented here
        </div>
        
        <div className="mt-6 text-center">
          <p>Don't have an account? <Link to="/register" className="text-orange-600 hover:text-orange-800">Register</Link></p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;