// FontAwesome Icons
import {
    faChartLine,
    faMagnifyingGlass,
    faClock,
    faGlobe,
    faEnvelope,
    faMapMarkerAlt,
    faPhoneAlt,
    faLinkedin,
    faFacebook,
    faComments,
    faUserTie,
    faUsers,
    faDesktop,
    faCog,
    faSearch,
    faLightbulb,
    faRocket,
    faPaintBrush,
} from "@fortawesome/free-solid-svg-icons";

// Profile Images
import ProfileImage1 from "@/public/Images/ProfileImage1.png";
import ProfileImage2 from "@/public/Images/ProfileImage2.png";

/* -------------------------------- Services -------------------------------- */

export const whatWeOfferData = [
    {
        icon: faComments,
        title: "Client Consultation",
        description: "We help businesses hire the best talent.",
    },
    {
        icon: faUserTie,
        title: "Talent Sourcing",
        description: "We deliver top candidates for your needs.",
    },
    {
        icon: faUsers,
        title: "Employee Onboarding",
        description: "We ensure a smooth start for new hires.",
    },
    {
        icon: faDesktop,
        title: "IT Support",
        description: "We provide solutions for your IT systems and support needs.",
    },
];

export const servicesData = {
    title: "Our Expertise in Connecting Talent and Opportunity",
    description:
        "At Talent Spree Solutions, we specialize in connecting businesses with top talent in the industry. We provide innovative solutions to help you find the best candidates quickly and efficiently.",
    list: [
        "Streamlined recruitment process to find the best talent.",
        "Tailored solutions to meet your specific hiring needs.",
        "Expert guidance for both employers and job seekers.",
    ],
    buttonText: "Discover More",
    buttonLink: "/job-openings",
    images: [
        "/Images/Image3.jpg",
        "/Images/Image4.jpg",
        "/Images/Image5.jpg",
        "/Images/Image2.jpg",
    ],
};

/* -------------------------------- Testimonials ---------------------------- */

export const testimonialsData = [
    {
        text: "Talent Spree Solutions helped us find the perfect candidates. Their attention to detail and understanding of our needs was remarkable.",
        author: "John Doe",
        company: "CEO, Example Corp",
        logo: "/Images/DemoSet/User/1.png",
        companyLogo: "/Images/DemoSet/Company/1.webp",
    },
    {
        text: "A fantastic experience from start to finish. The process was seamless, and we were matched with exceptional talent.",
        author: "Jane Smith",
        company: "HR Manager, Tech Innovators",
        logo: "/Images/DemoSet/User/2.png",
        companyLogo: "/Images/DemoSet/Company/2.webp",
    },
];

/* -------------------------------- FAQs ----------------------------------- */

