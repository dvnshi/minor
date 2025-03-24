import React, { useState } from 'react';
import { motion } from 'framer-motion';

import pp1 from "../assets/pooja pandit1.png";
import pp2 from "../assets/pooja pandit3.png";
import pp3 from "../assets/pooja pandit4.jpg";
import pp4 from "../assets/pooja pandit5.jpg";
import rudraabhishekImage from "../assets/rudraabhishekpooja.png";

const ShowMorePage4 = () => {
  // State for price range slider
  const [priceRange, setPriceRange] = useState([1500, 10000]);

  // Sample pandit data with enhanced descriptions
  const pandits = [
    {
      id: 1,
      name: 'Pandit Ramesh Sharma',
      experience: '15+ years of experience',
      rating: '4.9',
      image: pp1,
      price: 3000,
      specialization: 'Vedic Rituals',
      description: 'Expert in Vedic rituals with specialization in Rudraabhishek. Fluent in Sanskrit mantras with authentic pronunciation. Known for his detailed explanations of rituals and their significance. Conducts personalized pujas based on individual horoscopes.',
      languages: 'Hindi, English, Sanskrit',
      ceremonies: '500+ Rudraabhishek performed'
    },
    {
      id: 2,
      name: 'Pandit Suresh Kumar',
      experience: '12+ years of experience',
      rating: '4.8',
      image: pp2,
      price: 4500,
      specialization: 'Rudraabhishek Expert',
      description: 'Renowned for performing powerful Rudraabhishek ceremonies. Has performed over 500+ Rudra pujas across India. Provides personalized guidance based on horoscope. Known for creating strong spiritual vibrations during rituals.',
      languages: 'Hindi, Sanskrit',
      ceremonies: '700+ pujas performed'
    },
    {
      id: 3,
      name: 'Pandit Anil Verma',
      experience: '20+ years of experience',
      rating: '5.0',
      image: pp3,
      price: 7000,
      specialization: 'Shiva Puja Specialist',
      description: 'Descendant of a traditional priest family with deep knowledge of Shaivite rituals. Specializes in rare forms of Shiva worship and meditation techniques. His ceremonies are known for their transformative energy and precise mantra chanting.',
      languages: 'Hindi, Sanskrit, Tamil',
      ceremonies: '1000+ pujas performed'
    },
    {
      id: 4,
      name: 'Pandit Rajesh Singh',
      experience: '18+ years of experience',
      rating: '4.9',
      image: pp4,
      price: 6000,
      specialization: 'Maha Rudraabhishek',
      description: 'Scholar of ancient Shiva Agamas with 18 years of practical experience. Known for his energetic chanting and ability to create powerful spiritual vibrations. Specializes in elaborate Maha Rudraabhishek ceremonies with full Vedic protocols.',
      languages: 'Hindi, English, Sanskrit',
      ceremonies: '850+ pujas performed'
    },
  ];

  // Filter pandits based on price range
  const filteredPandits = pandits.filter(
    (pandit) => pandit.price >= priceRange[0] && pandit.price <= priceRange[1]
  );

  // Function to handle "Add to Cart"
  const handleAddToCart = (item) => {
    alert(`Added to cart: ${item.item} (${item.quantity})`);
  };

  // Function to scroll to a section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="p-6 bg-gradient-to-b from-blue-50 to-purple-100 min-h-screen">
      {/* Top Navigation Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 bg-white/80 backdrop-blur-md shadow-md z-50"
      >
        <div className="container mx-auto max-w-6xl px-6 py-4 flex justify-center space-x-8">
          <button
            onClick={() => scrollToSection('introduction')}
            className="text-blue-800 hover:text-blue-600 font-medium transition duration-300"
          >
            Introduction
          </button>
          <button
            onClick={() => scrollToSection('pandits')}
            className="text-blue-800 hover:text-blue-600 font-medium transition duration-300"
          >
            Pandits
          </button>
          <button
            onClick={() => scrollToSection('benefits')}
            className="text-blue-800 hover:text-blue-600 font-medium transition duration-300"
          >
            Benefits
          </button>
          <button
            onClick={() => scrollToSection('essential-items')}
            className="text-blue-800 hover:text-blue-600 font-medium transition duration-300"
          >
            Puja Items
          </button>
        </div>
      </motion.div>

      {/* Introduction Section */}
      <motion.div
        id="introduction"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col md:flex-row gap-8 mb-16 mt-8"
      >
        {/* Left Side: Image */}
        <div className="md:w-1/2">
          <img 
            src={rudraabhishekImage} 
            alt="Rudra Abhishek" 
            className="w-full h-auto rounded-xl shadow-lg object-cover"
          />
        </div>

        {/* Right Side: Description */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">
            Rudraabhishek Pooja
          </h2>
          <p className="text-gray-700 mb-6 text-lg">
            Rudraabhishek is a powerful Vedic ritual dedicated to Lord Shiva, involving the ceremonial bathing (abhishekam) of the Shiva Lingam with sacred substances like milk, honey, ghee, and water while chanting Vedic mantras. It is performed for spiritual growth, removal of negative karma, and fulfillment of desires.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-xl font-bold text-blue-800 mb-2">Duration</h3>
              <p className="text-gray-700">3-5 hours (varies by type)</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-xl font-bold text-blue-800 mb-2">Price Range</h3>
              <p className="text-gray-700">₹ 1,500 - ₹ 10,000</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-xl font-bold text-blue-800 mb-2">Best Time</h3>
              <p className="text-gray-700">Early morning or Pradosh Kaal</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-xl font-bold text-blue-800 mb-2">Benefits</h3>
              <p className="text-gray-700">Removes obstacles, brings prosperity</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Price Range Slider */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mb-16 bg-white p-6 rounded-xl shadow-lg"
      >
        <h2 className="text-2xl font-bold text-blue-800 mb-6">Filter by Price</h2>
        <div className="px-4">
          <input
            type="range"
            min="1500"
            max="10000"
            value={priceRange[0]}
            onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
            className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-gray-700 mt-2">
            <span>₹ {priceRange[0]}</span>
            <span>₹ {priceRange[1]}</span>
          </div>
        </div>
      </motion.div>

      {/* Pandit Profiles */}
      <motion.div
        id="pandits"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">Available Priests</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredPandits.map((pandit) => (
            <motion.div
              key={pandit.id}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:shadow-xl"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={pandit.image}
                  alt={pandit.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-xl font-bold text-white">{pandit.name}</h3>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="ml-1 text-white">{pandit.rating} (50+ bookings)</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-semibold mb-2">
                      {pandit.specialization}
                    </span>
                    <p className="text-gray-600 text-sm">{pandit.experience}</p>
                  </div>
                  <span className="text-xl font-bold text-blue-800">₹{pandit.price}</span>
                </div>
                
                <p className="text-gray-700 text-sm mb-4">
                  {pandit.description}
                </p>
                
                <div className="mb-4">
                  <p className="text-gray-600 text-sm"><span className="font-semibold">Languages:</span> {pandit.languages}</p>
                  <p className="text-gray-600 text-sm"><span className="font-semibold">Ceremonies:</span> {pandit.ceremonies}</p>
                </div>
                
                <div className="flex space-x-3">
                  <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition duration-300 text-sm font-medium">
                    Book Now
                  </button>
                  <button className="flex-1 border border-blue-600 text-blue-600 hover:bg-blue-50 py-2 px-4 rounded-lg transition duration-300 text-sm font-medium">
                    View Profile
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Benefits of Rudraabhishek */}
      <motion.div
        id="benefits"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mb-16 bg-white rounded-xl shadow-lg p-8"
      >
        <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">
          Benefits of Rudraabhishek
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: '🚫',
              title: 'Removes Obstacles',
              description: 'Destroys negative karma and removes obstacles in life and spiritual path'
            },
            {
              icon: '🕉️',
              title: 'Spiritual Growth',
              description: 'Accelerates spiritual growth and enhances meditation experiences'
            },
            {
              icon: '🪐',
              title: 'Planetary Protection',
              description: 'Protects from malefic planetary influences (Shani, Rahu-Ketu)'
            },
            {
              icon: '💪',
              title: 'Health Benefits',
              description: 'Helps overcome health issues and brings longevity'
            },
            {
              icon: '🙏',
              title: 'Divine Blessings',
              description: 'Fulfills desires and brings divine blessings from Lord Shiva'
            },
            {
              icon: '✨',
              title: 'Positive Energy',
              description: 'Purifies the environment and creates powerful positive vibrations'
            }
          ].map((benefit, index) => (
            <div key={index} className="bg-blue-50 p-6 rounded-lg hover:bg-blue-100 transition duration-300">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-blue-800 mb-2">{benefit.title}</h3>
              <p className="text-gray-700">{benefit.description}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Puja Process */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="mb-16 bg-gradient-to-r from-blue-800 to-purple-800 rounded-xl shadow-lg p-8 text-white"
      >
        <h3 className="text-3xl font-bold mb-6 text-center">Pooja Process</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              step: '01',
              title: 'Ganesh Puja',
              description: 'Invoking Lord Ganesha for obstacle removal and auspicious beginning'
            },
            {
              step: '02',
              title: 'Kalash Sthapana',
              description: 'Establishing the sacred pot representing the universe'
            },
            {
              step: '03',
              title: 'Shiva Avahana',
              description: 'Invoking Lord Shiva into the Shiva Lingam'
            },
            {
              step: '04',
              title: 'Panchamrit Abhishek',
              description: 'Bathing with milk, honey, yogurt, ghee, and sugar'
            },
            {
              step: '05',
              title: 'Rudra Patha',
              description: 'Chanting of powerful Vedic mantras from Rudram'
            },
            {
              step: '06',
              title: 'Shodashopachara',
              description: '16-step worship ritual with full offerings'
            },
            {
              step: '07',
              title: 'Havan',
              description: 'Sacred fire ceremony with Vedic mantras'
            },
            {
              step: '08',
              title: 'Aarti & Prasad',
              description: 'Final offerings and distribution of blessings'
            }
          ].map((step, index) => (
            <div key={index} className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="flex items-start">
                <span className="text-2xl font-bold mr-4 text-yellow-300">{step.step}</span>
                <div>
                  <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                  <p className="text-blue-100">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Essential Items Table */}
      <motion.div
        id="essential-items"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">
          Essential Puja Items
        </h2>
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-blue-800 text-white">
                <tr>
                  <th className="py-4 px-6 text-left">Item</th>
                  <th className="py-4 px-6 text-left">Quantity</th>
                  <th className="py-4 px-6 text-left">Purpose</th>
                  <th className="py-4 px-6 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  { 
                    item: 'Shiva Lingam', 
                    quantity: '1 piece', 
                    purpose: 'Main deity for the puja' 
                  },
                  { 
                    item: 'Milk (for Abhishek)', 
                    quantity: '1 liter', 
                    purpose: 'Primary abhishek material' 
                  },
                  { 
                    item: 'Honey', 
                    quantity: '100 ml', 
                    purpose: 'Sweetener for divine offerings' 
                  },
                  { 
                    item: 'Yogurt', 
                    quantity: '100 ml', 
                    purpose: 'For Panchamrit mixture' 
                  },
                  { 
                    item: 'Ghee', 
                    quantity: '100 ml', 
                    purpose: 'For havan and abhishek' 
                  },
                  { 
                    item: 'Sugar', 
                    quantity: '100 grams', 
                    purpose: 'Sweet offerings to deities' 
                  },
                  { 
                    item: 'Ganga Jal', 
                    quantity: '1 bottle', 
                    purpose: 'Purification and blessings' 
                  },
                  { 
                    item: 'Bilva Patra (Bel Leaves)', 
                    quantity: '108 leaves', 
                    purpose: 'Sacred offering to Shiva' 
                  },
                  { 
                    item: 'Dhatura Flowers', 
                    quantity: '21 pieces', 
                    purpose: 'Traditional Shiva offering' 
                  },
                  { 
                    item: 'Akshat (Rice)', 
                    quantity: '250 grams', 
                    purpose: 'For offerings and rituals' 
                  },
                  { 
                    item: 'Sandalwood Paste', 
                    quantity: '50 grams', 
                    purpose: 'Applying tilak and decoration' 
                  },
                  { 
                    item: 'Incense Sticks', 
                    quantity: '1 pack', 
                    purpose: 'Creating sacred atmosphere' 
                  },
                  { 
                    item: 'Camphor', 
                    quantity: '50 grams', 
                    purpose: 'For aarti ceremony' 
                  },
                  { 
                    item: 'Betel Leaves & Nuts', 
                    quantity: '21 each', 
                    purpose: 'Traditional offering' 
                  },
                  { 
                    item: 'White Cloth', 
                    quantity: '1 meter', 
                    purpose: 'For altar decoration' 
                  },
                ].map((item, index) => (
                  <tr key={index} className="hover:bg-blue-50 transition duration-200">
                    <td className="py-4 px-6">{item.item}</td>
                    <td className="py-4 px-6">{item.quantity}</td>
                    <td className="py-4 px-6 text-sm text-gray-600">{item.purpose}</td>
                    <td className="py-4 px-6 text-right">
                      <button
                        onClick={() => handleAddToCart(item)}
                        className="bg-blue-600 hover:bg-blue-700 text-white py-1 px-4 rounded-md text-sm transition duration-300"
                      >
                        Add to Cart
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>

      {/* Types of Rudraabhishek */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        className="mb-16 bg-white rounded-xl shadow-lg p-8"
      >
        <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">
          Types of Rudraabhishek
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: 'Laghu Rudra (Basic)',
              duration: '2-3 hours',
              price: '₹1,500 - ₹3,000',
              description: '11 recitations of Rudram with basic offerings. Ideal for individuals seeking personal benefits.',
              features: ['Basic offerings', 'Single priest', 'Standard mantras']
            },
            {
              title: 'Maha Rudra (Standard)',
              duration: '4-5 hours',
              price: '₹5,000 - ₹8,000',
              description: '11 priests performing 11 recitations each. Recommended for family welfare and prosperity.',
              features: ['Elaborate offerings', 'Multiple priests', 'Extended mantras']
            },
            {
              title: 'Ati Rudra (Grand)',
              duration: 'Multi-day',
              price: '₹15,000+',
              description: '121 priests performing 11 recitations each. For significant life transformations and community benefit.',
              features: ['All offerings', 'Many priests', 'Complete mantras', 'Havan']
            },
            {
              title: 'Shiva Sahasranama',
              duration: '3-4 hours',
              price: '₹4,000 - ₹6,000',
              description: '1008 names of Shiva with special abhishekam. For deep spiritual connection with Lord Shiva.',
              features: ['Special abhishek', 'Name recitation', 'Extended puja']
            }
          ].map((type, index) => (
            <div key={index} className="border border-blue-200 rounded-lg p-6 hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-bold text-blue-800 mb-2">{type.title}</h3>
              <div className="flex justify-between text-sm text-gray-600 mb-3">
                <span>{type.duration}</span>
                <span className="font-bold">{type.price}</span>
              </div>
              <p className="text-gray-700 mb-4">{type.description}</p>
              <ul className="text-sm text-gray-600 space-y-1">
                {type.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition duration-300 text-sm">
                Book This Puja
              </button>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Back to Top Arrow */}
      <motion.button
        onClick={() => scrollToSection('introduction')}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-xl transition duration-300 z-50"
        aria-label="Back to top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </motion.button>
    </div>
  );
};

export default ShowMorePage4;