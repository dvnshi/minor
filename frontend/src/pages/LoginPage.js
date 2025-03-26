// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// const LoginPage = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     rememberMe: false
//   });
  
//   const [errors, setErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
  
//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === 'checkbox' ? checked : value
//     });
    
//     // Clear error when user starts typing
//     if (errors[name]) {
//       setErrors({
//         ...errors,
//         [name]: ''
//       });
//     }
//   };
  
//   const validateForm = () => {
//     const newErrors = {};
    
//     // Required fields validation
//     if (!formData.email.trim()) newErrors.email = 'Email is required';
//     if (!formData.password) newErrors.password = 'Password is required';
    
//     // Email format validation
//     if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = 'Please enter a valid email';
//     }
    
//     return newErrors;
//   };
  
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const validationErrors = validateForm();
    
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }
    
//     setIsSubmitting(true);
    
//     try {
//       // Get users from localStorage
//       const users = JSON.parse(localStorage.getItem('panditConnectUsers') || '[]');
      
//       // Find user with matching email
//       const user = users.find(user => user.email === formData.email);
      
//       // In a real app, you would hash and compare passwords
//       // For this demo, we'll simulate a successful login if the email exists
//       if (user) {
//         // In a real app with proper authentication:
//         // if (user && await comparePassword(formData.password, user.hashedPassword)) {
        
//         // Store user ID in localStorage to maintain session
//         localStorage.setItem('currentUserId', user.id);
        
//         // Store login time
//         localStorage.setItem('lastLogin', new Date().toISOString());
        
//         // If remember me is checked, store in localStorage, otherwise in sessionStorage
//         if (formData.rememberMe) {
//           localStorage.setItem('rememberUser', 'true');
//         } else {
//           sessionStorage.setItem('sessionUser', user.id);
//           localStorage.removeItem('rememberUser');
//         }
        
//         // Redirect to dashboard or home page
//         navigate('/home');
//       } else {
//         // User not found or wrong password
//         setErrors({
//           form: 'Invalid email or password. Please try again.'
//         });
//       }
//     } catch (error) {
//       console.error('Login error:', error);
//       setErrors({
//         form: 'Login failed. Please try again.'
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };
  
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-orange-50 to-yellow-100 p-4">
//       <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
//         <div className="text-center mb-8">
//           <Link to="/" className="inline-block">
//             <img 
//               src="/api/placeholder/60/60" 
//               alt="PanditConnect Logo" 
//               className="h-12 w-12 mx-auto mb-4"
//             />
//           </Link>
//           <h1 className="text-3xl font-bold text-orange-800">Welcome Back</h1>
//           <p className="text-gray-600 mt-2">Sign in to your PanditConnect account</p>
//         </div>
        
//         {errors.form && (
//           <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700">
//             {errors.form}
//           </div>
//         )}
        
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div>
//             <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="email">
//               Email Address
//             </label>
//             <input
//               id="email"
//               name="email"
//               type="email"
//               value={formData.email}
//               onChange={handleChange}
//               className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
//                 errors.email ? 'border-red-500' : 'border-gray-300'
//               }`}
//               placeholder="Enter your email"
//             />
//             {errors.email && (
//               <p className="text-red-500 text-xs mt-1">{errors.email}</p>
//             )}
//           </div>
          
//           <div>
//             <div className="flex items-center justify-between mb-2">
//               <label className="block text-gray-700 text-sm font-medium" htmlFor="password">
//                 Password
//               </label>
//               <Link to="/forgot-password" className="text-sm text-orange-600 hover:text-orange-800">
//                 Forgot password?
//               </Link>
//             </div>
//             <input
//               id="password"
//               name="password"
//               type="password"
//               value={formData.password}
//               onChange={handleChange}
//               className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
//                 errors.password ? 'border-red-500' : 'border-gray-300'
//               }`}
//               placeholder="Enter your password"
//             />
//             {errors.password && (
//               <p className="text-red-500 text-xs mt-1">{errors.password}</p>
//             )}
//           </div>
          
//           <div className="flex items-center">
//             <input
//               id="rememberMe"
//               name="rememberMe"
//               type="checkbox"
//               checked={formData.rememberMe}
//               onChange={handleChange}
//               className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
//             />
//             <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-700">
//               Remember me
//             </label>
//           </div>
          
