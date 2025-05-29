import React, { useState } from 'react';

interface GoogleFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GoogleFormModal: React.FC<GoogleFormModalProps> = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);

  if (!isOpen) return null;

  const introSteps = [
    {
      title: "Welcome to PRU Lydes",
      description: "Your journey to financial security starts here. We're here to help you find the perfect insurance solution tailored to your needs.",
      image: "https://www.prulifeuk.com.ph/export/sites/prudential-ph/en/.galleries/images/couple-with-daughter-picnic766x432.jpg"
    },
    {
      title: "Let's Get to Know You Better",
      description: "To provide you with the most suitable recommendations, we'd like to understand your financial goals and current situation.",
      image: "https://www.prulifeuk.com.ph/export/sites/prudential-ph/en/.galleries/images/family-outdoors766x432.jpg"
    },
    {
      title: "Almost There!",
      description: "Just a few questions away from discovering your ideal insurance plan. Your answers will help us create a personalized solution for you.",
      image: "https://www.prulifeuk.com.ph/export/sites/prudential-ph/en/.galleries/images/young-professionals-walking-down-stairs-766x432.jpg"
    }
  ];

  const renderIntroStep = (step: number) => {
    const currentStepData = introSteps[step - 1];
    
    return (
      <div className="flex flex-col items-center text-center p-4 sm:p-6 md:p-8 bg-[#14110F] rounded-lg">
        <img 
          src={currentStepData.image}
          alt={currentStepData.title}
          className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover rounded-lg mb-6"
        />
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#E1B951] mb-4">
          {currentStepData.title}
        </h2>
        <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-8 max-w-2xl">
          {currentStepData.description}
        </p>
        
        {/* Progress Indicators */}
        <div className="flex gap-2 mb-6">
          {[1, 2, 3].map((stepNumber) => (
            <div
              key={stepNumber}
              className={`h-2 rounded-full transition-all duration-300 ${
                stepNumber === step
                  ? "w-8 bg-[#E1B951]"
                  : "w-2 bg-[#E1B951]/30"
              }`}
            />
          ))}
        </div>

        <div className="flex gap-4">
          {step > 1 && (
            <button
              onClick={() => setCurrentStep(step - 1)}
              className="px-6 py-2 border-2 border-[#E1B951] text-[#E1B951] rounded-lg
                hover:bg-[#E1B951]/10 transition-all duration-300"
            >
              Back
            </button>
          )}
          <button
            onClick={() => step < 3 ? setCurrentStep(step + 1) : setCurrentStep(4)}
            className="px-6 py-2 bg-[#E1B951] text-black rounded-lg
              hover:bg-[#E1B951]/90 transition-all duration-300"
          >
            {step === 3 ? "Start Survey" : "Next"}
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 px-4 sm:px-6">
      <div className="relative bg-[#14110F] rounded-lg shadow-lg w-full max-h-[90vh] overflow-y-auto 
                    max-w-full sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
        {currentStep <= 3 ? (
          renderIntroStep(currentStep)
        ) : (
          <>
            {/* Embedded Google Form */}
            <div className="mt-6">
              <iframe
                src="https://forms.gle/sKyz4BFmDfx1s9EF6"
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
              className="m-4 bg-[#E1B951] text-black px-6 py-2 rounded-lg hover:bg-[#E1B951]/90 transition-all duration-300"
            >
              Close
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default GoogleFormModal;
