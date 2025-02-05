import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "Who We Are" },
  { href: "/services", label: "What We Offer" },
  { href: "/job-openings", label: "Explore Opportunities" },
  { href: "/contact", label: "Get in Touch" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const NavLink = ({ href, label, isMobile = false }) => {
    const isActive = router.pathname === href;

    return (
      <Link href={href} passHref>
        <motion.a
          className={`
            text-lg font-medium
            ${
              isMobile
                ? "text-primary hover:text-primary/80"
                : "text-primary hover:text-primary/80"
            }
            bg-black bg-opacity-0 hover:bg-opacity-10 rounded-md px-4 py-4
            transition-colors duration-300
          `}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {label}
          {!isMobile && (
            <motion.div
              className="absolute bottom-0 left-0 w-full h-0.5 bg-base-100 "
              initial={false}
              animate={{
                scaleX: isActive ? 1 : 0,
                opacity: isActive ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
            />
          )}
        </motion.a>
      </Link>
    );
  };

  return (
    <header className="relative z-50 border-b-foreground border-1">
      <div className="mx-auto px-6 py-8 ">
        <div className="flex justify-around items-center ">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-base-content"
          >
            Talent Spree Solutions
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <NavLink key={link.href} {...link} />
            ))}
            <Link href="/cv" passHref>
              <motion.a
                className="flex items-center text-lg font-semibold transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-file-up"
                >
                  <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                  <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                  <path d="M12 12v6" />
                  <path d="m15 15-3-3-3 3" />
                </svg>

                <p className="pl-1">CV</p>
              </motion.a>
            </Link>
          </nav>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                className="text-primary-foreground hover:text-accent"
                size="icon"
              >
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FontAwesomeIcon
                    icon={isOpen ? faTimes : faBars}
                    className="text-2xl"
                  />
                </motion.div>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background">
              <nav className="flex flex-col space-y-6 mt-12">
                <AnimatePresence>
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <NavLink {...link} isMobile />
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: navLinks.length * 0.1 }}
                  >
                    <Link href="/cv" passHref>
                      <motion.a
                        className="flex items-center gap-2 text-lg font-semibold text-primary hover:text-primary/80 transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="lucide lucide-file-up"
                        >
                          <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                          <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                          <path d="M12 12v6" />
                          <path d="m15 15-3-3-3 3" />
                        </svg>
                        <p className="pl-1">CV</p>
                      </motion.a>
                    </Link>
                  </motion.div>
                </AnimatePresence>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
