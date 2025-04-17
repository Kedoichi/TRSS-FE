"use client";

import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faClock,
  faGlobe,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "600"],
  style: ["normal"],
  subsets: ["latin"],
});

const cards = [
  {
    icon: faChartLine,
    title: "Faster Hiring",
    description:
      "Our streamlined processes and proactive sourcing help you fill roles quickly—without sacrificing quality.",
  },
  {
    icon: faMagnifyingGlass,
    title: "Precision Matching",
    description:
      "We dig deeper than resumes. Our candidate vetting ensures strong alignment in skills, culture, and growth potential.",
  },
  {
    icon: faClock,
    title: "Save Time & Resources",
    description:
      "Let us handle the heavy lifting—sourcing, screening, shortlisting—so your team can stay focused on results.",
  },
  {
    icon: faGlobe,
    title: "Global Reach, Local Expertise",
    description:
      "From Australian SMEs to offshore ventures, we deliver talent solutions tailored to your business model.",
  },
];

const CompanyOverview = () => {
  return (
    <section className="text-center px-4 py-20 bg-[#f9f9fb]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-4xl mx-auto mb-12"
      >
        <p
          className={`text-sm uppercase tracking-wide text-[#72BF78] font-semibold mb-2 ${poppins.className}`}
        >
          Your Recruitment Advantage
        </p>
        <h2
          className={`text-4xl font-extrabold text-[#1e1e1e] mb-6 ${poppins.className}`}
        >
          Why Choose Talent Spree Solutions
        </h2>
        <p
          className={`text-lg text-[#4A4A4A] max-w-3xl mx-auto leading-relaxed ${poppins.className}`}
        >
          We go beyond traditional recruitment. Our goal is to make hiring not
          just easier—but smarter. Whether you're scaling fast or hiring for
          impact, we give you a clear advantage.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="bg-white border border-[#D8E9DA] rounded-xl p-6 flex flex-col items-center text-center shadow-md hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="text-[#72BF78] text-4xl mb-4">
              <FontAwesomeIcon icon={card.icon} />
            </div>
            <h3
              className={`text-xl font-semibold text-[#2F5233] mb-2 ${poppins.className}`}
            >
              {card.title}
            </h3>
            <p
              className={`text-sm text-[#4A4A4A] leading-relaxed ${poppins.className}`}
            >
              {card.description}
            </p>
          </motion.div>
        ))}
      </div>

      <Link href="/contact">
        <motion.button
          className="px-6 py-3 bg-[#72BF78] text-white font-semibold rounded-lg shadow hover:bg-[#5ba563] transition-all"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          Get In Touch
        </motion.button>
      </Link>
    </section>
  );
};

export default CompanyOverview;