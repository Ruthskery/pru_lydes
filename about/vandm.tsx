import React from 'react';

const Vandm = () => {
  return (
    <div className="w-full h-screen flex justify-center bg-[#14110F] px-4 py-10">
        
      <div className="relative flex gap-0 md:mt-20">
        {/* Left Card */}
        <div className="w-64 h-80 bg-[#222] rounded-xl shadow-lg p-4 z-10">
          <h2 className="text-xl font-semibold text-[#E1B951] mb-2">Achievement 1</h2>
          <p className="text-sm text-white">This is the first achievement card content.</p>
        </div>

        {/* Middle Card (overlapping) */}
        <div className="w-72 h-96 bg-[#2a2a2a] rounded-xl shadow-2xl p-6 z-20 -mt-10 border-4 border-[#E1B951]">
          <h2 className="text-2xl font-bold text-[#E1B951] mb-3">Main Achievement</h2>
          <p className="text-base text-white">This card is highlighted and sits on top of the others to draw attention.</p>
        </div>

        {/* Right Card */}
        <div className="w-64 h-80 bg-[#222] rounded-xl shadow-lg p-4 z-10">
          <h2 className="text-xl font-semibold text-[#E1B951] mb-2">Achievement 3</h2>
          <p className="text-sm text-white">This is the third achievement card content.</p>
        </div>
      </div>
    </div>
  );
};

export default Vandm;
