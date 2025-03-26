import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const EarningsReport = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('monthly');

  // Mock earnings data (would come from backend)
  const monthlyEarnings = [
    { month: 'Jan', total: 45000, poojaTypes: { 'Ganesh Puja': 15000, 'Satyanarayan Puja': 30000 } },
    { month: 'Feb', total: 62000, poojaTypes: { 'Ganesh Puja': 22000, 'Satyanarayan Puja': 40000 } },
    { month: 'Mar', total: 55000, poojaTypes: { 'Ganesh Puja': 18000, 'Satyanarayan Puja': 37000 } },
    { month: 'Apr', total: 75000, poojaTypes: { 'Ganesh Puja': 25000, 'Satyanarayan Puja': 50000 } }
  ];

  const generateReport = () => {
    const data = monthlyEarnings;
    const totalEarnings = data.reduce((sum, item) => sum + item.total, 0);
    const averageMonthlyEarnings = totalEarnings / data.length;

    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold text-orange-800 mb-4">Detailed Earnings Report</h3>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-orange-100 p-4 rounded">
            <p className="text-gray-600">Total Earnings</p>
            <p className="text-2xl font-bold text-orange-800">₹{totalEarnings.toLocaleString()}</p>
          </div>
          <div className="bg-yellow-100 p-4 rounded">
            <p className="text-gray-600">Avg. Monthly Earnings</p>
            <p className="text-2xl font-bold text-orange-800">₹{averageMonthlyEarnings.toLocaleString()}</p>
          </div>
        </div>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="total" fill="#ED8936" name="Total Earnings" />
            <Bar dataKey="poojaTypes.Ganesh Puja" fill="#48BB78" name="Ganesh Puja" />
            <Bar dataKey="poojaTypes.Satyanarayan Puja" fill="#4299E1" name="Satyanarayan Puja" />
          </BarChart>
        </ResponsiveContainer>

        <div className="mt-6">
          <h4 className="text-lg font-semibold text-orange-800 mb-3">Pooja Type Breakdown</h4>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-orange-100">
                <th className="p-2 text-left">Pooja Type</th>
                <th className="p-2 text-right">Total Earnings</th>
                <th className="p-2 text-right">Percentage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2">Ganesh Puja</td>
                <td className="p-2 text-right">₹80,000</td>
                <td className="p-2 text-right">40%</td>
              </tr>
              <tr>
                <td className="p-2">Satyanarayan Puja</td>
                <td className="p-2 text-right">₹157,000</td>
                <td className="p-2 text-right">60%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 text-center">
          <button className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600">
            Download Full Report
          </button>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-orange-800">Earnings Overview</h2>
        <div>
          <select 
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="px-4 py-2 border rounded"
          >
            <option value="monthly">Monthly</option>
            <option value="quarterly">Quarterly</option>
            <option value="yearly">Yearly</option>
          </select>
        </div>
      </div>
      
      {generateReport()}
    </div>
  );
};

export default EarningsReport;