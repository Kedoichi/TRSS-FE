import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const steps = [
  {
    title: "Client Engagement & Job Order",
    description:
      "Initial client request to discuss and finalize the job specifications and role requirements.",
  },
  {
    title: "Candidate Sourcing & Screening",
    description:
      "Receiving the job order to identify and submit the initial list of candidates.",
  },
  {
    title: "Interview Process",
    description:
      "Submitting the shortlist to schedule interviews and completing the interview rounds.",
  },
  {
    title: "Decision, Offer & Negotiation",
    description:
      "Extending an offer to the selected candidate after the final interview. Negotiations between client and candidate may occur.",
  },
  {
    title: "Placement & Onboarding",
    description:
      "Confirming the candidate’s start date after the offer is accepted and assisting with onboarding tasks.",
  },
];

const animationVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const ProcessSteps = () => {
  return (
    <section className="bg-[#f8fdef] py-20 px-6 md:px-16 lg:px-20 !mt-0">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24">
        {/* Left Column: Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <Image
            src="/Images/Image7.jpg"
            alt="Recruitment Process"
            width={400}
            height={300}
            className="rounded-xl shadow-lg object-cover"
          />
        </motion.div>

        {/* Right Column: Text and Steps */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-[#72bf78]"
          >
            Recruitment Process
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-[#666666] leading-relaxed"
          >
            Step-by-step guide to how we streamline the recruitment process for
            you.
          </motion.p>

          <div className="space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={animationVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                className="flex items-center gap-4"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#a0d683] text-white flex items-center justify-center shadow-md">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#333333]">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#666666]">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;