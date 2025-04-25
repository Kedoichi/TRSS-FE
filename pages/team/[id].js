"use client";

import React from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import { teamMembersDetails } from "@/constants";

const TeamMemberDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  if (!router.isReady) {
    return <p className="text-center text-gray-600 mt-10">Loading...</p>;
  }

  const member = teamMembersDetails.find((member) => member.id === id);

  if (!member) {
    return <p className="text-center text-gray-600 mt-10">Team member not found.</p>;
  }

  return (
    <section className="max-w-4xl mx-auto my-20 px-6">
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