import React from 'react';
export default function ContactUs() {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className=" flex justify-center text-4xl font-bold text-white mb-4">
          Contact <h2 className="text-amber-400 ml-2">Us</h2>
        </h2>
        <p className="text-xl text-white">We'd love to hear from you</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-white/5 backdrop-blur-lg border-b border-white/10 p-8 rounded-2xl shadow-lg">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border bg-transparent border-white rounded-lg focus:ring-2 focus:ring-amber-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 border bg-transparent border-white rounded-lg focus:ring-2 focus:ring-amber-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Message
              </label>
              <textarea
                rows="4"
                className="w-full px-4 py-3 bg-transparent border border-white rounded-lg focus:ring-2 focus:ring-amber-400"
              ></textarea>
            </div>

            <button className="w-full bg-amber-400 text-white py-3 rounded-lg font-semibold hover:bg-amber-400 transition-colors">
              Send Message
            </button>
          </form>
        </div>

        <div className="space-y-8">
          <div className="bg-white/5 backdrop-blur-lg border-b border-white/10 p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-amber-400 mr-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-white">Addis Ababa, Bole</span>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-amber-400 mr-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-white">+251 (955) 123-456</span>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-amber-400 mr-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.23a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-white">support@teamify.com</span>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-lg border-b border-white/10 rounded-2xl shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.231518693302!2d38.7998!3d8.9806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85f882b5f6a1%3A0x3a7f6fc8e4d6f3b5!2sBole%2C%20Addis%20Ababa!5e0!3m2!1sen!2set!4v1693426788474!5m2!1sen!2set"
              className="w-full h-64"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
