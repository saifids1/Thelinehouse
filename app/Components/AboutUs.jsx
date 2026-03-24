import { FaUsers, FaAward, FaGlobe, FaShieldAlt, FaCheck } from "react-icons/fa";

export default function About() {
  const qualityItems = [
    "Colour Fastness",
    "Tear Strength",
    "Dye Strength",
    "Tensile Strength",
    "Anti Pilling",
  ];

  return (
    <section className="py-10 bg-gradient-to-br from-green-100 to-blue-100">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-4 py-2 bg-white/70 backdrop-blur rounded-full border border-white/50 mb-4">
            <span className="text-s font-bold text-green-700 tracking-wide">
              ABOUT US
            </span>
          </div>

          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-3">
            The Linen House
          </h2>

          <p className="max-w-2xl mx-auto text-gray-800 text-sm md:text-base leading-relaxed">
            is a distinguished entity engaged in manufacturing & supplier of a broad range of all types of fabrics & different aprons of industries.
          </p>
          <p className="max-w-2xl mx-auto text-gray-800 text-sm md:text-base leading-relaxed">
            We are manufacturer and supplier of uniform fabrics in polyester/viscose polyester/100% cotton and many more. We also ensure transparency of business ethics at all stages and implement quality standards are parallel to the international quality uniforms. The workforce of the company comprises of qualifies professionals like designers, quality analysts, research staff, tailors, supervisors and marketing executives
          </p>

          <div className="w-16 h-1 theameGradient mx-auto mt-4 rounded-full"></div>
        </div>

        <div className=" gap-8 items-start">
          
          
          <div>
            <div className="grid lg:grid-cols-2 bg-white/70 backdrop-blur-xl rounded-2xl p-5 shadow-sm border border-white/50 md:gap-20">
              <div className="">
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                Who We Are
              </h3>

              <p className="text-gray-800 text-[15px] leading-relaxed mb-5">
                We are a trusted manufacturer & supplier delivering premium textile solutions.
                Our strength lies in skilled craftsmanship, quality materials, and strict testing.
              </p>
              </div>

              {/* Features */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 theameGradient rounded-xl shadow-sm">
                    <FaUsers className="text-white text-sm" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-1">
                      Expert Team
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Designers, quality analysts, and skilled tailors.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 theameGradient rounded-xl shadow-sm">
                    <FaShieldAlt className="text-white text-sm" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-1">
                      Quality Standards
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      International testing & inspection procedures.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quality Assurance */}
            <div className="mt-5 bg-white/70 backdrop-blur-xl rounded-2xl p-5 shadow-sm border border-white/50 mb-4">
              <h3 className="font-bold text-gray-900 text-base mb-3 flex items-center">
                <FaCheck className="text-green-700 mr-2 text-lg" />
                Quality Assurance
              </h3>

              <div className="flex flex-wrap gap-2">
                {qualityItems.map((item, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white/90 text-gray-800 text-sm rounded-full border border-gray-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-5">
            
            {/* Mission Card */}
            <div className="bg-white/70 backdrop-blur-xl border border-white/50 rounded-2xl p-5 shadow-sm hover:shadow-md transition">
              <div className="flex items-center mb-3">
                <div className="p-2.5 theameGradient rounded-xl mr-3 shadow-sm">
                  <FaAward className="text-white text-lg" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Our Mission
                  </h3>
                  <p className="text-blue-800 font-medium text-sm">
                    Delivering Excellence
                  </p>
                </div>
              </div>

              <p className="text-gray-800 text-sm leading-relaxed">
                To offer high quality products and solutions to corporate
                for their uniforms and work wear.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-white/70 backdrop-blur-xl border border-white/50 rounded-2xl p-5 shadow-sm hover:shadow-md transition">
              <div className="flex items-center mb-3">
                <div className="p-2.5 theameGradient rounded-xl mr-3 shadow-sm">
                  <FaGlobe className="text-white text-lg" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Our Vision
                  </h3>
                  <p className="text-blue-800 font-medium text-sm">
                    Industry Leadership
                  </p>
                </div>
              </div>

              <p className="text-gray-800 text-sm leading-relaxed">
                To become the most trusted and preferred brand in the textile and uniform industry.
              </p>
            </div>

            {/* CTA */}
            <button className="w-full py-3 theameGradient text-white font-semibold rounded-xl shadow-sm hover:shadow-md hover:scale-[1.01] hover:cursor-pointer transition">
              Learn More About Us
            </button>

            {/* Extra mini card */}
            <div className="bg-white/70 backdrop-blur-xl border border-white/50 rounded-2xl p-4 shadow-sm ">
              <p className="text-gray-800 font-semibold text-center text-sm">
                Trusted by hospitals, hotels, industries & corporate brands.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
