import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faChartLine,
  faSearch,
  faPaintBrush,
  faRocket,
  faCog,
} from "@fortawesome/free-solid-svg-icons";

const industries = [
  {
    icon: faChartLine,
    title: "Accounting",
    description:
      "Professional accounting services to manage financial records and tax filings.",
  },
  {
    icon: faCog,
    title: "Finance",
    description:
      "Strategic financial services including investment advice and financial planning.",
  },
  {
    icon: faSearch,
    title: "IT Services",
    description:
      "Expert IT solutions to support and optimize technology infrastructures.",
  },
  {
    icon: faLightbulb,
    title: "Consulting",
    description:
      "Providing business consultancy to improve strategy and operations.",
  },
  {
    icon: faRocket,
    title: "Marketing",
    description:
      "Creative marketing solutions for brand building and customer acquisition.",
  },
  {
    icon: faPaintBrush,
    title: "Design",
    description:
      "Graphic and UX/UI design services to enhance user experience and branding.",
  },
];

const OurIndustries = () => {
  return (
    <section className="text-center bg-[#F8FBEF] py-10">
      {/* Outer container */}
      <div className="max-w-[80%] mx-auto flex justify-between flex-wrap px-4">
        {/* Row with two main columns */}
        <div className="flex flex-row w-full justify-between space-x-8">
          {/* Left Column: Title & Intro */}
          <div className="flex flex-col justify-center text-left w-full md:w-1/3 mb-8 md:mb-0">
            <h3 className="text-[#72BF78] mb-2">Our Industries</h3>
            <h2 className="text-3xl md:text-4xl text-green-800 font-semibold mb-4">
              We Serve a Range of Professional Careers
            </h2>
            <p className="text-lg text-gray-800 mb-10 max-w-2xl">
              Our industry expertise spans across accounting, finance, IT, and
              more, offering innovative solutions for business growth.
            </p>
          </div>

          {/* Right Column: Industries Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {industries.map(({ icon, title, description }, index) => (
              <div
                key={index}
                className="bg-[#72BF78] text-white p-6 rounded-lg shadow-lg text-center
                           transition duration-300 ease-in-out transform hover:bg-[#5FA461]"
              >
                <div className="text-4xl mb-4">
                  <FontAwesomeIcon icon={icon} />
                </div>
                <h3 className="text-lg font-medium mb-2">{title}</h3>
                <p className="text-sm">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurIndustries;
