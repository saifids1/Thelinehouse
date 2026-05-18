import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="py-10 bg-gradient-to-br from-green-100 to-blue-100">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-4 py-1.5 bg-white/70 backdrop-blur rounded-full border border-white/60 mb-4">
            <span className="text-xs font-bold text-green-700 tracking-wide">
              CONTACT US
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">
            Get In Touch
          </h2>

          <p className="text-gray-800 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Reach out to us for inquiries, quotes, or to learn more about our products and services.
          </p>

          <div className="w-16 h-1 bg-gradient-to-r from-green-600 to-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Left: Form */}
          <div className="bg-white/70 backdrop-blur-xl rounded-xl p-5 shadow-md border border-white/60">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Send us a Message
            </h3>

            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-800 text-sm font-semibold mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 text-sm bg-white/90 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label className="block text-gray-800 text-sm font-semibold mb-1">
                    Company
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 text-sm bg-white/90 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                    placeholder="Company Name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-800 text-sm font-semibold mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 text-sm bg-white/90 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-800 text-sm font-semibold mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-3 py-2 text-sm bg-white/90 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                    placeholder="Your Phone"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-800 text-sm font-semibold mb-1">
                  Service Interested In
                </label>
                <select className="w-full px-3 py-2 text-sm bg-white/90 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600">
                  <option value="">Select a service</option>
                  <option value="hospital">Hospital Wears</option>
                  <option value="industrial"></option>
                  <option value="hotel">Hotel Wears</option>
                  <option value="corporate">Corporate Wears</option>
                  <option value="fabrics">Fabrics Supply</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-800 text-sm font-semibold mb-1">
                  Message
                </label>
                <textarea
                  rows="4"
                  className="w-full px-3 py-2 text-sm bg-white/90 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-gradient-to-r from-green-600 to-blue-600 text-white font-bold rounded-lg shadow hover:shadow-md transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Side */}
          <div className="space-y-5">
            
            {/* Contact Info */}
            <div className="bg-white/70 backdrop-blur-xl rounded-xl p-5 shadow-md border border-white/60">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Contact Information
              </h3>

              <div className="space-y-5 text-sm">
                
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg">
                    <FaMapMarkerAlt className="text-white text-sm" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Office Address</h4>
                    <p className="text-gray-800 leading-relaxed">
                      The Royal Group of Industries,<br />
                      P. No. 01 Hammallwadi MIDC,<br />
                      Behind Railway Station,<br />
                      Aurangabad (M.S) 431 005
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg">
                    <FaPhone className="text-white text-sm" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Phone Numbers</h4>
                    <p className="text-gray-800 font-semibold leading-relaxed">
                      96 89 953 959 <br />
                      98 23 927 972 <br />
                      92 20 974 779
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg">
                    <FaEnvelope className="text-white text-sm" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-800 font-semibold">
                      service@thelinenhouse.in
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg">
                    <FaClock className="text-white text-sm" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Business Hours</h4>
                    <p className="text-gray-800 leading-relaxed">
                      Mon - Sat: <span className="font-semibold">9AM - 7PM</span> <br />
                      Sunday: <span className="font-semibold">By Appointment</span>
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Why Choose */}
            <div className="bg-white/70 backdrop-blur-xl rounded-xl p-5 shadow-md border border-white/60">
              <h4 className="text-base font-bold text-gray-900 mb-3">
                Why Choose The Linen House?
              </h4>

              <ul className="space-y-2 text-gray-800 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-700 font-bold">✓</span>
                  <span>Trusted manufacturer & supplier</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-700 font-bold">✓</span>
                  <span>Custom uniform & fabric solutions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-700 font-bold">✓</span>
                  <span>International quality standards</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-700 font-bold">✓</span>
                  <span>Skilled professionals team</span>
                </li>
              </ul>

              <div className="mt-4 w-full h-1 bg-gradient-to-r from-green-600 to-blue-600 rounded-full"></div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
