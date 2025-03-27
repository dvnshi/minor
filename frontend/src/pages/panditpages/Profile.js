import React, { useState } from 'react';
import { 
  User, 
  Phone, 
  Mail, 
  MapPin, 
  Calendar, 
  Clock, 
  Star, 
  Award, 
  BookOpen, 
  IndianRupee,
  Edit,
  CheckCircle2,
  XCircle,
  ChevronDown,
  ChevronUp,
  MessageSquare,
  Shield,
  HeartHandshake,
  Languages
} from 'lucide-react';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('services');
  const [expandedReview, setExpandedReview] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'Pandit Ramesh Shastri',
    phone: '+91 98765 43210',
    email: 'ramesh.shastri@example.com',
    location: 'Varanasi, Uttar Pradesh',
    experience: '15 years',
    languages: ['Hindi', 'Sanskrit', 'English'],
    about: 'Expert in Vedic rituals with specialization in Griha Pravesh, Vivah, and Mundan ceremonies. Follows authentic Vedic traditions passed down through generations.',
    services: [
      {
        id: 1,
        name: 'Griha Pravesh Puja',
        duration: '2-3 hours',
        price: 2500,
        description: 'Traditional house warming ceremony with Vedic mantras for prosperity and happiness'
      },
      {
        id: 2,
        name: 'Vivah Sanskar',
        duration: 'Full day',
        price: 15000,
        description: 'Complete wedding ceremony with all Vedic rituals including Kanyadaan and Saptapadi'
      },
      {
        id: 3,
        name: 'Mundan Ceremony',
        duration: '1 hour',
        price: 1500,
        description: 'Sacred first haircut ceremony with blessings for child\'s growth and prosperity'
      }
    ],
    reviews: [
      {
        id: 1,
        client: 'Rajesh Kumar',
        rating: 5,
        date: '2024-03-15',
        comment: 'Pandit ji conducted our Griha Pravesh with such devotion. The atmosphere was truly divine. Highly recommended!',
        response: 'Thank you Rajesh ji. May Lord Ganesha bless your new home.'
      },
      {
        id: 2,
        client: 'Priya Sharma',
        rating: 4,
        date: '2024-02-28',
        comment: 'Very knowledgeable and punctual. Explained all rituals beautifully.',
        response: null
      }
    ],
    stats: {
      totalPoojas: 427,
      clientsServed: 389,
      repeatClients: 112,
      rating: 4.8
    }
  });

  const [formData, setFormData] = useState({...profileData});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    setProfileData(formData);
    setEditMode(false);
  };

  const toggleReview = (id) => {
    setExpandedReview(expandedReview === id ? null : id);
  };

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        size={16} 
        className={i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'} 
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Profile Header */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          <div className="relative">
            {/* Cover Photo */}
            <div className="h-48 bg-gradient-to-r from-orange-400 to-amber-500 flex items-center justify-center">
              <div className="absolute top-4 right-4">
                <button 
                  onClick={() => setEditMode(!editMode)}
                  className="flex items-center space-x-1 bg-white/90 hover:bg-white text-orange-700 px-3 py-1 rounded-full text-sm font-medium shadow-sm"
                >
                  <Edit size={16} />
                  <span>{editMode ? 'Cancel' : 'Edit Profile'}</span>
                </button>
              </div>
            </div>
            
            {/* Profile Picture and Basic Info */}
            <div className="px-6 pb-6 -mt-16">
              <div className="flex flex-col md:flex-row md:items-end space-y-4 md:space-y-0 md:space-x-6">
                <div className="relative">
                  <div className="h-32 w-32 rounded-full border-4 border-white bg-orange-100 flex items-center justify-center shadow-md">
                    <User size={48} className="text-orange-500" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-amber-500 text-white rounded-full px-2 py-1 text-xs font-bold flex items-center">
                    <Shield size={12} className="mr-1" />
                    Verified
                  </div>
                </div>
                
                <div className="flex-1">
                  {editMode ? (
                    <div className="space-y-3">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="text-2xl font-bold text-orange-900 border-b border-orange-200 focus:border-orange-500 focus:outline-none w-full"
                      />
                      <textarea
                        name="about"
                        value={formData.about}
                        onChange={handleInputChange}
                        rows="2"
                        className="text-gray-600 border-b border-orange-200 focus:border-orange-500 focus:outline-none w-full"
                      />
                    </div>
                  ) : (
                    <div>
                      <h1 className="text-2xl font-bold text-orange-900">{profileData.name}</h1>
                      <p className="text-gray-600 mt-1">{profileData.about}</p>
                    </div>
                  )}
                  
                  <div className="flex flex-wrap items-center mt-3 gap-2">
                    <div className="flex items-center bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                      <Award size={14} className="mr-1" />
                      <span>{profileData.experience} experience</span>
                    </div>
                    {profileData.languages.map((lang, i) => (
                      <div key={i} className="flex items-center bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">
                        <Languages size={14} className="mr-1" />
                        <span>{lang}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 shadow-inner">
                  <div className="flex items-center space-x-2">
                    <div className="bg-amber-100 p-2 rounded-full">
                      <Star size={20} className="text-amber-600 fill-amber-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Rating</p>
                      <p className="font-bold text-amber-700">{profileData.stats.rating}/5</p>
                    </div>
                  </div>
                  <div className="mt-3 flex justify-between text-xs text-gray-500">
                    <span>{profileData.stats.totalPoojas} Poojas</span>
                    <span>{profileData.stats.clientsServed} Clients</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="border-t border-gray-100 px-6 py-4">
            <h2 className="text-lg font-semibold text-orange-800 mb-3">Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {editMode ? (
                <>
                  <div className="flex items-start space-x-3">
                    <Phone size={18} className="text-orange-500 mt-1" />
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="border-b border-orange-200 focus:border-orange-500 focus:outline-none flex-1"
                    />
                  </div>
                  <div className="flex items-start space-x-3">
                    <Mail size={18} className="text-orange-500 mt-1" />
                    <input
                      type="text"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="border-b border-orange-200 focus:border-orange-500 focus:outline-none flex-1"
                    />
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin size={18} className="text-orange-500 mt-1" />
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className="border-b border-orange-200 focus:border-orange-500 focus:outline-none flex-1"
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center space-x-3">
                    <Phone size={18} className="text-orange-500" />
                    <span>{profileData.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail size={18} className="text-orange-500" />
                    <span>{profileData.email}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin size={18} className="text-orange-500" />
                    <span>{profileData.location}</span>
                  </div>
                </>
              )}
            </div>
            
            {editMode && (
              <div className="flex justify-end space-x-3 mt-6">
                <button 
                  onClick={() => setEditMode(false)}
                  className="flex items-center space-x-1 bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg"
                >
                  <XCircle size={16} />
                  <span>Cancel</span>
                </button>
                <button 
                  onClick={handleSave}
                  className="flex items-center space-x-1 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg"
                >
                  <CheckCircle2 size={16} />
                  <span>Save Changes</span>
                </button>
              </div>
            )}
          </div>
        </div>
        
        {/* Tabs */}
        <div className="flex border-b border-gray-200 mt-8">
          <button
            className={`px-4 py-3 font-medium text-sm flex items-center space-x-2 ${
              activeTab === 'services' 
                ? 'text-orange-600 border-b-2 border-orange-600' 
                : 'text-gray-500 hover:text-orange-500'
            }`}
            onClick={() => setActiveTab('services')}
          >
            <BookOpen size={16} />
            <span>Services</span>
          </button>
          <button
            className={`px-4 py-3 font-medium text-sm flex items-center space-x-2 ${
              activeTab === 'reviews' 
                ? 'text-orange-600 border-b-2 border-orange-600' 
                : 'text-gray-500 hover:text-orange-500'
            }`}
            onClick={() => setActiveTab('reviews')}
          >
            <MessageSquare size={16} />
            <span>Reviews</span>
          </button>
          <button
            className={`px-4 py-3 font-medium text-sm flex items-center space-x-2 ${
              activeTab === 'stats' 
                ? 'text-orange-600 border-b-2 border-orange-600' 
                : 'text-gray-500 hover:text-orange-500'
            }`}
            onClick={() => setActiveTab('stats')}
          >
            <HeartHandshake size={16} />
            <span>Performance</span>
          </button>
        </div>
        
        {/* Tab Content */}
        <div className="mt-6">
          {activeTab === 'services' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {profileData.services.map(service => (
                <div key={service.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                  <div className="p-5">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-bold text-orange-800">{service.name}</h3>
                      <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                        ₹{service.price.toLocaleString('en-IN')}
                      </span>
                    </div>
                    <div className="flex items-center text-gray-500 mt-2">
                      <Clock size={14} className="mr-2" />
                      <span>{service.duration}</span>
                    </div>
                    <p className="text-gray-600 mt-3">{service.description}</p>
                  </div>
                  <div className="bg-orange-50 px-5 py-3 border-t border-orange-100 flex justify-between items-center">
                    <button className="text-orange-600 hover:text-orange-800 text-sm font-medium">
                      Edit Service
                    </button>
                    <button className="bg-orange-600 hover:bg-orange-700 text-white px-3 py-1 rounded-lg text-sm">
                      Book Now
                    </button>
                  </div>
                </div>
              ))}
              
              <div className="bg-white border-2 border-dashed border-orange-300 rounded-xl flex flex-col items-center justify-center p-6 hover:bg-orange-50 cursor-pointer transition-colors">
                <div className="bg-orange-100 p-3 rounded-full mb-3">
                  <BookOpen size={20} className="text-orange-600" />
                </div>
                <h3 className="text-lg font-medium text-orange-800">Add New Service</h3>
                <p className="text-gray-500 text-sm mt-1">Expand your offerings</p>
              </div>
            </div>
          )}
          
          {activeTab === 'reviews' && (
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-orange-800">Client Reviews</h2>
                  <div className="flex items-center">
                    <div className="flex mr-2">
                      {renderStars(Math.round(profileData.stats.rating))}
                    </div>
                    <span className="text-gray-700 font-medium">
                      {profileData.stats.rating} ({profileData.reviews.length} reviews)
                    </span>
                  </div>
                </div>
                
                <div className="space-y-5">
                  {profileData.reviews.map(review => (
                    <div key={review.id} className="border-b border-gray-100 pb-5 last:border-0 last:pb-0">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium text-gray-900">{review.client}</h4>
                          <div className="flex items-center mt-1">
                            <div className="flex mr-2">
                              {renderStars(review.rating)}
                            </div>
                            <span className="text-gray-500 text-sm">
                              {new Date(review.date).toLocaleDateString('en-IN')}
                            </span>
                          </div>
                        </div>
                        <button 
                          onClick={() => toggleReview(review.id)}
                          className="text-orange-600 hover:text-orange-800"
                        >
                          {expandedReview === review.id ? (
                            <ChevronUp size={18} />
                          ) : (
                            <ChevronDown size={18} />
                          )}
                        </button>
                      </div>
                      
                      <p className="text-gray-600 mt-2">{review.comment}</p>
                      
                      {expandedReview === review.id && review.response && (
                        <div className="mt-3 bg-orange-50 rounded-lg p-3">
                          <div className="flex items-start space-x-2">
                            <div className="bg-orange-100 p-1 rounded-full mt-0.5">
                              <User size={14} className="text-orange-600" />
                            </div>
                            <div>
                              <p className="font-medium text-orange-800">Your Response</p>
                              <p className="text-gray-700">{review.response}</p>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {expandedReview === review.id && !review.response && (
                        <div className="mt-3">
                          <textarea
                            placeholder="Write a response..."
                            rows="2"
                            className="w-full border border-gray-200 rounded-lg p-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                          />
                          <div className="flex justify-end mt-2">
                            <button className="bg-orange-600 hover:bg-orange-700 text-white px-3 py-1 rounded-lg text-sm">
                              Post Response
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'stats' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-bold text-orange-800 mb-4">Performance Overview</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Bookings Completion</span>
                      <span className="text-sm font-medium text-orange-700">98%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-orange-600 h-2.5 rounded-full" style={{width: '98%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Client Satisfaction</span>
                      <span className="text-sm font-medium text-orange-700">96%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-amber-500 h-2.5 rounded-full" style={{width: '96%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Repeat Clients</span>
                      <span className="text-sm font-medium text-orange-700">29%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-green-500 h-2.5 rounded-full" style={{width: '29%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-bold text-orange-800 mb-4">Earnings</h3>
                <div className="flex items-end space-x-4 mb-6">
                  <div>
                    <p className="text-gray-500 text-sm">This Month</p>
                    <p className="text-2xl font-bold text-orange-700">₹28,500</p>
                  </div>
                  <div className="pb-1">
                    <p className="text-gray-500 text-sm">Last Month</p>
                    <p className="text-xl font-bold text-gray-700">₹34,200</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="bg-orange-100 p-2 rounded-full mr-3">
                        <IndianRupee size={16} className="text-orange-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">Total Earnings</p>
                        <p className="text-sm text-gray-500">All time</p>
                      </div>
                    </div>
                    <p className="font-bold text-orange-700">₹2,78,400</p>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="bg-green-100 p-2 rounded-full mr-3">
                        <CheckCircle2 size={16} className="text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">Completed Poojas</p>
                        <p className="text-sm text-gray-500">This year</p>
                      </div>
                    </div>
                    <p className="font-bold text-green-700">142</p>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="bg-blue-100 p-2 rounded-full mr-3">
                        <User size={16} className="text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">New Clients</p>
                        <p className="text-sm text-gray-500">This month</p>
                      </div>
                    </div>
                    <p className="font-bold text-blue-700">18</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;