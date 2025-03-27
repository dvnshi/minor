// import React, { useState } from 'react';
// import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

// // Custom SVG Icons
// const Icons = {
//   Bell: () => (
//     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
//     </svg>
//   ),
//   Book: () => (
//     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
//     </svg>
//   ),
//   Calendar: () => (
//     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
//     </svg>
//   ),
//   MoneyBill: () => (
//     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//     </svg>
//   ),
//   User: () => (
//     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//     </svg>
//   ),
//   Comments: () => (
//     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
//     </svg>
//   ),
//   SignOut: () => (
//     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
//     </svg>
//   )
// };

// const PanditDashboard = () => {
//   const [activeSection, setActiveSection] = useState('home');
//   const [bookings, setBookings] = useState([
//     { id: 1, name: 'Rajesh Sharma', pooja: 'Ganesh Puja', date: '2024-04-15', status: 'pending' },
//     { id: 2, name: 'Priya Gupta', pooja: 'Satyanarayan Puja', date: '2024-04-20', status: 'confirmed' },
//     { id: 3, name: 'Amit Patel', pooja: 'Griha Pravesh', date: '2024-04-25', status: 'pending' }
//   ]);

//   const earningsData = [
//     { month: 'Jan', earnings: 45000 },
//     { month: 'Feb', earnings: 62000 },
//     { month: 'Mar', earnings: 55000 },
//     { month: 'Apr', earnings: 75000 }
//   ];

//   const handleBookingAction = (id, action) => {
//     setBookings(bookings.map(booking => 
//       booking.id === id ? { ...booking, status: action } : booking
//     ));
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-orange-50 to-yellow-100 flex">
//       {/* Sidebar */}
//       <div className="w-64 bg-orange-800 text-white p-6">
//         <div className="mb-10 text-center">
//           <img 
//             src="/api/placeholder/100/100" 
//             alt="Pandit Avatar" 
//             className="mx-auto rounded-full w-24 h-24 mb-4 border-4 border-white"
//           />
//           <h2 className="text-xl font-bold">Pandit Ramesh</h2>
//           <p className="text-orange-200">Vedic Astrologer</p>
//         </div>
        
//         <nav className="space-y-4">
//           {[
//             { icon: Icons.Book, label: 'Home', section: 'home' },
//             { icon: Icons.Calendar, label: 'Bookings', section: 'bookings' },
//             { icon: Icons.MoneyBill, label: 'Earnings', section: 'earnings' },
//             { icon: Icons.User, label: 'Profile', section: 'profile' },
//             { icon: Icons.Comments, label: 'Support', section: 'support' },
//             { icon: Icons.SignOut, label: 'Logout', section: 'logout' }
//           ].map(({ icon: Icon, label, section }) => (
//             <button 
//               key={section}
//               onClick={() => setActiveSection(section)}
//               className={`flex items-center w-full p-3 rounded-lg transition duration-300 ${
//                 activeSection === section 
//                   ? 'bg-orange-600 text-white' 
//                   : 'hover:bg-orange-700 text-orange-200'
//               }`}
//             >
//               <Icon className="mr-3" />
//               {label}
//             </button>
//           ))}
//         </nav>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-8">
//         {/* Top Header */}
//         <div className="flex justify-between items-center mb-8">
//           <div>
//             <h1 className="text-4xl font-bold text-orange-800">Welcome, Pandit Ramesh</h1>
//             <p className="text-gray-600">Here's an overview of your spiritual services</p>
//           </div>
          
//           <div className="relative">
//             <Icons.Bell className="text-3xl text-orange-600 cursor-pointer hover:text-orange-800" />
//             <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
//               3
//             </span>
//           </div>
//         </div>

