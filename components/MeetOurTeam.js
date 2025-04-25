"use client";

import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { teamMembers } from "@/constants";

const poppins = Poppins({
  weight: ["400", "600"],
  style: ["normal"],
  subsets: ["latin"],
});

const TeamMemberCard = ({ name, role, id, image }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/team/${id}`);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      onClick={handleClick}
      className="w-64 md:w-72 overflow-hidden rounded-2xl shadow-md cursor-pointer"
    >
      <div className="relative w-full h-96">
        <Image
          src={image}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent rounded-2xl flex flex-col justify-end p-4 text-white">
          <h3 className="text-lg font-bold">{name}</h3>
          <p className="text-sm">{role}</p>
        </div>
      </div>
    </motion.div>
  );
};

const MeetOurTeam = () => {
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
          The People Behind the Talent
        </p>
        <h4
          className={`text-4xl font-extrabold text-[#1e1e1e] mb-6 ${poppins.className}`}
        >
          Meet The Team
        </h4>
        <p
          className={`text-lg text-[#4A4A4A] max-w-3xl mx-auto leading-relaxed ${poppins.className}`}
        >
          Our passionate team brings years of recruitment expertise and a people-first approach—ensuring we connect the right talent to the right opportunity.
        </p>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-10">
        {teamMembers.map((member) => (
          <TeamMemberCard key={member.id} {...member} />
        ))}
      </div>
    </section>
  );
};

export default MeetOurTeam;