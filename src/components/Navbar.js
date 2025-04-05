import { useState } from "react";
import Logo from "../assets/teamify.png";

export default function Navbar({ setPage, currentPage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", page: "home" },
    { name: "Features", page: "features" },
    { name: "About Us", page: "about" },
    { name: "Contact Us", page: "contact" },
  ];

  return (
    <nav >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden mr-2 text-gray-400 hover:text-white"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
            <div
              className="flex-shrink-0 font-bold text-2xl bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent cursor-pointer"
              onClick={() => setPage("home")}
            >
              <img src={Logo} alt="Teamify Logo" className="h-8" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <NavLink
                key={item.page}
                onClick={() => setPage(item.page)}
                isActive={currentPage === item.page}
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          <button
            onClick={() => setPage("signup")}
            className="bg-amber-400 text-white px-6 py-2 rounded-full hover:bg-amber-500 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Sign In
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute w-full left-0 right-0 bg-white/5 backdrop-blur-lg border-b border-white/10 z-50">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <button
                  key={item.page}
                  onClick={() => {
                    setPage(item.page);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                    currentPage === item.page
                      ? "text-white font-bold underline underline-offset-4"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

const NavLink = ({ children, onClick, isActive }) => (
  <button
    onClick={onClick}
    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
      isActive
        ? "text-white font-bold underline underline-offset-4"
        : "text-gray-400 hover:text-white"
    }`}
  >
    {children}
  </button>
);
