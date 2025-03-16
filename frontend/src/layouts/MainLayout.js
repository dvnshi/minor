import React from 'react';
import { Link } from 'react-router-dom';

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* <header className="bg-orange-700 text-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link to="/home" className="flex items-center">
            <img 
              src="/api/placeholder/40/40" 
              alt="PanditConnect Logo" 
              className="w-10 h-10 mr-2"
            />
            <span className="font-bold text-xl">PanditConnect</span>
          </Link>
          
          <nav className="flex items-center space-x-6">
            <Link to="/home" className="hover:text-orange-200 transition">Home</Link>
            <Link to="/services" className="hover:text-orange-200 transition">Services</Link>
            <Link to="/profile" className="hover:text-orange-200 transition">My Profile</Link>
            <button className="bg-orange-600 hover:bg-orange-500 px-4 py-2 rounded-lg transition">
              Book Now
            </button>
          </nav>
        </div>
      </header> */}
      
      <main className="flex-grow">
        {children}
      </main>
      
      {/* <footer className="bg-orange-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <img 
                src="/api/placeholder/60/60" 
                alt="PanditConnect Logo" 
                className="w-12 h-12 mb-3"
              />
              <p className="text-orange-200 max-w-md">
                PanditConnect bridges tradition and technology, making spiritual 
                ceremonies accessible, transparent, and convenient.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-semibold text-lg mb-3">Services</h3>
                <ul className="space-y-2 text-orange-200">
                  <li><Link to="/services" className="hover:text-white">Poojas</Link></li>
                  <li><Link to="/services" className="hover:text-white">Ceremonies</Link></li>
                  <li><Link to="/services" className="hover:text-white">Consultations</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-3">Company</h3>
                <ul className="space-y-2 text-orange-200">
                  <li><Link to="/about" className="hover:text-white">About Us</Link></li>
                  <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
                  <li><Link to="/careers" className="hover:text-white">Careers</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-3">Legal</h3>
                <ul className="space-y-2 text-orange-200">
                  <li><Link to="/terms" className="hover:text-white">Terms</Link></li>
                  <li><Link to="/privacy" className="hover:text-white">Privacy</Link></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-orange-700 mt-8 pt-8 text-center text-orange-300">
            <p>© {new Date().getFullYear()} PanditConnect. All rights reserved.</p>
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default MainLayout;