import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons"; // CV icon
import { motion } from "framer-motion";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Champagne & Limousines';
    src: url('/path/to/champagne-limousines-font.woff2') format('woff2'),
         url('/path/to/champagne-limousines-font.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
`;

const theme = {
  colors: {
    primary: "#72BF78", // Main feature color (also used for background)
    secondary: "#A0D683", // Secondary feature color
    text: "#ffffff", // White text for contrast against main feature color
    hoverText: "#D3EE98", // Third feature color for hover effects
    background: "#72BF78", // Main feature color as background
    border: "#A0D683", // Secondary color for borders
    shadow: "rgba(160, 214, 131, 0.3)", // Subtle shadow
    icon: "#FEFF9F", // Fourth feature color for icons and buttons
  },
};

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  background: ${({ theme }) => theme.colors.background};
  border-bottom: 2px solid ${({ theme }) => theme.colors.border};
  position: relative;
  z-index: 1000;
`;

const Logo = styled.div`
  font-family: 'Champagne & Limousines', sans-serif;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.text};
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 30px;

  @media (max-width: 768px) {
    display: ${({ menuOpen }) => (menuOpen ? "flex" : "none")};
    flex-direction: column;
    gap: 15px;
    width: 100%;
    background: ${({ theme }) => theme.colors.background};
    padding: 20px;
    position: absolute;
    top: 70px;
    left: 0;
    box-shadow: 0 4px 6px ${({ theme }) => theme.colors.shadow};
    z-index: 999;
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  font-weight: bold;
  font-size: 20px;
  transition: all 0.3s ease;
  padding-bottom: 5px;
  border-bottom: 3px solid transparent;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.hoverText};
    border-bottom: 3px solid ${({ theme }) => theme.colors.hoverText};
  }

  &.active {
    color: ${({ theme }) => theme.colors.hoverText};
    border-bottom: 3px solid ${({ theme }) => theme.colors.hoverText};
  }
`;

const CVLink = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.text};
  font-weight: bold;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.hoverText};
  }

  svg {
    font-size: 24px;
    color: ${({ theme }) => theme.colors.icon};
  }
`;

const HamburgerIcon = styled(motion.div)`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
    font-size: 30px;
    color: ${({ theme }) => theme.colors.text};
  }
`;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "Who We Are" },
    { href: "/services", label: "What We Offer" },
    { href: "/job-openings", label: "Explore Opportunities" },
    { href: "/contact", label: "Get in Touch" },
  ];

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <HeaderContainer>
        <Logo>Talent Spree Solutions</Logo>
        <HamburgerIcon
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          initial={{ rotate: 0 }}
          animate={{ rotate: menuOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </HamburgerIcon>
        <NavLinks menuOpen={menuOpen}>
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} passHref>
              <StyledLink className={router.pathname === href ? "active" : ""}>
                {label}
              </StyledLink>
            </Link>
          ))}
          <Link href="/cv" passHref>
            <CVLink>
              <FontAwesomeIcon icon={faFileAlt} />
              CV
            </CVLink>
          </Link>
        </NavLinks>
      </HeaderContainer>
    </ThemeProvider>
  );
};

export default Header;
