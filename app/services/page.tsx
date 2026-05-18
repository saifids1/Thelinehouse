import Image from "next/image";
import { FaCheck, FaChevronRight } from "react-icons/fa";
const ServicePage = () => {
  return (
    <section className="py-15 bg-gradient-to-br from-green-100 to-blue-100 services">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
            Our Linen House Services
          </h2>
          <div className="w-16 h-1 theameGradient mx-auto mt-3 mb-4 rounded-full"></div>
          <p className="max-w-2xl mx-auto text-gray-800 text-sm md:text-base leading-relaxed">
            We Provide a wide range of hospital linen products to meet all
            hospital and IPD (In-Patient Department) needs
          </p>
        </div>
        <div className="w-full px-10 grid grid-cols-2 gap-4">
          {/* left card  */}
          <div className="card bg-white shadow rounded-t-xl">
            <div className="card-heading text-xl font-bold rounded-t-xl text-green-700 p-4 bg-green-100">
              <h4>Hospital Uniform</h4>
            </div>
            <div
              className="card-container p-8"
              style={{
                backgroundImage: "url('/images/s1.png')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "55%",
                backgroundPosition: "90% 50%",
              }}
            >
              <div className="flex flex-row gap-3">
                <div className="text-green-700 mt-1">
                  <FaCheck />
                </div>
                <div>
                  <p className="text-gray-800 text-sm md:text-base leading-relaxed">
                    Dr Aprons
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-3">
                <div className="text-green-700 mt-1">
                  <FaCheck />
                </div>
                <div>
                  <p className="text-gray-800 text-sm md:text-base leading-relaxed">
                    Staff Dresses
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-3">
                <div className="text-green-700 mt-1">
                  <FaCheck />
                </div>
                <div>
                  <p className="text-gray-800 text-sm md:text-base leading-relaxed">
                    OT Srubs
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-3">
                <div className="text-green-700 mt-1">
                  <FaCheck />
                </div>
                <div>
                  <p className="text-gray-800 text-sm md:text-base leading-relaxed">
                    Corporate Unifroms{" "}
                  </p>
                </div>
              </div>
              <button className="bg-green-700 px-3 py-2 mt-4 text-white rounded flex flex-row gap-2">
                View More <FaChevronRight className="mt-1" />
              </button>
            </div>
          </div>
          {/* right card  */}
          <div className="card bg-white shadow rounded-t-xl">
            <div className="card-heading text-xl font-bold rounded-t-xl text-green-700 p-4 bg-green-100">
              <h4>IPD Bed Linen & Accessories</h4>
            </div>
            <div
              className="card-container p-8"
              // style={{
              //   backgroundImage: "url('/images/s2.png')",
              //   backgroundRepeat: "no-repeat",
              //   backgroundSize: "55%",
              //   backgroundPosition: "90% 50%",
              // }}
            >
              <Image alt="curtain Imaage" src="/Images/service1.png" className="curtain-image" width={100} height={100}/>
              <Image alt="curtain Imaage" src="/Images/s2.png" className="curtain-image2" width={300} height={300}/>
              <div className="flex flex-row gap-3">
                <div className="text-green-700 mt-1">
                  <FaCheck />
                </div>
                <div>
                  <p className="text-gray-800 text-sm md:text-base leading-relaxed">
                    Patient Growns
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-3">
                <div className="text-green-700 mt-1">
                  <FaCheck />
                </div>
                <div>
                  <p className="text-gray-800 text-sm md:text-base leading-relaxed">
                    Bed Sheets
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-3">
                <div className="text-green-700 mt-1">
                  <FaCheck />
                </div>
                <div>
                  <p className="text-gray-800 text-sm md:text-base leading-relaxed">
                    Pillow Covers
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-3">
                <div className="text-green-700 mt-1">
                  <FaCheck />
                </div>
                <div>
                  <p className="text-gray-800 text-sm md:text-base leading-relaxed">
                    Blankets{" "}
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-3">
                <div className="text-green-700 mt-1">
                  <FaCheck />
                </div>
                <div>
                  <p className="text-gray-800 text-sm md:text-base leading-relaxed">
                    Curtains{" "}
                  </p>
                </div>
              </div>
              <button className="bg-green-700 px-3 py-2 mt-4 text-white rounded flex flex-row gap-2">
                View More <FaChevronRight className="mt-1" />
              </button>
            </div>
          </div>
        </div>
          {/* bottom  */}
          <div className="px-10">
            <div className="px-6 py-3 font-bold theameGradient text-right rounded-b-xl text-white w-full">
              <p>All Types Of Hosital Linen Available</p>
            </div>
          </div>
        
      </div>
    </section>
  );
};

export default ServicePage;
