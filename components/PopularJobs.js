"use client";

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faCalendar } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import { fetchJobs } from "@/utils/api/jobs";

const PopularJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    const loadJobs = async () => {
      try {
        const data = await fetchJobs();
        setJobs(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadJobs();
  }, []);

  const handleJobClick = (jobId) => {
    router.push(`/job-description/${jobId}`);
  };

  if (loading) {
    return (
      <section className="py-16 text-center">
        <p className="text-lg text-gray-600">Loading jobs...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold text-[#72BF78]">Error</h2>
        <p className="text-lg text-gray-600">{error}</p>
      </section>
    );
  }

  return (
    <section className="py-16 px-6 md:px-16 lg:px-20 text-center bg-[#F9FDF9]">
      <h2 className="text-3xl md:text-4xl font-bold text-[#72BF78] mb-4">
        Explore Popular Jobs
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
        Discover top opportunities tailored to your career aspirations.
      </p>

      {jobs.length === 0 ? (
        <p className="text-lg text-gray-600">
          No jobs available at the moment.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.map(({ id, company, type, title, location, createdAt }) => (
            <div
              key={id}
              className="bg-white shadow-lg rounded-xl p-6 text-left transition-all duration-300 hover:shadow-xl hover:scale-[1.02] cursor-pointer flex flex-col justify-between"
              onClick={() => handleJobClick(id)}
            >
              <div>
                <div className="flex justify-between items-center mb-3">
                  <p className="text-base font-medium text-gray-700">{company}</p>
                  <span className="px-3 py-1 bg-[#E6F0E6] text-[#2F5233] rounded-full text-xs font-semibold uppercase tracking-wide">
                    {type}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-4 line-clamp-2 hover:text-[#72BF78] transition-colors">
                  {title}
                </h3>

                <div className="flex flex-wrap items-center gap-4 text-gray-500 text-sm mb-4">
                  <p className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-[#72BF78]" />
                    <span>{location}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faCalendar} className="text-[#72BF78]" />
                    <span>{new Date(createdAt).toLocaleDateString()}</span>
                  </p>
                </div>
              </div>

              <button className="mt-auto w-full bg-[#72BF78] text-white py-2 px-4 rounded-md font-semibold transition-all duration-300 hover:bg-[#5FA461]">
                View Details
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default PopularJobs;
