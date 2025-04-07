"use client";

import React from "react";
import {
  ShieldCheck,
  PiggyBank,
  GraduationCap,
  DollarSign,
  FileText,
  Briefcase,
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import backgroundImage from "../public/src/teambg.jpg";
import { poppins } from "@/public/fonts/fonts";
import { Card, CardContent } from "@/components/ui/card";

const expertiseData = [
  {
    name: "Insurance Planning",
    icon: <ShieldCheck size={40} />,
    description: "Secure your future with tailored insurance solutions.",
  },
  {
    name: "Retirement Planning",
    icon: <PiggyBank size={40} />,
    description: "Plan ahead for a comfortable and worry-free retirement.",
  },
  {
    name: "College Educational Fund",
    icon: <GraduationCap size={40} />,
    description: "Ensure your child's education with a solid financial plan.",
  },
  {
    name: "Lifetime Pension Funder",
    icon: <DollarSign size={40} />,
    description: "Guaranteed pension funding for a lifetime of security.",
  },
  {
    name: "Estate Planning",
    icon: <FileText size={40} />,
    description: "Strategize the transfer of your wealth with ease.",
  },
  {
    name: "Business & Employee Insurance",
    icon: <Briefcase size={40} />,
    description: "Protect your business and employees with reliable coverage.",
  },
];

const ExpertiseSection = () => {
  return (
    <div className={`${poppins.className} bg-gray-100 py-32 min-h-screen relative`}>
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-60 md:h-80">
        <Image
          src={backgroundImage}
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
      </div>

      <div className="relative z-10 mx-auto px-6 text-center max-w-7xl">
        <h2 className="text-4xl font-bold text-black mb-10">Our Services</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {expertiseData.map((item, index) => (
            <motion.div
              key={index}
              className="relative w-full h-60 overflow-hidden rounded-2xl cursor-pointer group shadow-lg"
              initial="rest"
              whileHover="hover"
              animate="rest"
            >
              {/* Blue gradient overlay that rises on hover */}
              <motion.div
                className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-blue-600 to-blue-400 z-0"
                variants={{
                  rest: { height: "0%" },
                  hover: { height: "100%" },
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                style={{ borderRadius: "1rem" }}
              />

              {/* Card content */}
              <Card className="w-full h-full bg-white bg-opacity-80 backdrop-blur-md z-10 relative">
                <CardContent className="h-full flex items-center justify-center text-center">
                  <div className="relative z-20 w-full">
                    {/* Title & Icon */}
                    <motion.div
                      variants={{
                        rest: { opacity: 1, y: 0 },
                        hover: { opacity: 0, y: -10 },
                      }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 flex flex-col items-center justify-center space-y-2"
                    >
                      <div className="bg-black text-white p-3 rounded-full">
                        {item.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        {item.name}
                      </h3>
                    </motion.div>

                    {/* Description */}
                    <motion.div
                      variants={{
                        rest: { opacity: 0, y: 10 },
                        hover: { opacity: 1, y: 0 },
                      }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 flex flex-col items-center justify-center px-4 space-y-3"
                    >
                      <p className="text-white text-sm">{item.description}</p>
                      <button className="text-white font-bold uppercase hover:underline">
                        More
                      </button>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpertiseSection;
