"use client";

import { useState } from "react";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarButton,
} from "../ui/ResizableNav";

const NavbarSection = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Experience",
      link: "#experience",
    },
    {
      name: "Projects",
      link: "#projects",
    },
    {
      name: "Skills",
      link: "#skills",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    target: string,
  ) => {
    e.preventDefault();

    const element = document.querySelector(target);

    if (!element) return;

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <Navbar className="fixed top-0 z-[9999]">
      {/* DESKTOP */}
      <NavBody>
        {/* Logo */}
        <a
          href="#home"
          className="relative z-20 flex items-center gap-2 px-2 py-1"
        >
          <span className="text-xl font-bold text-white">
            Dennis<span className="text-blue-400">.</span>
          </span>
        </a>

        {/* Navigation */}
        <NavItems items={navItems} onItemClick={handleNavClick} />

        {/* Button */}
        <NavbarButton
          href="#contact"
          variant="gradient"
          className="relative z-20 bg-gradient-to-r from-blue-500 to-violet-500"
        >
          Hire Me
        </NavbarButton>
      </NavBody>

      {/* MOBILE */}
      <MobileNav>
        <MobileNavHeader>
          <a
            href="#home"
            className="relative z-20 px-2 py-1 text-xl font-bold text-white"
          >
            Dennis<span className="text-blue-400">.</span>
          </a>

          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full rounded-lg px-4 py-3 text-neutral-200 transition hover:bg-white/10"
            >
              {item.name}
            </a>
          ))}

          <NavbarButton href="#contact" variant="gradient" className="w-full">
            Hire Me
          </NavbarButton>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
};

export default NavbarSection;
