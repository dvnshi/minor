import React, { useState } from 'react';
import { 
  IndianRupee,
  Calendar,
  ArrowUp,
  ArrowDown,
  PieChart,
  BarChart2,
  Wallet,
  TrendingUp,
  Download,
  Filter,
  MoreVertical,
  ChevronDown,
  ChevronUp,
  CheckCircle2,  // Added this import
  Clock,         // Added this import
  Sparkles,
  BookOpen,
  Shield
} from 'lucide-react';

// ... rest of your component code remains exactly the same ...

const Earning = () => {
  const [timeRange, setTimeRange] = useState('monthly');
  const [expandedTransaction, setExpandedTransaction] = useState(null);
  const [showFilters, setShowFilters] = useState(false);

  // Sample data
  const earningsData = {
    monthly: {
      current: 68450,
      previous: 52300,
      transactions: [
        {
          id: 1,
          date: '2024-05-15',
          client: 'Rajesh Sharma',
          service: 'Ganesh Chaturthi Puja',
          amount: 3500,
          status: 'completed',
          paymentMethod: 'UPI'
        },
        {
          id: 2,
          date: '2024-05-12',
          client: 'Priya Patel',
          service: 'Satyanarayan Katha',
          amount: 4500,
          status: 'completed',
          paymentMethod: 'Credit Card'
        },
        {
          id: 3,
          date: '2024-05-10',
          client: 'Amit Kumar',
          service: 'Griha Pravesh',
          amount: 5000,
          status: 'pending',
          paymentMethod: 'Bank Transfer'
        },
        {
          id: 4,
          date: '2024-05-08',
          client: 'Neha Gupta',
          service: 'Wedding Ceremony',
          amount: 15000,
          status: 'completed',
          paymentMethod: 'UPI'
        },
        {
          id: 5,
          date: '2024-05-05',
          client: 'Sanjay Verma',
          service: 'Mundan Ceremony',
          amount: 2500,
          status: 'completed',
          paymentMethod: 'Cash'
        }
      ],
      chartData: [3500, 4500, 5000, 15000, 2500, 8000, 12000, 5000, 7000, 4500, 9000, 6000]
    },
    weekly: {
      current: 22500,
      previous: 18400,
      transactions: [
        {
          id: 1,
          date: '2024-05-15',
          client: 'Rajesh Sharma',
          service: 'Ganesh Chaturthi Puja',
          amount: 3500,
          status: 'completed',
          paymentMethod: 'UPI'
        },
        {
          id: 2,
          date: '2024-05-14',
          client: 'Vikram Singh',
          service: 'Navagraha Puja',
          amount: 5500,
          status: 'completed',
          paymentMethod: 'UPI'
        },
        {
          id: 3,
          date: '2024-05-13',
          client: 'Ananya Reddy',
          service: 'Baby Naming',
          amount: 3000,
          status: 'completed',
          paymentMethod: 'Credit Card'
        }
      ],
      chartData: [0, 3000, 5500, 0, 3500, 0, 0]
    },
    yearly: {
      current: 589200,
      previous: 472500,
      transactions: [
        {
          id: 1,
          date: '2024-04-28',
          client: 'Wedding Planners Inc',
          service: 'Mass Wedding Event',
          amount: 45000,
          status: 'completed',
          paymentMethod: 'Bank Transfer'
        },
        {
          id: 2,
          date: '2024-03-15',
          client: 'Community Temple',
          service: 'Monthly Puja',
          amount: 25000,
          status: 'completed',
          paymentMethod: 'Cheque'
        },
        {
          id: 3,
          date: '2024-02-10',
          client: 'NRI Family',
          service: 'Special Puja Package',
          amount: 32000,
          status: 'completed',
          paymentMethod: 'International Transfer'
        }
      ],
      chartData: [42000, 38000, 45000, 35000, 48000, 52000, 45000, 47000, 50000, 55000, 60000, 58920]
    }
  };

  const serviceDistribution = [
    { name: 'Weddings', value: 38, color: 'bg-orange-500' },
    { name: 'Griha Pravesh', value: 22, color: 'bg-amber-500' },
    { name: 'Monthly Pujas', value: 15, color: 'bg-yellow-500' },
    { name: 'Naming Ceremonies', value: 12, color: 'bg-lime-500' },
    { name: 'Other', value: 13, color: 'bg-emerald-500' }
  ];

  const toggleTransaction = (id) => {
    setExpandedTransaction(expandedTransaction === id ? null : id);
  };

  const calculateGrowth = (current, previous) => {
    return ((current - previous) / previous * 100).toFixed(1);
  };

  const currentData = earningsData[timeRange];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-orange-800">Earnings Dashboard</h1>
            <p className="text-orange-600">Track your spiritual service income and growth</p>
          </div>
          
          <div className="flex items-center space-x-3 mt-4 md:mt-0">
            <div className="relative">
              <button 
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2 bg-white hover:bg-gray-50 text-orange-800 px-4 py-2 rounded-lg border border-orange-200"
              >
                <Filter size={18} />
                <span>Time Range</span>
                {showFilters ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>
              
              {showFilters && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-10 border border-gray-200">
                  <button
                    onClick={() => {
                      setTimeRange('weekly');
                      setShowFilters(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-sm ${
                      timeRange === 'weekly' ? 'bg-orange-100 text-orange-800' : 'hover:bg-gray-50'
                    }`}
                  >
                    Weekly
                  </button>
                  <button
                    onClick={() => {
                      setTimeRange('monthly');
                      setShowFilters(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-sm ${
                      timeRange === 'monthly' ? 'bg-orange-100 text-orange-800' : 'hover:bg-gray-50'
                    }`}
                  >
                    Monthly
                  </button>
                  <button
                    onClick={() => {
                      setTimeRange('yearly');
                      setShowFilters(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-sm ${
                      timeRange === 'yearly' ? 'bg-orange-100 text-orange-800' : 'hover:bg-gray-50'
                    }`}
                  >
                    Yearly
                  </button>
                </div>
              )}
            </div>
            
            <button className="flex items-center space-x-2 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg">
              <Download size={18} />
              <span>Export</span>
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Total Earnings */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500">Total Earnings</p>
                <h3 className="text-2xl font-bold text-orange-800 mt-1">
                  ₹{currentData.current.toLocaleString('en-IN')}
                </h3>
                <div className={`flex items-center mt-2 ${
                  calculateGrowth(currentData.current, currentData.previous) >= 0 
                    ? 'text-green-600' 
                    : 'text-red-600'
                }`}>
                  {calculateGrowth(currentData.current, currentData.previous) >= 0 ? (
                    <ArrowUp size={16} className="mr-1" />
                  ) : (
                    <ArrowDown size={16} className="mr-1" />
                  )}
                  <span className="text-sm font-medium">
                    {Math.abs(calculateGrowth(currentData.current, currentData.previous))}% from last {timeRange}
                  </span>
                </div>
              </div>
              <div className="bg-orange-100 p-3 rounded-full">
                <IndianRupee size={24} className="text-orange-600" />
              </div>
            </div>
          </div>
          
          {/* Completed Pujas */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500">Completed Pujas</p>
                <h3 className="text-2xl font-bold text-orange-800 mt-1">
                  {timeRange === 'weekly' ? 8 : timeRange === 'monthly' ? 32 : 156}
                </h3>
                <div className="flex items-center mt-2 text-green-600">
                  <ArrowUp size={16} className="mr-1" />
                  <span className="text-sm font-medium">
                    {timeRange === 'weekly' ? 12 : timeRange === 'monthly' ? 18 : 22}% from last {timeRange}
                  </span>
                </div>
              </div>
              <div className="bg-green-100 p-3 rounded-full">
                <CheckCircle2 size={24} className="text-green-600" />
              </div>
            </div>
          </div>
          
          {/* Avg. Earnings per Puja */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500">Avg. per Puja</p>
                <h3 className="text-2xl font-bold text-orange-800 mt-1">
                  ₹{Math.round(currentData.current / 
                    (timeRange === 'weekly' ? 8 : 
                     timeRange === 'monthly' ? 32 : 156)).toLocaleString('en-IN')}
                </h3>
                <div className="flex items-center mt-2 text-green-600">
                  <ArrowUp size={16} className="mr-1" />
                  <span className="text-sm font-medium">
                    {timeRange === 'weekly' ? 5 : timeRange === 'monthly' ? 8 : 12}% from last {timeRange}
                  </span>
                </div>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <TrendingUp size={24} className="text-blue-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Earnings Chart */}
          <div className="bg-white rounded-xl shadow-sm p-6 lg:col-span-2">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold text-orange-800">Earnings Trend</h2>
              <div className="flex items-center space-x-2">
                <BarChart2 size={20} className="text-orange-600" />
                <span className="text-sm text-gray-600">{timeRange === 'weekly' ? 'Last 7 days' : timeRange === 'monthly' ? 'This month' : 'This year'}</span>
              </div>
            </div>
            
            <div className="h-64">
              {/* In a real app, you would use a charting library like Chart.js or Recharts */}
              <div className="flex items-end h-48 space-x-1 pt-4">
                {currentData.chartData.map((value, index) => (
                  <div 
                    key={index}
                    className="flex-1 bg-gradient-to-t from-orange-400 to-amber-400 rounded-t-sm hover:from-orange-500 hover:to-amber-500 transition-all"
                    style={{ height: `${(value / Math.max(...currentData.chartData)) * 100}%` }}
                    title={`₹${value.toLocaleString('en-IN')}`}
                  ></div>
                ))}
              </div>
              <div className="flex justify-between mt-2 text-xs text-gray-500">
                {timeRange === 'weekly' ? (
                  ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, i) => (
                    <span key={i}>{day}</span>
                  ))
                ) : timeRange === 'monthly' ? (
                  Array.from({ length: 12 }, (_, i) => (
                    <span key={i}>{i+1}</span>
                  ))
                ) : (
                  ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month, i) => (
                    <span key={i}>{month}</span>
                  ))
                )}
              </div>
            </div>
          </div>
          
          {/* Service Distribution */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold text-orange-800">Service Distribution</h2>
              <div className="flex items-center space-x-2">
                <PieChart size={20} className="text-orange-600" />
                <span className="text-sm text-gray-600">By revenue</span>
              </div>
            </div>
            
            <div className="h-64 flex flex-col justify-center">
              <div className="relative w-40 h-40 mx-auto mb-6">
                {/* Pie Chart */}
                <div className="absolute inset-0 rounded-full border-8 border-orange-100"></div>
                {serviceDistribution.reduce((acc, item, i) => {
                  const prevPercent = acc;
                  const percent = item.value;
                  return [
                    ...acc,
                    <div 
                      key={i}
                      className="absolute inset-0"
                      style={{
                        clipPath: `polygon(50% 50%, 50% 0%, ${
                          50 + Math.sin(2 * Math.PI * prevPercent / 100) * 50
                        }% ${
                          50 - Math.cos(2 * Math.PI * prevPercent / 100) * 50
                        }%, ${
                          50 + Math.sin(2 * Math.PI * (prevPercent + percent) / 100) * 50
                        }% ${
                          50 - Math.cos(2 * Math.PI * (prevPercent + percent) / 100) * 50
                        }%)`
                      }}
                    >
                      <div className={`w-full h-full ${item.color} rounded-full`}></div>
                    </div>
                  ];
                }, []).reverse()}
              </div>
              
              <div className="space-y-2">
                {serviceDistribution.map((item, i) => (
                  <div key={i} className="flex items-center">
                    <div className={`w-3 h-3 ${item.color} rounded-full mr-2`}></div>
                    <span className="text-sm text-gray-700 flex-1">{item.name}</span>
                    <span className="text-sm font-medium text-orange-800">{item.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Transactions */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-lg font-bold text-orange-800">Recent Transactions</h2>
          </div>
          
          <div className="divide-y divide-gray-100">
            {currentData.transactions.map(transaction => (
              <div key={transaction.id} className="hover:bg-orange-50 transition-colors">
                <div 
                  className="p-4 cursor-pointer"
                  onClick={() => toggleTransaction(transaction.id)}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                      <div className="bg-orange-100 p-3 rounded-full">
                        <Wallet size={18} className="text-orange-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">{transaction.client}</h3>
                        <p className="text-sm text-gray-500">{transaction.service}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-6">
                      <div className="text-right">
                        <p className="font-bold text-orange-800">₹{transaction.amount.toLocaleString('en-IN')}</p>
                        <p className="text-xs text-gray-500">
                          {new Date(transaction.date).toLocaleDateString('en-IN', {
                            day: 'numeric',
                            month: 'short'
                          })}
                        </p>
                      </div>
                      {expandedTransaction === transaction.id ? (
                        <ChevronUp size={18} className="text-orange-600" />
                      ) : (
                        <ChevronDown size={18} className="text-orange-600" />
                      )}
                    </div>
                  </div>
                </div>
                
                {expandedTransaction === transaction.id && (
                  <div className="px-4 pb-4 -mt-2">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-orange-100/30 rounded-lg p-4">
                      <div>
                        <p className="text-xs text-gray-500">Status</p>
                        <p className={`font-medium ${
                          transaction.status === 'completed' 
                            ? 'text-green-600' 
                            : transaction.status === 'pending' 
                              ? 'text-amber-600' 
                              : 'text-gray-600'
                        }`}>
                          {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Payment Method</p>
                        <p className="font-medium text-gray-700">{transaction.paymentMethod}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Date</p>
                        <p className="font-medium text-gray-700">
                          {new Date(transaction.date).toLocaleDateString('en-IN')}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Service Type</p>
                        <p className="font-medium text-gray-700">
                          {transaction.service.split(' ').length > 2 
                            ? transaction.service.split(' ')[0] + ' ' + transaction.service.split(' ')[1]
                            : transaction.service.split(' ')[0]}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="p-4 border-t border-gray-100 text-center">
            <button className="text-orange-600 font-medium hover:underline">
              View all transactions
            </button>
          </div>
        </div>

        {/* Upcoming Payouts */}
        <div className="mt-8 bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-lg font-bold text-orange-800">Upcoming Payouts</h2>
            <p className="text-sm text-gray-500">Amounts to be transferred to your bank account</p>
          </div>
          
          <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-orange-200 rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-500">Next Payout</p>
                  <h3 className="text-xl font-bold text-orange-800 mt-1">₹12,500</h3>
                </div>
                <div className="bg-orange-100 p-2 rounded-full">
                  <Calendar size={18} className="text-orange-600" />
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-2">Processing on 25th May</p>
            </div>
            
            <div className="border border-amber-200 rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-500">Pending Clearance</p>
                  <h3 className="text-xl font-bold text-amber-800 mt-1">₹8,200</h3>
                </div>
                <div className="bg-amber-100 p-2 rounded-full">
                  <Clock size={18} className="text-amber-600" />
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-2">Will clear in 3-5 days</p>
            </div>
            
            <div className="border border-emerald-200 rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-500">Last Payout</p>
                  <h3 className="text-xl font-bold text-emerald-800 mt-1">₹15,300</h3>
                </div>
                <div className="bg-emerald-100 p-2 rounded-full">
                  <CheckCircle2 size={18} className="text-emerald-600" />
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-2">Completed on 10th May</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Earning;