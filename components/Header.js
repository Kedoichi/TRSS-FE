import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";
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
    primary: "#72BF78",
    secondary: "#A0D683",
    text: "#ffffff",
    hoverText: "#D3EE98",
    background: "#72BF78",
    border: "#A0D683",
    shadow: "rgba(160, 214, 131, 0.3)",
    icon: "#FEFF9F",
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
  /* Scales between 1.6rem and 2rem based on viewport width */
  font-size: clamp(1.6rem, 2vw, 2rem);
  color: ${({ theme }) => theme.colors.text};
`;

const HamburgerIcon = styled(motion.div)`
  display: none;
  cursor: pointer;
  font-size: 30px;
  color: ${({ theme }) => theme.colors.text};

  /* Show hamburger earlier (e.g. max-width: 992px) */
  @media (max-width: 992px) {
    display: block;
  }
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 30px;

  @media (max-width: 992px) {
    display: ${({ $menuOpen }) => ($menuOpen ? "flex" : "none")};
    position: fixed;
    top: 70px; /* header height */
    left: 0;
    right: 0;
    height: calc(100vh - 70px);
    overflow-y: auto;
    background: ${({ theme }) => theme.colors.background};
    flex-direction: column;
    gap: 20px; /* Slightly smaller gap on mobile */
    padding: 20px;
    box-shadow: 0 4px 6px ${({ theme }) => theme.colors.shadow};
    z-index: 9999;
  }
`;

const StyledLink = styled.a`
  /* clamp for flexible font sizes */
  font-size: clamp(1rem, 1.8vw, 1.25rem);
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  font-weight: bold;
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
  font-size: clamp(1rem, 1.8vw, 1.25rem);
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

        <NavLinks $menuOpen={menuOpen}>
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