
// src/contexts/BookingContext.js
import React, { createContext, useState, useContext } from 'react';

const BookingContext = createContext(null);

export const BookingProvider = ({ children }) => {
  const [bookings, setBookings] = useState([
    { 
      id: 1, 
      name: 'Rajesh Sharma', 
      pooja: 'Ganesh Puja', 
      date: '2024-04-15', 
      status: 'pending',
      liveStreamLink: 'https://example.com/live/1',
      details: {
        location: 'Online',
        duration: '1 hour',
        additionalNotes: 'Perform puja with specific instructions'
      }
    },
    { 
      id: 2, 
      name: 'Priya Gupta', 
      pooja: 'Satyanarayan Puja', 
      date: '2024-04-20', 
      status: 'confirmed',
      liveStreamLink: 'https://example.com/live/2',
      details: {
        location: 'Temple',
        duration: '2 hours',
        additionalNotes: 'Traditional puja with family'
      }
    }
  ]);

  const updateBookingStatus = (bookingId, newStatus) => {
    setBookings(bookings.map(booking => 
      booking.id === bookingId 
        ? { ...booking, status: newStatus } 
        : booking
    ));
  };

  return (
    <BookingContext.Provider value={{ bookings, updateBookingStatus }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBookings = () => useContext(BookingContext);