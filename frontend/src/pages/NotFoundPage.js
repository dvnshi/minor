
// NotFoundPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-orange-50 to-yellow-100 p-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-orange-800 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-orange-700 mb-6">Page Not Found</h2>
        <p className="text-gray-700 mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link 
          to="/" 
          className="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-xl transition duration-300"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;