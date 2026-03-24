import {
  FaTint,
  FaFire,
  FaWeightHanging,
  FaSyringe,
  FaThumbsUp,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { HiBuildingOffice2 } from "react-icons/hi2";
const HospitalWears = () => {
  const hospitalLinen = [
    {
      title: "Dr's Aprons",
      url: "",
    },
    {
      title: "Staff Dress",
      url: "",
    },
    {
      title: "Dr OT Dress",
      url: "",
    },
    {
      title: "OT Scrubs",
      url: "",
    },
  ];
  return (
    <section className="py-15 bg-gradient-to-br from-green-100 to-blue-100">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
            Hospital Wears
          </h2>
          <div className="w-16 h-1 theameGradient mx-auto mt-3 mb-4 rounded-full"></div>
        </div>

        {/* Quality Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          {hospitalLinen.map((item, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-md border border-white/60 rounded-xl p-4 text-center shadow-sm hover:shadow-md transition"
            >
              <div className="flex justify-center mb-2">
                {/* <div className="text-3xl text-green-700">{}</div> */}
              </div>
              <h3 className="font-bold text-gray-900 text-sm md:text-base mb-1">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

    
      </div>
    </section>
  );
};

export default HospitalWears;
