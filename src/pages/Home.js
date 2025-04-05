import React, { useState, useEffect, useRef } from "react";
export default function Home({ setPage }) {
    const [showSetupModal, setShowSetupModal] = useState(false);
    const [companySize, setCompanySize] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const modalRef = useRef(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageUpload = (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setSelectedImage(reader.result);
        };
        reader.readAsDataURL(file);
      }
    };
    // Close modal when clicking outside
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
          setShowSetupModal(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    const companySizes = [
      "1-10 Employees",
      "11-50 Employees",
      "51-200 Employees",
      "201-500 Employees",
      "500+ Employees",
    ];
  const features = [
    {
      icon: "🚀",
      title: "Instant Setup",
      desc: "Get started in minutes with our intuitive onboarding process",
    },
    {
      icon: "🤝",
      title: "Team Collaboration",
      desc: "Real-time collaboration across departments and locations",
    },
    {
      icon: "🛡️",
      title: "Enterprise Security",
      desc: "Military-grade encryption and compliance certifications",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {showSetupModal && (
        <div className="absolute overflow-y-auto inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div
            ref={modalRef}
            className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 w-full max-w-md p-6 relative"
          >
            <button
              onClick={() => setShowSetupModal(false)}
              className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              Set Up Your Office
            </h2>

            <div className="space-y-4">
              {/* Image Upload Section */}
              <div className="mb-8 flex justify-center">
                <div className="relative w-32 h-32">
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    id="logoUpload"
                    onChange={handleImageUpload} // Add onChange handler
                  />
                  <label
                    htmlFor="logoUpload"
                    className="w-full h-full rounded-full bg-white/5 border-2 border-dashed border-white/20 flex items-center justify-center cursor-pointer hover:border-amber-400 transition-colors overflow-hidden"
                  >
                    {selectedImage ? (
                      <img
                        src={selectedImage}
                        alt="Uploaded logo"
                        className="w-full h-full object-cover rounded-full"
                      />
                    ) : (
                      <span className="text-white/50 text-sm text-center">
                        Logo here
                      </span>
                    )}

                    {/* Camera Icon */}
                    <div className="absolute bottom-0 right-0 transform translate-x-1/4">
                      <div className="bg-amber-400 p-2 rounded-full">
                        <svg
                          className="w-4 h-4 text-black"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
              <div>
                <label className="block text-sm text-white/80 mb-2">
                  Enter Your Name
                </label>
                <input
                  type="text"
                  placeholder="First & Last Name"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:ring-2 focus:ring-amber-400"
                />
              </div>

              <div>
                <label className="block text-sm text-white/80 mb-2">
                  Enter Your Email
                </label>
                <input
                  type="email"
                  placeholder="email@company.com"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:ring-2 focus:ring-amber-400"
                />
              </div>

              <div>
                <label className="block text-sm text-white/80 mb-2">
                  Your Company Name
                </label>
                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:ring-2 focus:ring-amber-400"
                />
              </div>

              <div>
                <label className="block text-sm text-white/80 mb-2">
                  Company Website
                </label>
                <input
                  type="url"
                  placeholder="https://example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:ring-2 focus:ring-amber-400"
                />
              </div>

              <div className="mt-4">
                <label className="block text-sm text-white/80 mb-2">
                  Company Size
                </label>
                <div className="relative">
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white/80 text-left flex justify-between items-center hover:border-white/20"
                  >
                    {companySize || "Select Company Size"}
                    <svg
                      className={`w-4 h-4 transform transition-transform ${
                        isDropdownOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {isDropdownOpen && (
                    <div className="absolute z-10 w-full mt-2 bg-white/5 backdrop-blur-lg border border-white/10 rounded-lg shadow-lg">
                      <div className="p-2 space-y-1">
                        {companySizes.map((size) => (
                          <label
                            key={size}
                            className="flex items-center space-x-2 p-2 bg-black rounded-md hover:bg-white/5 cursor-pointer transition-colors"
                          >
                            <input
                              type="radio"
                              name="companySize"
                              value={size}
                              checked={companySize === size}
                              onChange={(e) => {
                                setCompanySize(e.target.value);
                                setIsDropdownOpen(false);
                              }}
                              className="hidden"
                            />
                            <div
                              className={`w-4 h-4 border rounded-sm flex items-center justify-center ${
                                companySize === size
                                  ? "bg-amber-400 border-amber-400"
                                  : "border-white/40"
                              }`}
                            >
                              {companySize === size && (
                                <svg
                                  className="w-2.5 h-2.5 text-black"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={3}
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                              )}
                            </div>
                            <span className="text-sm text-white/80">
                              {size}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm text-white/80 mb-2">
                  Create Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:ring-2 focus:ring-amber-400"
                />
              </div>

              <div>
                <label className="block text-sm text-white/80 mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:ring-2 focus:ring-amber-400"
                />
              </div>

              <button className="w-full bg-amber-400 text-black py-2.5 rounded-lg font-semibold hover:bg-amber-500 transition-colors mt-4 text-sm">
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Hero Section */}
      <div className="text-center py-20 md:py-32">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Welcome to Your
          <span className="bg-amber-400 bg-clip-text text-transparent">
            {" "}
            Virtual Office
          </span>
        </h1>
        <p className="text-xl text-white mb-12 max-w-3xl mx-auto">
          Transform your team's productivity with our all-in-one collaboration
          platform designed for modern hybrid workplaces.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => setPage("signup")}
            className="bg-amber-400 text-white px-4 py-2 rounded-lg font-semibold hover:bg-amber-500 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Instant Demo
          </button>
          <button
            onClick={() => setShowSetupModal(true)}
            className="bg-transparent text-white px-4 py-2 rounded-lg font-semibold border-2 border-amber-400 hover:bg-amber-400 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Setup Your Company
          </button>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-8 mb-24">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="bg-white/5 backdrop-blur-lg border-b border-white/10 p-8 z-40 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-4xl mb-6">{feature.icon}</div>
            <h3 className="text-2xl text-white font-bold mb-4">
              {feature.title}
            </h3>
            <p className="text-white">{feature.desc}</p>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-amber-600 to-white/10 rounded-2xl p-12 text-center mb-24">
        <h2 className="text-3xl font-bold text-white mb-6">
          Join 1,000+ Companies Trusting Teamify
        </h2>
        <div className="flex justify-center space-x-8 mb-8 opacity-80">
          <span className="text-white text-2xl font-bold">Acme Corp</span>
          <span className="text-white text-2xl font-bold">
            Stark Industries
          </span>
          <span className="text-white text-2xl font-bold">Wayne Ent.</span>
        </div>
        <button
          onClick={() => setPage("pricing")}
          className="bg-amber-400 text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-500 transition-colors duration-300"
        >
          See Pricing Plans
        </button>
      </div>

      {/* Bottom Navigation */}
      <div className="flex justify-center space-x-8 text-sm text-gray-500 pb-8">
        <a href="#" className="hover:text-blue-600 transition-colors">
          Terms & Conditions
        </a>
        <span>|</span>
        <a href="#" className="hover:text-blue-600 transition-colors">
          Privacy Policy
        </a>
      </div>
    </div>
  );
}
