// import React, { useState } from "react";

// const cities = [
//   { name: "Indore", image: "https://www.holidify.com/images/compressed/3551.jpg" },
//   { name: "Jabalpur", image: "https://www.tusktravel.com/blog/wp-content/uploads/2022/06/Dhuandhar-Waterfall-Madhya-Pradesh2.jpg" },
//   { name: "Bhopal", image: "https://th.bing.com/th/id/OIP._Rl7Fsyzk3mu697tm9r50wHaDz?rs=1&pid=ImgDetMain" },
// ];

// const HomePage = () => {
//   const [selectedCity, setSelectedCity] = useState(null);
//   const [showDropdown, setShowDropdown] = useState(false);

//   return (
//     <div>
//       {/* City Selection Popup */}
//       {!selectedCity && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center">
//             <h2 className="text-xl font-semibold mb-4">Select Your City</h2>
//             <div className="grid grid-cols-3 gap-4">
//               {cities.map((city) => (
//                 <div
//                   key={city.name}
//                   className="cursor-pointer p-2 border rounded-lg hover:bg-gray-100"
//                   onClick={() => setSelectedCity(city)}
//                 >
//                   <img
//                     src={city.image}
//                     alt={city.name}
//                     className="w-full h-20 object-cover rounded-md"
//                   />
//                   <p className="mt-2 font-medium">{city.name}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Header */}
//       <header className="bg-orange-800 text-white py-4 shadow-md">
//         <div className="container mx-auto flex justify-between items-center px-6 max-w-6xl">
//           <h1 className="text-2xl font-bold">PoojaPath</h1>
//           <nav>
//             <ul className="flex space-x-6 items-center">
//               {selectedCity && (
//                 <li className="relative">
//                   {/* City Display */}
//                   <div
//                     className="flex items-center space-x-2 cursor-pointer p-2 rounded-md hover:bg-orange-700 transition"
//                     onClick={() => setShowDropdown(!showDropdown)}
//                   >
//                     <img
//                       src={selectedCity.image}
//                       alt={selectedCity.name}
//                       className="w-8 h-8 rounded-full"
//                     />
//                     <span className="font-medium">{selectedCity.name}</span>
//                     <span className="ml-2 text-xs bg-white text-orange-800 px-2 py-1 rounded-md">
//                       Change City
//                     </span>
//                   </div>

//                   {/* Dropdown */}
//                   {showDropdown && (
//                     <div className="absolute left-0 mt-2 bg-white text-black shadow-lg rounded-md p-3 w-48 z-50">
//                       {cities.map((city) => (
//                         <div
//                           key={city.name}
//                           className="flex items-center space-x-2 p-2 cursor-pointer rounded-md hover:bg-gray-200 transition"
//                           onClick={() => {
//                             setSelectedCity(city);
//                             setShowDropdown(false);
//                           }}
//                         >
//                           <img
//                             src={city.image}
//                             alt={city.name}
//                             className="w-6 h-6 rounded-full"
//                           />
//                           <span>{city.name}</span>
//                         </div>
//                       ))}
//                     </div>
//                   )}
//                 </li>
//               )}
//               <li><a href="#" className="hover:text-yellow-300">Home</a></li>
//               <li><a href="#" className="hover:text-yellow-300">Services</a></li>
//               <li><a href="#" className="hover:text-yellow-300">About</a></li>
//               <li><a href="#" className="hover:text-yellow-300">Contact</a></li>
//             </ul>
//           </nav>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="container mx-auto max-w-6xl px-6 py-8">
//         <h1 className="text-3xl font-bold text-orange-800 mb-6">
//           Welcome to PoojaPath
//         </h1>
//         <p className="text-gray-700 leading-relaxed">
//           Dashboard content will be implemented here.
//         </p>
//       </main>

//       {/* Footer */}
//       <footer className="bg-orange-800 text-white py-4 mt-8 text-center text-sm opacity-80">
//         <p>&copy; {new Date().getFullYear()} PoojaPath. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default HomePage;
import React, { useState, useEffect } from 'react';
import Mandala from '../components/Mandala'
import { FaPhone, FaCheck } from 'react-icons/fa'; // Import icons from react-icons
import ShowMorePage from './ShowMorePage'
import AllPoojaPage from './AllPoojaPage'
import { Link } from 'react-router-dom';
import panditji1 from '../assets/pandit3.webp';
import panditji2 from '../assets/pandit4.webp';
import pooja2 from '../assets/pooja.png';
// import Mandala from '../assets/mandala.png'
import Logo from '../assets/logo2.png'
import Saraswati from '../assets/saraswati_maa.png'
import GrihaPravesh from '../assets/GreihPravesh.png'
import Satyanarayankatha from '../assets/satyanarayan-katha.png'
import Vivah from '../assets/vivah.png'
import Lagna from '../assets/engagement.png'
import Rudrabhishek from '../assets/rudraabhishekpooja.png'

