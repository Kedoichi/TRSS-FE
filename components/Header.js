"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FileUp } from "lucide-react";
import Image from "next/image";
import logo from "@/public/Images/demoLogo1.png";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "Who We Are" },
  { href: "/services", label: "What We Offer" },
  { href: "/job-openings", label: "Explore Opportunities" },
  { href: "/contact", label: "Let's Talk" },
];

const NavLink = ({ href, label, onClick }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} onClick={onClick} className="relative group block">
      <span
        className={`text-lg font-semibold block px-4 py-2 ${
          isActive ? "text-[#72BF78]" : "text-gray-800"
        } group-hover:text-[#72BF78]`}
      >
        {label}
        <span
          className={`block h-0.5 bg-[#72BF78] transition-all duration-300 ${
            isActive ? "w-full" : "w-0 group-hover:w-full"
          }`}
        />
      </span>
    </Link>
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY <= 0 || currentY < lastScrollY.current) {
        setVisible(true);
      } else {
        setVisible(false);
      }
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-0 left-0 w-full z-50 backdrop-blur-sm bg-white shadow-sm"
      >
        <div className="container mx-auto flex items-center justify-between px-4 md:px-8 py-3 md:py-4">
          {/* Logo */}
          <Link href="/" draggable={false} aria-label="Home">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-shrink-0"
            >
              <Image
                src={logo}
                alt="Company Logo"
                draggable={false}
                priority
                className="w-40 sm:w-52 md:w-64 h-auto"
              />
            </motion.div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-4">
            {navLinks.map((link) => (
              <NavLink key={link.href} {...link} />
            ))}
            <Link href="/contact" className="group">
              <motion.div
                className="flex items-center gap-2 px-4 py-2 text-base md:text-lg font-medium rounded-md border-2 border-[#72BF78] transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FileUp
                  className="w-5 h-5 transition-transform group-hover:translate-y-[-2px]"
                  style={{ color: "#72BF78" }}
                />
                <span style={{ color: "#72BF78" }}>CV</span>
              </motion.div>
            </Link>
          </nav>

          {/* Mobile Menu Icon */}
          <div className="xl:hidden">
            <button
              onClick={() => setIsOpen(true)}
              className="p-3 rounded-full hover:bg-gray-100 transition"
            >
              <FontAwesomeIcon icon={faBars} className="text-2xl text-gray-800" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[9998]"
            />

            {/* Slide-In Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 w-[80%] max-w-xs h-full bg-white z-[9999] shadow-xl p-6"
            >
              {/* Close Button */}
              <div className="flex justify-end">
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-3 rounded-full hover:bg-gray-100 transition"
                >
                  <FontAwesomeIcon icon={faTimes} className="text-xl text-gray-800" />
                </button>
              </div>

              {/* Navigation */}
              <nav className="flex flex-col space-y-6 mt-8">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.href}
                    {...link}
                    onClick={() => setIsOpen(false)}
                  />
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;