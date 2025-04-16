import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = 64;
      const sectionTop = section.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({ top: sectionTop, behavior: 'smooth' });
    }
    setIsOpen(false); // Close mobile menu after click
  };

  const handleScroll = (e, sectionId) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white h-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <a
              href="#home"
              onClick={(e) => handleScroll(e, 'home')}
              className="text-[#ff00ff] text-2xl font-bold"
            >
              Patfolio
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              onClick={(e) => handleScroll(e, 'home')}
              className="text-gray-800 hover:text-[#ff00ff] px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={(e) => handleScroll(e, 'about')}
              className="text-gray-800 hover:text-[#ff00ff] px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </a>
            <a
              href="#projects"
              onClick={(e) => handleScroll(e, 'projects')}
              className="text-gray-800 hover:text-[#ff00ff] px-3 py-2 rounded-md text-base font-medium"
            >
              Projects
            </a>
            <a
              href="#education"
              onClick={(e) => handleScroll(e, 'education')}
              className="text-gray-800 hover:text-[#ff00ff] px-3 py-2 rounded-md text-base font-medium"
            >
              Education
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, 'contact')}
              className="text-gray-800 hover:text-[#ff00ff] px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-[#ff00ff] p-2"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#home"
              onClick={(e) => handleScroll(e, 'home')}
              className="text-gray-800 hover:text-[#ff00ff] block px-3 py-2 rounded-md text-lg font-medium"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={(e) => handleScroll(e, 'about')}
              className="text-gray-800 hover:text-[#ff00ff] block px-3 py-2 rounded-md text-lg font-medium"
            >
              About
            </a>
            <a
              href="#projects"
              onClick={(e) => handleScroll(e, 'projects')}
              className="text-gray-800 hover:text-[#ff00ff] block px-3 py-2 rounded-md text-lg font-medium"
            >
              Projects
            </a>
            <a
              href="#education"
              onClick={(e) => handleScroll(e, 'education')}
              className="text-gray-800 hover:text-[#ff00ff] block px-3 py-2 rounded-md text-lg font-medium"
            >
              Education
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, 'contact')}
              className="text-gray-800 hover:text-[#ff00ff] block px-3 py-2 rounded-md text-lg font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;