// src/components/bookings/LiveStreamModal.js
import React from 'react';

const LiveStreamModal = ({ booking, onClose }) => {
  if (!booking) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
        >
          ✕
        </button>
        
        <h2 className="text-2xl font-bold text-orange-800 mb-4">
          Live Stream: {booking.pooja}
        </h2>
        
        <div className="mb-4">
          <p><strong>Date:</strong> {booking.date}</p>
          <p><strong>Client:</strong> {booking.name}</p>
        </div>
        
        <div className="bg-gray-100 rounded-lg p-4 mb-4">
          <h3 className="font-semibold text-orange-700 mb-2">Stream Details</h3>
          <p>Streaming Platform: Pandit Live</p>
          <p>Stream ID: {booking.id}</p>
        </div>
        
        <div className="flex space-x-4">
          <a 
            href={booking.liveStreamLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 text-center"
          >
            Join Stream
          </a>
          <button 
            onClick={onClose}
            className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded hover:bg-gray-300"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default LiveStreamModal;