import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const PanditRegisterForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    specialization: '',
    experience: '',
    languages: [],
    ceremonies: [],
    description: '',
    priceRange: '',
    availability: '',
    idProof: null,
    profilePhoto: null,
    certifications: [],
    agreeToTerms: false
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const specializations = [
    'Vedic Rituals', 'Marriage Ceremonies', 'Grih Pravesh', 'Naming Ceremony',
    'Funeral Rites', 'Horoscope Reading', 'Vastu Shastra', 'Puja Services'
  ];
  
  const ceremonyTypes = [
    'Wedding', 'Baby Naming', 'House Warming', 'Mundan', 'Satyanarayan Puja',
    'Ganesh Puja', 'Durga Puja', 'Vastu Shanti', 'Funeral Services'
  ];
  
  const languageOptions = [
    'Hindi', 'Sanskrit', 'Tamil', 'Telugu', 'Bengali', 'Marathi', 'Gujarati', 'Kannada', 'Malayalam'
  ];
  
  const availabilityOptions = [
    'Weekdays', 'Weekends', 'Mornings', 'Evenings', 'Full-time', 'Part-time'
  ];
  
  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    
    if (type === 'file') {
      setFormData({
        ...formData,
        [name]: files[0]
      });
    } else if (type === 'checkbox') {
      setFormData({
        ...formData,
        [name]: checked
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };
  
  const handleMultipleSelect = (e, field) => {
    const { options } = e.target;
    const selectedValues = [];
    
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedValues.push(options[i].value);
      }
    }
    
    setFormData({
      ...formData,
      [field]: selectedValues
    });
    
    // Clear error when user makes a selection
    if (errors[field]) {
      setErrors({
        ...errors,
        [field]: ''
      });
    }
  };
  
  const handleCertificationAdd = () => {
    setFormData({
      ...formData,
      certifications: [...formData.certifications, '']
    });
  };
  
  const handleCertificationChange = (index, value) => {
    const updatedCertifications = [...formData.certifications];
    updatedCertifications[index] = value;
    
    setFormData({
      ...formData,
      certifications: updatedCertifications
    });
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    // Required fields validation
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.state.trim()) newErrors.state = 'State is required';
    if (!formData.pincode.trim()) newErrors.pincode = 'Pincode is required';
    if (!formData.specialization) newErrors.specialization = 'Specialization is required';
    if (!formData.experience.trim()) newErrors.experience = 'Experience is required';
    if (formData.languages.length === 0) newErrors.languages = 'At least one language is required';
    if (formData.ceremonies.length === 0) newErrors.ceremonies = 'At least one ceremony type is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    if (!formData.priceRange.trim()) newErrors.priceRange = 'Price range is required';
    
    // Email validation
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    // Phone validation (10 digits)
    if (formData.phone && !/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    
    // Password validation (min 8 characters, at least 1 letter and 1 number)
    if (formData.password && !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(formData.password)) {
      newErrors.password = 'Password must be at least 8 characters with at least 1 letter and 1 number';
    }
    
    // Password confirmation
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    // Pincode validation (6 digits)
    if (formData.pincode && !/^\d{6}$/.test(formData.pincode)) {
      newErrors.pincode = 'Please enter a valid 6-digit pincode';
    }
    
    // Experience validation (numeric)
    if (formData.experience && !/^\d+$/.test(formData.experience)) {
      newErrors.experience = 'Experience must be a number';
    }
    
    // Terms acceptance
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the Terms and Conditions';
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
      // Here you would normally send the data to your backend
      console.log('Pandit registration data:', formData);
      
      // For development - simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Prepare data for localStorage (excluding file objects)
      const panditData = {
        ...formData,
        password: '********', // Don't store actual password in localStorage
        profilePhoto: formData.profilePhoto ? formData.profilePhoto.name : null,
        idProof: formData.idProof ? formData.idProof.name : null,
        userType: 'pandit',
        id: Date.now().toString(),
        createdAt: new Date().toISOString(),
        rating: 0,
        reviewCount: 0,
        verified: false
      };
      
      // Get existing users or initialize empty array
      const existingUsers = JSON.parse(localStorage.getItem('panditConnectUsers') || '[]');
      
      // Add new pandit
      existingUsers.push(panditData);
      
      // Save back to localStorage
      localStorage.setItem('panditConnectUsers', JSON.stringify(existingUsers));
      
      // Save current user ID in separate item for "login" state
      localStorage.setItem('currentUserId', panditData.id);
      
      // Show success alert and redirect
      alert('Registration successful! Redirecting to pandit dashboard...');
      navigate('/pandit-dashboard');
      
    } catch (error) {
      console.error('Registration error:', error);
      setErrors({
        form: 'Registration failed. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-yellow-100 py-8 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-6 md:p-10">
            <div className="text-center mb-8">
              <Link to="/" className="inline-block">
                <img 
                  src="/api/placeholder/60/60" 
                  alt="PanditConnect Logo" 
                  className="h-12 w-12 mx-auto mb-4"
                />
              </Link>
              <h1 className="text-3xl font-bold text-orange-800">Register as a Pandit</h1>
              <p className="text-gray-600 mt-2">Join our platform to connect with devotees and provide spiritual services</p>
            </div>
            
            {errors.form && (
              <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700">
                {errors.form}
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Personal Information */}
                <div className="col-span-2">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">Personal Information</h2>
                </div>
                
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="firstName">
                    First Name*
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                      errors.firstName ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="lastName">
                    Last Name*
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                      errors.lastName ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="email">
                    Email Address*
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
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="phone">
                    Phone Number*
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="10-digit mobile number"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                  )}
                </div>
                
                {/* Password Section */}
                <div className="col-span-2">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">Create Password</h2>
                </div>
                
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="password">
                    Password*
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                      errors.password ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.password && (
                    <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="confirmPassword">
                    Confirm Password*
                  </label>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                        errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.confirmPassword && (
                    <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>
                  )}
                </div>
                
                {/* Address Section */}
                <div className="col-span-2">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">Address Information</h2>
                </div>
                
                <div className="col-span-2">
                  <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="address">
                    Address*
                  </label>
                  <input
                    id="address"
                    name="address"
                    type="text"
                    value={formData.address}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                      errors.address ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.address && (
                    <p className="text-red-500 text-xs mt-1">{errors.address}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="city">
                    City*
                  </label>
                  <input
                    id="city"
                    name="city"
                    type="text"
                    value={formData.city}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                      errors.city ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.city && (
                    <p className="text-red-500 text-xs mt-1">{errors.city}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="state">
                    State*
                  </label>
                  <select
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                      errors.state ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select State</option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="West Bengal">West Bengal</option>
                    {/* Add more states as needed */}
                  </select>
                  {errors.state && (
                    <p className="text-red-500 text-xs mt-1">{errors.state}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="pincode">
                    Pincode*
                  </label>
                  <input
                    id="pincode"
                    name="pincode"
                    type="text"
                    value={formData.pincode}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                      errors.pincode ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="6-digit pincode"
                  />
                  {errors.pincode && (
                    <p className="text-red-500 text-xs mt-1">{errors.pincode}</p>
                  )}
                </div>
                
                {/* Professional Information */}
                <div className="col-span-2">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">Professional Information</h2>
                </div>
                
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="specialization">
                    Primary Specialization*
                  </label>
                  <select
                    id="specialization"
                    name="specialization"
                    value={formData.specialization}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                      errors.specialization ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select Specialization</option>
                    {specializations.map(spec => (
                      <option key={spec} value={spec}>{spec}</option>
                    ))}
                  </select>
                  {errors.specialization && (
                    <p className="text-red-500 text-xs mt-1">{errors.specialization}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="experience">
                    Years of Experience*
                  </label>
                  <input
                    id="experience"
                    name="experience"
                    type="number"
                    min="0"
                    value={formData.experience}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                      errors.experience ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.experience && (
                    <p className="text-red-500 text-xs mt-1">{errors.experience}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="languages">
                    Languages Spoken*
                  </label>
                  <select
                    id="languages"
                    name="languages"
                    multiple
                    value={formData.languages}
                    onChange={(e) => handleMultipleSelect(e, 'languages')}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                      errors.languages ? 'border-red-500' : 'border-gray-300'
                    }`}
                    size="4"
                  >
                    {languageOptions.map(lang => (
                      <option key={lang} value={lang}>{lang}</option>
                    ))}
                  </select>
                  <p className="text-gray-500 text-xs mt-1">Hold Ctrl/Cmd to select multiple options</p>
                  {errors.languages && (
                    <p className="text-red-500 text-xs mt-1">{errors.languages}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="ceremonies">
                    Ceremonies Performed*
                  </label>
                  <select
                    id="ceremonies"
                    name="ceremonies"
                    multiple
                    value={formData.ceremonies}
                    onChange={(e) => handleMultipleSelect(e, 'ceremonies')}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                      errors.ceremonies ? 'border-red-500' : 'border-gray-300'
                    }`}
                    size="4"
                  >
                    {ceremonyTypes.map(ceremony => (
                      <option key={ceremony} value={ceremony}>{ceremony}</option>
                    ))}
                  </select>
                  <p className="text-gray-500 text-xs mt-1">Hold Ctrl/Cmd to select multiple options</p>
                  {errors.ceremonies && (
                    <p className="text-red-500 text-xs mt-1">{errors.ceremonies}</p>
                  )}
                </div>
                
                <div className="col-span-2">
                  <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="description">
                    About Yourself*
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows="4"
                    value={formData.description}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                      errors.description ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Tell devotees about your expertise, education, and experience in performing rituals..."
                  ></textarea>
                  {errors.description && (
                    <p className="text-red-500 text-xs mt-1">{errors.description}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="priceRange">
                    Price Range (₹)*
                  </label>
                  <input
                    id="priceRange"
                    name="priceRange"
                    type="text"
                    value={formData.priceRange}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                      errors.priceRange ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="e.g., 2000-5000"
                  />
                  {errors.priceRange && (
                    <p className="text-red-500 text-xs mt-1">{errors.priceRange}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="availability">
                    Availability
                  </label>
                  <select
                    id="availability"
                    name="availability"
                    value={formData.availability}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                      errors.availability ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select Availability</option>
                    {availabilityOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                  {errors.availability && (
                    <p className="text-red-500 text-xs mt-1">{errors.availability}</p>
                  )}
                </div>
                
                {/* Documents & Verification */}
                <div className="col-span-2">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">Documents & Verification</h2>
                </div>
                
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="profilePhoto">
                    Profile Photo
                  </label>
                  <input
                    id="profilePhoto"
                    name="profilePhoto"
                    type="file"
                    accept="image/*"
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent border-gray-300"
                  />
                  <p className="text-gray-500 text-xs mt-1">Upload a clear face photo</p>
                </div>
                
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="idProof">
                    ID Proof (Aadhar/PAN)
                  </label>
                  <input
                    id="idProof"
                    name="idProof"
                    type="file"
                    accept="image/*,.pdf"
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent border-gray-300"
                  />
                  <p className="text-gray-500 text-xs mt-1">For verification purposes only</p>
                </div>
                
                <div className="col-span-2">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Certifications or Training
                  </label>
                  {formData.certifications.map((certification, index) => (
                    <div key={index} className="mb-2">
                      <input
                        type="text"
                        value={certification}
                        onChange={(e) => handleCertificationChange(index, e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent border-gray-300"
                        placeholder="e.g., Sanskrit Vidwat, Jyotish Acharya"
                      />
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={handleCertificationAdd}
                    className="text-orange-600 font-medium text-sm hover:text-orange-800 flex items-center"
                  >
                    <span className="mr-1">+</span> Add Certification
                  </button>
                </div>
                
                {/* Terms and Conditions */}
                <div className="col-span-2 mt-4">
                  <div className="flex items-start">
                    <input
                      id="agreeToTerms"
                      name="agreeToTerms"
                      type="checkbox"
                      checked={formData.agreeToTerms}
                      onChange={handleChange}
                      className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded mt-1"
                    />
                    <label htmlFor="agreeToTerms" className="ml-2 block text-sm text-gray-700">
                      I agree to the <Link to="/terms" className="text-orange-600 hover:text-orange-800">Terms and Conditions</Link> and <Link to="/privacy" className="text-orange-600 hover:text-orange-800">Privacy Policy</Link>*
                    </label>
                  </div>
                  {errors.agreeToTerms && (
                    <p className="text-red-500 text-xs mt-1">{errors.agreeToTerms}</p>
                  )}
                </div>
                
                <div className="col-span-2 mt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 px-4 rounded-lg text-white font-medium 
                    ${isSubmitting ? 'bg-orange-400 cursor-not-allowed' : 'bg-orange-600 hover:bg-orange-700'}`}
                  >
                    {isSubmitting ? 'Registering...' : 'Register as Pandit'}
                  </button>
                </div>
                
                <div className="col-span-2 text-center mt-4">
                  <p className="text-gray-600">
                    Already have an account? <Link to="/login" className="text-orange-600 hover:text-orange-800 font-medium">Login</Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PanditRegisterForm;