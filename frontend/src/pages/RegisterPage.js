import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState(null);
  
  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    // In a real application, you would navigate to a specific registration form
    setTimeout(() => {
      navigate(`/register/${role}`);
    }, 500);
  };

  const roleOptions = [
    {
      id: 'customer',
      title: 'Register as Customer',
      description: 'Book pandits for ceremonies, order pooja items, and more',
      features: [
        'Book verified pandits for various ceremonies',
        'Get pooja samagri delivered to your home',
        'Access live streaming for remote family members',
        'Browse transparent pricing with no hidden fees'
      ],
      icon: '🙏'
    },
    {
      id: 'pandit',
      title: 'Register as Pandit',
      description: 'Offer your services, manage bookings, and grow your reach',
      features: [
        'Create your professional profile',
        'Set your availability and service rates',
        'Receive booking requests directly',
        'Build your reputation with reviews'
      ],
      icon: '📿'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-yellow-100 py-12 px-4">
      {/* Background Elements */}
      <div className="fixed top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <img 
          src="/api/placeholder/800/800" 
          alt="Background Mandala" 
          className="absolute -top-20 -left-20 w-64 h-64 rotate-12"
        />
        <img 
          src="/api/placeholder/800/800" 
          alt="Background Mandala" 
          className="absolute -bottom-20 right-20 w-80 h-80 rotate-45"
        />
      </div>
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-block mb-4">
            <img 
              src="/api/placeholder/120/120" 
              alt="PanditConnect Logo" 
              className="w-16 h-16"
            />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-orange-800 mb-2">Join PanditConnect</h1>
          <p className="text-lg text-orange-700">Choose how you'd like to get started</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {roleOptions.map((role, index) => (
            <motion.div
              key={role.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`bg-white rounded-2xl shadow-xl overflow-hidden transform transition duration-300 hover:shadow-2xl hover:-translate-y-1 cursor-pointer ${
                selectedRole === role.id ? 'ring-4 ring-orange-500' : ''
              }`}
              onClick={() => handleRoleSelect(role.id)}
            >
              <div className="p-8">
                <div className="text-center mb-6">
                  <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 text-4xl mb-4">
                    {role.icon}
                  </span>
                  <h2 className="text-2xl font-bold text-orange-800">{role.title}</h2>
                  <p className="text-gray-600 mt-2">{role.description}</p>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {role.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-orange-100 text-orange-800 mr-3 flex-shrink-0 text-sm">
                        ✓
                      </span>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  className="w-full py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-xl transition duration-200"
                  onClick={() => handleRoleSelect(role.id)}
                >
                  Continue
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-8 text-gray-700"
        >
          <p>Already have an account? <a href="/login" className="text-orange-600 hover:text-orange-800 font-medium">Sign in</a></p>
          <p className="mt-2">
            <a href="/" className="text-gray-600 hover:text-gray-800 flex items-center justify-center">
              <span className="mr-1">←</span> Back to home
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default RegisterPage;