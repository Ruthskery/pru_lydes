"use client";
import React from "react";
import { ShieldCheck, PiggyBank, GraduationCap, DollarSign, FileText, Briefcase } from "lucide-react";
import { poppins } from "@/public/fonts/fonts";
import { motion } from "framer-motion";

const expertiseData = [
  { name: "Insurance Planning", icon: <ShieldCheck size={40} />, description: "Secure your future with tailored insurance solutions." },
  { name: "Retirement Planning", icon: <PiggyBank size={40} />, description: "Plan ahead for a comfortable and worry-free retirement." },
  { name: "College Educational Fund", icon: <GraduationCap size={40} />, description: "Ensure your child's education with a solid financial plan." },
  { name: "Lifetime Pension Funder", icon: <DollarSign size={40} />, description: "Guaranteed pension funding for a lifetime of security." },
  { name: "Estate Planning", icon: <FileText size={40} />, description: "Strategize the transfer of your wealth with ease." },
  { name: "Business & Employee Insurance", icon: <Briefcase size={40} />, description: "Protect your business and employees with reliable coverage." },
];

const ExpertiseSection = () => {
  return (
    <div className={`${poppins.className} bg-[url(../public/src/teambg.jpg)] py-32 min-h-screen relative bg-initial xl:bg-fixed`}>
      {/* Background Image */}
      <div className="absolute inset-0 w-full bg-fixed">
        <div className="w-full h-full p-6 bg-black/20"></div>
        <div className="w-full absolute bottom-0 bg-[#f1f1f1] h-1/2"></div>
      </div>

      <div className="relative z-10 mx-auto px-6 text-center max-w-7xl top-10">
        <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-10 p-8 inline-block rounded-md border-2 border-solid">
          Our Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {expertiseData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}  // Animate when the element comes into view
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center"
            >
              <div className="bg-black text-white p-3 rounded-full mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-black mb-2">{item.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{item.description}</p>
              <button className="text-black font-bold uppercase hover:underline">More</button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpertiseSection;
