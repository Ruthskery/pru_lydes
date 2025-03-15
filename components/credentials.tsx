import React from "react";
import { ShieldCheck, PiggyBank, GraduationCap, DollarSign, FileText, Briefcase } from "lucide-react";
import { poppins } from "@/public/fonts/fonts";

const expertiseData = [
  { name: "Insurance Planning", icon: <ShieldCheck size={32} /> },
  { name: "Retirement Planning", icon: <PiggyBank size={32} /> },
  { name: "College Educational Fund", icon: <GraduationCap size={32} /> },
  { name: "Lifetime Pension Funder", icon: <DollarSign size={32} /> },
  { name: "Estate Planning", icon: <FileText size={32} /> },
  { name: "Business & Employee Insurance", icon: <Briefcase size={32} /> },
];

const ExpertiseSection = () => {
  return (
    <div className={`${poppins.className} bg-gray-100 py-12`}>
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-black mb-8">My Expertise</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {expertiseData.map((item, index) => (
            <div key={index} className="flex flex-col items-center p-6 bg-white shadow-md rounded-lg">
              <div className="text-[#FFD700] mb-3">{item.icon}</div>
              <h3 className="text-lg font-semibold text-black">{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpertiseSection;
