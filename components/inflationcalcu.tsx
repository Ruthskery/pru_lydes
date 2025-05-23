import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const InflationCalculatorModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4 sm:px-6">
      <div className="
        bg-white p-4 sm:p-6 rounded-lg shadow-lg w-full
        max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl
      ">
        <h2 className="text-lg sm:text-xl font-bold mb-4">Inflation Calculator</h2>

        {/* Calculator Content Here */}

        <button
          onClick={onClose}
          className="mt-4 bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default InflationCalculatorModal;
