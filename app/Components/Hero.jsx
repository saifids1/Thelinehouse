// "use client";
// import React from 'react'
// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Navigation, Pagination } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// const Slider = () => {
//   const slides = [
//     {
//       src: "/Images/Slider/mature-doctor-talking-nurse-about-diagnosis.jpg.jpeg",
//       alt: "Scrubs And Lab Coats Manufacturers in Tamil Nadu",
//       title: "Scrubs And Lab Coats Manufacturers in Tamil Nadu",
//     },
//     {
//       src: "/Images/Slider/bed.jpeg",
//       alt: "Hospital Uniform Manufacturers in Tamil Nadu",
//       title: "Hospital Uniform Manufacturers in Tamil Nadu",
//     },
//     {
//       src: "/Images/Slider/lot-different-folded-clothes-perfectly-arranged-closet-marie-kondo-konmari-method-concept.jpg.jpeg",
//       alt: "India's Favourite Scrubs Manufacturers in Tamil Nadu",
//       title: "India's Favourite Scrubs Manufacturers in Tamil Nadu",
//     },
//   ];
//   return (
//     <>
//     <div className="w-full">
//       <Swiper 
//        modules={[Autoplay ,Pagination , Navigation]}
//        autoplay={{ delay: 3500, disableOnInteraction: false}}
//        loop={true}
//        navigation={true}
//        pagination={{clickable: true }}
//        className="w-full h-[250px] sm:h-[400px] lg:h-[520px] rounded-none"
//       >
//         {
//           slides.map((slide,index)=>(
//             <SwiperSlide>
//             <div className=" relative w-full h-[250px] sm:h-[400px] lg:h-[520px]">
//               <Image 
//                  src={slide.src}
//                  title={slide.title}
//                  alt={slide.alt}
//                  fill
//                  priority={index===0}
//                  className='object-cover'
//               />
//                <div className="absolute inset-0 bg-black/20"></div>
//                 <div className="absolute bottom-10 left-6 lg:left-20 text-white max-w-xl">
//                 <h2 className="text-2xl lg:text-4xl font-bold drop-shadow-lg">
//                   {slide.title}
//                 </h2>
//                 <p className="mt-2 text-sm lg:text-base text-gray-200 drop-shadow">
//                   Trusted quality healthcare & pharma products.
//                 </p>
//               </div>
//             </div>
//           </SwiperSlide>
//           ))}
//       </Swiper>

      

//     </div>
//     </>
//   )
// }

// export default Slider;


















"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { Home } from "lucide-react";

export default function Slider() {
  const slides = [
    // {
    //   src: "/Images/Slider/mature-doctor-talking-nurse-about-diagnosis.jpg.jpeg",
    //   title: "Innovative Pharma Solutions",
    //   desc: "Advanced pharmaceutical products engineered for modern healthcare needs",
    //   tag: "Pharmaceuticals",
    // },
    {
      src: "/Images/Slider/bed.jpeg",
      title: "Hospital Excellence",
      desc: "Premium medical equipment and supplies for superior patient care",
      tag: "Medical Equipment",
    },
    {
      src: "/Images/Slider/lot-different-folded-clothes-perfectly-arranged-closet-marie-kondo-konmari-method-concept.jpg.jpeg",
      title: "Quality & Precision",
      desc: "Manufactured with exacting standards for reliable healthcare delivery",
      tag: "Quality Assurance",
    },
  ];

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="relative max-w-8xl mx-auto">
        <div className="relative overflow-hidden shadow-2xl border border-gray-200 bg-white">
          <Swiper
            modules={[Autoplay, Pagination, Navigation, EffectFade]}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            effect="fade"
            speed={1200}
            fadeEffect={{ crossFade: true }}
            pagination={{ clickable: true }}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            className="w-full h-[320px] sm:h-[480px] lg:h-[600px]"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-[320px] sm:h-[480px] lg:h-[600px]">
                  {/* Background Image */}
                  <Image
                    src={slide.src}
                    alt={slide.title}
                    fill
                    priority={index === 0}
                    className="object-cover"
                    sizes="100vw"
                  />

                  {/* Better overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>

                  {/* Accent overlay (red + green + blue) */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-green-500/20 via-transparent to-red-500/20"></div>

                  {/* Content */}
                  <div className="absolute inset-0 flex items-center">
                    <div className="px-6 lg:px-16 w-full">
                      <div className="max-w-2xl">
                        {/* Tag */}
                        <span className="inline-block px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium text-white">
                          {slide.tag}
                        </span>

                        {/* Title */}
                        <h2 className="mt-6 text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-tight text-white drop-shadow-xl">
                          {slide.title}
                        </h2>

                        {/* Accent Lines */}
                        <div className="mt-6 flex items-center gap-3">
                          <div className="h-1 w-20 rounded-full bg-green-500"></div>
                          <div className="h-1 w-10 rounded-full bg-blue-500"></div>
                          <div className="h-1 w-6 rounded-full bg-red-500"></div>
                        </div>

                        {/* Description */}
                        <p className="mt-6 text-lg sm:text-xl text-gray-200 leading-relaxed max-w-xl drop-shadow">
                          {slide.desc}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Floating Card */}
                  {/* <div className="absolute top-8 right-8 hidden lg:block">
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-green-200 to-blue-300 rounded-2xl blur opacity-40"></div>
                      <div className="relative px-6 py-4 rounded-2xl bg-black/40 backdrop-blur-md border border-white/20">
                        <div className="flex items-center gap-3">
                          <Home className="text-blue-400" />
                          <div>
                            <p className="font-semibold text-white">
                              Innovation
                            </p>
                            <p className="text-sm text-gray-300">
                              Driving Excellence
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="absolute bottom-10 right-10 z-20 flex items-center gap-4">
            <button className="swiper-button-prev-custom w-12 h-12 flex items-center justify-center rounded-full bg-white/10 border border-white/20 backdrop-blur-md hover:bg-white/20 transition">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button className="swiper-button-next-custom w-12 h-12 flex items-center justify-center rounded-full bg-white/10 border border-white/20 backdrop-blur-md hover:bg-white/20 transition">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Pagination Style */}
      <style jsx >{`
        .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.4) !important;
          opacity: 1 !important;
        }

        .swiper-pagination-bullet-active {
          background: linear-gradient(to right, #22c55e, #3b82f6, #ef4444) !important;
          width: 22px;
          border-radius: 20px;
        }
      `}</style>
    </div>
  );
}