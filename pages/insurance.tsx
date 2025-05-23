import React, { useState } from "react";
import {
  FaShieldAlt,
  FaPiggyBank,
  FaGraduationCap,
  FaChartPie,
  FaFileAlt,
  FaChevronDown,
  FaBars,
} from "react-icons/fa";
import Form from "@/components/form";
import { useRouter } from "next/router";

const Insurance = () => {
  const router = useRouter();
  const [activeService, setActiveService] = useState<number | null>(null);
  const [activeSubsection, setActiveSubsection] = useState<number | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const services = [
    {
      title: "Insurance Planning",
      link: "/services#insurance-planning",
      icon: <FaShieldAlt />,
      subsections: [
        {
          name: "Life Insurance",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          image: "/src/insurance.png",
        },
        {
          name: "Health Insurance",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          image: "/src/insurance.png",
        },
        {
          name: "Disability Insurance",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          image: "/src/insurance.png",
        },
      ],
    },
    {
      title: "Retirement Planning",
      link: "/services#retirement-planning",
      icon: <FaPiggyBank />,
      subsections: [
        {
          name: "401(k) Plans",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          image: "/src/insurance.png",
        },
        {
          name: "IRA Accounts",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          image: "/src/insurance.png",
        },
        {
          name: "Annuities",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          image: "/src/insurance.png",
        },
      ],
    },
    {
      title: "College Educational Fund",
      link: "/services#college-educational-fund",
      icon: <FaGraduationCap />,
      subsections: [
        {
          name: "529 Plans",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          image: "/src/insurance.png",
        },
        {
          name: "Education Savings Accounts",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          image: "/src/insurance.png",
        },
      ],
    },
    {
      title: "Lifetime Pension Funder",
      link: "/services#lifetime-pension-funder",
      icon: <FaChartPie />,
      subsections: [
        {
          name: "Pension Plans",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          image: "/src/insurance.png",
        },
        {
          name: "Lifetime Annuities",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          image: "/src/insurance.png",
        },
      ],
    },
    {
      title: "Estate Planning",
      link: "/services#estate-planning",
      icon: <FaFileAlt />,
      subsections: [
        {
          name: "Wills",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          image: "/src/insurance.png",
        },
        {
          name: "Trusts",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          image: "/src/insurance.png",
        },
        {
          name: "Power of Attorney",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          image: "/src/insurance.png",
        },
      ],
    },
  ];

  React.useEffect(() => {
    if (router.asPath.includes("#")) {
      const hash = router.asPath.split("#")[1];
      if (hash) {
        // Find the service index by section id
        const serviceIndex = services.findIndex(
          (service) => service.title.replace(/\s+/g, "-").toLowerCase() === hash
        );
        if (serviceIndex !== -1) {
          setActiveService(serviceIndex);
          setActiveSubsection(null);
          // Optionally scroll to the section
          const el = document.getElementById(hash);
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }
      }
    }
  }, [router.asPath]);

  return (
    <div className="max-h-screen dark:bg-[#FCF8EE] text-black dark:text-[#14110f]">
      {/* Mobile Burger - only visible on mobile, fixed top left */}
      <div className="md:hidden fixed top-3 left-3.5 z-50">
        <button
          className="text-yellow-500 p-2 rounded-sm"
          onClick={() => setSidebarOpen((open) => !open)}
        >
          <FaBars size={24} />
        </button>
      </div>
      <div className="flex">
        {/* Sidebar with burger and responsive logic */}
        <div
          className={`
            fixed md:static z-40 top-0 md:sticky
            ${sidebarOpen ? "translate-x-0 w-90 md:w-140" : "-translate-x-full md:translate-x-0  md:w-[70px] xl:w-[100px]"}
            transition-all duration-500 ease-in-out
            h-screen
            bg-black text-white pt-3 overflow-hidden
            group/sidebar
          `}
        >
          {/* Burger Icon - always left-aligned with icons, hidden on mobile */}
          <div className="hidden md:flex items-center justify-center mb-4">
            <button
              className="text-white focus:outline-none"
              onClick={() => setSidebarOpen((open) => !open)}
            >
              <FaBars size={24} />
            </button>
          </div>
          <ul className={`pl-1.5 pt-10 md:pt-2 transition-all duration-300 ${sidebarOpen ? '' : 'md:block hidden'}`}>
            {services.map((service, index) => (
              <li
                key={index}
                id={service.title.replace(/\s+/g, "-").toLowerCase()}
                className={`flex flex-col gap-2 px-2 py-3 transition-all duration-300 cursor-pointer`}
              >
                <div
                  className="flex items-center gap-4 cursor-pointer"
                  onClick={() => {
                    setActiveService(activeService === index ? null : index);
                    setActiveSubsection(null);
                    if (window.innerWidth < 768) setSidebarOpen(false); // Close sidebar on mobile when selecting a service
                  }}
                >
                  <div className="text-yellow-500 text-3xl min-w-[40px] flex justify-center">
                    {service.icon}
                  </div>
                  <span
                    className={`
                      flex
                      text-lg font-semibold items-center justify-between w-full transition-opacity duration-300
                      ${sidebarOpen ? "opacity-100" : "opacity-0"}
                      whitespace-nowrap overflow-hidden text-ellipsis
                    `}
                  >
                    {service.title}
                    <FaChevronDown
                      className={`transition-transform ${activeService === index ? "rotate-180" : ""}`}
                    />
                  </span>
                </div>
                {activeService === index && sidebarOpen && (
                  <ul className="pl-10 space-y-2">
                    {service.subsections.map((subsection, subIndex) => (
                      <li
                        key={subIndex}
                        className={`text-sm cursor-pointer ${
                          activeSubsection === subIndex
                            ? "text-yellow-500"
                            : "text-gray-300 hover:text-yellow-500"
                        }`}
                        onClick={() => {
                          setActiveSubsection(subIndex);
                          if (window.innerWidth < 768) setSidebarOpen(false); // Close sidebar on mobile when selecting a subsection
                        }}
                      >
                        {subsection.name}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        {/* Overlay for mobile when sidebar is open */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/20 z-30 md:hidden"
            onClick={() => setSidebarOpen(false)}
          ></div>
        )}
        <div className="w-full mt-5 md:ml-0">
          {activeService !== null && (
            <div>
              <h2 className="text-2xl text-center font-bold mb-4">
                {services[activeService].title}
              </h2>
              {activeSubsection !== null ? (
                <div className="grid p-5 text-justify lg:grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {services[activeService].subsections[activeSubsection].name}
                    </h3>
                    <p className="text-lg">
                      {services[activeService].subsections[activeSubsection].description}
                    </p>
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
                    <li key={subIndex} className="text-lg">
                      {subsection.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
        <div className="h-screen bg-black flex hidden xl:block">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Insurance;
