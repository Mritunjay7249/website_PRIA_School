import React, { useState, useEffect } from 'react';
import { navLinks } from '../constants';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const getLinkHref = (link: { name: string; href: string; subLinks?: any[] }) => {
    if (link.href.startsWith('#/')) {
      return link.href;
    }
    // If we are on an admission page, main links should go back to the home page's anchor
    if (window.location.hash.startsWith('#/admission')) {
      return `/${link.href}`;
    }
    return link.href;
  }

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith('#/')) {
        // Smooth scroll for on-page anchors
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    }
    setIsMenuOpen(false);
    setOpenDropdown(null);
  };
  
  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  }

  const renderLink = (link: { name: string; href: string; }, isSubLink = false) => {
    const href = getLinkHref(link);
    return (
        <a 
          key={link.name} 
          href={href} 
          onClick={(e) => isSubLink ? handleLinkClick(e, link.href) : handleLinkClick(e, href)}
          className={isSubLink 
            ? "block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 transition-colors duration-200"
            : "text-gray-800 hover:text-[#00adb5] transition-colors duration-300 font-medium text-[17px] tracking-wide"
          }
        >
          {link.name}
        </a>
    )
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" onClick={(e) => handleLinkClick(e, '#home')} className="text-2xl font-bold" style={{ fontFamily: "'Arima Madurai', cursive", color: '#000000' }}>
          priaschool
        </a>
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) =>
            link.subLinks ? (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => setOpenDropdown(link.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <a href={link.href} className="text-gray-800 hover:text-[#00adb5] transition-colors duration-300 font-medium text-[17px] tracking-wide flex items-center cursor-pointer">
                  {link.name}
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ml-1 transition-transform duration-200 ${openDropdown === link.name ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                </a>
                {openDropdown === link.name && (
                  <div className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-md py-2 w-max min-w-[220px]">
                    {link.subLinks.map((subLink) => renderLink(subLink, true))}
                  </div>
                )}
              </div>
            ) : (
              renderLink(link)
            )
          )}
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-800 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) =>
              link.subLinks ? (
                <div key={link.name}>
                  <button onClick={() => toggleDropdown(link.name)} className="w-full text-left flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-white hover:bg-[#00adb5] transition-colors duration-300">
                    <span>{link.name}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-transform duration-200 ${openDropdown === link.name ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                  </button>
                  {openDropdown === link.name && (
                    <div className="pl-4 mt-1 space-y-1">
                      {link.subLinks.map(subLink => (
                        <a key={subLink.name} href={subLink.href} onClick={(e) => handleLinkClick(e, subLink.href)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-[#00adb5] transition-colors duration-300">
                           {subLink.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a key={link.name} href={getLinkHref(link)} onClick={(e) => handleLinkClick(e, getLinkHref(link))} className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-white hover:bg-[#00adb5] transition-colors duration-300">
                  {link.name}
                </a>
              )
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
