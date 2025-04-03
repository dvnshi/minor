import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import pooja from '../assets/pooja2.png';
import Mandala from '../assets/mandala.png'
import Logo from '../assets/logo2.png'


const GetStartedPage = () => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleGetStarted = () => {
    navigate('/register');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-yellow-100 overflow-hidden">
      
       {/* Background Elements - Mandala Patterns */}
<div className="fixed top-0 left-0 w-full h-full opacity-15">
  <img  
    src={Mandala} 
    alt="Background Mandala"  
    className="absolute -top-20 -left-20 w-64 h-64 rotate-12" 
  /> 
  <img  
    src={Mandala} 
    alt="Background Mandala"  
    className="absolute top-1/3 -right-20 w-80 h-80 rotate-45" 
  /> 
  <img  
    src={Mandala} 
    alt="Background Mandala"  
    className="absolute -bottom-20 left-1/4 w-72 h-72 -rotate-12" 
  /> 
  <img  
    src={Mandala} 
    alt="Background Mandala"  
    className="absolute top-10 left-1/3 w-56 h-56 -rotate-45" 
  /> 
</div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <motion.header 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : -50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <div className="flex justify-center items-center mb-4">
            <img 
              src={Logo}
              alt="PanditConnect Logo" 
              className="w-24 h-24"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-orange-800 mb-2">PoojaPath...</h1>
          <p className="text-xl text-orange-700">Your spiritual journey begins here</p>
        </motion.header>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.9 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-4xl mx-auto bg-white bg-opacity-90 rounded-2xl shadow-2xl overflow-hidden mb-12"
        >
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8 md:p-12">
              <h2 className="text-3xl font-bold text-orange-800 mb-4">Connect with Verified Pandits</h2>
              <p className="text-lg text-gray-700 mb-6">
                Book trusted pandits for all your spiritual and religious ceremonies with ease, transparency, and convenience.
              </p>
              
              <ul className="space-y-3 mb-8">
                {[
                  'Easy booking for various poojas and rituals',
                  'Verified pandit profiles with reviews',
                  'Home delivery of pooja samagri',
                  'Live streaming for remote family members',
                  'Transparent pricing with no hidden fees'
                ].map((feature, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
                    className="flex items-start"
                  >
                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-orange-100 text-orange-800 mr-3 flex-shrink-0">
                      ✓
                    </span>
                    <span className="text-gray-700">{feature}</span>
                  </motion.li>
                ))}
              </ul>
              
              <motion.button
                onClick={handleGetStarted}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-4 px-6 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-xl shadow-lg transition duration-300 transform hover:-translate-y-1"
              >
                Get Started
              </motion.button>
            </div>
            
            <div className="md:w-1/2 relative overflow-hidden">
              <img 
                src={pooja} 
                alt="Pooja Ceremony" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Tradition Meets Technology</h3>
                <p className="text-white text-opacity-90">
                  Experience the perfect blend of ancient traditions and modern convenience
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center text-gray-700"
        >
          <p>Already have an account? <a href="/login" className="text-orange-600 hover:text-orange-800 font-medium">Sign in</a></p>
        </motion.div>
      </div>
    </div>
  );
};

export default GetStartedPage;