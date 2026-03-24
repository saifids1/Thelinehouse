import {
  FaTint,
  FaFire,
  FaWeightHanging,
  FaSyringe,
  FaThumbsUp,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { HiBuildingOffice2 } from "react-icons/hi2";

export default function Quality() {
  const qualityItems = [
    {
      icon: <FaTint />,
      title: "Colour Fastness",
      description: "Colors stay vibrant wash after wash",
    },
    {
      icon: <FaFire />,
      title: "Tear Strength",
      description: "High resistance to tearing",
    },
    {
      icon: <FaWeightHanging />,
      title: "Tensile Strength",
      description: "Strong & durable fabric",
    },
    {
      icon: <FaSyringe />,
      title: "Anti Pilling",
      description: "Smooth surface, no fabric balls",
    },
    {
      icon: <FaThumbsUp />,
      title: "Dye Strength",
      description: "Long-lasting color retention",
    },
  ];

  return (
    <section className="py-15 bg-gradient-to-br from-green-100 to-blue-100">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
            Quality Assurance
          </h2>
          <div className="w-16 h-1 theameGradient mx-auto mt-3 mb-4 rounded-full"></div>
          <p className="text-gray-800 max-w-2xl mx-auto text-sm md:text-base">
            We follow strict quality checks to ensure our fabrics meet
            international standards.
          </p>
        </div>

        {/* Quality Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          {qualityItems.map((item, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-md border border-white/60 rounded-xl p-4 text-center shadow-sm hover:shadow-md transition"
            >
              <div className="flex justify-center mb-2">
                <div className="text-3xl text-green-700">{item.icon}</div>
              </div>
              <h3 className="font-bold text-gray-900 text-sm md:text-base mb-1">
                {item.title}
              </h3>
              <p className="text-gray-700 text-xs md:text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Info Box */}
        <div className="bg-white/70 backdrop-blur-md border border-white/60 rounded-2xl p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start ">
            {/* Locations */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Stock Locations
              </h3>
              <div className="w-16 h-1 theameGradient mx-0 mt-3 mb-4 rounded-full"></div>

              <ul className="space-y-2 text-gray-800 text-sm">
                <li className="flex items-start gap-2">
                  <span className="theameGradient text-white w-6 h-6 flex items-center justify-center rounded-full text-sm font-bold">
                    <FaMapMarkerAlt className="text-white"  style={{fontSize : "12px"}} />
                  </span>
                  <span>Railway Station Hammalwadi MIDC</span>
                </li>

                <li className="flex items-start gap-2">
                  <span className="theameGradient text-white w-6 h-6 flex items-center justify-center rounded-full text-sm font-bold">
                      <FaMapMarkerAlt className="text-white"  style={{fontSize : "12px"}} />
                  </span>
                  <span>Stock home, Shendra MIDC</span>
                </li>

                <li className="flex items-start gap-2">
                  <span className="theameGradient text-white w-6 h-6 flex items-center justify-center rounded-full text-sm font-bold">
                      <HiBuildingOffice2  style={{fontSize : "12px"}}/>
                  </span>
                  <span>
                    Office: Shop no 1 , Patel complex , opposite Patel Lawns,
                    <br />
                     Beed by pass road , Aurangabad 
                  </span>
                </li>
              </ul>
            </div>

            {/* Contact Box */}
            <div className="bg-white/60 rounded-xl border border-white/50 p-2">
              <h4 className="text-2xl font-bold text-gray-900 mb-3 ">
                Reservations & Enquiry
              </h4>
              <div className="w-16 h-1 theameGradient mx-0 mt-3 mb-4 rounded-full"></div>

              <div className="space-y-3 text-sm px-2">
                <div>
                  <p className="text-gray-600">Email:</p>
                  <p className="font-semibold text-gray-900">
                    service@thelinenhouse.in
                  </p>
                </div>

                <div>
                  <p className="text-gray-600">Call:</p>
                  <p className="font-semibold text-gray-900">
                    +91 96899 53959 | +91 98239 27972 | +91 92209 74779
                  </p>
                </div>

                <div>
                  <p className="text-gray-600">Website:</p>
                  <p className="font-semibold text-gray-900">
                    www.thelinenhouse.in
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
