import React from "react";
import {
  FaShieldAlt,
  FaPiggyBank,
  FaGraduationCap,
  FaChartPie,
  FaFileAlt,
} from "react-icons/fa";

export default function Services() {
  const services = [
    {
      title: "Buy - sell insurance agreement",
      icon: <FaShieldAlt />,
      caption:
        "Concerned about keeping your family separate from your business? A buy - sell insurance agreement lets business owners smoothly transfer ownership without involving family members, protecting both the business and personal relationships.",
    },
    {
      title: "Insurance Planning",
      icon: <FaPiggyBank />,
      caption:
        "Sino at ano ba ang pinakaimportante sa’yo? Pamilya, ari-arian, o ang kinabukasan mo? With proper insurance planning, you can be confident that you're prepared for life’s unexpected challenges. Start your journey with us toward a more secure and worry-free future.",
    },
    {
      title: "College Educational Fund",
      icon: <FaGraduationCap />,
      caption:
        "Are you financially prepared for your child’s future education expenses like tuition, books, uniforms, and more? A college educational fund allows you to start saving early, easing the financial burden later on. Invest smartly today to ensure your child’s access to quality education and a brighter future.",
    },
    {
      title: "Retirement Planning",
      icon: <FaChartPie />,
      caption:
        "Everyone dreams of a stress-free retirement filled with travel and relaxation, don’t you? With our tailored plans, we’ll help you create the secure and comfortable future you deserve to explore and unwind.",
    },
    {
      title: "Estate Planning",
      icon: <FaFileAlt />,
      caption:
        "Want to protect your legacy and provide for your loved ones? Estate planning ensures your assets are distributed your way while minimizing taxes and legal issues. Start today with my help and leave a lasting impact for generations. Before the Tax Reform for Acceleration and Inclusion (TRAIN) law in 2018 the estate tax in the Philippines was applied at a rate that varied between 5% and 20% based on the value of the net estate. Current estate tax is 6% of the assets of the decedent taxpayer.",
    },
    {
      title: "Pension Funder",
      icon: <FaFileAlt />,
      caption:
        "Worried about maintaining a steady income during retirement? A lifetime pension funder guarantees regular payments for life while protecting your income against inflation. Secure your financial stability and peace of mind for the years ahead until age 100!",
    },
  ];

  return (
    <div className="min-h-screen bg-[#14110F] dark:bg-[#FCF8EE] text-white dark:text-[#14110f] px-4 py-8 md:px-6 md:py-12 flex items-center justify-center">
      <div className="max-w-6xl w-full">
        <div className="grid md:grid-cols-3 grid-rows-3 gap-4">
          <div className="col-span-1 sm:col-span-2">
            <h2 className="font-[Montserrat] text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="text-yellow-500">Beyond Protection:</span> Discover What Insurance Can Truly Do For You 
            </h2>
            <p className="font-[Roboto] text-base md:text-lg text-white dark:text-[#14110f]">
              Explore our tailored insurance solutions designed to protect your
              future and provide peace of mind for you and your loved ones...
            </p>
            {/* <ExploreButton /> */}
            <p className="text-xl sm:text-2xl md:text-4xl font-bold leading-tight font-[Montserrat]">
              <span className="text-yellow-500 italic">Protect</span> what matters.
              <span className="text-yellow-500 italic"> Plan</span>
              <br /> with confidence.
            </p>
          </div>
          <div className="md:col-start-3">
            <ServiceCard {...services[0]} />
          </div>
          <div className="md:row-start-2 md:col-start-1">
            <ServiceCard {...services[1]} />
          </div>
          <div className="md:row-span-2 md:col-start-3 md:row-start-2">
            <ServiceCard {...services[4]} />
          </div>
          <div className="md:col-start-2 md:row-start-2">
            <ServiceCard {...services[3]} />
          </div>
          <div className="md:col-start-1 md:row-start-3">
            <ServiceCard {...services[2]} />
          </div>
          <div className="md:col-start-2 row-start-3">
            <ServiceCard {...services[5]} />
          </div>
        </div>
      </div>
    </div>
  );
}

function ServiceCard({
  title,
  icon,
  caption,
}: {
  title: string;
  icon: React.ReactNode;
  caption: string;
}) {
  return (
    <div
      className="bg-[#1f1f1f] dark:bg-[#F3E3BA] p-7 rounded-xl shadow-md flex flex-col h-full"
    >
      <div className="flex items-center mb-4 text-yellow-500 text-3xl">
        {icon}
        <h3 className="text-lg lg:text-2xl font-semibold ml-2 text-white dark:text-[#0C0A09]">
          {title}
        </h3>
      </div>
      <div className="flex-1 overflow-auto scrollbar-hide">
        <p className="text-gray-300 dark:text-[#69584F] lg:text-lg">
          {caption}
        </p>
      </div>
    </div>
  );
}
