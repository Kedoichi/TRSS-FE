import React from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

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
  },
];

const TeamMemberDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const member = teamMembers.find((member) => member.id === id);

  if (!member) return <p className="text-center text-gray-600 mt-10">Loading...</p>;

  return (
    <>
      <Header />
      <section className="max-w-4xl mx-auto my-20 px-6">
        <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
          <div className="w-64 h-64 md:w-72 md:h-72 bg-[#72BF78] flex items-center justify-center text-white text-5xl font-bold rounded-lg">
            {member.name.split(" ")[0][0]}
          </div>
          <div className="text-center md:text-left flex-1">
            <h1 className="text-4xl font-bold text-gray-900">{member.name}</h1>
            <h2 className="text-2xl text-gray-600 mt-2">{member.role}</h2>
            <div className="flex gap-6 mt-4 justify-center md:justify-start">
              <a href={`mailto:${member.email}`} title="Email" className="text-[#72BF78] text-2xl transition hover:text-[#FEFF9F]">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
              <a href={`tel:${member.phone}`} title="Phone" className="text-[#72BF78] text-2xl transition hover:text-[#FEFF9F]">
                <FontAwesomeIcon icon={faPhoneAlt} />
              </a>
              <a href={member.linkedin} title="LinkedIn" target="_blank" rel="noopener noreferrer" className="text-[#72BF78] text-2xl transition hover:text-[#FEFF9F]">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 text-lg text-gray-800 leading-relaxed">
          {member.description.map((paragraph, index) => (
            <p key={index} className="mb-6">{paragraph}</p>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default TeamMemberDetails;