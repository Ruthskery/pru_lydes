"use client";
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
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      className={`${poppins.className} bg-gray-100 py-16`}
    >
      <div className="mx-auto px-8 text-center">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-12 items-start">
          {/* Expertise Column */}
          <div className="bg-white shadow-lg rounded-xl p-8 text-center flex flex-col h-full">
            <h2 className="text-2xl font-bold text-black mb-6">Our Expertise</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {expertiseData.map((item, index) => (
                <div
                  key={index}
                  className="group relative w-full h-48 sm:h-52 cursor-pointer"
                  onClick={() => handleClick(index)}
                  style={{ perspective: "1000px" }}
                >
                  <div
                    className={`relative w-full h-full transition-transform duration-500 transform ${
                      flippedIndex === index ? "rotate-y-180" : "group-hover:rotate-y-180"
                    }`}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {/* Front Side */}
                    <div
                      className="absolute w-full h-full bg-white shadow-lg rounded-xl flex flex-col items-center justify-center p-6 text-center"
                      style={{ backfaceVisibility: "hidden" }}
                    >
                      <div className="text-[#FFD700] mb-3">{item.icon}</div>
                      <h3 className="text-lg font-semibold text-black">{item.name}</h3>
                    </div>

                    {/* Back Side */}
                    <div
                      className="absolute w-full h-full bg-black text-white rounded-xl flex flex-col items-center justify-center p-6 text-center"
                      style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                    >
                      <p className="text-lg font-semibold">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ExpertiseSection;