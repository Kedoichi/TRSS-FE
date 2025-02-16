import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const OurServices = () => {
  const router = useRouter();

  const servicesData = {
    title: "Our Expertise in Connecting Talent and Opportunity",
    description:
      "At Talent Spree Solutions, we specialize in connecting businesses with top talent in the industry. We provide innovative solutions to help you find the best candidates quickly and efficiently.",
    list: [
      "Streamlined recruitment process to find the best talent.",
      "Tailored solutions to meet your specific hiring needs.",
      "Expert guidance for both employers and job seekers.",
    ],
    buttonText: "Discover More",
    buttonLink: "/job-openings",
    images: [
      "/Images/Image3.jpg",
      "/Images/Image4.jpg",
      "/Images/Image5.jpg",
      "/Images/Image2.jpg",
    ],
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-20 px-6 md:px-16 lg:px-20"
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-10 lg:gap-20 items-center">
          {/* Images Grid */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, type: "spring", stiffness: 120 }}
            className="w-full md:w-1/2"
          >
            <div className="grid grid-cols-2 gap-4">
              {servicesData.images.map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-[4/3] overflow-hidden rounded-lg"
                >
                  <Image
                    src={image}
                    alt={`Team Image ${index + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, type: "spring", stiffness: 120 }}
            className="w-full md:w-1/2 space-y-6 text-center md:text-left"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B1B1B]">
              {servicesData.title}
            </h2>

            <p className="text-base md:text-lg text-[#606C38]">
              {servicesData.description}
            </p>

            <ul className="space-y-4">
              {servicesData.list.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.2,
                    type: "spring",
                    stiffness: 100,
                  }}
                  className="flex items-center gap-3 text-[#1B1B1B]"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#72BF78]/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-[#72BF78]" />
                  </div>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>

            <div className="flex md:justify-start justify-center">
              <Button
                onClick={() => router.push(servicesData.buttonLink)}
                className="px-6 py-3 text-lg font-semibold bg-[#72BF78] text-white hover:bg-[#5FA461] transition-transform duration-200 hover:scale-105"
                size="lg"
              >
                {servicesData.buttonText}
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default OurServices;