import Wedding from '../assets/wedding.jpg'
import SatyanarayanPooja from '../assets/satyanarayan-pooja.png'
import Griha from '../assets/grihaprevesh.jpg'
import Ganeshji from '../assets/ganeshjipooja.jpg'

  const services = [
    { title: 'Griha Pravesh', description: 'Griha Pravesh (housewarming ceremony) is performed before entering a new home for the first time for positivity, prosperity, and blessings. Book trusted pandits in Bangalore, Delhi-NCR, Gurugram, Kolkata...', image: GrihaPravesh },
    { title: 'Satyanarayan Katha', description: 'Satyanarayan Puja is done to seek blessings for prosperity, peace, and fulfillment of wishes. Book experienced pandits in Bangalore, Delhi-NCR, Gurugram, Kolkata, Pune, and Mumbai for Satyanarayan Ka...', image: Satyanarayankatha },
    { title: 'Vivah', description: 'Vivah is a traditional Hindu wedding ceremony. It typically involves various rituals and customs, such as the exchange of vows and the tying of a sacred thread, known as the "mangalsutra," around', image: Vivah },
    { title: 'Lagna Patrika (Engagement)', description: 'The Lagna Patrika ceremony is a pre-wedding ritual in Hindu culture where the families of the bride and groom exchange written letters to formalize the wedding date and other details...', image: Lagna },
    { title: 'Rudrabhishek Puja', description: 'Rudrabhishek puja is a powerful ritual involving the holy bathing of a Shiva Linga. It removes negativity and brings blessings for peace. Book expert pandits in Bangalore, Delhi-NCR, Gurugram, Kolkata...', image: Rudrabhishek },
    { title: 'Saraswati Puja', description: 'Saraswati Puja is a Hindu festival that is dedicated to the goddess of knowledge and wisdom, Saraswati. In many parts of India, this day is also celebrated as Basant Panchami...', image: Saraswati },
  ];

const cities = [
  { name: "Indore", image: "https://www.holidify.com/images/compressed/3551.jpg" },
  { name: "Jabalpur", image: "https://www.tusktravel.com/blog/wp-content/uploads/2022/06/Dhuandhar-Waterfall-Madhya-Pradesh2.jpg" },
  { name: "Bhopal", image: "https://th.bing.com/th/id/OIP._Rl7Fsyzk3mu697tm9r50wHaDz?rs=1&pid=ImgDetMain" },
];


