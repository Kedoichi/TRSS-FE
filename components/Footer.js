import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { Separator } from "@/components/ui/separator";

const footerData = {
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
  openingHours: {
    "Monday - Friday": "9:00 AM - 6:00 PM",
    Saturday: "Closed",
    Sunday: "Closed",
  },
};

const Footer = () => {
  const { logo, aboutUs, quickLinks, socialLinks, contact, openingHours } =
    footerData;

  return (
    <footer className="relative bg-[#E1E6D9] text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#F8FDEF]/70 to-[#E1E6D9]" />

      <div className="relative container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Logo & Copyright */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col items-start space-y-4">
              <div className="w-40 rounded-md">
                <img src={logo} alt="Talent Spree Solutions" />
              </div>
              <p className="text-primary text-md font-medium">{aboutUs}</p>
              <p className="text-sm text-primary">
                &copy; {new Date().getFullYear()} Talent Spree Solutions. All
                rights reserved.
              </p>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-[#585A55] uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="relative text-[#0D110E] hover:text-[#FEFF9F] transition-colors duration-200 group"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FEFF9F] transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Opening Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-[#585A55] uppercase">
              Opening Hours
            </h4>
            <div className="space-y-2">
              {Object.entries(openingHours).map(([day, hours], index) => (
                <p key={index} className="text-md text-primary">
                  <span className="font-medium">{day}:</span>
                  <br />
                  <span>{hours}</span>
                </p>
              ))}
            </div>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-[#585A55] uppercase">
              Contact & Social
            </h4>

            <div className="space-y-4 text-md text-primary">
              {/* Contact Info */}
              <div className="space-y-2">
                <a
                  href={`tel:${contact.phone}`}
                  className="flex items-center gap-2 text-[#0D110E] hover:text-[#FEFF9F] transition-colors duration-200 group"
                >
                  <FontAwesomeIcon
                    icon={faPhoneAlt}
                    className="w-4 h-4 text-[#72BF78] group-hover:text-[#FEFF9F] transition-colors duration-200"
                  />
                  <span className="text-md">{contact.phone}</span>
                </a>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-2 text-[#0D110E] hover:text-[#FEFF9F] transition-colors duration-200 group"
                >
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="w-4 h-4 text-[#72BF78] group-hover:text-[#FEFF9F] transition-colors duration-200"
                  />
                  <span className="text-md">{contact.email}</span>
                </a>
              </div>

              <Separator className="bg-primary-foreground" />

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors duration-200 text-[#72BF78] hover:text-[#FEFF9F]"
                  >
                    <FontAwesomeIcon icon={social.icon} className="w-8 h-8" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;