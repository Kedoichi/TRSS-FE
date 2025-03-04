import React, { useState, useCallback, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faChartLine,
  faSearch,
  faPaintBrush,
  faRocket,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "600"],
  style: ["normal"],
  subsets: ["latin"],
});

const industries = [
  { icon: faChartLine, title: "Accounting", description: "Professional accounting services to manage financial records and tax filings." },
  { icon: faCog, title: "Finance", description: "Strategic financial services including investment advice and financial planning." },
  { icon: faSearch, title: "IT Services", description: "Expert IT solutions to support and optimize technology infrastructures." },
  { icon: faLightbulb, title: "Consulting", description: "Providing business consultancy to improve strategy and operations." },
  { icon: faRocket, title: "Marketing", description: "Creative marketing solutions for brand building and customer acquisition." },
  { icon: faPaintBrush, title: "Design", description: "Graphic and UX/UI design services to enhance user experience and branding." },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const OurIndustries = () => {
  const autoplayOptions = { delay: 3000, stopOnInteraction: true };
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center", containScroll: "trimSnaps" },
    [Autoplay(autoplayOptions)]
  );

  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  return (
    <motion.section
      ref={ref}
      className={`text-center py-16 font-sans`}
      initial="hidden"
      animate={controls}
      variants={sectionVariants}
    >
      <div className="max-w-[90%] mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between space-x-0 md:space-x-8">
          <div className="flex flex-col justify-center text-left md:text-left text-center w-full md:w-1/3 mb-8 md:mb-0">
            <h4 className={`text-[#72BF78] text-lg uppercase tracking-wider mb-2 ${poppins.className}`}>
              Our Industries
            </h4>
            <h2 className={`text-4xl md:text-5xl text-[#333333] font-bold mb-4 leading-tight`}>
              We Serve a Range of Professional Careers
            </h2>
            <p className={`text-lg text-[#333333] mb-10 max-w-2xl mx-auto`}>
              Our industry expertise spans across accounting, finance, IT, and more, offering innovative solutions for business growth.
            </p>
          </div>

          {!isMobile ? (
            <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
              {industries.map(({ icon, title, description }, index) => (
                <motion.div
                  key={index}
                  className="bg-white text-[#333333] p-8 rounded-xl shadow-lg text-center transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
                  whileHover={{ scale: 1.05 }}
                  initial="hidden"
                  animate={controls}
                  variants={sectionVariants}
                >
                  <div className="text-5xl text-[#a0d683] mb-4">
                    <FontAwesomeIcon icon={icon} />
                  </div>
                  <h3 className={`text-xl font-semibold mb-2 ${poppins.className}`}>{title}</h3>
                  <p className={`text-base opacity-80 ${poppins.className}`}>{description}</p>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="flex flex-col items-center w-full">
              <div className="overflow-hidden w-full" ref={emblaRef}>
                <div className="flex w-full">
                  {industries.map(({ icon, title, description }, index) => (
                    <motion.div
                      key={index}
                      className="w-full flex-shrink-0 snap-center bg-white text-[#333333] p-8 rounded-xl text-center transition duration-300 ease-in-out transform hover:scale-105"
                      initial="hidden"
                      animate={controls}
                      variants={sectionVariants}
                    >
                      <div className="text-5xl text-[#a0d683] mb-4">
                        <FontAwesomeIcon icon={icon} />
                      </div>
                      <h3 className={`text-xl font-semibold mb-2 ${poppins.className}`}>{title}</h3>
                      <p className={`text-base opacity-80 ${poppins.className}`}>{description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default OurIndustries;