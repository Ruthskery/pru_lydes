import React from 'react';

interface GoogleFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GoogleFormModal: React.FC<GoogleFormModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 px-4 sm:px-6">
      <div className="relative bg-white rounded-lg shadow-lg w-full max-h-[90vh] overflow-y-auto p-4 sm:p-6 
                      max-w-full sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">

        {/* Embedded Google Form */}
        <div className="mt-6">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfDUMMY_URL/viewform?embedded=true"
            width="100%"
            height="700"
            className="w-full h-[70vh] sm:h-[75vh] rounded border-none"
            frameBorder="0"
            allowFullScreen
            title="Google Form"
          >
            Loading…
          </iframe>
        </div>
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

export default GoogleFormModal;
