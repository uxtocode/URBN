import React from 'react';

const Footer = () => {
  const footerSections = [
    {
      title: "Shop",
      links: ["LADIES", "MEN", "KIDS", "HOME"]
    },
    {
      title: "Info",
      links: [
        "ABOUT US",
        "CONTACT",
        "SHIPPING & RETURNS",
        "PRIVACY POLICY",
        "TERMS OF SERVICE"
      ]
    },
    {
      title: "Help",
      links: [
        "CUSTOMER SERVICE",
        "FAQ",
        "ORDER TRACKING",
        "SIZE GUIDE"
      ]
    }
  ];

  const [openSections, setOpenSections] = React.useState(
    Array(footerSections.length).fill(false)
  );

  const toggleSection = (index) => {
    setOpenSections((prev) =>
      prev.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  };

  return (
    <footer className="bg-gray-50 pt-6 md:pt-12 pb-8">
      <div className="mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 lg:gap-12">
          {footerSections.map((section, index) => (
            <div key={index} className="border-b border-gray-200 pb-2 md:border-none md:pb-0">
              <button
                className="w-full flex justify-between items-center md:cursor-default"
                onClick={() => toggleSection(index)}
              >
                <h3 className="font-semibold text-black uppercase tracking-wide">
                  {section.title}
                </h3>
                <span className="md:hidden text-2xl">
                  {openSections[index] ? '−' : '+'}
                </span>
              </button>
              <ul
                className={`mt-2 space-y-4 transition-all duration-300 ease-in-out overflow-hidden ${openSections[index] ? 'max-h-96' : 'max-h-0'
                  } md:max-h-full md:mt-4`}
              >
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-sm text-gray-700 hover:text-black transition-colors duration-200 cursor-pointer"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter Signup */}
          <div className="space-y-4">
            <div className="space-y-2">
              <p className="text-sm text-gray-700 leading-relaxed">
                Sign up now and be the first to know about exclusive offers, latest fashion news & style tips!
              </p>
              <a
                href="#"
                className="inline-block text-sm font-semibold text-black hover:text-gray-700 transition-colors duration-200 border-b border-black hover:border-gray-700"
              >
                READ MORE
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-6 lg:space-y-0">
            <div className="flex items-center space-x-6">
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                <a href="/">URBN.</a>
              </h1>

              <div className="flex items-center space-x-2 text-sm">
                <span className="text-gray-700">INDIA (₹.)</span>
                <button className="text-black font-semibold hover:text-gray-700 transition-colors duration-200 border-b border-black hover:border-gray-700">
                  CHANGE REGION
                </button>
              </div>
            </div>

            <div>
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center text-xs text-gray-500">
                <p className="text-center lg:text-left order-1 lg:order-1">
                  © 2025 URBN. All rights reserved.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
