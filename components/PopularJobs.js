import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

const PopularJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("/api/jobs");
        if (!response.ok) {
          throw new Error("Failed to fetch jobs");
        }
        const data = await response.json();
        setJobs(data?.data?.jobs || []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading)
    return <section className="py-16 text-center">Loading jobs...</section>;

  if (error)
    return (
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold text-[#72BF78]">Error</h2>
        <p className="text-lg text-gray-600">{error}</p>
      </section>
    );

  return (
    <section className="py-16 px-6 md:px-16 lg:px-20 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-[#72BF78] mb-4">
        Explore Popular Jobs
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
        Discover top opportunities tailored to your career aspirations.
      </p>

      {jobs.length === 0 ? (
        <p className="text-lg text-gray-600">No jobs available at the moment.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map(({ _id, company, type, title, location, createdAt }) => (
            <div
              key={_id}
              className="bg-white shadow-md rounded-lg p-6 text-left transform transition duration-300 hover:scale-105"
            >
              {/* Company and Job Type */}
              <div className="flex justify-between items-center mb-4">
                <p className="text-gray-800 font-medium">{company}</p>
                <span className="px-3 py-1 bg-[#FEFF9F] text-[#72BF78] border border-[#72BF78] rounded-md text-sm">
                  {type}
                </span>
              </div>

              {/* Job Title */}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {title}
              </h3>

              {/* Job Details */}
              <div className="flex items-center space-x-4 text-gray-500 text-sm mb-4">
                <p className="flex items-center space-x-2">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-[#72BF78]" />
                  <span>{location}</span>
                </p>
                <p className="flex items-center space-x-2">
                  <FontAwesomeIcon icon={faCalendarAlt} className="text-[#72BF78]" />
                  <span>{new Date(createdAt).toLocaleDateString()}</span>
                </p>
              </div>

              {/* Apply Button */}
              <button className="w-full bg-[#72BF78] text-white py-2 px-4 rounded-lg font-semibold transition duration-300 hover:bg-[#5FA461]">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default PopularJobs;