"use client";

import React from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import ProfileImage1 from "@/public/Images/ProfileImage1.png";
import ProfileImage2 from "@/public/Images/ProfileImage2.png";

const teamMembers = [
  {
    id: "vuong-do",
    name: "Vuong Do",
    role: "Director of Connections/Founder",
    description: [
      `Vuong graduated with a Bachelor of Accounting and Finance from Monash University. 
      As the founder of OneLedger, a business offering accounting, finance, and insurance services, 
      Vuong has extensive experience in starting and growing multiple successful businesses, 
      both in Australia and offshore.`,
      `His entrepreneurial journey has given him valuable insights into the challenges of offshoring, 
      leading him to identify a gap in the recruitment market—especially when it comes to ensuring a seamless 
      recruitment process in Australia for offshore ventures.`,
      `Outside of work, Vuong is a passionate sports fan who loves all teams red and black - 
      Chicago Bulls, Essendon Bombers, Man United, and Ferrari. 
      He is also a proud husband and father of two boys and hopes to one day travel to Mars.`,
    ],
    email: "vuong.do@oneledger.com.au",
    phone: "+123456789",
    linkedin: "https://www.linkedin.com/in/vuong-do-b3b8b576/",
    image: ProfileImage1,
  },
  {
    id: "vanessa",
    name: "Vanessa",
    role: "Head of Executive Recruitment",
    description: [
      `Vanessa kicked off her career in the banking industry after college but soon discovered her passion 
      for recruitment when she joined a startup outsourcing company in Cebu.`,
      `With over seven years of experience in end-to-end hiring, she has worked closely with clients in Australia 
      and the US to provide tailored recruitment solutions. She has a knack for finding top talent in Recruitment, 
      Executive Assistance, and Finance roles—always believing that the best candidates aren’t “perfect,” but 
      the ones whose values align with the business.`,
      `Outside of work, Vanessa keeps active with running—she’s conquered a full marathon and plans to make it a yearly goal! 
      She also enjoys functional workouts and loves traveling with family. Game nights are her thing, and she’s always the 
      enthusiastic game master at family parties. When she’s not on the move, she’s hanging out with her adorable three-year-old pup, Rafa.`,
    ],
    email: "admin@talentspreesolutions.com",
    phone: "+123456789",
    linkedin: "https://www.linkedin.com/in/jennylloyd",
    image: ProfileImage2,
  },
];

const TeamMemberDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  if (!router.isReady) {
    return <p className="text-center text-gray-600 mt-10">Loading...</p>;
  }

  const member = teamMembers.find((member) => member.id === id);

  if (!member) {
    return <p className="text-center text-gray-600 mt-10">Team member not found.</p>;
  }

  return (
    <section className="max-w-4xl mx-auto my-20 px-6 md:mt-52 mt-36">
      {/* Go Back Button */}
      <div className="mb-8">
        <button
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 text-[#72BF78] hover:text-[#5ba563] text-sm font-medium transition-all duration-300"
        >
          <span className="text-lg">←</span> Go Back
        </button>
      </div>

      {/* Profile Info */}
      <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
        <div className="w-64 h-64 md:w-72 md:h-72 relative rounded-lg overflow-hidden shadow-lg">
          <Image
            src={member.image}
            alt={member.name}
            layout="fill"
            objectFit="cover"
            objectPosition="top"
          />
        </div>

        <div className="text-center md:text-left flex-1">
          <h1 className="text-4xl font-bold text-gray-900">{member.name}</h1>
          <h2 className="text-2xl text-gray-600 mt-2">{member.role}</h2>
          <div className="flex gap-6 mt-4 justify-center md:justify-start">
            <a
              href={`mailto:${member.email}`}
              className="text-[#72BF78] text-2xl transition hover:text-[#FEFF9F]"
              title="Email"
              aria-label="Email"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a
              href={`tel:${member.phone}`}
              className="text-[#72BF78] text-2xl transition hover:text-[#FEFF9F]"
              title="Phone"
              aria-label="Phone"
            >
              <FontAwesomeIcon icon={faPhoneAlt} />
            </a>
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#72BF78] text-2xl transition hover:text-[#FEFF9F]"
              title="LinkedIn"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mt-12 text-lg text-gray-800 leading-relaxed space-y-6">
        {member.description.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
};

export default TeamMemberDetails;