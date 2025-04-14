"use client";

import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  exit: { opacity: 0, y: 50, transition: { duration: 0.6 } },
};

const TeamMemberCard = ({ name, role, id }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/team/${id}`);
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      initial="hidden"
      whileInView="visible"
      exit="exit"
      variants={fadeInVariants}
      viewport={{ once: false, amount: 0.3 }}
      className="relative w-64 md:w-72 overflow-hidden shadow-lg rounded-lg cursor-pointer transition-all duration-300"
      onClick={handleClick}
    >
      <div className="w-full h-64 bg-red-500 flex items-center justify-center text-white text-3xl font-bold">
        {name.split(" ")[0]}
      </div>
      <div className="absolute inset-0 bg-black/70 text-white p-4 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-sm">{role}</p>
        <button className="mt-3 px-4 py-2 bg-[#72BF78] text-white rounded-lg hover:bg-[#5ba563] transition-all">
          Read More
        </button>
      </div>
    </motion.div>
  );
};

const MeetOurTeam = () => {
  const teamMembers = [
    {
      id: "vuong-do",
      name: "Vuong Do",
      role: "Director of Connections/Founder",
    },
    {
      id: "vanessa",
      name: "Vanessa",
      role: "Head of Executive Recruitment",
    },
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      exit="exit"
      variants={fadeInVariants}
      viewport={{ once: false, amount: 0.3 }}
      className="text-center m-0 px-4 py-8"
      >
      <motion.h4
        initial="hidden"
        whileInView="visible"
        exit="exit"
        variants={fadeInVariants}
        className="text-4xl font-bold text-[#72BF78] mb-8"
      >
        Meet The Team
      </motion.h4>

      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        variants={fadeInVariants}
        className="flex flex-wrap justify-center gap-6"
      >
        {teamMembers.map((member) => (
          <TeamMemberCard key={member.id} {...member} />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default MeetOurTeam;