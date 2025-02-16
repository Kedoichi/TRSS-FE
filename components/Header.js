import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { FileUp } from "lucide-react";
import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

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
      <Link href={href} legacyBehavior>
        <a className="relative group">
          <motion.div
            className={`
              text-lg font-semibold px-4 py-2 rounded-md
              ${isMobile ? "text-primary" : "text-primary"}
              transition-all duration-200
              hover:bg-primary/5 relative
            `}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {label}
            <motion.div
              className="absolute bottom-0 left-0 h-0.5 bg-primary w-full origin-left"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: isActive ? 1 : 0 }}
              transition={{ duration: 0.2 }}
            />
          </motion.div>
        </a>
      </Link>
    );
  };

  return (
    <header className="w-full backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={`text-2xl md:text-3xl font-bold text-primary ${bebasNeue.className}`}
          >
            Talent Spree Solutions
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <NavLink key={link.href} {...link} />
            ))}

            <Link href="/contact" legacyBehavior>
              <a className="group">
                <motion.div
                  className="flex items-center gap-2 px-4 py-2 text-lg font-medium text-primary 
                    rounded-md hover:bg-primary/5 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FileUp className="w-5 h-5 transition-transform group-hover:translate-y-[-2px]" />
                  <span>CV</span>
                </motion.div>
              </a>
            </Link>
          </nav>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="text-primary hover:bg-primary/5"
              >
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
              className="w-[300px] bg-background/95 backdrop-blur-md"
            >
              <nav className="flex flex-col space-y-4 mt-12">
                <AnimatePresence mode="wait">
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
                    <Link href="/cv" legacyBehavior>
                      <a className="group">
                        <motion.div
                          className="flex items-center gap-2 px-4 py-2 text-lg font-medium text-primary 
                            rounded-md hover:bg-primary/5 transition-all duration-300"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <FileUp className="w-5 h-5 transition-transform group-hover:translate-y-[-2px]" />
                          <span>CV</span>
                        </motion.div>
                      </a>
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
