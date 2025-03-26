import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useBookings } from '../contexts/BookingContext';

const localizer = momentLocalizer(moment);

const AvailabilityCalendar = () => {
  const { bookings } = useBookings();
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Transform bookings to calendar events
  const events = bookings.map(booking => ({
    title: `${booking.pooja} - ${booking.name}`,
    start: new Date(booking.date),
    end: moment(booking.date).add(2, 'hours').toDate(),
    status: booking.status
  }));

  // Custom event styling
  const eventStyleGetter = (event) => {
    let backgroundColor = '#ED8936'; // default orange
    if (event.status === 'pending') backgroundColor = '#FFA500';
    if (event.status === 'confirmed') backgroundColor = '#48BB78';
    if (event.status === 'declined') backgroundColor = '#F56565';

    return {
      style: {
        backgroundColor,
        color: 'white',
        borderRadius: '5px',
        opacity: 0.8
      }
    };
  };

  const handleSelectEvent = (event) => {
    const selectedBooking = bookings.find(
      b => b.pooja === event.title.split(' - ')[0] && 
           b.name === event.title.split(' - ')[1]
    );
    setSelectedEvent(selectedBooking);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-orange-800 mb-4">
        Availability & Bookings
      </h2>
      
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        eventStyleGetter={eventStyleGetter}
        onSelectEvent={handleSelectEvent}
      />

      {/* Event Details Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full">
            <h3 className="text-xl font-bold text-orange-800 mb-4">
              {selectedEvent.pooja} Booking Details
            </h3>
            <div className="space-y-2">
              <p><strong>Client:</strong> {selectedEvent.name}</p>
              <p><strong>Date:</strong> {selectedEvent.date}</p>
              <p><strong>Status:</strong> {selectedEvent.status}</p>
              <a 
                href={selectedEvent.liveStreamLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 text-center"
              >
                Join Live Stream
              </a>
              <button 
                onClick={() => setSelectedEvent(null)}
                className="w-full mt-2 py-2 bg-gray-200 rounded hover:bg-gray-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AvailabilityCalendar;