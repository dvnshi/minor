import React, { useState } from 'react';
import { motion } from 'framer-motion';
import pp1 from "../assets/pooja pandit1.png";
import pp2 from "../assets/pooja pandit3.png";
import pp3 from "../assets/pooja pandit4.jpg";
import pp4 from "../assets/pooja pandit5.jpg";
import pp5 from "../assets/pooja pandit 6.jpg";
import pp6 from "../assets/pooja pandit 7.jpg";

const ShowMorePage1 = () => {
  // State for price range slider
  const [priceRange, setPriceRange] = useState([1000, 5000]);

  // Sample pandit data with enhanced information
  const pandits = [
    {
      id: 1,
      name: 'Pandit Ramesh Sharma',
      experience: '10+ years of experience',
      rating: '4.8',
      image: pp5,
      price: 1500,
      specialization: 'Vedic Satyanarayan Pooja',
      description: 'Expert in traditional Vedic rituals with authentic Sanskrit chanting. Known for his detailed explanations of the Katha and its significance.',
      languages: 'Hindi, English, Sanskrit',
      ceremonies: '300+ Satyanarayan Poojas performed'
    },
    {
      id: 2,
      name: 'Pandit Suresh Kumar',
      experience: '8+ years of experience',
      rating: '4.7',
      image: pp6,
      price: 2000,
      specialization: 'Family Pooja Specialist',
      description: 'Specializes in family-oriented ceremonies with interactive storytelling of the Katha. Engages all family members in the ritual.',
      languages: 'Hindi, Marathi',
      ceremonies: '250+ pujas performed'
    },
    {
      id: 3,
      name: 'Pandit Anil Verma',
      experience: '12+ years of experience',
      rating: '4.9',
      image: pp3,
      price: 2500,
      specialization: 'Maha Satyanarayan Pooja',
      description: 'Conducts elaborate ceremonies with full Vedic protocols. Known for creating powerful spiritual vibrations during the puja.',
      languages: 'Hindi, Sanskrit, Gujarati',
      ceremonies: '400+ pujas performed'
    },
    {
      id: 4,
      name: 'Pandit Rajesh Singh',
      experience: '15+ years of experience',
      rating: '5.0',
      image: pp1,
      price: 3000,
      specialization: 'Royal Style Pooja',
      description: 'Descendant of a traditional priest family. Conducts royal-style ceremonies with special decorations and offerings.',
      languages: 'Hindi, English, Sanskrit',
      ceremonies: '500+ pujas performed'
    },
    {
      id: 5,
      name: 'Pandit Mohan Lal',
      experience: '7+ years of experience',
      rating: '4.6',
      image: pp2,
      price: 1800,
      specialization: 'Simple Ceremonies',
      description: 'Specializes in simple yet effective ceremonies for modern homes. Provides clear guidance for first-time participants.',
      languages: 'Hindi, English',
      ceremonies: '200+ pujas performed'
    },
    {
      id: 6,
      name: 'Pandit Vijay Kumar',
      experience: '9+ years of experience',
      rating: '4.5',
      image: pp4,
      price: 2200,
      specialization: 'Community Poojas',
      description: 'Expert in conducting large community Satyanarayan Poojas. Ensures everyone feels included in the ceremony.',
      languages: 'Hindi, Tamil, Telugu',
      ceremonies: '350+ pujas performed'
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
    <div className="p-6 bg-gradient-to-b from-orange-50 to-amber-100 min-h-screen">
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
            className="text-orange-800 hover:text-orange-600 font-medium transition duration-300"
          >
            Introduction
          </button>
          <button
            onClick={() => scrollToSection('pandits')}
            className="text-orange-800 hover:text-orange-600 font-medium transition duration-300"
          >
            Pandits
          </button>
          <button
            onClick={() => scrollToSection('benefits')}
            className="text-orange-800 hover:text-orange-600 font-medium transition duration-300"
          >
            Benefits
          </button>
          <button
            onClick={() => scrollToSection('essential-items')}
            className="text-orange-800 hover:text-orange-600 font-medium transition duration-300"
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
            src="https://firebasestorage.googleapis.com/v0/b/mongodb-asset/o/puja-vectors%2Fsatyanarayan-katha.png?alt=media&token=505684ea-5fc8-4bf4-beb2-936a2cf09325"
            alt="Satyanarayan Pooja"
            className="w-full h-auto rounded-xl shadow-lg transform hover:scale-105 transition duration-300"
          />
        </div>

        {/* Right Side: Description */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-orange-800 mb-4">
            Satyanarayan Pooja
          </h2>
          <p className="text-gray-700 mb-6 text-lg">
            Satyanarayan Pooja is a sacred Hindu ritual performed to seek blessings from Lord Vishnu for prosperity, peace, and fulfillment of wishes. The ceremony includes the recitation of the Satyanarayan Katha, which narrates the glory of Lord Vishnu and the benefits of performing this puja.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-xl font-bold text-orange-800 mb-2">Duration</h3>
              <p className="text-gray-700">2-3 hours</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-xl font-bold text-orange-800 mb-2">Price Range</h3>
              <p className="text-gray-700">₹ 1,000 - ₹ 5,000</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-xl font-bold text-orange-800 mb-2">Best Time</h3>
              <p className="text-gray-700">Full moon days or Ekadashi</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-xl font-bold text-orange-800 mb-2">Occasions</h3>
              <p className="text-gray-700">Housewarming, weddings, festivals</p>
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
        <h2 className="text-2xl font-bold text-orange-800 mb-6">Filter by Price</h2>
        <div className="px-4">
          <input
            type="range"
            min="1000"
            max="5000"
            value={priceRange[0]}
            onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
            className="w-full h-2 bg-orange-200 rounded-lg appearance-none cursor-pointer"
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
        <h2 className="text-3xl font-bold text-orange-800 mb-8 text-center">Available Priests</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    <span className="inline-block bg-orange-100 text-orange-800 text-xs px-3 py-1 rounded-full font-semibold mb-2">
                      {pandit.specialization}
                    </span>
                    <p className="text-gray-600 text-sm">{pandit.experience}</p>
                  </div>
                  <span className="text-xl font-bold text-orange-800">₹{pandit.price}</span>
                </div>
                
                <p className="text-gray-700 text-sm mb-4">
                  {pandit.description}
                </p>
                
                <div className="mb-4">
                  <p className="text-gray-600 text-sm"><span className="font-semibold">Languages:</span> {pandit.languages}</p>
                  <p className="text-gray-600 text-sm"><span className="font-semibold">Ceremonies:</span> {pandit.ceremonies}</p>
                </div>
                
                <div className="flex space-x-3">
                  <button className="flex-1 bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded-lg transition duration-300 text-sm font-medium">
                    Book Now
                  </button>
                  <button className="flex-1 border border-orange-600 text-orange-600 hover:bg-orange-50 py-2 px-4 rounded-lg transition duration-300 text-sm font-medium">
                    View Profile
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Benefits of Satyanarayan Katha */}
      <motion.div
        id="benefits"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mb-16 bg-white rounded-xl shadow-lg p-8"
      >
        <h2 className="text-3xl font-bold text-orange-800 mb-6 text-center">
          Benefits of Satyanarayan Katha
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: '🕉️',
              title: 'Divine Blessings',
              description: 'Receives blessings from Lord Vishnu for prosperity and success'
            },
            {
              icon: '✨',
              title: 'Positive Energy',
              description: 'Fills your home with positive vibrations and removes negativity'
            },
            {
              icon: '👨‍👩‍👧‍👦',
              title: 'Family Harmony',
              description: 'Strengthens family bonds and promotes unity among members'
            },
            {
              icon: '💰',
              title: 'Financial Stability',
              description: 'Brings financial prosperity and removes obstacles to wealth'
            },
            {
              icon: '🛡️',
              title: 'Protection',
              description: 'Provides divine protection against negative influences'
            },
            {
              icon: '🧘',
              title: 'Spiritual Growth',
              description: 'Enhances spiritual awareness and devotion to God'
            }
          ].map((benefit, index) => (
            <div key={index} className="bg-orange-50 p-6 rounded-lg hover:bg-orange-100 transition duration-300">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-orange-800 mb-2">{benefit.title}</h3>
              <p className="text-gray-700">{benefit.description}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Puja Process */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="mb-16 bg-gradient-to-r from-orange-800 to-amber-800 rounded-xl shadow-lg p-8 text-white"
      >
        <h3 className="text-3xl font-bold mb-6 text-center">Pooja Process</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              step: '01',
              title: 'Sankalp',
              description: 'Taking the vow to perform the puja with pure intentions'
            },
            {
              step: '02',
              title: 'Kalash Sthapana',
              description: 'Establishing the sacred pot representing the universe'
            },
            {
              step: '03',
              title: 'Ganesh Puja',
              description: 'Invoking Lord Ganesha for obstacle-free completion'
            },
            {
              step: '04',
              title: 'Navagraha Puja',
              description: 'Worshipping the nine planets for cosmic harmony'
            },
            {
              step: '05',
              title: 'Satyanarayan Puja',
              description: 'Main ritual with offerings to Lord Vishnu'
            },
            {
              step: '06',
              title: 'Katha Recitation',
              description: 'Narration of the sacred Satyanarayan story'
            },
            {
              step: '07',
              title: 'Aarti',
              description: 'Offering of light to the deity with devotional songs'
            },
            {
              step: '08',
              title: 'Prasad Distribution',
              description: 'Sharing of blessed food with all participants'
            }
          ].map((step, index) => (
            <div key={index} className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="flex items-start">
                <span className="text-2xl font-bold mr-4 text-yellow-300">{step.step}</span>
                <div>
                  <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                  <p className="text-orange-100">{step.description}</p>
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
        transition={{ duration: 0.5, delay: 1.2 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-orange-800 mb-8 text-center">
          Essential Puja Items
        </h2>
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-orange-800 text-white">
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
                    item: 'Roll chandan', 
                    quantity: '2 pocket', 
                    purpose: 'For applying tilak and decorations' 
                  },
                  { 
                    item: 'Yellow Sindur', 
                    quantity: '2 pocket', 
                    purpose: 'Sacred offering to the deity' 
                  },
                  { 
                    item: 'Yellow Ashtagandha Chandan', 
                    quantity: '2 pocket', 
                    purpose: 'Sacred sandalwood paste for worship' 
                  },
                  { 
                    item: 'Turmeric Powder', 
                    quantity: '2 pocket', 
                    purpose: 'Purification and sacred offerings' 
                  },
                  { 
                    item: 'Steep Turmeric', 
                    quantity: '0.05 kg', 
                    purpose: 'Special offering in the puja' 
                  },
                  { 
                    item: 'Clove', 
                    quantity: '0.01 grams', 
                    purpose: 'Part of ritual offerings' 
                  },
                  { 
                    item: 'Cardamom', 
                    quantity: '0.01 grams', 
                    purpose: 'Sacred spice for offerings' 
                  },
                  { 
                    item: 'Sarvausdhi', 
                    quantity: '1 pocket', 
                    purpose: 'Mixture of sacred herbs' 
                  },
                  { 
                    item: 'Saptamritika', 
                    quantity: '1 pocket', 
                    purpose: 'Seven sacred ingredients mixture' 
                  },
                  { 
                    item: 'Yellow mustard', 
                    quantity: '0.05 kg', 
                    purpose: 'Used in various rituals' 
                  },
                ].map((item, index) => (
                  <tr key={index} className="hover:bg-orange-50 transition duration-200">
                    <td className="py-4 px-6">{item.item}</td>
                    <td className="py-4 px-6">{item.quantity}</td>
                    <td className="py-4 px-6 text-sm text-gray-600">{item.purpose}</td>
                    <td className="py-4 px-6 text-right">
                      <button
                        onClick={() => handleAddToCart(item)}
                        className="bg-orange-600 hover:bg-orange-700 text-white py-1 px-4 rounded-md text-sm transition duration-300"
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

      {/* Back to Top Arrow */}
      <motion.button
        onClick={() => scrollToSection('introduction')}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-8 right-8 bg-orange-600 hover:bg-orange-700 text-white p-4 rounded-full shadow-xl transition duration-300 z-50"
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

export default ShowMorePage1;