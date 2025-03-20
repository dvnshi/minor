import React, { useState } from 'react';
import Header from '../components/Header';
import Mandala from '../components/Mandala';

import Diwali from '../assets/allpooja/diwali.png'
import Navratri from '../assets/allpooja/navratri.png'
import Dhanteras from '../assets/allpooja/dhann.jpg'
import Ramayan from '../assets/allpooja/ramayan.png'
import Anprasan from '../assets/allpooja/anprasan.png'
import Ayudha from '../assets/allpooja/ayudha-puja.png'
import Ayush from '../assets/allpooja/Ayushhavan.png'
import Bday from '../assets/allpooja/birthday.png'
import Greihh from '../assets/allpooja/GreihPravesh.png'
import Vivah from '../assets/allpooja/vivah.png'
import VishwakarmaPuja from '../assets/allpooja/VishwakarmaPuja.png'
import Vehicle from '../assets/allpooja/vehicle-worship.png'
import Sundarkand from '../assets/allpooja/SUNDARKAND.png'
import Janmastmi from '../assets/allpooja/janmastami.png'
import Engagement from '../assets/allpooja/engagement.png'
import Saraswati from '../assets/allpooja/saraswati_maa.png'
import Rudrabhishek from '../assets/allpooja/rudraabhishekpooja.png'
import Bhumi from '../assets/allpooja/bhumi-pujan.png'
import Satyanarayan from '../assets/allpooja/satyanarayan.png'
import PranPratishtha from '../assets/allpooja/Pranpratishtha.png'

const AllPoojaPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Puja service data
  const pujaServices = [
    {
      id: 1,
      name: 'AKHAND RAMAYAN PAATH',
      image: Ramayan ,
      alt: 'Akhand Ramayan Paath ceremony'
    },
    {
      id: 2,
      name: 'ANNAPRASHAN PUJA',
      image: Anprasan,
      alt: 'Annaprashan ceremony'
    },
    {
      id: 3,
      name: 'AYUDH PUJA',
      image: Ayudha,
      alt: 'Ayudh Puja ceremony'
    },
    {
      id: 4,
      name: 'AYUSH HAVAN',
      image:  Ayush,
      alt: 'Ayush Havan ceremony'
    },
    {
      id: 5,
      name: 'BIRTHDAY POOJA',
      image:  Bday,
      alt: 'Birthday pooja'
    },
    {
      id: 6,
      name: 'KRISHNA JANMASHTAMMI',
      image: Janmastmi ,
      alt: 'KRISHNA JANMASHTAMMI'
    },
    {
      id: 7,
      name: 'LAGAN PATRIKA (ENGAGEMENT)',
      image: Engagement,
      alt: 'Engagement ceremony'
    },
    {
      id: 8,
      name: 'GRIHA PRAVESH',
      image:  Greihh,
      alt: 'Griha Pravesh ceremony'
    },
     {
      id: 9,
      name: 'RUDRABHISHEK PUJA',
      image: Rudrabhishek,
      alt: 'Rudrabhishek'
    },
    {
      id: 10,
      name: 'NAVRATRI -PUJA',
      image: Navratri,
      alt: 'navratri'
    },
     {
      id: 11,
      name: 'DIWALI PUJA',
      image: Diwali,
      alt: 'DIWALI PUJA'
    },
    {
      id: 12,
      name: 'DHANTERAS PUJA',
      image: Dhanteras,
      alt: 'DHANTERAS PUJA'
    },
     {
      id: 13,
      name: 'BHUMI PUJAN',
      image: Bhumi,
      alt: 'BHUMI PUJAN'
    },
    {
      id: 14,
      name: 'SARASWATI PUJA',
      image: Saraswati,
      alt: 'SARASWATI PUJA'
    },
     {
      id: 15,
      name: 'SUNDARKAND PAATH',
      image:  Sundarkand,
      alt: 'SUNDARKAND PAATH'
    },
    {
      id: 16,
      name: 'VEHICLE WORSHIP',
      image:  Vehicle,
      alt: 'VEHICLE WORSHIP'
    },
     {
      id: 17,
      name: 'VISHWAKARMA PUJA',
      image:  VishwakarmaPuja,
      alt: 'VISHWAKARMA PUJA'
    },
    {
      id: 18,
      name: 'VIVAH',
      image:  Vivah,
      alt: 'VIVAH'
    },
    {
      id: 19,
      name: 'SATYANARAYAN KATHA',
      image:  Satyanarayan ,
      alt: 'Satyanarayan puja'
    },
    {
      id: 20,
      name: 'PRAN PRATISHTHA PUJA',
      image:  PranPratishtha,
      alt: 'PRAN PRATISHTHA PUJA'
    }
  ];

  // Filter pujas based on search query
  const filteredPujas = pujaServices.filter(puja => 
    puja.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
    {/* <Header/> */}
    <div className="min-h-screen bg-gray-50 p-6">
      
      <div className="max-w-7xl mx-auto">
      
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-gray-700 mb-2">Pujas Serving Near You</h1>
          <p className="text-xl text-gray-600">
            Invoke blessings, Enhance well-being, Attract prosperity and Celebrate traditions.
          </p>
        </div>
        
        {/* Search Bar */}
        <div className="mb-12 relative">
          <div className="flex items-center relative">
            <input
              type="text"
              placeholder="Search puja services..."
              className="w-full py-3 px-6 pr-12 rounded-full bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-orange-300"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="absolute right-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" 
                  stroke="#666666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

          {/* Background Elements - Mandala Patterns */}
               <Mandala/>
        
        
        {/* Puja Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredPujas.map((puja) => (
            <div key={puja.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div className="p-4">
                <div className="bg-green-50 rounded-lg p-2 mb-4 flex items-center justify-center h-44">
                  <img src={puja.image} alt={puja.alt} className="h-36 w-36 object-contain" />
                </div>
                <h3 className="text-center text-lg font-medium text-gray-600">
                  {puja.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
        
        {/* Show message if no results */}
        {filteredPujas.length === 0 && (
          <div className="text-center p-12">
            <p className="text-lg text-gray-500">No puja services found matching your search.</p>
          </div>
        )}
      </div>
    </div>

    </div>
  );
};

export default AllPoojaPage;