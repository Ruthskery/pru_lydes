import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, PiggyBank, GraduationCap, DollarSign, FileText, Briefcase } from "lucide-react";
import { poppins } from "@/public/fonts/fonts";

const expertiseData = [
  { name: "Insurance Planning", icon: <ShieldCheck size={40} /> },
  { name: "Retirement Planning", icon: <PiggyBank size={40} /> },
  { name: "College Educational Fund", icon: <GraduationCap size={40} /> },
  { name: "Lifetime Pension Funder", icon: <DollarSign size={40} /> },
  { name: "Estate Planning", icon: <FileText size={40} /> },
  { name: "Business & Employee Insurance", icon: <Briefcase size={40} /> },
];

const ExpertiseSection = () => {
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
          {expertiseData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex flex-col items-center p-8 bg-white shadow-lg rounded-xl transition-all duration-300 
                         hover:bg-[#FFD700] hover:text-white cursor-pointer group"
            >
              {/* ICON (Turns White on Hover) */}
              <div className="text-[#FFD700] mb-3 transition-all duration-300 group-hover:text-white">
                {item.icon}
              </div>
              {/* TEXT (Turns White on Hover) */}
              <h3 className="text-lg font-semibold text-black transition-all duration-300 group-hover:text-white">
                {item.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ExpertiseSection;
