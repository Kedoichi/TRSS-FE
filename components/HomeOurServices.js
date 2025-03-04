import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
  faUserTie,
  faUsers,
  faDesktop,
} from "@fortawesome/free-solid-svg-icons";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "600"],
  style: ["normal"],
  subsets: ["latin"],
});

const servicesData = [
  {
    icon: faComments,
    title: "Client Consultation",
    description: "We help businesses hire the best talent.",
  },
  {
    icon: faUserTie,
    title: "Talent Sourcing",
    description: "We deliver top candidates for your needs.",
  },
  {
    icon: faUsers,
    title: "Employee Onboarding",
    description: "We ensure a smooth start for new hires.",
  },
  {
    icon: faDesktop,
    title: "IT Support",
    description: "We provide solutions for your IT systems and support needs.",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15, // Stagger for smooth flow
      duration: 0.8, // Smooth entrance
      ease: "easeOut",
    },
  },
  exit: { opacity: 0, y: 50, transition: { duration: 0.6 } }, // Exit animation
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "anticipate",
    },
  },
  exit: { opacity: 0, y: 50, transition: { duration: 0.6 } }, // Scroll out animation
};

const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
  exit: { opacity: 0, y: -20, transition: { duration: 0.6 } },
};

const ServiceCard = ({ icon, title, description }) => {
  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: false, amount: 0.2 }}
      className="w-64 sm:w-full sm:max-w-[300px]"
    >
      <Card className="h-full bg-white border border-[#72BF78] hover:shadow-lg transition-shadow duration-300 rounded-xl">
        <CardContent className="p-6 flex flex-col items-center">
          <div className="text-5xl text-[#72BF78] mb-4">
            <FontAwesomeIcon icon={icon} />
          </div>
          <h3 className={`text-lg font-semibold text-[#1B1B1B] mb-2 ${poppins.className}`}>
            {title}
          </h3>
          <p className={`text-sm text-[#606C38] ${poppins.className}`}>
            {description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const HomeOurServices = () => {
  return (
    <motion.section
      className="py-20 px-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: false, amount: 0.3 }}
    >
      <motion.div
        variants={containerVariants}
        className="max-w-6xl mx-auto text-center"
      >
        <motion.h4
          variants={titleVariants}
          className={`text-[#72BF78] text-lg uppercase tracking-wider mb-2 ${poppins.className}`}
        >
          What We Offer
        </motion.h4>

        <motion.h2
          variants={titleVariants}
          className={`text-4xl md:text-5xl font-bold text-[#1B1B1B] max-w-3xl mx-auto mb-12 leading-tight ${poppins.className}`}
        >
          Providing Expert Recruitment Services to Connect Talent with Opportunity
        </motion.h2>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center mb-12"
        >
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-8 flex justify-center"
        >
          <Button
            onClick={() => (window.location.href = "/services")}
            variant="default"
            className={`font-semibold tracking-wide text-lg hover:scale-105 transition-transform duration-300 bg-[#72BF78] text-white hover:bg-[#5FA461] h-16 rounded-md px-8 ${poppins.className}`}
          >
            Explore Our Services
          </Button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default HomeOurServices;