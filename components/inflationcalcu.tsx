import React, { useState } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const InflationCalculatorModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-2 sm:p-4 md:p-6 lg:p-8">
      <div className="bg-[#14110F] rounded-lg shadow-lg w-full max-h-[95vh] overflow-y-auto
        max-w-[95vw] sm:max-w-[85vw] md:max-w-[80vw] lg:max-w-[75vw] xl:max-w-[70vw]">
        <div className="flex justify-center items-center w-full h-full">
          <div className="w-full h-full p-3 sm:p-4 md:p-6 lg:p-8 rounded-lg text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-[#E1B951]">
              Inflation Calculator (Philippines)
            </h2>
            
            <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-10">
              {/* Forward Inflation Calculator */}
              <div className="w-full lg:w-1/2 bg-[#1A1512] p-3 sm:p-4 md:p-6 lg:p-8 rounded-lg border border-[#E1B951]/20">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 text-[#E1B951]">
                  Forward Flat Rate Inflation Calculator
                </h3>
                <div className="space-y-3 sm:space-y-4 md:space-y-5">
                  <div>
                    <label className="block text-sm sm:text-base font-medium text-gray-300 mb-1 sm:mb-2">
                      Amount (₱)
                    </label>
                    <input
                      type="number"
                      value={forwardAmount}
                      onChange={(e) => setForwardAmount(e.target.value ? Number(e.target.value) : "")}
                      className="w-full p-2 sm:p-3 md:p-4 bg-[#2A2522] border border-[#E1B951]/20 rounded-md text-white
                        text-sm sm:text-base placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#E1B951]/50"
                      placeholder="Enter amount"
                    />
                  </div>

                  <div>
                    <label className="block text-sm sm:text-base font-medium text-gray-300 mb-1 sm:mb-2">
                      Years
                    </label>
                    <input
                      type="number"
                      value={forwardYears}
                      onChange={(e) => setForwardYears(e.target.value ? Number(e.target.value) : "")}
                      className="w-full p-2 sm:p-3 md:p-4 bg-[#2A2522] border border-[#E1B951]/20 rounded-md text-white
                        text-sm sm:text-base placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#E1B951]/50"
                      placeholder="Enter number of years"
                    />
                  </div>

                  <div>
                    <label className="block text-sm sm:text-base font-medium text-gray-300 mb-1 sm:mb-2">
                      Average Inflation Rate (%)
                    </label>
                    <input
                      type="number"
                      value={forwardInflationRate}
                      onChange={(e) => setForwardInflationRate(e.target.value ? Number(e.target.value) : "")}
                      className="w-full p-2 sm:p-3 md:p-4 bg-[#2A2522] border border-[#E1B951]/20 rounded-md text-white
                        text-sm sm:text-base placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#E1B951]/50"
                      placeholder="Enter average inflation rate"
                    />
                  </div>

                  <button
                    onClick={calculateForwardInflation}
                    className="w-full bg-[#E1B951] text-black py-2 sm:py-3 md:py-4 rounded-md 
                      hover:bg-[#E1B951]/90 transition font-semibold text-sm sm:text-base"
                  >
                    Calculate Future Value
                  </button>

                  {forwardValue !== null && (
                    <div className="text-sm sm:text-base md:text-lg font-semibold text-gray-300 mt-4">
                      ₱{forwardAmount.toLocaleString()} now equals{" "}
                      <span className="text-[#E1B951]">
                        ₱{forwardValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </span>{" "}
                      after {forwardYears} years with an average inflation rate of {forwardInflationRate}%.
                    </div>
                  )}
                </div>
              </div>

              {/* Backward Inflation Calculator */}
              <div className="w-full lg:w-1/2 bg-[#1A1512] p-3 sm:p-4 md:p-6 lg:p-8 rounded-lg border border-[#E1B951]/20">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 text-[#E1B951]">
                  Backward Flat Rate Inflation Calculator
                </h3>
                <div className="space-y-3 sm:space-y-4 md:space-y-5">
                  <div>
                    <label className="block text-sm sm:text-base font-medium text-gray-300 mb-1 sm:mb-2">
                      Amount (₱)
                    </label>
                    <input
                      type="number"
                      value={backwardAmount}
                      onChange={(e) => setBackwardAmount(e.target.value ? Number(e.target.value) : "")}
                      className="w-full p-2 sm:p-3 md:p-4 bg-[#2A2522] border border-[#E1B951]/20 rounded-md text-white
                        text-sm sm:text-base placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#E1B951]/50"
                      placeholder="Enter amount"
                    />
                  </div>

                  <div>
                    <label className="block text-sm sm:text-base font-medium text-gray-300 mb-1 sm:mb-2">
                      Years
                    </label>
                    <input
                      type="number"
                      value={backwardYears}
                      onChange={(e) => setBackwardYears(e.target.value ? Number(e.target.value) : "")}
                      className="w-full p-2 sm:p-3 md:p-4 bg-[#2A2522] border border-[#E1B951]/20 rounded-md text-white
                        text-sm sm:text-base placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#E1B951]/50"
                      placeholder="Enter number of years"
                    />
                  </div>

                  <div>
                    <label className="block text-sm sm:text-base font-medium text-gray-300 mb-1 sm:mb-2">
                      Average Inflation Rate (%)
                    </label>
                    <input
                      type="number"
                      value={backwardInflationRate}
                      onChange={(e) => setBackwardInflationRate(e.target.value ? Number(e.target.value) : "")}
                      className="w-full p-2 sm:p-3 md:p-4 bg-[#2A2522] border border-[#E1B951]/20 rounded-md text-white
                        text-sm sm:text-base placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#E1B951]/50"
                      placeholder="Enter average inflation rate"
                    />
                  </div>

                  <button
                    onClick={calculateBackwardInflation}
                    className="w-full bg-[#E1B951] text-black py-2 sm:py-3 md:py-4 rounded-md 
                      hover:bg-[#E1B951]/90 transition font-semibold text-sm sm:text-base"
                  >
                    Calculate Past Value
                  </button>

                  {backwardValue !== null && (
                    <div className="text-sm sm:text-base md:text-lg font-semibold text-gray-300 mt-4">
                      ₱{backwardAmount.toLocaleString()} now equals{" "}
                      <span className="text-[#E1B951]">
                        ₱{backwardValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </span>{" "}
                      in purchasing power {backwardYears} years ago with an average inflation rate of {backwardInflationRate}%.
                    </div>
                  )}
                </div>
              </div>
            </div>

            <button
              onClick={onClose}
              className="mt-6 sm:mt-8 md:mt-10 w-full bg-[#2A2522] text-gray-300 px-4 py-2 sm:py-3 md:py-4 
                rounded-md font-semibold hover:bg-[#2A2522]/80 transition duration-200 ease-in-out 
                border border-[#E1B951]/20 text-sm sm:text-base"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InflationCalculatorModal;