//           <button
//             type="submit"
//             disabled={isSubmitting}
//             className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 transition duration-200 ease-in-out disabled:bg-orange-300"
//           >
//             {isSubmitting ? (
//               <span className="flex items-center justify-center">
//                 <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                   <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                   <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                 </svg>
//                 Signing in...
//               </span>
//             ) : (
//               'Sign In'
//             )}
//           </button>
//         </form>
        
//         <div className="mt-8">
//           <div className="relative">
//             <div className="absolute inset-0 flex items-center">
//               <div className="w-full border-t border-gray-300"></div>
//             </div>
//             <div className="relative flex justify-center text-sm">
//               <span className="px-2 bg-white text-gray-500">Or continue with</span>
//             </div>
//           </div>
          
//           <div className="mt-6 grid grid-cols-2 gap-3">
//             <button
//               type="button"
//               className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
//             >
//               <span>Google</span>
//             </button>
//             <button
//               type="button"
//               className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
//             >
//               <span>Facebook</span>
//             </button>
//           </div>
//         </div>
        
//         <div className="mt-6 text-center">
//           <p className="text-gray-600">
//             Don't have an account?{' '}
//             <Link to="/register" className="text-orange-600 hover:text-orange-800 font-medium">
//               Register
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
    userType: 'customer' // Default to customer
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    // Required fields validation
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    
    // Email format validation
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    return newErrors;
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Get users from localStorage
      const users = JSON.parse(localStorage.getItem('panditConnectUsers') || '[]');
      
      // Find user with matching email
      const user = users.find(user => user.email === formData.email);
      
      if (user) {
        // Store user ID in localStorage to maintain session
        localStorage.setItem('currentUserId', user.id);
        
        // Store login time
        localStorage.setItem('lastLogin', new Date().toISOString());
        
        // Store user type
        localStorage.setItem('userType', formData.userType);
        
        // If remember me is checked, store in localStorage, otherwise in sessionStorage
        if (formData.rememberMe) {
          localStorage.setItem('rememberUser', 'true');
        } else {
          sessionStorage.setItem('sessionUser', user.id);
          localStorage.removeItem('rememberUser');
        }
        
        // Redirect based on user type
        if (formData.userType === 'pandit') {
          // window.location.href = 'https://pandit-website.example.com'; // Replace with actual pandit website URL
          navigate('/pandit-dashboard');
        } else if (formData.userType === 'customer') {
          navigate('/home'); // Replace with your customer dashboard route
        } else {
          navigate('/'); // Default home page
        }
      } else {
        // User not found or wrong password
        setErrors({
          form: 'Invalid email or password. Please try again.'
        });
      }
    } catch (error) {
      console.error('Login error:', error);
      setErrors({
        form: 'Login failed. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-orange-50 to-yellow-100 p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
        <div className="text-center mb-8">
          <Link to="/" className="inline-block">
            <img 
              src="/api/placeholder/60/60" 
              alt="PanditConnect Logo" 
              className="h-12 w-12 mx-auto mb-4"
            />
          </Link>
          <h1 className="text-3xl font-bold text-orange-800">Welcome Back</h1>
          <p className="text-gray-600 mt-2">Sign in to your PanditConnect account</p>
        </div>
        
        {errors.form && (
          <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700">
            {errors.form}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="userType">
              I am a
            </label>
            <select
              id="userType"
              name="userType"
              value={formData.userType}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            >
              <option value="customer">Customer</option>
              <option value="pandit">Pandit</option>
            </select>
          </div>
          
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>
          
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-gray-700 text-sm font-medium" htmlFor="password">
                Password
              </label>
              <Link to="/forgot-password" className="text-sm text-orange-600 hover:text-orange-800">
                Forgot password?
              </Link>
            </div>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                errors.password ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>
          
          <div className="flex items-center">
            <input
              id="rememberMe"
              name="rememberMe"
              type="checkbox"
              checked={formData.rememberMe}
              onChange={handleChange}
              className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
            />
            <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-700">
              Remember me
            </label>
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 transition duration-200 ease-in-out disabled:bg-orange-300"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Signing in...
              </span>
            ) : (
              'Sign In'
            )}
          </button>
        </form>
        
        <div className="mt-8">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>
          
          <div className="mt-6 grid grid-cols-2 gap-3">
            <button
              type="button"
              className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              <span>Google</span>
            </button>
            <button
              type="button"
              className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              <span>Facebook</span>
            </button>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Don't have an account?{' '}
            <Link to="/register" className="text-orange-600 hover:text-orange-800 font-medium">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;