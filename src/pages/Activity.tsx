
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Activity = () => {
  const [timeFilter, setTimeFilter] = useState('All time');
  
  const activities = [
    {
      portfolio: 'Dividend Portfolio',
      stock: 'AAPB',
      date: '05-20-2024',
      quantity: 10,
      price: 25,
      amount: 250,
      type: 'BUY'
    },
    {
      portfolio: 'Real Estate Portfolio',
      stock: 'AAPB',
      date: '05-20-2024',
      quantity: 10,
      price: 25,
      amount: 250,
      type: 'BUY'
    },
    {
      portfolio: 'HealthCare Portfolio',
      stock: 'AAPB',
      date: '05-20-2024',
      quantity: 10,
      price: 25,
      amount: 250,
      type: 'SELL'
    },
    {
      portfolio: 'Auto Portfolio',
      stock: 'AAPB',
      date: '05-20-2024',
      quantity: 10,
      price: 25,
      amount: 250,
      type: 'BUY'
    },
    {
      portfolio: 'FMCG Portfolio',
      stock: 'AAPB',
      date: '05-20-2024',
      quantity: 10,
      price: 25,
      amount: 250,
      type: 'SELL'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <h1 className="text-2xl font-bold text-white">Activity</h1>
        <div className="relative">
          <button className="flex items-center gap-2 text-white bg-gray-800 px-4 py-2 rounded-lg">
            {timeFilter}
            <ChevronDown size={16} />
          </button>
        </div>
      </div>

      {/* Activity List */}
      <div className="px-4 space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-white font-semibold">{activity.portfolio}</h3>
                <p className="text-gray-400 text-sm">{activity.stock}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                activity.type === 'BUY' 
                  ? 'bg-emerald-500/20 text-emerald-400' 
                  : 'bg-red-500/20 text-red-400'
              }`}>
                {activity.type}
              </span>
            </div>
            
            <div className="grid grid-cols-4 gap-4 text-sm">
              <div>
                <p className="text-gray-400">Date:</p>
                <p className="text-white">{activity.date}</p>
              </div>
              <div>
                <p className="text-gray-400">Quantity:</p>
                <p className="text-white">{activity.quantity}</p>
              </div>
              <div>
                <p className="text-gray-400">Price:</p>
                <p className="text-white">${activity.price}</p>
              </div>
              <div>
                <p className="text-gray-400">Amount:</p>
                <p className="text-white">${activity.amount}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activity;
