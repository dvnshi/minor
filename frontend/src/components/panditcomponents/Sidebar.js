// // src/components/common/Sidebar.js
// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { useAuth } from '../../contexts/AuthContextP';

// const Sidebar = () => {
//   const { user } = useAuth();
//   const location = useLocation();

//   const menuItems = [
//     { 
//       icon: (
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
//         </svg>
//       ),
//       label: 'Dashboard', 
//       path: '/dashboard' 
//     },
//     { 
//       icon: (
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
//         </svg>
//       ),
//       label: 'Bookings', 
//       path: '/bookings' 
//     },
//     { 
//       icon: (
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//         </svg>
//       ),
//       label: 'Earnings', 
//       path: '/earnings' 
//     },
//     { 
//       icon: (
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//         </svg>
//       ),
//       label: 'Profile', 
//       path: '/profile' 
//     },
//     { 
//       icon: (
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
//         </svg>
//       ),
//       label: 'Support', 
//       path: '/support' 
//     }
//   ];

//   return (
//     <div className="w-64 bg-orange-800 text-white p-6">
//       {/* Profile Section */}
//       <div className="mb-10 text-center">
//         <img 
//           src={user.avatar} 
//           alt="Pandit Avatar" 
//           className="mx-auto rounded-full w-24 h-24 mb-4 border-4 border-white"
//         />
//         <h2 className="text-xl font-bold">{user.name}</h2>
//         <p className="text-orange-200">{user.role}</p>
//       </div>
      
//       {/* Navigation */}
//       <nav className="space-y-4">
//         {menuItems.map((item) => (
//           <Link 
//             key={item.path}
//             to={item.path}
//             className={`flex items-center w-full p-3 rounded-lg transition duration-300 ${
//               location.pathname === item.path 
//                 ? 'bg-orange-600 text-white' 
//                 : 'hover:bg-orange-700 text-orange-200'
//             }`}
//           >
//             <span className="mr-3">{item.icon}</span>
//             {item.label}
//           </Link>
//         ))}
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;