//         {/* Quick Stats */}
//         <div className="grid grid-cols-3 gap-6 mb-8">
//           {[
//             { label: 'Total Bookings', value: '42', icon: Icons.Book, color: 'bg-orange-100' },
//             { label: 'Monthly Earnings', value: '₹75,000', icon: Icons.MoneyBill, color: 'bg-yellow-100' },
//             { label: 'Pending Requests', value: '5', icon: Icons.Calendar, color: 'bg-red-100' }
//           ].map(({ label, value, icon: Icon, color }) => (
//             <div key={label} className={`${color} p-6 rounded-lg shadow-md flex items-center`}>
//               <Icon className="text-3xl text-orange-600 mr-4" />
//               <div>
//                 <p className="text-gray-600">{label}</p>
//                 <h3 className="text-2xl font-bold text-orange-800">{value}</h3>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Booking Requests */}
//         <div className="bg-white rounded-lg shadow-md p-6 mb-8">
//           <h2 className="text-2xl font-bold text-orange-800 mb-4">Booking Requests</h2>
//           <table className="w-full">
//             <thead className="bg-orange-800 text-white">
//               <tr>
//                 <th className="p-3 text-left">Client Name</th>
//                 <th className="p-3 text-left">Pooja Type</th>
//                 <th className="p-3 text-left">Date</th>
//                 <th className="p-3 text-center">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {bookings.map((booking) => (
//                 <tr key={booking.id} className="border-b">
//                   <td className="p-3">{booking.name}</td>
//                   <td className="p-3">{booking.pooja}</td>
//                   <td className="p-3">{booking.date}</td>
//                   <td className="p-3 flex justify-center space-x-2">
//                     <button 
//                       onClick={() => handleBookingAction(booking.id, 'confirmed')}
//                       className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
//                     >
//                       Accept
//                     </button>
//                     <button 
//                       onClick={() => handleBookingAction(booking.id, 'declined')}
//                       className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
//                     >
//                       Decline
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* Earnings Chart */}
//         <div className="bg-white rounded-lg shadow-md p-6">
//           <h2 className="text-2xl font-bold text-orange-800 mb-4">Monthly Earnings</h2>
//           <ResponsiveContainer width="100%" height={300}>
//             <LineChart data={earningsData}>
//               <XAxis dataKey="month" />
//               <YAxis />
//               <Tooltip />
//               <Line type="monotone" dataKey="earnings" stroke="#ED8936" strokeWidth={3} />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PanditDashboard;








import React, { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

// Custom SVG Icons
const Icons = {
  Bell: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
    </svg>
  ),
  Book: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  ),
  Calendar: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  MoneyBill: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  User: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  ),
  Comments: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  ),
  SignOut: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
    </svg>
  ),
  Live: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  )
};

