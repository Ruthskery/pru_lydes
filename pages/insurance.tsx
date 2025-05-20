import React, { useState } from 'react';
import { FaShieldAlt, FaPiggyBank, FaGraduationCap, FaChartPie, FaFileAlt, FaChevronDown } from "react-icons/fa";
import Form from '@/components/form';
import Navbar from '@/components/navbar';

const Insurance = () => {
  const [activeService, setActiveService] = useState<number | null>(null);
  const [activeSubsection, setActiveSubsection] = useState<number | null>(null);

  const services = [
    { 
      title: "Insurance Planning", 
      link: "/services#insurance-planning", 
      icon: <FaShieldAlt />, 
      subsections: [
        { name: "Life Insurance", description: "Provides financial security for your loved ones.", image: "/src/insurance.png" },
        { name: "Health Insurance", description: "Covers medical expenses and ensures peace of mind.", image: "/src/insurance.png" },
        { name: "Disability Insurance", description: "Protects your income in case of disability.", image: "/src/insurance.png" }
      ]
    },
    { 
      title: "Retirement Planning", 
      link: "/services#retirement-planning", 
      icon: <FaPiggyBank />, 
      subsections: [
        { name: "401(k) Plans", description: "Employer-sponsored retirement savings plans.", image: "/src/insurance.png" },
        { name: "IRA Accounts", description: "Tax-advantaged retirement savings accounts.", image: "/src/insurance.png" },
        { name: "Annuities", description: "Guaranteed income for your retirement.", image: "/src/insurance.png" }
      ]
    },
    { 
      title: "College Educational Fund", 
      link: "/services#college-educational-fund", 
      icon: <FaGraduationCap />, 
      subsections: [
        { name: "529 Plans", description: "Tax-advantaged savings plans for education.", image: "/src/insurance.png" },
        { name: "Education Savings Accounts", description: "Flexible savings for educational expenses.", image: "/src/insurance.png" }
      ]
    },
    { 
      title: "Lifetime Pension Funder", 
      link: "/services#lifetime-pension-funder", 
      icon: <FaChartPie />, 
      subsections: [
        { name: "Pension Plans", description: "Provides a steady income after retirement.", image: "/src/insurance.png" },
        { name: "Lifetime Annuities", description: "Ensures income for life.", image: "/src/insurance.png" }
      ]
    },
    { 
      title: "Estate Planning", 
      link: "/services#estate-planning", 
      icon: <FaFileAlt />, 
      subsections: [
        { name: "Wills", description: "Legal documents to distribute your assets.", image: "/src/insurance.png" },
        { name: "Trusts", description: "Manage and protect your assets.", image: "/src/insurance.png" },
        { name: "Power of Attorney", description: "Authorize someone to act on your behalf.", image: "/src/insurance.png" }
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-[#u32r99] dark:bg-[#FCF8EE] text-black dark:text-[#14110f]">
      <Navbar />
      <div className="flex">
        <ul className=" w-1/4 h-screen bg-black text-white">
        <h1 className="text-4xl font-bold mb-6 px-5 pt-5 text-center">Our Services</h1>
          {services.map((service, index) => (
            <li key={index} className="flex flex-col gap-2 hover:bg-yellow-500/30 hover:text-white px-5 py-3">
              <div 
                className="flex items-center gap-4 cursor-pointer" 
                onClick={() => {
                  setActiveService(activeService === index ? null : index);
                  setActiveSubsection(null);
                }}
              >
                <div className="text-yellow-500 text-3xl">{service.icon}</div>
                <span className="text-lg font-semibold flex items-center justify-between w-full">
                  {service.title}
                  <FaChevronDown className={`transition-transform ${activeService === index ? 'rotate-180' : ''}`} />
                </span>
              </div>
              {activeService === index && (
                <ul className="pl-10 space-y-2">
                  {service.subsections.map((subsection, subIndex) => (
                    <li 
                      key={subIndex} 
                      className={`text-sm cursor-pointer ${activeSubsection === subIndex ? 'text-yellow-500' : 'text-gray-300 hover:text-yellow-500'}`}
                      onClick={() => setActiveSubsection(subIndex)}
                    >
                      {subsection.name}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <div className="w-2/3 pl-8">
          {activeService !== null && (
            <div>
              <h2 className="text-2xl font-bold mb-4">{services[activeService].title}</h2>
              {activeSubsection !== null ? (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{services[activeService].subsections[activeSubsection].name}</h3>
                    <p className="text-lg">{services[activeService].subsections[activeSubsection].description}</p>
                  </div>
                  <div>
                    <img 
                      src={services[activeService].subsections[activeSubsection].image} 
                      alt={services[activeService].subsections[activeSubsection].name} 
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>
              ) : (
                <ul className="list-disc pl-5 space-y-2">
                  {services[activeService].subsections.map((subsection, subIndex) => (
                    <li key={subIndex} className="text-lg">{subsection.name}</li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
        <div className="h-screen bg-black flex justify-center  items-center ">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Insurance;
