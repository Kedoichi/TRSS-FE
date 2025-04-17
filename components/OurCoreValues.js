"use client";

import React from "react";
import { motion } from "framer-motion";

const animations = {
  row: {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
    viewport: { once: true, amount: 0.3 },
  },
  text: {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 1 },
    viewport: { once: true, amount: 0.3 },
  },
};

const OurCoreValues = () => {
  const values = [
    {
      title: "We’re United",
      description:
        "We are united through trust as one inclusive, diverse team. This means we operate with a one-firm mindset, demonstrating teamwork, collaboration, integrity, and respect. We create a culture of belonging where everyone can bring their whole self and flourish.",
      backgroundWord: "United",
    },
    {
      title: "We’re Committed",
      description:
        "We are committed as one firm to our purpose. This means we help shape better decisions, create innovative solutions for evolving risks, and achieve results for each other, clients, shareholders, and society.",
      backgroundWord: "Committed",
    },
    {
      title: "People First, Always.",
      description:
        "We prioritize genuine relationships and long-term success for both clients and candidates, believing that putting people first leads to the best hires and the strongest teams.",
      backgroundWord: "People",
    },
  ];  

  return (
    <section className="pb-16 pt-0 px-6 md:px-12 flex flex-col items-center bg-white overflow-hidden">
      {/* Heading */}
      <motion.h1
        className="text-3xl md:text-4xl font-bold text-[#72BF78] text-center mb-10 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Our Core Values
      </motion.h1>

      <div className="w-full">
        {values.map((value, index) => (
          <div key={index} className="relative mb-32 last:mb-0 overflow-visible">
            {/* Background Word - OUTSIDE of layout container */}
            <div className="absolute top-[-2rem] left-0 w-screen flex justify-center pointer-events-none z-0">
              <h1 className="text-[4rem] md:text-[10rem] font-bold text-gray-300 opacity-40 uppercase whitespace-nowrap">
                {value.backgroundWord}
              </h1>
            </div>


            <motion.div
              className="relative max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-12 z-10"
              {...animations.row}
            >
              {/* Title */}
              <div className="w-full md:w-1/3">
                <motion.h2
                  className="text-2xl md:text-3xl font-bold text-[#72BF78]"
                  {...animations.text}
                >
                  {value.title}
                </motion.h2>
              </div>

              {/* Description */}
              <div className="w-full md:w-2/3">
                <motion.p
                  className="text-lg text-[#1B1B1B] leading-relaxed"
                  {...animations.text}
                >
                  {value.description}
                </motion.p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurCoreValues;