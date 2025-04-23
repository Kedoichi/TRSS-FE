"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
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

const NavLink = ({ href, label }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} className="relative group">
      <motion.span
        className="text-lg font-semibold px-4 py-2 rounded-md transition-all duration-200 hover:bg-gray-200/20 block"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {label}
        <motion.span
          className="absolute bottom-0 left-0 h-0.5 w-full origin-left"
          style={{ backgroundColor: "#72BF78" }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isActive ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        />
      </motion.span>
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
    <motion.header
      animate={{
        y: visible ? 0 : -100,
        opacity: visible ? 1 : 0,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-sm bg-white shadow-md"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" aria-label="Home">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={logo}
                alt="Company Logo"
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
                className="flex items-center gap-2 px-4 py-2 text-lg font-medium rounded-md border-2 border-[#72BF78] transition-all duration-300"
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

          {/* Mobile Nav */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="xl:hidden">
              <Button variant="ghost" size="icon" className="hover:bg-gray-200/20">
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FontAwesomeIcon
                    icon={isOpen ? faTimes : faBars}
                    className="text-xl"
                  />
                </motion.div>
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[300px] bg-white/90 backdrop-blur-md shadow-lg"
            >
              <nav className="flex flex-col space-y-4 mt-12">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <NavLink {...link} />
                  </motion.div>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
