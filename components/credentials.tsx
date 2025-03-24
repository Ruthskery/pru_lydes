"use client";
import React from "react";
import { ShieldCheck, PiggyBank, GraduationCap, DollarSign, FileText, Briefcase } from "lucide-react";
import Image from "next/image";
import backgroundImage from "../public/src/teambg.jpg";
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
  return (
    <div className={`${poppins.className} bg-gray-100 py-32 min-h-screen relative`}> 
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-60 md:h-80">
        <Image src={backgroundImage} alt="Background" layout="fill" objectFit="cover" className="opacity-50" />
      </div>
      
      <div className="relative z-10 mx-auto px-6 text-center max-w-7xl">
        <h2 className="text-4xl font-bold text-black mb-10">Our Services</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {expertiseData.map((item, index) => (
            <div key={index} className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center">
              <div className="bg-black text-white p-3 rounded-full mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-black mb-2">{item.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{item.description}</p>
              <button className="text-black font-bold uppercase hover:underline">More</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpertiseSection;
