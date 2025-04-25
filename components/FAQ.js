"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Poppins } from "next/font/google";
import { faqData } from "@/constants";

const poppins = Poppins({
  weight: ["400", "600"],
  style: ["normal"],
  subsets: ["latin"],
});

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
  exit: { opacity: 0, y: 50, transition: { duration: 0.6 } },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
  exit: { opacity: 0, transition: { duration: 0.5 } },
};

const FAQ = () => {
  return (
    <motion.section
      className="relative py-24 bg-gradient-to-b from-background to-white"
      variants={fadeInVariants}
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className="absolute inset-0 bg-grid-small-black/[0.2] bg-grid-small-white/[0.2]" />
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />

      <div className="relative container mx-auto px-4">
        {/* Title Animation */}
        <motion.div
          className="text-center mb-16"
          variants={fadeInVariants}
        >
          <motion.h4
            className={`text-[#72BF78] text-lg uppercase tracking-wider mb-2 ${poppins.className}`}
          >
            Frequently Asked Questions
          </motion.h4>

          <motion.h2
            className={`text-4xl md:text-5xl font-bold text-[#1B1B1B] max-w-3xl mx-auto mb-12 leading-tight ${poppins.className}`}
          >
            All the information you need about our recruitment process.
          </motion.h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: false, amount: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqData.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInVariants}
                className="overflow-hidden"
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="border border-border/50 bg-card/50 backdrop-blur-sm rounded-lg px-6 data-[state=open]:bg-muted/50"
                >
                  <AccordionTrigger className="hover:no-underline group">
                    <span className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                      {item.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.answer}
                    </motion.div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FAQ;