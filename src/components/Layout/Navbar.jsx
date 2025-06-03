import { Menu, Search, User, Heart, ShoppingBag, X, Plus, Minus } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("MEN");
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const searchRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    // Close mobile menu when search is opened
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
    };

    if (isSearchOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSearchOpen]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    {
      name: "LADIES",
      href: "#ladies",
      subcategories: ["Dresses", "Tops", "Jeans", "Shoes", "Bags", "Accessories"]
    },
    {
      name: "MEN",
      href: "#men",
      subcategories: ["T-Shirts", "Shirts", "Jeans", "Shoes", "Jackets", "Accessories"]
    },
    {
      name: "KIDS",
      href: "#kids",
      subcategories: ["Boys", "Girls", "Baby", "Shoes", "School Wear", "Toys"]
    },
    {
      name: "HOME",
      href: "#home",
      subcategories: ["Furniture", "Decor", "Kitchen", "Bedroom", "Lighting", "Storage"]
    }
  ];

  return (
    <>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      <nav className="relative bg-white shadow-sm" ref={mobileMenuRef}>
        {/* Main Navigation */}
        <div className="flex items-center justify-between px-4 sm:px-8 py-4">
          {/* Left Section */}
          <div className="flex items-center gap-4">
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden w-6 h-6 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>

            {/* Logo */}
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              <a href="" onClick={() => setIsMobileMenuOpen(false)}>URBN.</a>
            </h1>
          </div>

          {/* Center Navigation Links - Desktop Only */}
          <div className="hidden md:flex gap-8 lg:gap-10 text-[15px] font-medium relative">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => setHoveredCategory(link.name)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                <a
                  href={link.href}
                  onClick={() => {
                    setActiveTab(link.name);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`cursor-pointer transition-colors duration-200 hover:text-black ${activeTab === link.name
                    ? "text-black border-b-2 border-black pb-1"
                    : "text-gray-500"
                    }`}
                >
                  {link.name}
                </a>

                {/* Desktop Dropdown Menu */}
                {/* {/* <div className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50 transition-all duration-300 ease-in-out ${hoveredCategory === link.name
                  ? 'opacity-100 visible translate-y-0'
                  : 'opacity-0 invisible -translate-y-2'
                  }`}>
                  <div className="py-3">
                    {link.subcategories.map((subcategory, index) => (
                      <a
                        key={subcategory}
                        href={`${link.href}/${subcategory.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block px-4 py-2 text-sm text-gray-600 hover:text-black hover:bg-gray-50 transition-all duration-500 ease-in-out"
                        style={{
                          transitionDelay: hoveredCategory === link.name ? `${index * 30}ms` : '0ms'
                        }}
                      >
                        {subcategory}
                      </a>
                    ))}
                  </div>
                </div> */}
              </div>
            ))}
          </div>

          {/* Right Section Icons */}
          <div className="flex items-center gap-5 sm:gap-6">
            {/* Search Button */}
            <button
              onClick={toggleSearch}
              className="w-5 h-5 cursor-pointer text-gray-600 hover:text-black transition-colors duration-200"
              aria-label="Toggle search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* User Icon */}
            <User
              className="w-5 h-5 cursor-pointer text-gray-600 hover:text-black transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Heart - Hidden on small screens */}
            <Heart
              className="hidden sm:block w-5 h-5 cursor-pointer text-gray-600 hover:text-black transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Shopping Bag with Badge */}
            <div className="relative" onClick={() => setIsMobileMenuOpen(false)}>
              <ShoppingBag className="w-5 h-5 cursor-pointer text-gray-600 hover:text-black transition-colors duration-200" />
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-4 h-4 flex items-center justify-center font-medium">
                2
              </span>
            </div>
          </div>
        </div>

        {/* Search Bar Overlay */}
        {isSearchOpen && (
          <div
            ref={searchRef}
            className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-50 px-4 sm:px-6 py-4 pb-6"
          >
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for products, brands, and more..."
                className="w-full pl-10 sm:pl-12 pr-10 sm:pr-12 py-2 sm:py-2.5 text-base sm:text-lg border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                autoFocus
              />
              <button
                onClick={toggleSearch}
                className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-black"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>

            {/* Quick Search Suggestions */}
            <div className="max-w-2xl mx-auto mt-6">
              <p className="text-sm text-gray-500 mb-4 ml-2">Popular searches:</p>
              <div className="flex flex-wrap gap-2">
                {["Jeans", "T-shirts", "Dresses", "Sneakers", "Jackets"].map((term) => (
                  <button
                    key={term}
                    className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded-full transition-colors duration-200 cursor-pointer text-gray-600 font-medium"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-50">
            <div className="px-6 py-4 pb-8 space-y-6">
              {/* Mobile Navigation Links */}
              {navLinks.map((link) => (
                <div key={link.name} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <a
                      href={link.href}
                      onClick={() => {
                        setActiveTab(link.name);
                        setIsMobileMenuOpen(false);
                        setExpandedCategory(null);
                      }}
                      className={`transition-colors duration-200 ${activeTab === link.name
                        ? "text-black font-medium"
                        : "text-gray-600 hover:text-black"
                        }`}
                    >
                      {link.name}
                    </a>
                    <button
                      onClick={() => {
                        setExpandedCategory(expandedCategory === link.name ? null : link.name);
                      }}
                      className="p-1 text-gray-500 hover:text-black transition-colors duration-200"
                      aria-label={`Expand ${link.name} category`}
                    >
                      {expandedCategory === link.name ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  {/* Subcategories */}
                  {expandedCategory === link.name && (
                    <div className="pl-4 space-y-2 border-l-2 border-gray-100 animate-in slide-in-from-top-2 duration-500 ease-in-out">
                      {link.subcategories.map((subcategory, index) => (
                        <a
                          key={subcategory}
                          href={`${link.href}/${subcategory.toLowerCase().replace(/\s+/g, '-')}`}
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            setExpandedCategory(null);
                          }}
                          className="block text-sm text-gray-500 hover:text-black transition-colors duration-200"
                          style={{
                            animationDelay: `${index * 50}ms`,
                            opacity: 0,
                            animation: `fadeInUp 0.3s ease-out ${index * 50}ms forwards`
                          }}
                        >
                          {subcategory}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;