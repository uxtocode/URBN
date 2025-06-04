const Footer = () => {
  const footerSections = [
    {
      title: "Shop",
      links: [
        "LADIES",
        "MEN",
        "KIDS",
        "HOME",
        "MAGAZINE"
      ]
    },
    {
      title: "Corporate Info",
      links: [
        "CAREER AT URBN",
        "ABOUT URBN GROUP",
        "SUSTAINABILITY URBN GROUP",
        "PRESS",
        "INVESTOR RELATIONS",
        "CORPORATE GOVERNANCE"
      ]
    },
    {
      title: "Help",
      links: [
        "CUSTOMER SERVICE",
        "MY URBN",
        "FIND A STORE",
        "LEGAL & PRIVACY",
        "CONTACT",
        "SECURE SHOPPING",
        "COOKIE NOTICE",
        "COOKIE SETTINGS"
      ]
    }
  ];

  return (
    <footer className="bg-gray-50 pt-6 md:pt-12 pb-8">
      <div className="mx-auto px-4 sm:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="font-semibold text-black uppercase tracking-wide">
                {section.title}
              </h3>
              <ul className="space-y-3">
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
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                <a href="/">URBN.</a>
              </h1>
            </div>

            {/* Region Selector */}
            <div className="flex items-center space-x-2 text-sm">
              <span className="text-gray-700">INDIA (₹.)</span>
              <button className="text-black font-semibold hover:text-gray-700 transition-colors duration-200 border-b border-black hover:border-gray-700">
                CHANGE REGION
              </button>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between text-xs text-gray-500">
              <p className="text-center lg:text-left order-1 lg:order-1">
                © 2025 URBN. All rights reserved.
              </p>
              <div className="text-center lg:text-right mt-2 lg:mt-0 order-2 lg:order-2">
                <a href="#" className="hover:text-gray-700 transition-colors duration-200">
                  Privacy Policy
                </a>
                <span className="mx-1">|</span>
                <a href="#" className="hover:text-gray-700 transition-colors duration-200">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;