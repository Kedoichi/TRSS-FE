import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "What is your recruitment process?",
    answer:
      "Our recruitment process involves understanding your needs, sourcing candidates, conducting interviews, and facilitating job placements.",
  },
  {
    question: "How do you find candidates?",
    answer:
      "We use a variety of channels, including job boards, social media, and networking, to find the best candidates for your role.",
  },
  {
    question: "Do you help with candidate onboarding?",
    answer:
      "Yes, we assist with the entire onboarding process, including document management, scheduling, and ensuring the candidate is ready to start.",
  },
  {
    question: "What is the typical timeframe to fill a position?",
    answer:
      "Depending on the role and level of seniority, it usually takes 2 to 6 weeks to fill a position from start to finish.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const FAQ = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-background to-white">
      <div className="absolute inset-0 bg-grid-small-black/[0.2] bg-grid-small-white/[0.2]" />
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />

      <div className="relative container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h4 className="text-lg font-semibold text-primary mb-3">
            Frequently Asked Questions
          </h4>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground max-w-2xl mx-auto">
            All the information you need about our recruitment process.
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqData.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
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
    </section>
  );
};

export default FAQ;
