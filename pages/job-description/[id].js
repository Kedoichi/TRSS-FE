"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faCalendar,
  faArrowLeft,
  faBriefcase,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { fetchJobById } from "@/utils/api/jobs";

const JobDescriptionPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const getJob = async () => {
      try {
        const data = await fetchJobById(id);
        setJob(data);
      } catch {
        setJob(null);
      } finally {
        setLoading(false);
      }
    };

    getJob();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Loading job details...</p>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="text-center space-y-4">
          <FontAwesomeIcon icon={faBriefcase} className="text-red-500 text-4xl" />
          <h1 className="text-xl font-bold">Job Not Found</h1>
          <p className="text-gray-500">This job might be unavailable or removed.</p>
          <button
            onClick={() => router.push("/job-openings")}
            className="text-[#72BF78] hover:text-[#5FA461] transition"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
            Back to Listings
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative text-white pt-32 pb-24 px-6 sm:px-10 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(47, 82, 51, 0.9), rgba(47, 82, 51, 0.9)), url('/Images/Image9.png')",
        }}
      >
        {/* Back Button */}
        <div className="absolute top-6 left-6">
          <button
            onClick={() => router.push("/job-openings")}
            className="text-white/90 hover:text-white text-sm flex items-center gap-2"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="text-xs" />
            Back to Listings
          </button>
        </div>

        {/* Title & Company */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-white text-[#2F5233] font-semibold text-sm px-5 py-1 rounded-full mb-4">
            {job.company}
          </div>
          <h1 className="text-4xl font-bold mb-6 leading-snug">{job.title}</h1>

          {/* Job Metadata */}
          <div className="flex flex-wrap justify-center gap-4 text-white/90 text-sm">
            {[{
              icon: faMapMarkerAlt,
              value: job.location,
            }, {
              icon: faClock,
              value: job.type,
            }, {
              icon: faCalendar,
              value: new Date(job.createdAt).toLocaleDateString(),
            }].map(({ icon, value }, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-white text-[#2F5233] px-4 py-2 rounded-full shadow-sm"
              >
                <FontAwesomeIcon icon={icon} className="text-sm" />
                <span className="text-sm font-medium">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Content */}
      <main className="flex-grow w-full px-4 sm:px-8 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Job Description */}
          <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[#2F5233] mb-4">Job Description</h2>
            <div className="text-gray-700 space-y-4 leading-relaxed">
              {job.description.split("\n").map((p, i) => (
                p.trim() && <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          {/* Apply CTA */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <button
              onClick={() => router.push("/contact")}
              className="inline-flex items-center justify-center gap-2 bg-[#2F5233] hover:bg-[#24432A] text-white font-semibold py-3 px-8 rounded-full shadow transition"
            >
              Apply Now <span className="ml-2">→</span>
            </button>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default JobDescriptionPage;
