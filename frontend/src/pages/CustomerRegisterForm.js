// CustomerRegisterForm.js
import React from 'react';
import { Link } from 'react-router-dom';

const CustomerRegisterForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-orange-50 to-yellow-100 p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-orange-800 mb-6 text-center">Customer Registration</h1>
        <p className="text-center text-gray-600 mb-8">Create your customer account to book pandits and services</p>
        
        {/* Form will be implemented here */}
        <div className="bg-orange-100 rounded-lg p-4 text-orange-800 text-center">
          Customer registration form will be implemented here
        </div>
        
        <div className="mt-6 text-center">
          <Link to="/register" className="text-orange-600 hover:text-orange-800">
            ← Back to selection
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CustomerRegisterForm;