"use client";

import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faFacebook } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

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
};

const Footer = () => {
  const { logo, aboutUs, quickLinks, socialLinks, contact } = footerData;

  return (
    <footer className="relative bg-[#E1E6D9] text-primary-foreground overflow-hidden border-t border-[#BFBFBF]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#F8FDEF]/70 to-[#E1E6D9]" />
      <div className="relative container mx-auto px-4 py-16">
        <div className="flex flex-wrap justify-between items-start gap-y-12">
          {/* Logo & About */}
          <motion.div
            className="w-full lg:w-[40%]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col items-start space-y-4">
              <div className="w-40 rounded-md">
                <Image
                  src={logo}
                  alt="Talent Spree Solutions"
                  width={160}
                  height={80}
                  priority
                  className="rounded-md w-full h-auto"
                />
              </div>
              <p className="text-primary text-md font-medium">{aboutUs}</p>
              <p className="text-sm text-primary">
                &copy; {new Date().getFullYear()} Talent Spree Solutions. All rights reserved.
              </p>
            </div>
          </motion.div>

          {/* Footer Columns */}
          <div className="w-full lg:w-[55%] flex flex-wrap justify-end gap-8">
            {/* Quick Links */}
            <motion.div
              className="w-full sm:w-[45%] lg:w-[30%]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="text-lg font-semibold text-[#585A55] uppercase relative pb-2">
                Quick Links
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#72BF78]" />
              </h4>
              <ul className="space-y-2 mt-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="relative text-[#0D110E] hover:text-[#72BF78] transition-colors duration-200 group"
                    >
                      {link.label}
                      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#72BF78] transition-all duration-300 group-hover:w-full" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact & Social */}
            <motion.div
              className="w-full sm:w-[45%] lg:w-[40%]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold text-[#585A55] uppercase relative pb-2">
                Contact & Social
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#72BF78]" />
              </h4>
              <div className="space-y-4 text-md text-primary mt-3">
                <div className="space-y-2">
                  <a
                    href={`tel:${contact.phone}`}
                    className="flex items-center gap-2 text-[#0D110E] hover:text-[#72BF78] transition-colors duration-200 group"
                  >
                    <FontAwesomeIcon
                      icon={faPhoneAlt}
                      className="w-4 h-4 text-[#72BF78] group-hover:text-[#5CA965]"
                    />
                    <span>{contact.phone}</span>
                  </a>
                  <a
                    href={`mailto:${contact.email}`}
                    className="flex items-center gap-2 text-[#0D110E] hover:text-[#72BF78] transition-colors duration-200 group"
                  >
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="w-4 h-4 text-[#72BF78] group-hover:text-[#5CA965]"
                    />
                    <span className="break-all">{contact.email}</span>
                  </a>
                </div>

                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors duration-200 text-[#72BF78] hover:text-[#5CA965]"
                    >
                      <FontAwesomeIcon icon={social.icon} className="w-8 h-8" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;