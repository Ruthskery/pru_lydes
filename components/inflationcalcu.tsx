import React, { useState } from "react";

const InflationCalculator: React.FC = () => {
  const [prevCPI, setPrevCPI] = useState<number | "">("");
  const [currCPI, setCurrCPI] = useState<number | "">("");
  const [inflationRate, setInflationRate] = useState<number | null>(null);

  const calculateInflation = () => {
    if (prevCPI && currCPI && prevCPI > 0) {
      const rate = ((Number(currCPI) - Number(prevCPI)) / Number(prevCPI)) * 100;
      setInflationRate(rate);
    } else {
      setInflationRate(null);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Inflation Calculator (Philippines)</h2>
      
      <label className="block text-sm font-medium">Previous CPI</label>
      <input
        type="number"
        value={prevCPI}
        onChange={(e) => setPrevCPI(e.target.value ? Number(e.target.value) : "")}
        className="w-full p-2 border rounded mb-3"
        placeholder="Enter previous CPI"
      />

      <label className="block text-sm font-medium">Current CPI</label>
      <input
        type="number"
        value={currCPI}
        onChange={(e) => setCurrCPI(e.target.value ? Number(e.target.value) : "")}
        className="w-full p-2 border rounded mb-3"
        placeholder="Enter current CPI"
      />

      <button
        onClick={calculateInflation}
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Calculate
      </button>

      {inflationRate !== null && (
        <div className="mt-4 text-lg font-semibold">
          Inflation Rate: <span className="text-green-600">{inflationRate.toFixed(2)}%</span>
        </div>
      )}
    </div>
  );
};

export default InflationCalculator;
