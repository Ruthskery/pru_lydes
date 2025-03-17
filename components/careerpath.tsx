import React from "react";

const careerData = {
  education: {
    title: "Education",
    color: "border-blue-500",
    items: [
      { title: "Bachelor’s Degree in Computer Science", subtitle: "XYZ University (2018-2022)" },
      { title: "Certification in Web Development", subtitle: "Online Course (2021)" },
    ],
  },
  workExperience: {
    title: "Work Experience",
    color: "border-green-500",
    items: [
      { title: "Software Engineer", subtitle: "ABC Tech Solutions (2023-Present)" },
      { title: "Intern - Web Developer", subtitle: "DEF Company (2022-2023)" },
    ],
  },
};

const Careerpath = () => {
  return (
    <div className="max-w-6xl mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">Career Path</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Education Column */}
        <div>
          <div className={`text-2xl font-bold border-b-4 pb-1 mb-6 ${careerData.education.color}`}>
            {careerData.education.title}
          </div>

          <div className="relative border-l-4 border-gray-300 pl-6">
            {careerData.education.items.map((item, idx) => (
              <div key={idx} className="relative pl-6 mb-6">
                {/* Circle Indicator */}
                <div className="absolute left-[-25px] top-2 w-5 h-5 bg-white border-4 border-blue-500 rounded-full"></div>

                {/* Content */}
                <div className={`p-4 border-l-4 ${careerData.education.color} rounded-lg shadow-md bg-white`}>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-gray-600">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Work Experience Column */}
        <div>
          <div className={`text-2xl font-bold border-b-4 pb-1 mb-6 ${careerData.workExperience.color}`}>
            {careerData.workExperience.title}
          </div>

          <div className="relative border-l-4 border-gray-300 pl-6">
            {careerData.workExperience.items.map((item, idx) => (
              <div key={idx} className="relative pl-6 mb-6">
                {/* Circle Indicator */}
                <div className="absolute left-[-25px] top-2 w-5 h-5 bg-white border-4 border-green-500 rounded-full"></div>

                {/* Content */}
                <div className={`p-4 border-l-4 ${careerData.workExperience.color} rounded-lg shadow-md bg-white`}>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-gray-600">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careerpath;
