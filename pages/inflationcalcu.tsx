import React, { useState } from 'react';

function InflationCalcu() {
  const [forwardAmount, setForwardAmount] = useState('');
  const [forwardYears, setForwardYears] = useState('');
  const [forwardRate, setForwardRate] = useState('');

  const [backwardAmount, setBackwardAmount] = useState('');
  const [backwardYears, setBackwardYears] = useState('');
  const [backwardRate, setBackwardRate] = useState('');

  const calculateForward = () => {
    const result = parseFloat(forwardAmount) * Math.pow(1 + parseFloat(forwardRate) / 100, parseFloat(forwardYears));
    alert(`Future Value: ${result.toFixed(2)}`);
  };

  const calculateBackward = () => {
    const result = parseFloat(backwardAmount) / Math.pow(1 + parseFloat(backwardRate) / 100, parseFloat(backwardYears));
    alert(`Present Value: ${result.toFixed(2)}`);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Inflation Calculator</h2>

        <div className="flex gap-8">
          {/* Forward Calculation Section */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md flex-1">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Forward Calculation</h3>
            <label className="block text-lg text-gray-600 mb-2">
              Amount:
              <input
                type="number"
                value={forwardAmount}
                onChange={(e) => setForwardAmount(e.target.value)}
                placeholder="Enter Amount"
                className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </label>
            <label className="block text-lg text-gray-600 mb-2">
              Years:
              <input
                type="number"
                value={forwardYears}
                onChange={(e) => setForwardYears(e.target.value)}
                placeholder="Enter Years"
                className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </label>
            <label className="block text-lg text-gray-600 mb-2">
              Inflation Rate (%):
              <input
                type="number"
                value={forwardRate}
                onChange={(e) => setForwardRate(e.target.value)}
                placeholder="Enter Inflation Rate"
                className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </label>
            <button
              onClick={calculateForward}
              className="w-full mt-4 py-3 bg-blue-600 text-white text-lg font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Calculate
            </button>
          </div>

          {/* Backward Calculation Section */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md flex-1">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Backward Calculation</h3>
            <label className="block text-lg text-gray-600 mb-2">
              Amount:
              <input
                type="number"
                value={backwardAmount}
                onChange={(e) => setBackwardAmount(e.target.value)}
                placeholder="Enter Amount"
                className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </label>
            <label className="block text-lg text-gray-600 mb-2">
              Years:
              <input
                type="number"
                value={backwardYears}
                onChange={(e) => setBackwardYears(e.target.value)}
                placeholder="Enter Years"
                className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </label>
            <label className="block text-lg text-gray-600 mb-2">
              Inflation Rate (%):
              <input
                type="number"
                value={backwardRate}
                onChange={(e) => setBackwardRate(e.target.value)}
                placeholder="Enter Inflation Rate"
                className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </label>
            <button
              onClick={calculateBackward}
              className="w-full mt-4 py-3 bg-blue-600 text-white text-lg font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Calculate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InflationCalcu;
