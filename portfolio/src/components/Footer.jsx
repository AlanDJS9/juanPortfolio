import { socialLinks } from "../../public/profileData";
import { theme } from "../utils/theme";
import { RiArrowUpCircleFill } from "react-icons/ri";

const Footer = () => {
  // Scroll back to top smoothly
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={`${theme.secondary} ${theme.textPrimary} py-6 mt-10`}>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        
        {/* Copyright */}
        <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Juan Roa Portfolio. All rights reserved.</p>

        {/* Social Media Icons */}
        <div className="flex gap-4 mt-4 md:mt-0">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-2xl ${theme.iconColor}`}
            >
              <social.icon />
            </a>
          ))}
        </div>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-transform hover:scale-110"
        >
          <RiArrowUpCircleFill className="text-3xl" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
