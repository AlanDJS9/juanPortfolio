import { useState, useEffect } from "react";
import { theme } from "../utils/theme";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "portfolio", "contact"];
      let currentSection = "";

      sections.forEach((section) => {
        const sectionElement = document.getElementById(section);
        if (sectionElement) {
          const rect = sectionElement.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${theme.secondary} ${theme.textPrimary} w-full shadow-md fixed top-0 left-0 right-0 z-50`}>
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <a href="/" className="text-xl font-bold">Juan Roa</a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {["about", "portfolio", "contact"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={`transition-colors duration-300 ${
                activeSection === section ? theme.primary : "hover:" + theme.textSecondary
              } px-3 py-2 rounded-md`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className={`${theme.secondary} py-2 flex flex-col items-center md:hidden`}>
          {["about", "portfolio", "contact"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={`py-2 transition-colors duration-300 ${
                activeSection === section ? theme.primary : "hover:" + theme.textSecondary
              }`}
              onClick={() => setIsOpen(false)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
