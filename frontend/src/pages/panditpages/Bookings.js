import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  Clock4, 
  XCircle,
  Filter,
  Search,
  ChevronDown,
  ChevronUp,
  MoreVertical,
  BookOpen,
  IndianRupee,
  Sparkles,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const Bookings = () => {
  // Sample booking data
  const [bookings, setBookings] = useState([
    {
      id: 1,
      client: 'Rajesh Sharma',
      pooja: 'Ganesh Chaturthi Puja',
      date: '2024-05-15',
      time: '09:00 AM',
      duration: '2 hours',
      location: 'Mumbai, Maharashtra',
      status: 'confirmed',
      amount: 2500,
      specialRequests: 'Need specific flowers for puja'
    },
    {
      id: 2,
      client: 'Priya Patel',
      pooja: 'Satyanarayan Katha',
      date: '2024-05-18',
      time: '11:30 AM',
      duration: '3 hours',
      location: 'Pune, Maharashtra',
      status: 'pending',
      amount: 3500,
      specialRequests: 'Family of 6 will participate'
    },
    {
      id: 3,
      client: 'Amit Kumar',
      pooja: 'Griha Pravesh',
      date: '2024-05-20',
      time: '08:00 AM',
      duration: '4 hours',
      location: 'Bangalore, Karnataka',
      status: 'confirmed',
      amount: 5000,
      specialRequests: 'Need muhurta consultation'
    },
    {
      id: 4,
      client: 'Neha Gupta',
      pooja: 'Wedding Ceremony',
      date: '2024-05-25',
      time: '06:00 AM',
      duration: '6 hours',
      location: 'Delhi',
      status: 'completed',
      amount: 10000,
      specialRequests: 'Full wedding rituals with fire ceremony'
    }
  ]);

  // State for filters and UI
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [expandedBooking, setExpandedBooking] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [calendarView, setCalendarView] = useState(false);

  // Filter bookings based on search and status
  const filteredBookings = bookings.filter(booking => {
    const matchesSearch = 
      booking.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.pooja.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || booking.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  // Status colors
  const statusColors = {
    confirmed: 'bg-green-100 text-green-800',
    pending: 'bg-yellow-100 text-yellow-800',
    completed: 'bg-blue-100 text-blue-800',
    cancelled: 'bg-red-100 text-red-800'
  };

  // Handle booking actions
  const confirmBooking = (id) => {
    setBookings(bookings.map(booking => 
      booking.id === id ? { ...booking, status: 'confirmed' } : booking
    ));
  };

  const cancelBooking = (id) => {
    setBookings(bookings.map(booking => 
      booking.id === id ? { ...booking, status: 'cancelled' } : booking
    ));
  };

  // Toggle booking details
  const toggleBookingDetails = (id) => {
    setExpandedBooking(expandedBooking === id ? null : id);
  };

  return (
    <div className="bg-gradient-to-b from-orange-50 to-yellow-50 min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-orange-800">Pooja Bookings</h1>
            <p className="text-orange-600">Manage your spiritual service appointments</p>
          </div>
          
          <div className="flex space-x-3 mt-4 md:mt-0">
            <button 
              onClick={() => setCalendarView(!calendarView)}
              className="flex items-center space-x-2 bg-orange-100 hover:bg-orange-200 text-orange-800 px-4 py-2 rounded-lg"
            >
              <Calendar size={18} />
              <span>{calendarView ? 'List View' : 'Calendar View'}</span>
            </button>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
          <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search bookings..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
            
            <div className="relative">
              <button 
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2 bg-orange-100 hover:bg-orange-200 text-orange-800 px-4 py-2 rounded-lg"
              >
                <Filter size={18} />
                <span>Filters</span>
                {showFilters ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>
              
              {showFilters && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-10 p-3">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="w-full p-2 border rounded-lg"
                  >
                    <option value="all">All Statuses</option>
                    <option value="confirmed">Confirmed</option>
                    <option value="pending">Pending</option>
                    <option value="completed">Completed</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Calendar View */}
        {calendarView ? (
          <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-orange-800">May 2024</h2>
              <div className="flex space-x-2">
                <button className="p-2 rounded-full hover:bg-orange-100">
                  <ChevronLeft size={20} />
                </button>
                <button className="p-2 rounded-full hover:bg-orange-100">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-7 gap-1">
              {/* Day headers */}
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                <div key={day} className="text-center font-medium text-orange-800 py-2">
                  {day}
                </div>
              ))}
              
              {/* Calendar days with bookings */}
              {Array.from({ length: 31 }).map((_, i) => {
                const date = i + 1;
                const dateStr = `2024-05-${date < 10 ? '0' + date : date}`;
                const dayBookings = bookings.filter(b => b.date === dateStr);
                
                return (
                  <div
                    key={date}
                    className={`min-h-24 p-2 border rounded-lg ${
                      dayBookings.length > 0 ? 'bg-orange-50 border-orange-200' : 'border-gray-200'
                    }`}
                  >
                    <div className="flex justify-between">
                      <span className={`text-sm ${
                        date === 15 ? 'bg-orange-600 text-white rounded-full w-6 h-6 flex items-center justify-center' : ''
                      }`}>
                        {date}
                      </span>
                      {dayBookings.length > 0 && (
                        <span className="flex space-x-1">
                          {dayBookings.slice(0, 2).map((_, i) => (
                            <div key={i} className="w-2 h-2 bg-orange-500 rounded-full"></div>
                          ))}
                        </span>
                      )}
                    </div>
                    
                    {dayBookings.slice(0, 1).map(booking => (
                      <div 
                        key={booking.id}
                        className="mt-1 text-xs p-1 rounded truncate bg-orange-100 text-orange-800"
                      >
                        {booking.time} - {booking.pooja.split(' ')[0]}
                      </div>
                    ))}
                    {dayBookings.length > 1 && (
                      <div className="mt-1 text-xs text-gray-500">
                        +{dayBookings.length - 1} more
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          /* List View */
          <div className="space-y-4">
            {filteredBookings.length === 0 ? (
              <div className="bg-white rounded-xl shadow-sm p-8 text-center">
                <BookOpen className="mx-auto text-gray-400 mb-4" size={48} />
                <h3 className="text-xl font-medium text-gray-700">No bookings found</h3>
                <p className="text-gray-500">Try adjusting your search or filters</p>
              </div>
            ) : (
              filteredBookings.map(booking => (
                <div 
                  key={booking.id} 
                  className="bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-200 hover:shadow-md"
                >
                  <div 
                    className="p-4 cursor-pointer"
                    onClick={() => toggleBookingDetails(booking.id)}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-bold text-orange-800">{booking.pooja}</h3>
                        <div className="flex items-center text-gray-600 mt-1">
                          <User size={16} className="mr-2" />
                          <span>{booking.client}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <span className={`text-xs px-2 py-1 rounded-full ${statusColors[booking.status]}`}>
                          {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                        </span>
                        <button className="text-gray-400 hover:text-gray-600">
                          <MoreVertical size={18} />
                        </button>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-2 text-orange-600" />
                        <div>
                          <p className="text-xs text-gray-500">Date</p>
                          <p className="font-medium">{new Date(booking.date).toLocaleDateString('en-IN')}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <Clock size={16} className="mr-2 text-orange-600" />
                        <div>
                          <p className="text-xs text-gray-500">Time</p>
                          <p className="font-medium">{booking.time}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <IndianRupee size={16} className="mr-2 text-orange-600" />
                        <div>
                          <p className="text-xs text-gray-500">Amount</p>
                          <p className="font-medium">₹{booking.amount.toLocaleString('en-IN')}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-2 text-orange-600" />
                        <div>
                          <p className="text-xs text-gray-500">Location</p>
                          <p className="font-medium truncate">{booking.location}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Expanded Details */}
                  {expandedBooking === booking.id && (
                    <div className="border-t p-4 bg-orange-50">
                      <h4 className="font-medium text-orange-800 mb-2 flex items-center">
                        <Sparkles size={16} className="mr-2" />
                        Special Requests
                      </h4>
                      <p className="text-gray-700 mb-4">{booking.specialRequests}</p>
                      
                      <div className="flex justify-end space-x-3">
                        {booking.status === 'pending' && (
                          <>
                            <button 
                              onClick={() => confirmBooking(booking.id)}
                              className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
                            >
                              <CheckCircle2 size={16} />
                              <span>Confirm</span>
                            </button>
                            <button 
                              onClick={() => cancelBooking(booking.id)}
                              className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
                            >
                              <XCircle size={16} />
                              <span>Decline</span>
                            </button>
                          </>
                        )}
                        
                        <button className="flex items-center space-x-2 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg">
                          <Phone size={16} />
                          <span>Contact Client</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        )}

        {/* Stats Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
          <div className="bg-white rounded-xl shadow-sm p-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500">Total Bookings</p>
                <h3 className="text-2xl font-bold text-orange-800">{bookings.length}</h3>
              </div>
              <div className="bg-orange-100 p-3 rounded-full">
                <BookOpen size={20} className="text-orange-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500">Confirmed</p>
                <h3 className="text-2xl font-bold text-green-600">
                  {bookings.filter(b => b.status === 'confirmed').length}
                </h3>
              </div>
              <div className="bg-green-100 p-3 rounded-full">
                <CheckCircle2 size={20} className="text-green-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500">Pending</p>
                <h3 className="text-2xl font-bold text-yellow-600">
                  {bookings.filter(b => b.status === 'pending').length}
                </h3>
              </div>
              <div className="bg-yellow-100 p-3 rounded-full">
                <Clock4 size={20} className="text-yellow-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500">Total Earnings</p>
                <h3 className="text-2xl font-bold text-blue-600">
                  ₹{bookings.reduce((sum, b) => sum + (b.status === 'completed' ? b.amount : 0), 0).toLocaleString('en-IN')}
                </h3>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <IndianRupee size={20} className="text-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookings;