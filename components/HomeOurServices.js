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
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const ServiceCard = ({ icon, title, description }) => {
  return (
    <motion.div
      variants={itemVariants}
      whileTap={{ scale: 0.95 }}
      className="w-64 sm:w-full sm:max-w-[300px]"
    >
      <Card className="h-full bg-white border border-[#72BF78] hover:shadow-lg transition-shadow duration-300 rounded-lg">
        <CardContent className="p-6 flex flex-col items-center">
          <div className="text-5xl text-[#72BF78] mb-6">
            <FontAwesomeIcon icon={icon} />
          </div>
          <h3 className="text-2xl font-semibold text-[#1B1B1B] mb-3">
            {title}
          </h3>
          <p className="text-base text-[#606C38]">{description}</p>
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
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-6xl mx-auto text-center"
      >
        <motion.h4
          variants={itemVariants}
          className="text-[#72BF78] text-lg font-semibold mb-3"
        >
          What We Offer
        </motion.h4>

        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl text-[#1B1B1B] max-w-2xl mx-auto mb-12"
        >
          Providing Expert Recruitment Services to Connect Talent with
          Opportunity
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center mb-12">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <motion.div variants={itemVariants} className="mt-8">
          <Button
            onClick={() => (window.location.href = "/services")}
            variant="default"
            className="font-semibold tracking-wide text-lg hover:scale-105 transition-transform duration-300 bg-[#72BF78] text-white hover:bg-[#5FA461] h-16 rounded-md px-8"
          >
            Explore Our Services
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HomeOurServices;