export const faqData = [
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

/* ------------------------------- Contact Info ----------------------------- */

export const contactData = {
    title: "Contact with Our Team of Experts",
    subtitle: "Get in touch with our team to discuss your project.",
    contactInfo: [
        { icon: faPhoneAlt, text: "+61283245788", action: "copy" },
        { icon: faEnvelope, text: "admin@talentspreesolutions.com", action: "copy" },
        {
            icon: faMapMarkerAlt,
            text: "Cebu City, Philippines",
            action: "link",
            url: "https://www.google.com/maps?q=Cebu+City,Philippines",
        },
    ],
    jobOpening: {
        title: "Want to Join Our Talented Team?",
        text: "Visit Our Job Board",
        link: "/job-openings",
    },
};

export const contactContent = {
    contactInfo: [
    {
        icon: faMapMarkerAlt,
        label: "Location",
        text: "Cebu City, Philippines",
    },
    {
        icon: faPhoneAlt,
        label: "Phone",
        text: "+61283245788",
    },
    {
        icon: faEnvelope,
        label: "Email",
        text: "admin@talentspreesolutions.com",
    },
    ],
};

/* ------------------------------ Company Overview -------------------------- */

export const CompanyOverviewCards = [
    {
        icon: faChartLine,
        title: "Faster Hiring",
        description:
            "Our streamlined processes and proactive sourcing help you fill roles quickly—without sacrificing quality.",
    },
    {
        icon: faMagnifyingGlass,
        title: "Precision Matching",
        description:
            "We dig deeper than resumes. Our candidate vetting ensures strong alignment in skills, culture, and growth potential.",
    },
    {
        icon: faClock,
        title: "Save Time & Resources",
        description:
            "Let us handle the heavy lifting—sourcing, screening, shortlisting—so your team can stay focused on results.",
    },
    {
        icon: faGlobe,
        title: "Global Reach, Local Expertise",
        description:
            "From Australian SMEs to offshore ventures, we deliver talent solutions tailored to your business model.",
    },
];

/* ------------------------------- Core Values ------------------------------ */

export const coreValues = [
    {
        title: "We’re United",
        description:
            "We are united through trust as one inclusive, diverse team. This means we operate with a one-firm mindset, demonstrating teamwork, collaboration, integrity, and respect. We create a culture of belonging where everyone can bring their whole self and flourish.",
        backgroundWord: "United",
    },
    {
        title: "We’re Committed",
        description:
            "We are committed as one firm to our purpose. This means we help shape better decisions, create innovative solutions for evolving risks, and achieve results for each other, clients, shareholders, and society.",
        backgroundWord: "Committed",
    },
    {
        title: "People First, Always.",
        description:
            "We prioritize genuine relationships and long-term success for both clients and candidates, believing that putting people first leads to the best hires and the strongest teams.",
        backgroundWord: "People",
    },
];

/* ----------------------------- Team Members ------------------------------- */

export const teamMembers = [
    {
        id: "vuong-do",
        name: "Vuong Do",
        role: "Director of Connections/Founder",
        image: ProfileImage1,
    },
    {
        id: "vanessa",
        name: "Vanessa",
        role: "Head of Executive Recruitment",
        image: ProfileImage2,
    },
];

export const teamMembersDetails = [
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

/* --------------------------- Recruitment Process -------------------------- */

export const processSteps = [
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

/* ------------------------------ Industries ------------------------------- */

export const industries = [
    {
        icon: faChartLine,
        title: "Accounting",
        description:
            "Professional accounting services to manage financial records and tax filings.",
    },
    {
        icon: faCog,
        title: "Finance",
        description:
            "Strategic financial services including investment advice and financial planning.",
    },
    {
        icon: faSearch,
        title: "IT Services",
        description:
            "Expert IT solutions to support and optimize technology infrastructures.",
    },
    {
        icon: faLightbulb,
        title: "Consulting",
        description:
            "Providing business consultancy to improve strategy and operations.",
    },
    {
        icon: faRocket,
        title: "Marketing",
        description:
            "Creative marketing solutions for brand building and customer acquisition.",
    },
    {
        icon: faPaintBrush,
        title: "Design",
        description:
            "Graphic and UX/UI design services to enhance user experience and branding.",
    },
];

/* -------------------------------- Footer --------------------------------- */

export const footerData = {
    logo: "/Images/demoLogo.png",
    aboutUs:
        "Talent Spree Solutions connects businesses with top talent through innovative solutions and exceptional service.",
    quickLinks: [
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about-us" },
        { label: "Services", href: "/services" },
        { label: "Job Openings", href: "/job-openings" },
        { label: "Contact Us", href: "/contact" },
    ],
    socialLinks: [
    {
        platform: "LinkedIn",
        href: "https://www.linkedin.com",
        icon: faLinkedin,
    },
    {
        platform: "Facebook",
        href: "https://www.facebook.com",
        icon: faFacebook,
    },
    ],
    contact: {
        phone: "(+123) 456-7890",
        email: "admin@talentspreesolutions.com",
    },
};
