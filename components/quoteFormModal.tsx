import React from 'react';
import QuoteForm from './quoteForm';

interface QuoteFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuoteFormModal: React.FC<QuoteFormModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center p-2 sm:p-4 md:p-6 lg:p-8">
      <div className="relative w-full max-w-[95%] sm:max-w-[90%] md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto">
        {/* Modal content */}
        <div className="bg-[#14110F] dark:bg-[#FCF8EE] rounded-lg sm:rounded-xl shadow-xl overflow-hidden">
          <div className="p-3 sm:p-4 md:p-6 lg:p-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#E1B951] dark:text-[#14110F] mb-3 sm:mb-4 md:mb-6 text-center">
              Get Your Insurance Quote
            </h2>
            <div className="max-h-[80vh] overflow-y-auto px-2 sm:px-3 md:px-4 custom-scrollbar">
              <QuoteForm />
            </div>
            <button
              onClick={onClose}
              className="m-4 bg-[#E1B951] text-black px-6 py-2 rounded-lg hover:bg-[#E1B951]/90 transition-all duration-300"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Add custom scrollbar styles
const styles = `
  .custom-scrollbar::-webkit-scrollbar {
    width: 6px;
  }
  .custom-scrollbar::-webkit-scrollbar-track {
    background: transparent;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background-color: rgba(225, 185, 81, 0.5);
    border-radius: 3px;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background-color: rgba(225, 185, 81, 0.8);
  }
`;

// Add styles to head
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}

export default QuoteFormModal; 