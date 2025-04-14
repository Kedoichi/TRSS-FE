"use client";

import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";

const animations = {
  section: {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
    transition: { duration: 1 },
    viewport: { once: false, amount: 0.3 },
  },
  icon: {
    initial: { scale: 0.8 },
    whileInView: { scale: 1 },
    transition: { duration: 0.5 },
    viewport: { once: false, amount: 0.3 },
  },
  title: {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 1.5 },
    viewport: { once: false, amount: 0.3 },
  },
  description: {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 2 },
    viewport: { once: false, amount: 0.3 },
  },
};

const CompanyOverview = () => (
  <motion.section
    {...animations.section}
    className="flex flex-col items-center justify-center text-center py-10 px-6 my-10"
  >
    <motion.div {...animations.icon} className="text-5xl text-[#72BF78] mb-4">
      <FontAwesomeIcon icon={faUsers} />
    </motion.div>
    <motion.h2 {...animations.title} className="text-3xl md:text-4xl font-bold text-[#72BF78] mb-4">
      Why Talent Spree
    </motion.h2>
    <motion.p {...animations.description} className="max-w-2xl text-lg text-[#2F5233] leading-relaxed">
      Talent Spree Solutions is committed to connecting businesses with top talent by leveraging our deep industry expertise,
      innovative technology, and a network of outstanding professionals. We help clients build and optimize their workforce,
      creating lasting value and delivering exceptional results.
    </motion.p>
  </motion.section>
);

export default CompanyOverview;