const PanditDashboard = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('home');
  const [bookings, setBookings] = useState([
    { id: 1, name: 'Rajesh Sharma', pooja: 'Ganesh Puja', date: '2024-04-15', status: 'pending' },
    { id: 2, name: 'Priya Gupta', pooja: 'Satyanarayan Puja', date: '2024-04-20', status: 'confirmed' },
    { id: 3, name: 'Amit Patel', pooja: 'Griha Pravesh', date: '2024-04-25', status: 'pending' }
  ]);

  const earningsData = [
    { month: 'Jan', earnings: 45000 },
    { month: 'Feb', earnings: 62000 },
    { month: 'Mar', earnings: 55000 },
    { month: 'Apr', earnings: 75000 }
  ];

  const handleBookingAction = (id, action) => {
    setBookings(bookings.map(booking => 
      booking.id === id ? { ...booking, status: action } : booking
    ));
  };

  const handleLogout = () => {
    // Add logout logic here
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-yellow-100 flex">
      {/* Sidebar */}
      <div className="w-64 bg-orange-800 text-white p-6">
        <div className="mb-10 text-center">
          <img 
            src="/api/placeholder/100/100" 
            alt="Pandit Avatar" 
            className="mx-auto rounded-full w-24 h-24 mb-4 border-4 border-white"
          />
          <h2 className="text-xl font-bold">Pandit Ramesh</h2>
          <p className="text-orange-200">Vedic Astrologer</p>
        </div>
        
        <nav className="space-y-4">
          {[
            { icon: Icons.Book, label: 'Home', section: 'home', path: '/pandit-dashboard' },
            { icon: Icons.Calendar, label: 'Calendar', section: 'calendar', path: '/pandit-dashboard/calendar' },
            { icon: Icons.Live, label: 'Live Streaming', section: 'live', path: '/pandit-dashboard/live' },
            { icon: Icons.Book, label: 'Bookings', section: 'bookings', path: '/pandit-dashboard/bookings' },
            { icon: Icons.MoneyBill, label: 'Earnings', section: 'earnings', path: '/pandit-dashboard/earnings' },
            { icon: Icons.User, label: 'Profile', section: 'profile', path: '/pandit-dashboard/profile' },
            { icon: Icons.Comments, label: 'Support', section: 'support', path: '/pandit-dashboard/support' }
          ].map(({ icon: Icon, label, section, path }) => (
            <Link
              key={section}
              to={path}
              onClick={() => setActiveSection(section)}
              className={`flex items-center w-full p-3 rounded-lg transition duration-300 ${
                activeSection === section 
                  ? 'bg-orange-600 text-white' 
                  : 'hover:bg-orange-700 text-orange-200'
              }`}
            >
              <Icon className="mr-3" />
              {label}
            </Link>
          ))}
          
          <button 
            onClick={handleLogout}
            className="flex items-center w-full p-3 rounded-lg transition duration-300 hover:bg-orange-700 text-orange-200"
          >
            <Icons.SignOut className="mr-3" />
            Logout
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Top Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-orange-800">Welcome, Pandit Ramesh</h1>
            <p className="text-gray-600">Here's an overview of your spiritual services</p>
          </div>
          
          <div className="relative">
            <Icons.Bell className="text-3xl text-orange-600 cursor-pointer hover:text-orange-800" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
              3
            </span>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          {[
            { label: 'Total Bookings', value: '42', icon: Icons.Book, color: 'bg-orange-100' },
            { label: 'Monthly Earnings', value: '₹75,000', icon: Icons.MoneyBill, color: 'bg-yellow-100' },
            { label: 'Pending Requests', value: '5', icon: Icons.Calendar, color: 'bg-red-100' }
          ].map(({ label, value, icon: Icon, color }) => (
            <div key={label} className={`${color} p-6 rounded-lg shadow-md flex items-center`}>
              <Icon className="text-3xl text-orange-600 mr-4" />
              <div>
                <p className="text-gray-600">{label}</p>
                <h3 className="text-2xl font-bold text-orange-800">{value}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Nested Routes Content */}
        <Outlet />

        {/* Default Dashboard Content (shown when no nested route matches) */}
        {!window.location.pathname.includes('/pandit-dashboard/') && (
          <>
            {/* Booking Requests */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold text-orange-800 mb-4">Booking Requests</h2>
              <table className="w-full">
                <thead className="bg-orange-800 text-white">
                  <tr>
                    <th className="p-3 text-left">Client Name</th>
                    <th className="p-3 text-left">Pooja Type</th>
                    <th className="p-3 text-left">Date</th>
                    <th className="p-3 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((booking) => (
                    <tr key={booking.id} className="border-b">
                      <td className="p-3">{booking.name}</td>
                      <td className="p-3">{booking.pooja}</td>
                      <td className="p-3">{booking.date}</td>
                      <td className="p-3 flex justify-center space-x-2">
                        <button 
                          onClick={() => handleBookingAction(booking.id, 'confirmed')}
                          className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                        >
                          Accept
                        </button>
                        <button 
                          onClick={() => handleBookingAction(booking.id, 'declined')}
                          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                        >
                          Decline
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Earnings Chart */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-orange-800 mb-4">Monthly Earnings</h2>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={earningsData}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="earnings" stroke="#ED8936" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PanditDashboard;
