import { useEffect, useState } from "react";
import { navLinks } from "../constants/index1";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if window object is available before accessing its properties
      if (typeof window !== "undefined") {
        const isScrolled = window.scrollY > 10;
        setScrolled(isScrolled);
      }
    };

    // Set initial state
    handleScroll();

    // Add event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <a className="logo" href="#hero">
          Youssef Amen Allah
        </a>
        <nav className="desktop">
          <ul>
            {navLinks.map((link, index) => (
              <li key={index} className="group">
                <a href={link.link}>
                  <span>{link.name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a className="contact-btn group" href="#contact">
          <div className="inner">
            <span>Contact Me</span>
          </div>
        </a>
      </div>
    </header>
  );
};

export default Navbar;
