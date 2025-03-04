import React from "react";
import { motion } from "framer-motion";

const animations = {
  row: {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  },
  text: {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 1 },
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
  ];

  return (
    <section className="py-16 px-6 md:px-12 flex flex-col items-center bg-white overflow-hidden">
      {/* Heading */}
      <motion.h1
        className="text-3xl md:text-4xl font-bold text-[#72BF78] text-center mb-10 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Our Core Values
        {/* <span className="block w-16 h-1 bg-[#72BF78] mx-auto mt-2"></span> */}
      </motion.h1>

      <div className="flex flex-col gap-20 w-full max-w-4xl">
        {values.map((value, index) => (
          <motion.div
            key={index}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            {...animations.row}
            className="relative flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-12"
          >
            <h1 className="absolute -top-4 md:-top-10 text-[4rem] md:text-[10rem] font-bold text-[#E0E0E0] opacity-25 w-full max-w-[80vw] md:max-w-full text-center uppercase select-none pointer-events-none overflow-hidden">
              {value.backgroundWord}
            </h1>

            <div className="w-full md:w-1/3 z-10">
              <motion.h2
                className="text-2xl md:text-3xl font-bold text-[#72BF78]"
                {...animations.text}
              >
                {value.title}
              </motion.h2>
            </div>

            <div className="w-full md:w-2/3 z-10">
              <motion.p
                className="text-lg text-[#1B1B1B] leading-relaxed"
                {...animations.text}
              >
                {value.description}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OurCoreValues;