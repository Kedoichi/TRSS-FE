import React, { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
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
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [isMobile, setIsMobile] = useState(false);

  const checkIsMobile = useCallback(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  useEffect(() => {
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, [checkIsMobile]);

  return (
    <section className="text-center py-16">
      <div className="max-w-[80%] mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between space-x-0 md:space-x-8">
          <div className="flex flex-col justify-center text-left md:text-left text-center w-full md:w-1/3 mb-8 md:mb-0">
            <h3 className="text-[#72bf78] font-semibold mb-2">
              Our Industries
            </h3>
            <h2 className="text-4xl md:text-5xl text-[#333333] font-bold mb-4 leading-tight">
              We Serve a Range of Professional Careers
            </h2>
            <p className="text-lg text-[#333333] mb-10 max-w-2xl mx-auto">
              Our industry expertise spans across accounting, finance, IT, and
              more, offering innovative solutions for business growth.
            </p>
          </div>

          {!isMobile ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
              {industries.map(({ icon, title, description }, index) => (
                <div
                  key={index}
                  className="bg-white text-[#333333] p-8 rounded-xl shadow-lg text-center
                             transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
                >
                  <div className="text-5xl text-[#a0d683] mb-4">
                    <FontAwesomeIcon icon={icon} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{title}</h3>
                  <p className="text-base opacity-80">{description}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex space-x-4">
                {industries.map(({ icon, title, description }, index) => (
                  <div
                    key={index}
                    className="min-w-[80%] bg-white text-[#333333] p-8 rounded-xl shadow-lg text-center
                              transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
                  >
                    <div className="text-5xl text-[#a0d683] mb-4">
                      <FontAwesomeIcon icon={icon} />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{title}</h3>
                    <p className="text-base opacity-80">{description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default OurIndustries;