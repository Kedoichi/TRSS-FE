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
import { Bebas_Neue, Poppins } from "next/font/google";

// Import Bebas Neue for Headers
const bebasNeue = Bebas_Neue({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

// Import Poppins for Descriptions and Buttons
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

// Container Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Item Animation Variants
const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const ServiceCard = ({ icon, title, description }) => {
  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="w-64 sm:w-full sm:max-w-[300px]"
    >
      <Card className="h-full bg-white border border-[#72BF78] hover:shadow-lg transition-shadow duration-300 rounded-lg">
        <CardContent className="p-6 flex flex-col items-center">
          <div className="text-5xl text-[#72BF78] mb-6">
            <FontAwesomeIcon icon={icon} />
          </div>
          <h3 className={`text-2xl font-semibold text-[#1B1B1B] mb-3 ${poppins.className}`}>
            {title}
          </h3>
          <p className={`text-base text-[#606C38] ${poppins.className}`}>
            {description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const HomeOurServices = () => {
  return (
    <section className="py-20 px-6 bg-[#F0F7ED]">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-6xl mx-auto text-center"
      >
        <motion.h4
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className={`text-[#72BF78] text-4xl md:text-5xl mb-3 uppercase tracking-wider ${bebasNeue.className}`}
        >
          What We Offer
        </motion.h4>

        <motion.h2
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className={`text-3xl md:text-4xl text-[#1B1B1B] max-w-2xl mx-auto mb-12 leading-tight ${poppins.className}`}
        >
          Providing Expert Recruitment Services to Connect Talent with
          Opportunity
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center mb-12"
        >
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
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
    </section>
  );
};

export default HomeOurServices;
