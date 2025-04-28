"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { processSteps } from "@/constants";

const stepVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: index * 0.3, ease: "easeOut" },
  }),
};

const ProcessSteps = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-[#E6F0E6] py-20 px-6 md:px-16 lg:px-20 !mt-0"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24">
        {/* Left Column: Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <Image
            src="/Images/Image7.jpg"
            alt="Recruitment Process"
            width={400}
            height={300}
            draggable={false}
            className="rounded-xl shadow-lg object-cover"
            loading="eager"
            placeholder="blur"
            blurDataURL="/Images/placeholder.jpg"
          />
        </motion.div>

        {/* Right Column: Text and Steps */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-[#72bf78]"
          >
            Recruitment Process
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-[#666666] leading-relaxed"
          >
            Step-by-step guide to how we streamline the recruitment process for you.
          </motion.p>

          <div className="space-y-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={stepVariants}
                className="flex items-center gap-4"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#a0d683] text-white flex items-center justify-center shadow-md">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#333333]">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#666666]">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ProcessSteps;