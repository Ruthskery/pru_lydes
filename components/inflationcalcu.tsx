import React, { useState } from "react";

const InflationCalculator: React.FC = () => {
  // Forward Inflation Inputs
  const [forwardAmount, setForwardAmount] = useState<number | "">("");
  const [forwardYears, setForwardYears] = useState<number | "">("");
  const [forwardInflationRate, setForwardInflationRate] = useState<number | "">(3);
  const [forwardValue, setForwardValue] = useState<number | null>(null);

  // Backward Inflation Inputs
  const [backwardAmount, setBackwardAmount] = useState<number | "">("");
  const [backwardYears, setBackwardYears] = useState<number | "">("");
  const [backwardInflationRate, setBackwardInflationRate] = useState<number | "">(3);
  const [backwardValue, setBackwardValue] = useState<number | null>(null);

  // Forward Inflation Calculation (Future Purchasing Power)
  const calculateForwardInflation = () => {
    if (forwardAmount && forwardYears && forwardInflationRate) {
      const futureValue = Number(forwardAmount) * Math.pow(1 + Number(forwardInflationRate) / 100, Number(forwardYears));
      setForwardValue(futureValue);
    } else {
      setForwardValue(null);
    }
  };

  // Backward Inflation Calculation (Past Purchasing Power)
  const calculateBackwardInflation = () => {
    if (backwardAmount && backwardYears && backwardInflationRate) {
      const pastValue = Number(backwardAmount) / Math.pow(1 + Number(backwardInflationRate) / 100, Number(backwardYears));
      setBackwardValue(pastValue);
    } else {
      setBackwardValue(null);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-6xl w-full bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Inflation Calculator (Philippines)</h2>
        <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0">
          {/* Forward Inflation Calculator */}
          <div className="w-full md:w-1/2">
            <h3 className="text-xl font-bold mb-4 text-center">Forward Flat Rate Inflation Calculator</h3>
            <div className="space-y-4">
              {/* Inputs */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Amount (₱)</label>
                <input
                  type="number"
                  value={forwardAmount}
                  onChange={(e) => setForwardAmount(e.target.value ? Number(e.target.value) : "")}
                  className="w-full p-3 border rounded-md"
                  placeholder="Enter amount"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Years</label>
                <input
                  type="number"
                  value={forwardYears}
                  onChange={(e) => setForwardYears(e.target.value ? Number(e.target.value) : "")}
                  className="w-full p-3 border rounded-md"
                  placeholder="Enter number of years"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Average Inflation Rate (%)</label>
                <input
                  type="number"
                  value={forwardInflationRate}
                  onChange={(e) => setForwardInflationRate(e.target.value ? Number(e.target.value) : "")}
                  className="w-full p-3 border rounded-md"
                  placeholder="Enter average inflation rate"
                />
              </div>
              <button
                onClick={calculateForwardInflation}
                className="w-full bg-green-500 text-white py-3 rounded-md hover:bg-green-600 transition"
              >
                Calculate Future Value
              </button>
              {forwardValue !== null && (
                <div className="text-md xl:text-lg font-semibold text-center">
                  ₱{forwardAmount} now equals <span className="text-blue-600">₱{forwardValue.toFixed(2)}</span> after {forwardYears} years with an average inflation rate of {forwardInflationRate}%.
                </div>
              )}
            </div>
          </div>
  
          {/* Backward Inflation Calculator */}
          <div className="w-full md:w-1/2">
            <h3 className="text-xl font-bold mb-4 text-center">Backward Flat Rate Inflation Calculator</h3>
            <div className="space-y-4">
              {/* Inputs */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Amount (₱)</label>
                <input
                  type="number"
                  value={backwardAmount}
                  onChange={(e) => setBackwardAmount(e.target.value ? Number(e.target.value) : "")}
                  className="w-full p-3 border rounded-md"
                  placeholder="Enter amount"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Years</label>
                <input
                  type="number"
                  value={backwardYears}
                  onChange={(e) => setBackwardYears(e.target.value ? Number(e.target.value) : "")}
                  className="w-full p-3 border rounded-md"
                  placeholder="Enter number of years"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Average Inflation Rate (%)</label>
                <input
                  type="number"
                  value={backwardInflationRate}
                  onChange={(e) => setBackwardInflationRate(e.target.value ? Number(e.target.value) : "")}
                  className="w-full p-3 border rounded-md"
                  placeholder="Enter average inflation rate"
                />
              </div>
              <button
                onClick={calculateBackwardInflation}
                className="w-full bg-red-500 text-white py-3 rounded-md hover:bg-red-600 transition"
              >
                Calculate Past Value
              </button>
              {backwardValue !== null && (
                <div className="text-md xl:text-lg font-semibold text-center">
                  ₱{backwardAmount} now equals <span className="text-red-600">₱{backwardValue.toFixed(2)}</span> in purchasing power {backwardYears} years ago with an average inflation rate of {backwardInflationRate}%.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InflationCalculator;