const HomePage = () => {
  // State for city selection
  const [selectedCity, setSelectedCity] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  // Sample advertisement data
  const advertisements = [
    {
      id: 1,
      title: "Ganesh Chaturthi Special",
      description: "Book a pandit for Ganesh Chaturthi and get 10% off on pooja samagri",
      image: Ganeshji,
    },
    {
      id: 2,
      title: "Satyanarayan Pooja Package",
      description: "Complete package including pandit, samagri, and prasad distribution",
      image: SatyanarayanPooja,
    },
    {
      id: 3,
      title: "Wedding Season Offers",
      description: "Special discounts on wedding rituals and ceremonies",
      image: Wedding,
    },
    {
      id: 4,
      title: "Grihapravesh Special",
      description: "Book a pandit for your new home ceremony with special offerings",
      image: Griha,
    },
  ];

  // State for slider
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-rotate slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === advertisements.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [advertisements.length]);

  // Manual navigation
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-yellow-100 overflow-hidden">
      {/* City Selection Popup */}
      {!selectedCity && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center">
            <h2 className="text-xl font-semibold mb-4">Select Your Area</h2>
            <div className="grid grid-cols-3 gap-4">
              {cities.map((city) => (
                <div
                  key={city.name}
                  className="cursor-pointer p-2 border rounded-lg hover:bg-gray-100"
                  onClick={() => setSelectedCity(city)}
                >
                  <img
                    src={city.image}
                    alt={city.name}
                    className="w-full h-20 object-cover rounded-md"
                  />
                  <p className="mt-2 font-medium">{city.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="bg-orange-800 text-white py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-6 max-w-6xl">
          <div className="flex items-center space-x-2">
            <div className="bg-white rounded-full p-1 flex items-center justify-center">
              <span className="text-orange-800 text-2xl font-bold">ॐ</span>
            </div>
            <h1 className="text-2xl font-bold">PanditConnect</h1>
          </div>
          
          <nav>
            <ul className="flex space-x-6 items-center">
              {selectedCity && (
                <li className="relative">
                  {/* City Display */}
                  <div
                    className="flex items-center space-x-2 cursor-pointer p-2 rounded-md hover:bg-orange-700 transition"
                    onClick={() => setShowDropdown(!showDropdown)}
                  >
                    <img
                      src={selectedCity.image}
                      alt={selectedCity.name}
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="font-medium">{selectedCity.name}</span>
                    <span className="ml-2 text-xs bg-white text-orange-800 px-2 py-1 rounded-md">
                      Change City
                    </span>
                  </div>

                  {/* Dropdown */}
                  {showDropdown && (
                    <div className="absolute right-0 mt-2 bg-white text-black shadow-lg rounded-md p-3 w-48 z-50">
                      {cities.map((city) => (
                        <div
                          key={city.name}
                          className="flex items-center space-x-2 p-2 cursor-pointer rounded-md hover:bg-gray-200 transition"
                          onClick={() => {
                            setSelectedCity(city);
                            setShowDropdown(false);
                          }}
                        >
                          <img
                            src={city.image}
                            alt={city.name}
                            className="w-6 h-6 rounded-full"
                          />
                          <span>{city.name}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </li>
              )}
              <li><a href="#" className="hover:text-yellow-300">Home</a></li>
              <li><a href="#" className="hover:text-yellow-300">Services</a></li>
              <li><a href="#" className="hover:text-yellow-300">About</a></li>
              <li><a href="#" className="hover:text-yellow-300">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section with Mandala Background */}
      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-yellow-100 overflow-hidden">
        
               {/* Background Elements - Mandala Patterns */}
               <Mandala/>
        


         


        <div className="container mx-auto max-w-6xl px-6 text-center relative z-10">
          {/* <div className="mb-6 flex justify-center">
            <div className="bg-orange-800 rounded-full p-4 inline-block">
              <span className="text-yellow-100 text-4xl">ॐ</span>
            </div>
          </div> */}
          <div className="flex justify-center items-center mb-4">
                      <img 
                        src={Logo}
                        alt="PanditConnect Logo" 
                        className="w-24 h-24"
                      />
                    </div> 
          <h1 className="text-6xl font-bold text-orange-800 mb-2">PanditConnect</h1>
          <p className="text-xl text-orange-700 mb-12">Your spiritual journey begins here</p>
          
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col md:flex-row">
            <div className="md:w-1/2 pr-8">
              <h2 className="text-3xl font-bold text-orange-800 mb-6">Connect with Verified Pandits</h2>
              <p className="text-gray-700 mb-8 text-lg">
                Book trusted pandits for all your spiritual and religious ceremonies with ease, 
                transparency, and convenience.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <FaCheck className="text-orange-600 mr-2 mt-1" size={20} /> {/* Updated icon */}
                  <span className="text-gray-700">Easy booking for various poojas and rituals</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-orange-600 mr-2 mt-1" size={20} /> {/* Updated icon */}
                  <span className="text-gray-700">Verified pandit profiles with reviews</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-orange-600 mr-2 mt-1" size={20} /> {/* Updated icon */}
                  <span className="text-gray-700">Home delivery of pooja samagri</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-orange-600 mr-2 mt-1" size={20} /> {/* Updated icon */}
                  <span className="text-gray-700">Live streaming for family members</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img 
                src={panditji1} 
                alt="Pandit performing ceremony" 
                className="rounded-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Banner */}
      <div className="bg-yellow-100 py-8">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="space-y-4 md:w-2/3">
                <h1 className="text-4xl font-bold">
                  <span className="text-gray-600">Book Pandit </span>
                  <span className="text-orange-500">For Pooja </span>
                  <span className="text-gray-600">In Bangalore.</span>
                </h1>
                
                <p className="text-gray-600 text-lg">
                  Our experienced <span className="font-semibold">Hindi Pandits</span> and <span className="font-semibold">North Indian Pandits</span> in Bangalore 
                  specialize in various pujas, including Griha Pravesh, Satyanarayan Puja, marriage ceremonies, and more. 
                  We also have <span className="font-semibold">Bengali, Marathi, Odia, Kannada, Tamil, and Telugu Pandits</span> who 
                  perform pujas according to regional rituals. You are only one click away from making a booking. 
                  Feel free to enjoy our Pandit booking service.
                </p>
                
                <button className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-md 
                  flex items-center transition duration-300 w-full md:w-auto">
                  <FaPhone className="mr-2" size={20} /> {/* Updated icon */}
                  <span className="font-medium">Book now</span>
                </button>
              </div>
              
              <div className="mt-6 md:mt-0 md:w-1/3 ">
                <img 
                  src={panditji2}
                  alt="Pandit performing pooja" 
                  className="w-full h-auto rounded-lg "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Advertisement Slider */}
      <div className="bg-yellow-100 py-8">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-700 mb-6">Featured Services</h2>
            
            <div className="relative overflow-hidden rounded-lg h-64">
              {advertisements.map((ad, index) => (
                <div 
                  key={ad.id}
                  className={`absolute w-full h-full transition-all duration-500 ease-in-out transform ${
                    index === currentSlide ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
                  }`}
                >
                  <div className="flex flex-col md:flex-row h-full">
                    <div className="md:w-1/2 bg-gray-100 rounded-l-lg overflow-hidden">
                      <img 
                        src={ad.image} 
                        alt={ad.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="md:w-1/2 p-6 flex flex-col justify-center">
                      <h3 className="text-xl font-bold text-orange-500 mb-2">{ad.title}</h3>
                      <p className="text-gray-600 mb-4">{ad.description}</p>
                      <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md 
                        transition duration-300 w-full md:w-auto self-start">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Slider controls */}
            <div className="mt-4 flex justify-center space-x-2">
              {advertisements.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide ? "bg-orange-500 w-6" : "bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Popular Services Section */}

    <div className="bg-yellow-100 py-12">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Section Title */}
          <h2 className="text-3xl font-bold text-orange-800 mb-8 text-center">
            Popular Pooja Services
          </h2>
     
          
      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
          >
            {/* Service Image */}
            <div className="h-45 bg-orange-100 rounded-lg mb-6 flex items-center justify-center">
              <img src={service.image} alt={service.title} className="h-full w-full" />
            </div>

            {/* Service Title */}
            <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">
              {service.title}
            </h3>

            {/* Service Description with "Show More" Link */}
            <p className="text-gray-600 text-sm text-center"> 
              {service.description}
              <Link
                to={`/show-more/${index}`}
                className="text-orange-500 font-semibold hover:underline ml-1"
              >
                Show more
              </Link>
            </p>


          </div>
        ))}
        </div>
         {/* see all page  */}
           <div className="w-full text-center">
            <Link
              to="/all-pooja"
              className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white py-3 px-8 rounded-full transition duration-300"
            >
              <span className="mr-2">See All</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>

        </div>
      </div>
    </div>




         {/* Why PoojaPath Section */}
<div className="bg-yellow-100 py-12">
  <div className="container mx-auto max-w-6xl px-6">
     <div className="bg-white rounded-lg shadow-md p-6">
    <div className="text-center mb-12">
      <h1 className="text-3xl font-bold text-orange-800 mb-4">Why Choose PoojaPath?</h1>
      <p className="text-gray-600 text-lg">
        Discover the unique features that make PoojaPath your trusted partner for all your spiritual needs.
      </p>
    </div>

    {/* Cards Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          title: 'Verified Pandits',
          description: 'Connect with trusted and experienced pandits for all your rituals.',
          icon: '👳‍♂️', // Emoji or icon (can be replaced with an image or SVG)
        },
        {
          title: 'Easy Booking',
          description: 'Book pandits and puja essentials with just a few clicks.',
          icon: '📅', // Emoji or icon
        },
        {
          title: 'Home Delivery',
          description: 'Get puja samagri delivered to your doorstep.',
          icon: '🚚', // Emoji or icon
        },
      ].map((card, index) => (
        <div
          key={index}
          className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
        >
          {/* Icon or Image */}
          <div className="h-20 w-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-3xl">{card.icon}</span> {/* Replace with an image or SVG if needed */}
          </div>

          {/* Card Title */}
          <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">
            {card.title}
          </h2>

          {/* Card Description */}
          <p className="text-gray-600 text-sm text-center">
            {card.description}
          </p>
        </div>
      ))}

    </div>
     
  </div>
</div>
</div>
      



      {/* Footer */}
      <footer className="bg-orange-800 text-white py-8">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-white rounded-full p-1 flex items-center justify-center">
                  <span className="text-orange-800 text-2xl font-bold">ॐ</span>
                </div>
                <h2 className="text-2xl font-bold">PanditConnect</h2>
              </div>
              <p className="text-sm text-orange-100">
                Your trusted platform for booking verified pandits for all your spiritual needs.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-yellow-300">Home</a></li>
                <li><a href="#" className="hover:text-yellow-300">Services</a></li>
                <li><a href="#" className="hover:text-yellow-300">About</a></li>
                <li><a href="#" className="hover:text-yellow-300">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-yellow-300">Griha Pravesh</a></li>
                <li><a href="#" className="hover:text-yellow-300">Satyanarayan Pooja</a></li>
                <li><a href="#" className="hover:text-yellow-300">Wedding Rituals</a></li>
                <li><a href="#" className="hover:text-yellow-300">Ganesh Chaturthi</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-yellow-300">+91 123 456 7890</a></li>
                <li><a href="#" className="hover:text-yellow-300">info@panditconnect.com</a></li>
                <li><a href="#" className="hover:text-yellow-300">Bangalore, India</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-orange-700 mt-8 pt-8 text-center">
            <p className="text-sm text-orange-100">
              &copy; 2023 PanditConnect. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
    
  );
};

export default HomePage;