import React, { useState } from 'react';
import { 
  MessageSquare, 
  Phone, 
  Mail, 
  Clock, 
  CheckCircle2, 
  Zap, 
  Lightbulb, 
  User, 
  ChevronDown,
  ChevronUp,
  Sparkles,
  HelpCircle,
  BookOpen,
  Shield
} from 'lucide-react';

const SupportPage = () => {
  const [activeTab, setActiveTab] = useState('faq');
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    issueType: 'general',
    message: ''
  });

  const faqs = [
    {
      id: 1,
      question: 'How do I book a pandit for my pooja?',
      answer: 'You can book through our platform by selecting the service, choosing your preferred date/time, and making the payment. Our team will confirm the booking within 2 hours.'
    },
    {
      id: 2,
      question: 'What payment methods do you accept?',
      answer: 'We accept UPI, credit/debit cards, net banking, and wallet payments. All transactions are secure and encrypted.'
    },
    {
      id: 3,
      question: 'Can I reschedule my booking?',
      answer: 'Yes, bookings can be rescheduled up to 24 hours before the event. Please contact support or use the reschedule option in your bookings.'
    },
    {
      id: 4,
      question: 'How are your pandits verified?',
      answer: 'All pandits undergo a 5-step verification process including identity proof, background check, knowledge test, and customer feedback review.'
    }
  ];

  const supportChannels = [
    {
      icon: <Phone size={24} className="text-green-600" />,
      title: 'Instant Call Support',
      description: 'Speak directly with our support team',
      availability: '24/7 for urgent matters',
      action: 'Call +91 98765 43210',
      responseTime: 'Immediate'
    },
    {
      icon: <MessageSquare size={24} className="text-blue-600" />,
      title: 'Live Chat',
      description: 'Real-time chat with our experts',
      availability: '8AM - 10PM daily',
      action: 'Start Chat',
      responseTime: '< 2 minutes'
    },
    {
      icon: <Mail size={24} className="text-orange-600" />,
      title: 'Email Support',
      description: 'Detailed assistance via email',
      availability: 'Mon-Sat',
      action: 'support@divineservices.com',
      responseTime: 'Within 6 hours'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic here
    alert('Your support request has been submitted! We will contact you shortly.');
    setFormData({
      name: '',
      email: '',
      issueType: 'general',
      message: ''
    });
  };

  const toggleFaq = (id) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header with innovative visual element */}
        <div className="text-center mb-12 relative">
          <div className="absolute -top-8 -left-8 opacity-20">
            <Sparkles size={120} className="text-orange-400" />
          </div>
          <h1 className="text-4xl font-bold text-orange-800 mb-3 relative z-10">
            Divine Support
          </h1>
          <p className="text-xl text-orange-600 max-w-2xl mx-auto relative z-10">
            Where ancient wisdom meets modern solutions
          </p>
          <div className="absolute -bottom-8 -right-8 opacity-20">
            <BookOpen size={120} className="text-amber-400" />
          </div>
        </div>

        {/* Innovative tab system with animated indicators */}
        <div className="flex justify-center mb-12 relative">
          <div className="bg-white rounded-full shadow-inner p-1 inline-flex">
            {['faq', 'contact', 'resources'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === tab 
                    ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-white shadow-md'
                    : 'text-gray-600 hover:text-orange-700'
                }`}
              >
                {tab === 'faq' && 'FAQs'}
                {tab === 'contact' && 'Contact Us'}
                {tab === 'resources' && 'Resources'}
              </button>
            ))}
          </div>
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
            <Zap size={24} className={`text-amber-500 animate-bounce ${
              activeTab === 'faq' ? 'opacity-100' : 'opacity-0'
            } transition-opacity duration-300`} />
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {activeTab === 'faq' && (
            <div className="p-8">
              <div className="flex items-center mb-8">
                <HelpCircle size={32} className="text-amber-600 mr-4" />
                <div>
                  <h2 className="text-2xl font-bold text-orange-800">Frequently Asked Questions</h2>
                  <p className="text-gray-600">Instant answers to common questions</p>
                </div>
              </div>

              <div className="space-y-4">
                {faqs.map(faq => (
                  <div 
                    key={faq.id} 
                    className="border border-orange-100 rounded-xl overflow-hidden transition-all duration-200 hover:shadow-md"
                  >
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full flex justify-between items-center p-5 text-left"
                    >
                      <h3 className="text-lg font-medium text-orange-800">{faq.question}</h3>
                      {expandedFaq === faq.id ? (
                        <ChevronUp size={20} className="text-orange-600" />
                      ) : (
                        <ChevronDown size={20} className="text-orange-600" />
                      )}
                    </button>
                    
                    {expandedFaq === faq.id && (
                      <div className="px-5 pb-5 -mt-2">
                        <div className="border-t border-orange-100 pt-4 text-gray-700">
                          {faq.answer}
                        </div>
                        <div className="mt-4 flex items-center space-x-2">
                          <div className="bg-amber-100 p-2 rounded-full">
                            <Lightbulb size={16} className="text-amber-600" />
                          </div>
                          <span className="text-sm text-amber-800">Was this helpful?</span>
                          <button className="text-sm text-amber-600 font-medium hover:underline">
                            Yes
                          </button>
                          <span className="text-gray-400">|</span>
                          <button className="text-sm text-amber-600 font-medium hover:underline">
                            No
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-10 bg-amber-50 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-start mb-4 md:mb-0">
                  <div className="bg-amber-100 p-3 rounded-full mr-4">
                    <MessageSquare size={24} className="text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-amber-800">Still have questions?</h3>
                    <p className="text-gray-600">Our team is ready to help you</p>
                  </div>
                </div>
                <button 
                  onClick={() => setActiveTab('contact')}
                  className="bg-gradient-to-r from-amber-400 to-orange-500 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all"
                >
                  Contact Support
                </button>
              </div>
            </div>
          )}

          {activeTab === 'contact' && (
            <div className="p-8">
              <div className="flex items-center mb-8">
                <Mail size={32} className="text-orange-600 mr-4" />
                <div>
                  <h2 className="text-2xl font-bold text-orange-800">Contact Our Support</h2>
                  <p className="text-gray-600">We're here to help with any questions</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                {supportChannels.map((channel, index) => (
                  <div 
                    key={index} 
                    className="border border-gray-200 rounded-xl p-6 hover:border-orange-300 transition-all hover:shadow-md"
                  >
                    <div className="flex items-center mb-4">
                      <div className="mr-4">
                        {channel.icon}
                      </div>
                      <h3 className="text-lg font-bold text-gray-800">{channel.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-3">{channel.description}</p>
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <Clock size={14} className="mr-2" />
                      <span>{channel.availability}</span>
                    </div>
                    <div className="mt-4">
                      <p className="text-sm font-medium text-gray-700 mb-1">
                        Avg. response: <span className="text-green-600">{channel.responseTime}</span>
                      </p>
                      <button className="text-orange-600 font-medium hover:underline">
                        {channel.action}
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-xl font-bold text-orange-800 mb-6 text-center">
                  Send Us a Message
                </h3>
                <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User size={16} className="text-gray-400" />
                        </div>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="pl-10 w-full border border-gray-300 rounded-lg py-2 px-3 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                          placeholder="Enter your name"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Mail size={16} className="text-gray-400" />
                        </div>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="pl-10 w-full border border-gray-300 rounded-lg py-2 px-3 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="issueType" className="block text-sm font-medium text-gray-700 mb-1">
                      Issue Type
                    </label>
                    <select
                      id="issueType"
                      name="issueType"
                      value={formData.issueType}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="booking">Booking Help</option>
                      <option value="payment">Payment Issue</option>
                      <option value="technical">Technical Problem</option>
                      <option value="feedback">Feedback/Suggestion</option>
                    </select>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="4"
                      className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Describe your issue or question..."
                    ></textarea>
                  </div>
                  <div className="flex items-center mb-4">
                    <input
                      id="priority"
                      name="priority"
                      type="checkbox"
                      className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                    />
                    <label htmlFor="priority" className="ml-2 block text-sm text-gray-700">
                      Mark as urgent (24/7 support will contact you)
                    </label>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition-all font-medium"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {activeTab === 'resources' && (
            <div className="p-8">
              <div className="flex items-center mb-8">
                <BookOpen size={32} className="text-amber-600 mr-4" />
                <div>
                  <h2 className="text-2xl font-bold text-orange-800">Helpful Resources</h2>
                  <p className="text-gray-600">Guides, tutorials and spiritual references</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                {/* Resource Card 1 */}
                <div className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-all">
                  <div className="bg-gradient-to-r from-amber-100 to-orange-100 p-6">
                    <div className="bg-white p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 shadow-sm">
                      <BookOpen size={20} className="text-amber-600" />
                    </div>
                    <h3 className="text-lg font-bold text-orange-800 mb-2">Pooja Preparation Guide</h3>
                    <p className="text-gray-600 text-sm mb-4">Step-by-step instructions for various rituals</p>
                    <button className="text-orange-600 text-sm font-medium hover:underline flex items-center">
                      Download PDF
                      <ChevronDown size={16} className="ml-1" />
                    </button>
                  </div>
                </div>

                {/* Resource Card 2 */}
                <div className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-all">
                  <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-6">
                    <div className="bg-white p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 shadow-sm">
                      <Shield size={20} className="text-blue-600" />
                    </div>
                    <h3 className="text-lg font-bold text-blue-800 mb-2">Safety Guidelines</h3>
                    <p className="text-gray-600 text-sm mb-4">COVID protocols and general safety measures</p>
                    <button className="text-blue-600 text-sm font-medium hover:underline flex items-center">
                      View Guidelines
                      <ChevronDown size={16} className="ml-1" />
                    </button>
                  </div>
                </div>

                {/* Resource Card 3 */}
                <div className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-all">
                  <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-6">
                    <div className="bg-white p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 shadow-sm">
                      <CheckCircle2 size={20} className="text-green-600" />
                    </div>
                    <h3 className="text-lg font-bold text-green-800 mb-2">Booking Checklist</h3>
                    <p className="text-gray-600 text-sm mb-4">Everything you need before your ceremony</p>
                    <button className="text-green-600 text-sm font-medium hover:underline flex items-center">
                      Open Checklist
                      <ChevronDown size={16} className="ml-1" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-8 border border-orange-100">
                <h3 className="text-xl font-bold text-orange-800 mb-4 text-center">
                  Video Tutorials
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-black rounded-lg overflow-hidden aspect-video relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-orange-600 text-white rounded-full p-4 shadow-xl">
                        <Play size={24} />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <h4 className="text-white font-medium">How to Book a Pandit</h4>
                    </div>
                  </div>
                  <div className="bg-black rounded-lg overflow-hidden aspect-video relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-orange-600 text-white rounded-full p-4 shadow-xl">
                        <Play size={24} />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <h4 className="text-white font-medium">Essential Pooja Items</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Innovative floating help button */}
        <div className="fixed bottom-6 right-6 z-50">
          <button className="bg-gradient-to-r from-orange-500 to-amber-500 text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all animate-pulse">
            <HelpCircle size={28} />
          </button>
        </div>
      </div>
    </div>
  );
};

// Note: You'll need to import the Play icon or replace it with an available icon
const Play = ({ size }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <polygon points="5 3 19 12 5 21 5 3"></polygon>
  </svg>
);

export default SupportPage;