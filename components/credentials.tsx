import React, { useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, PiggyBank, GraduationCap, DollarSign, FileText, Briefcase } from "lucide-react";
import { poppins } from "@/public/fonts/fonts";

const expertiseData = [
  { name: "Insurance Planning", icon: <ShieldCheck size={40} />, description: "Secure your future with tailored insurance solutions." },
  { name: "Retirement Planning", icon: <PiggyBank size={40} />, description: "Plan ahead for a comfortable and worry-free retirement." },
  { name: "College Educational Fund", icon: <GraduationCap size={40} />, description: "Ensure your child's education with a solid financial plan." },
  { name: "Lifetime Pension Funder", icon: <DollarSign size={40} />, description: "Guaranteed pension funding for a lifetime of security." },
  { name: "Estate Planning", icon: <FileText size={40} />, description: "Strategize the transfer of your wealth with ease." },
  { name: "Business & Employee Insurance", icon: <Briefcase size={40} />, description: "Protect your business and employees with reliable coverage." },
];

const ExpertiseSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (currentIndex: number) => {
    setActiveIndex((prevIndex) => (prevIndex === currentIndex ? null : currentIndex));
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      className={`${poppins.className} bg-gray-100 py-16`}
    >
      <div className="max-w-7xl mx-auto px-8 text-center">
        <h2 className="text-4xl font-bold text-black mb-12">My Expertise</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {expertiseData.map((item, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative flex flex-col items-center p-8 bg-white shadow-lg rounded-xl transition-all duration-300 
                         hover:bg-[#FFD700] hover:text-white cursor-pointer group"
              onClick={() => handleToggle(index)}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              {/* Normal Content */}
              <div className={`text-[#FFD700] mb-3 transition-all duration-300 ${activeIndex === index ? 'hidden' : 'block'}`}> 
                {item.icon} 
              </div>
              <h3 className={`text-lg font-semibold text-black transition-all duration-300 ${activeIndex === index ? 'hidden' : 'block'}`}>
                {item.name}
              </h3>
              
              {/* Reveal Content on Click or Hover */}
              <div className={`absolute inset-0 flex flex-col justify-center items-center bg-[#FFD700] text-white transition-opacity duration-300 rounded-xl p-6 text-center ${activeIndex === index ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <p className="text-lg font-semibold">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ExpertiseSection;