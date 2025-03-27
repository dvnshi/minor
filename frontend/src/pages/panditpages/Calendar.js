import React, { useState } from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay } from 'date-fns';
import { Link } from 'react-router-dom';

// Icons
const Icons = {
  ChevronLeft: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  ),
  ChevronRight: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
    </svg>
  ),
  Plus: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
    </svg>
  ),
  Dot: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-2 w-2" viewBox="0 0 20 20" fill="currentColor">
      <circle cx="10" cy="10" r="10" />
    </svg>
  )
};

// Sample bookings data
const sampleBookings = [
  { id: 1, date: new Date(2024, 4, 15), client: 'Rajesh Sharma', pooja: 'Ganesh Puja', time: '09:00 AM', status: 'confirmed' },
  { id: 2, date: new Date(2024, 4, 15), client: 'Priya Patel', pooja: 'Satyanarayan Puja', time: '02:00 PM', status: 'confirmed' },
  { id: 3, date: new Date(2024, 4, 20), client: 'Amit Kumar', pooja: 'Griha Pravesh', time: '11:00 AM', status: 'pending' },
  { id: 4, date: new Date(2024, 4, 25), client: 'Neha Gupta', pooja: 'Wedding Ceremony', time: '10:00 AM', status: 'confirmed' },
  { id: 5, date: new Date(2024, 4, 28), client: 'Sanjay Verma', pooja: 'Rudrabhishek', time: '04:00 PM', status: 'pending' },
];

