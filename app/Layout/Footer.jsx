import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";

export default function Footer() {
  const quickLinks = [
    "Home",
    "About Us",
    "Our Products",
    "Services",
    "Quality Assurance",
    "Contact Us",
  ];

  const services = [
    "Hospital Wears",
    // "Industrial Wears",
    // "Hotel Wears",
    "Corporate Wears",
    "Uniform Fabrics",
    "Custom Embroidery",
  ];

  return (
    <footer className="relative text-black ">
      {/* Top decorative border */}
      <div className="h-[2px] bg-gradient-to-r from-green-500 via-green-400 to-blue-500"></div>

      {/* Main footer background */}
      <div className="bg-gradient-to-br from-white via-green-100 to-blue-200">
        <div className="container mx-auto px-4 pt-12 pb-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
            {/* Company Info */}
            <div>
              <div className="flex items-center justify-center mb-6 gap-2">
                {/* <div className="bg-gradient-to-br from-green-600 to-blue-600 p-3 rounded-xl mr-4 shadow-lg">
                  <div className="text-2xl font-bold text-white">TLH</div>
                </div> */}
                <Image
                  src="/Images/LH_Logo.png"
                  alt="Logo"
                  height={80}
                  width={120}
                />
                {/* <div>
                  <h2 className="text-xl md:text-lg font-bold text-black">
                    THE LINEN HOUSE
                  </h2>
                  <p className="text-gray-800 text-sm font-medium">
                    Manufacturer & Supplier
                  </p>
                </div> */}
              </div>

              <p className="text-gray-900 mb-6 leading-relaxed text-sm">
                Premium manufacturer and supplier of fabrics, hospital linen,
                corporate uniforms, and custom apparel solutions with 15+ years
                of industry expertise.
              </p>

              {/* Social Media */}
              <div className="flex space-x-3">
                <a
                  href="https://www.facebook.com/share/1Ce5ic7eHG/"
                  className="w-10 h-10 bg-white/50 backdrop-blur flex items-center justify-center rounded-xl hover:bg-gradient-to-br hover:from-green-600 hover:to-blue-500 transition-all duration-300 shadow-md"
                >
                  <FaFacebook className="text-black hover:text-white" />
                </a>
                <a
                  href="https://www.instagram.com/thelinenhouse99?igsh=MXZvbzlrZXB1YzNpZw=="
                  className="w-10 h-10 bg-white/50 backdrop-blur flex items-center justify-center rounded-xl hover:bg-gradient-to-br hover:from-green-600 hover:to-blue-500 transition-all duration-300 shadow-md"
                >
                  <FaInstagram className="text-black hover:text-white" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/50 backdrop-blur flex items-center justify-center rounded-xl hover:bg-gradient-to-br hover:from-green-600 hover:to-blue-500 transition-all duration-300 shadow-md"
                >
                  <FaLinkedin className="text-black hover:text-white" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold text-black mb-6 pb-2 border-b border-black/20">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-900 hover:text-black transition-colors flex items-center group"
                    >
                      <FaArrowRight className="text-green-700 mr-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="group-hover:translate-x-2 transition-transform duration-300">
                        {link}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Services */}
            <div>
              <h3 className="text-lg font-bold text-black mb-6 pb-2 border-b border-black/20">
                Our Services
              </h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <a
                      href="#"
                      className="text-gray-900 hover:text-black transition-colors flex items-center group"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-green-700 to-blue-700 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <span>{service}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold text-black mb-6 pb-2 border-b border-black/20">
                Contact Info
              </h3>

              <div className="space-y-5">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-white/50 backdrop-blur flex items-center justify-center rounded-xl mr-4 mt-1 shadow-md">
                    <FaMapMarkerAlt className="text-green-700 m-2" />
                  </div>
                  <div>
                    <p className="text-gray-900 leading-relaxed text-sm">
                      Shop no 02, Patel complex, opposite Patel Lawns, Beed by
                      pass road, 
                      <br />
                      <span className="text-black font-semibold">
                        Aurangabad 431 005
                      </span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-10 h-10 bg-white/50 backdrop-blur flex items-center justify-center rounded-xl mr-4 shadow-md">
                    <FaPhone className="text-green-700" />
                  </div>
                  <div>
                    <p className="text-gray-800 text-sm">Call us at</p>
                    <p className="text-black font-semibold">  +91 87885 92066 </p>
                    <p className="text-black font-semibold">  +91 70833 11655</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-10 h-10 bg-white/50 backdrop-blur flex items-center justify-center rounded-xl mr-4 shadow-md">
                    <FaEnvelope className="text-green-700" />
                  </div>
                  <div>
                    <p className="text-gray-800 text-sm">Email us at</p>
                    <p className="text-black font-semibold">
                      service@thelinenhouse.in
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-black/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-900 text-sm text-center md:text-left">
                &copy; {new Date().getFullYear()} The Linen House. All rights
                reserved.
              </p>

              <div className="flex flex-wrap justify-center gap-6">
                <a
                  href="#"
                  className="text-gray-900 hover:text-black transition-colors text-sm"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-gray-900 hover:text-black transition-colors text-sm"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="text-gray-900 hover:text-black transition-colors text-sm"
                >
                  Disclaimer
                </a>
                <a
                  href="https://www.thelinenhouse.in"
                  className="text-blue-900 hover:text-blue-700 transition-colors text-sm font-semibold"
                >
                  www.thelinenhouse.in
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
