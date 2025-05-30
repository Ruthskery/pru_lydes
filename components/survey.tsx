import React, { useState } from 'react';
import GoogleFormModal from './googleformModal';
import QuoteFormModal from './quoteFormModal';

const Survey = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <div className='min-h-screen w-full bg-[#14110F] dark:bg-[#FCF8EE] py-16 px-4 sm:px-6 md:px-8 lg:px-12'>
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#E1B951] mb-4">
            Ready to Secure Your Future?
          </h1>
          <p className="text-gray-300 dark:text-[#14110F] text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto">
            Take the first step towards financial freedom with PRU Lydes
          </p>
        </div>

        {/* Cards Container */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Survey Card */}
          <div className="bg-[#1A1512] dark:bg-[#F3E3BA] rounded-2xl p-6 sm:p-8 transform transition-all duration-300 hover:scale-[1.02] border border-[#E1B951]/20 hover:border-[#E1B951]/40">
            <div className="relative h-48 sm:h-56 md:h-64 mb-6 overflow-hidden rounded-xl">
              <img 
                src="https://www.prulifeuk.com.ph/export/sites/prudential-ph/en/.galleries/images/couple-with-daughter-picnic766x432.jpg"
                alt="Family Financial Planning"
                className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#14110F] to-transparent opacity-70"></div>
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-bold text-[#E1B951] mb-4">
              Financial Goals Survey
            </h2>
            <p className="text-gray-300 dark:text-[#14110F] mb-6">
              Help us understand your financial goals and aspirations. Take our comprehensive survey to receive personalized insurance recommendations.
            </p>
            <ul className="text-gray-400 dark:text-[#14110F] mb-8 space-y-2">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#E1B951] mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Personalized recommendations
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#E1B951] mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                5-minute questionnaire
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#E1B951] mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Tailored insurance solutions
              </li>
            </ul>
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full py-4 bg-[#E1B951] text-black rounded-xl font-bold text-lg
                transition-all duration-300 transform hover:bg-[#E1B951]/90 hover:scale-[1.02]
                focus:outline-none focus:ring-2 focus:ring-[#E1B951] focus:ring-offset-2 focus:ring-offset-[#14110F]"
            >
              Take Survey Now
            </button>
          </div>

          {/* Financial Exam Card */}
          <div className="bg-[#1A1512] dark:bg-[#F3E3BA] rounded-2xl p-6 sm:p-8 transform transition-all duration-300 hover:scale-[1.02] border border-[#E1B951]/20 hover:border-[#E1B951]/40">
            <div className="relative h-48 sm:h-56 md:h-64 mb-6 overflow-hidden rounded-xl">
              <img 
                src="https://www.prulifeuk.com.ph/export/sites/prudential-ph/en/.galleries/images/PLW-CorpWeb-Assets_Revised_1366x560.jpg"
                alt="Insurance Quotation"
                className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#14110F] to-transparent opacity-70"></div>
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-bold text-[#E1B951] mb-4">
              Get Your Insurance Quote
            </h2>
            <p className="text-gray-300 dark:text-[#14110F] mb-6">
              Receive a personalized insurance quotation tailored to your needs. Our experts will help you find the perfect coverage at the right price.
            </p>
            <ul className="text-gray-400 dark:text-[#14110F] mb-8 space-y-2">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#E1B951] mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Free consultation
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#E1B951] mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Customized plans
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#E1B951] mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Flexible payment options
              </li>
            </ul>
            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="w-full py-4 bg-transparent border-2 border-[#E1B951] dark:border-[#14110F] text-[#E1B951] dark:text-[#14110F] rounded-xl font-bold text-lg
                transition-all duration-300 transform hover:bg-[#E1B951]/10 hover:scale-[1.02]
                focus:outline-none focus:ring-2 focus:ring-[#E1B951] focus:ring-offset-2 focus:ring-offset-[#14110F]"
            >
              Request Quote
            </button>
          </div>
        </div>

        {/* Bottom CTA Section */}
        {/* <div className="text-center mt-16">
          <p className="text-gray-400 text-lg mb-4">
            Join thousands of others who have already secured their financial future
          </p>
          <div className="flex justify-center space-x-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#E1B951]">10k+</div>
              <div className="text-gray-400">Clients Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#E1B951]">95%</div>
              <div className="text-gray-400">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#E1B951]">24/7</div>
              <div className="text-gray-400">Support</div>
            </div>
          </div>
        </div> */}
      </div>

      {/* Modals */}
      <GoogleFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <QuoteFormModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </div>
  );
}

export default Survey;