// Available time slots
const timeSlots = [
  '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM', 
  '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', 
  '04:00 PM', '05:00 PM', '06:00 PM'
];

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showAddSlotModal, setShowAddSlotModal] = useState(false);
  const [newSlotTime, setNewSlotTime] = useState('09:00 AM');
  const [newSlotPooja, setNewSlotPooja] = useState('Ganesh Puja');

  // Get all days in current month view
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });

  // Navigation functions
  const prevMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  const nextMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));

  // Filter bookings for selected date
  const dailyBookings = sampleBookings.filter(booking => 
    isSameDay(booking.date, selectedDate)
  );

  // Filter available slots
  const availableSlots = timeSlots.filter(slot => 
    !dailyBookings.some(booking => booking.time === slot)
  );

  // Add new booking slot
  const handleAddSlot = () => {
    // In a real app, you would save this to your backend
    const newBooking = {
      id: sampleBookings.length + 1,
      date: selectedDate,
      client: 'Available Slot',
      pooja: newSlotPooja,
      time: newSlotTime,
      status: 'available'
    };
    sampleBookings.push(newBooking);
    setShowAddSlotModal(false);
  };

  return (
    <div className="space-y-6">
      {/* Calendar Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-orange-800">
          {format(currentDate, 'MMMM yyyy')}
        </h2>
        <div className="flex space-x-2">
          <button 
            onClick={prevMonth}
            className="p-2 rounded-full hover:bg-orange-100 text-orange-800"
          >
            <Icons.ChevronLeft />
          </button>
          <button 
            onClick={() => setCurrentDate(new Date())}
            className="px-4 py-2 text-sm bg-orange-100 text-orange-800 rounded-lg hover:bg-orange-200"
          >
            Today
          </button>
          <button 
            onClick={nextMonth}
            className="p-2 rounded-full hover:bg-orange-100 text-orange-800"
          >
            <Icons.ChevronRight />
          </button>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1">
        {/* Day headers */}
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="text-center font-medium text-orange-800 py-2">
            {day}
          </div>
        ))}

        {/* Calendar days */}
        {daysInMonth.map(day => {
          const dayBookings = sampleBookings.filter(booking => 
            isSameDay(booking.date, day)
          );
          
          return (
            <div
              key={day.toString()}
              onClick={() => setSelectedDate(day)}
              className={`min-h-24 p-2 border rounded-lg cursor-pointer transition-all ${
                isSameDay(day, selectedDate) 
                  ? 'bg-orange-100 border-orange-500' 
                  : 'hover:bg-orange-50 border-gray-200'
              } ${
                !isSameMonth(day, currentDate) ? 'text-gray-400' : 'text-gray-800'
              }`}
            >
              <div className="flex justify-between">
                <span className={`font-medium ${
                  isSameDay(day, new Date()) ? 'bg-orange-600 text-white rounded-full w-6 h-6 flex items-center justify-center' : ''
                }`}>
                  {format(day, 'd')}
                </span>
                {dayBookings.length > 0 && (
                  <span className="flex space-x-1">
                    {dayBookings.map((_, i) => (
                      <Icons.Dot key={i} className="text-orange-500" />
                    ))}
                  </span>
                )}
              </div>
              
              {/* Show first 2 bookings for preview */}
              {dayBookings.slice(0, 2).map(booking => (
                <div 
                  key={booking.id}
                  className={`mt-1 text-xs p-1 rounded truncate ${
                    booking.status === 'confirmed' 
                      ? 'bg-green-100 text-green-800' 
                      : booking.status === 'pending' 
                        ? 'bg-yellow-100 text-yellow-800' 
                        : 'bg-blue-100 text-blue-800'
                  }`}
                >
                  {booking.time} - {booking.pooja}
                </div>
              ))}
              {dayBookings.length > 2 && (
                <div className="mt-1 text-xs text-gray-500">
                  +{dayBookings.length - 2} more
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Selected Day Details */}
      <div className="mt-8 bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-orange-800">
            {format(selectedDate, 'EEEE, MMMM d, yyyy')}
          </h3>
          <button 
            onClick={() => setShowAddSlotModal(true)}
            className="flex items-center space-x-1 bg-orange-600 text-white px-3 py-2 rounded-lg hover:bg-orange-700 text-sm"
          >
            <Icons.Plus />
            <span>Add Time Slot</span>
          </button>
        </div>

        {/* Time Slots */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Booked Slots */}
          <div>
            <h4 className="font-medium text-gray-700 mb-2">Booked Appointments</h4>
            {dailyBookings.length > 0 ? (
              <div className="space-y-2">
                {dailyBookings.map(booking => (
                  <div 
                    key={booking.id} 
                    className={`p-3 rounded-lg border ${
                      booking.status === 'confirmed' 
                        ? 'border-green-200 bg-green-50' 
                        : 'border-yellow-200 bg-yellow-50'
                    }`}
                  >
                    <div className="flex justify-between">
                      <span className="font-medium">{booking.time}</span>
                      <span className={`text-xs px-2 py-1 rounded ${
                        booking.status === 'confirmed' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {booking.status}
                      </span>
                    </div>
                    <div className="mt-1 text-sm font-medium">{booking.pooja}</div>
                    <div className="mt-1 text-sm text-gray-600">with {booking.client}</div>
                    <div className="mt-2 flex space-x-2">
                      <Link 
                        to={`/pandit-dashboard/bookings/${booking.id}`}
                        className="text-xs text-orange-600 hover:text-orange-800"
                      >
                        View Details
                      </Link>
                      {booking.status === 'pending' && (
                        <>
                          <button className="text-xs text-green-600 hover:text-green-800">
                            Confirm
                          </button>
                          <button className="text-xs text-red-600 hover:text-red-800">
                            Decline
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">No bookings scheduled</p>
            )}
          </div>

          {/* Available Slots */}
          <div>
            <h4 className="font-medium text-gray-700 mb-2">Available Time Slots</h4>
            {availableSlots.length > 0 ? (
              <div className="grid grid-cols-2 gap-2">
                {availableSlots.map(slot => (
                  <div 
                    key={slot}
                    className="p-3 rounded-lg border border-blue-200 bg-blue-50 text-center cursor-pointer hover:bg-blue-100"
                  >
                    <div className="font-medium">{slot}</div>
                    <div className="text-xs text-blue-600">Available</div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">No available slots</p>
            )}
          </div>
        </div>
      </div>

      {/* Add Slot Modal */}
      {showAddSlotModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-xl font-bold text-orange-800 mb-4">Add New Time Slot</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                <input 
                  type="text" 
                  value={format(selectedDate, 'MMMM d, yyyy')}
                  readOnly
                  className="w-full p-2 border rounded-lg bg-gray-100"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
                <select
                  value={newSlotTime}
                  onChange={(e) => setNewSlotTime(e.target.value)}
                  className="w-full p-2 border rounded-lg"
                >
                  {timeSlots.map(slot => (
                    <option key={slot} value={slot}>{slot}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Pooja Type</label>
                <select
                  value={newSlotPooja}
                  onChange={(e) => setNewSlotPooja(e.target.value)}
                  className="w-full p-2 border rounded-lg"
                >
                  <option>Ganesh Puja</option>
                  <option>Satyanarayan Puja</option>
                  <option>Griha Pravesh</option>
                  <option>Wedding Ceremony</option>
                  <option>Rudrabhishek</option>
                </select>
              </div>
            </div>
            
            <div className="mt-6 flex justify-end space-x-3">
              <button 
                onClick={() => setShowAddSlotModal(false)}
                className="px-4 py-2 border rounded-lg hover:bg-gray-100"
              >
                Cancel
              </button>
              <button 
                onClick={handleAddSlot}
                className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700"
              >
                Add Slot
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;