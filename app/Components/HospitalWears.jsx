import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";
const HospitalWears = () => {
  return (
    <section className="py-15 bg-gradient-to-br from-green-100 to-blue-100">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
            Hospital Wears & Linen Products
          </h2>
          <div className="w-16 h-1 theameGradient mx-auto mt-3 mb-4 rounded-full"></div>
          <p className="max-w-2xl mx-auto text-gray-800 text-sm md:text-base leading-relaxed">
            we offer a complete range of hospital wear and linen products
            designed for healthcare facilities and patients
          </p>
        </div>
        {/* product grid  */}
        {/* doctors apron and doctor ot dress */}
        <div className="w-[70%] m-auto grid grid-cols-3 gap-4 mt-5">
          <div className="card bg-green-100 shadow rounded-xl text-center justify-center">
            <div className="card-img h-[200px] flex justify-center items-center">
              <Image
                alt="doctors apron"
                src="/Images/prodcut1.png"
                width={200}
                height={400}
              />
            </div>

            <div className="card-content bg-white py-4 rounded-b-xl">
              <h5>Doctors Aprons</h5>
              <button className="bg-green-700 px-3 py-2 mt-4 text-white text-sm rounded ">
                <div className="flex flex-row gap-2">
                  View More <FaChevronRight className="mt-1" />
                </div>
              </button>
            </div>
          </div>
          <div className="card bg-green-100 shadow rounded-xl text-center justify-center">
            <div className="card-img flex h-[200px] justify-center items-center">
              <Image
                alt="doctors apron "
                src="/Images/product2.png"
                width={250}
                height={400}
              />
            </div>

            <div className="card-content bg-white py-4 rounded-b-xl">
              <h5>Staff Dresses</h5>
              <button className="bg-green-700 px-3 py-2 mt-4 text-white text-sm rounded ">
                <div className="flex flex-row gap-2">
                  View More <FaChevronRight className="mt-1" />
                </div>
              </button>
            </div>
          </div>
          <div className="card bg-green-100 shadow rounded-xl text-center justify-center">
            <div className="card-img h-[200px] flex py-2 justify-center items-center">
              <Image
                alt="doctors apron"
                src="/Images/product3.png"
                width={100}
                height={100}
              />
            </div>

            <div className="card-content bg-white py-4 rounded-b-xl">
              <h5>Surgical Gowns</h5>
              <button className="bg-green-700 px-3 py-2 mt-4 text-white text-sm rounded ">
                <div className="flex flex-row gap-2">
                  View More <FaChevronRight className="mt-1" />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* doctors apron and doctor ot dress */}
        <div className="w-[70%] m-auto grid grid-cols-2 gap-4 mt-5">
          <div className="card bg-green-100 shadow rounded-xl text-center justify-center">
            <div className="card-img flex h-[200px] justify-center items-center">
              <Image
                alt="doctors apron "
                src="/Images/product4.png"
                width={300}
                height={400}
              />
            </div>

            <div className="card-content bg-white py-4 rounded-b-xl">
              <h5>Doctors OT Scrubs</h5>
              <button className="bg-green-700 px-3 py-2 mt-4 text-white text-sm rounded ">
                <div className="flex flex-row gap-2">
                  View More <FaChevronRight className="mt-1" />
                </div>
              </button>
            </div>
          </div>
          <div className="card bg-green-100 shadow rounded-xl text-center justify-center">
            <div className="card-img flex py-2 justify-center items-center">
              <Image
                alt="doctors apron"
                src="/Images/product5.png"
                width={220}
                height={400}
              />
            </div>

            <div className="card-content bg-white py-4 rounded-b-xl">
              <h5>Patient Dress</h5>
              <button className="bg-green-700 px-3 py-2 mt-4 text-white text-sm rounded ">
                <div className="flex flex-row gap-2">
                  View More <FaChevronRight className="mt-1" />
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="w-[70%] m-auto grid grid-cols-4 gap-4 mt-5">
          <div className="card bg-green-100 shadow rounded-xl text-center justify-center">
            <div className="card-img flex h-[200px] justify-center items-center">
              <Image
                alt="doctors apron "
                src="/Images/bedsheet.png"
                width={150}
                height={300}
              />
            </div>

            <div className="card-content bg-white py-4 rounded-b-xl">
              <h5>Bed Sheets</h5>
              <button className="bg-green-700 px-3 py-2 mt-4 text-white text-sm rounded ">
                <div className="flex flex-row gap-2">
                  View More <FaChevronRight className="mt-1" />
                </div>
              </button>
            </div>
          </div>
          <div className="card bg-green-100 shadow rounded-xl text-center justify-center">
            <div className="card-img flex h-[200px] justify-center items-center">
              <Image
                alt="doctors apron "
                src="/Images/p1.png"
                width={150}
                height={300}
              />
            </div>

            <div className="card-content bg-white py-4 rounded-b-xl">
              <h5>Pillow Covers</h5>
              <button className="bg-green-700 px-3 py-2 mt-4 text-sm text-white rounded ">
                <div className="flex flex-row gap-2">
                  View More <FaChevronRight className="mt-1" />
                </div>
              </button>
            </div>
          </div>
          <div className="card bg-green-100 shadow rounded-xl text-center justify-center">
            <div className="card-img flex h-[200px] justify-center items-center">
              <Image
                alt="doctors apron "
                src="/Images/p2.png"
                width={150}
                height={300}
              />
            </div>

            <div className="card-content bg-white py-4 rounded-b-xl">
              <h5>Blankets</h5>
              <button className="bg-green-700 px-3 py-2 mt-4 text-sm text-white rounded ">
                <div className="flex flex-row gap-2">
                  View More <FaChevronRight className="mt-1" />
                </div>
              </button>
            </div>
          </div>
          <div className="card bg-green-100 shadow rounded-xl text-center justify-center">
            <div className="card-img flex h-[200px] justify-center items-center">
              <Image
                alt="doctors apron "
                src="/Images/p3.png"
                width={150}
                height={300}
              />
            </div>

            <div className="card-content bg-white py-4 rounded-b-xl">
              <h5>Curtains</h5>
              <button className="bg-green-700 px-3 py-2 mt-4 text-white text-sm rounded ">
                <div className="flex flex-row gap-2">
                  View More <FaChevronRight className="mt-1" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HospitalWears;
