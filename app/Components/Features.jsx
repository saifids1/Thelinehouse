import {
  FaIndustry,
  FaUserTie,
  FaCut,
  FaShieldAlt,
  FaRulerCombined,
  FaPalette,
} from "react-icons/fa";

export default function Features() {
  const features = [
    {
      icon: <FaIndustry />,
      title: "Use Of Latest Manufacturing Techniques",
      description: "Modern technology for precision & efficiency",
    },
    {
      icon: <FaUserTie />,
      title: "Expert & Experienced Professionals",
      description: "Designers, tailors & quality analysts",
    },
    {
      icon: <FaCut />,
      title: "Comfort & Smart Fit",
      description: "Ergonomic designs for best comfort",
    },
    {
      icon: <FaShieldAlt />,
      title: "Superior & Branded fabrics",
      description: "Branded fabrics for durability & feel",
    },
    {
      icon: <FaRulerCombined />,
      title: "Best Stitching",
      description: "Precision stitching for long-lasting wear",
    },
    {
      icon: <FaPalette />,
      title: "Various Designs & Patterns",
      description: "Multiple patterns for diverse needs",
    },
  ];

  return (
    <section className="py-15 bg-gradient-to-br from-green-100 to-blue-100">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3">
            Our Features
          </h2>

          <div className="w-16 h-1 theameGradient mx-auto mb-4 rounded-full"></div>

          <p className="text-gray-800 text-sm md:text-base max-w-2xl mx-auto">
            We combine premium fabrics with expert craftsmanship to deliver uniforms
            that exceed expectations.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-md border border-white/60 rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-start gap-3">
                
                {/* Icon */}
                <div className="p-2 theameGradient rounded-lg shadow-sm">
                  <div className="text-white text-2xl">{feature.icon}</div>
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-lg md:text-base font-bold text-gray-900 mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 text-xs md:text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
