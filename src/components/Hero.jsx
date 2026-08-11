import React from "react";
import { Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="w-full overflow-hidden bg-white">

      {/* Main Hero */}
      <div className="relative min-h-[500px] lg:min-h-[520px]">

        {/* Hero Content */}
        <div className="relative z-10 flex py-65 flex-col justify-between ">

          {/* Heading */}
          <div className="px-8 pt-10 sm:px-12 sm:pt-12 lg:w-[52%] lg:px-20 lg:pt-12">
            <h1 className="font-light leading-[0.95]">
              <span className="block text-4xl text-[#003478] sm:text-5xl lg:text-6xl">
                THE FUTURE OF
              </span>

              <span className="block text-4xl font-medium text-[#f5a000] sm:text-5xl lg:text-6xl">
                EXHILARATION
              </span>
            </h1>
          </div>

          {/* Mustang Title Bars */}
          <div className="absolute left-0 top-[155px] w-full lg:top-[156px]">

            <div className="flex h-[70px] items-center bg-[#292d2d] px-8 sm:px-12 lg:px-20 absolute left-[-193px] top-[104px] ">
              <h2 className="text-2xl font-light tracking-wide text-white sm:text-3xl lg:text-4xl">
                FORD MUSTANG
                <span className="ml-2 text-xl sm:text-2xl lg:text-3xl">
                  2021
                </span>
              </h2>
            </div>

            <div className="mt-3 h-[70px] bg-[#292d2d] absolute left-0 top-0 w-full" />
          </div>

          {/* Buttons */}
          <div className="mb-24 flex items-center gap-6 px-8 sm:px-12 lg:mb-20 lg:px-20">

            {/* Build & Price */}
            <button className="bg-[#003478] px-7 py-4 text-sm font-medium text-white transition hover:bg-[#00285c]">
              Build & Price
            </button>

            {/* Watch Video */}
            <button className="flex items-center gap-4 text-sm text-[#111] transition hover:text-[#003478]">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#003478] text-white">
                <Play size={12} fill="currentColor" />
              </span>

              <span>Watch Video</span>
            </button>

          </div>
        </div>

        {/* 
          IMAGE AREA
          Replace this div with your Mustang image later.
        */}
        <div className="absolute right-0 -top-11 hidden lg:block h-[760px]">

        
          
          <img
            src="/mustang.png"
            alt="Ford Mustang"
            className="h-full w-full object-cover"
          />

         

        

        </div>

        {/* Mobile Image Placeholder */}
        <div className="flex h-[250px] w-full items-center justify-center bg-gray-100 text-gray-400 lg:hidden">
          Mustang Image
        </div>

      </div>

      {/* Bottom CTA */}
      <div className="flex h-[55px] items-center justify-center bg-[#292d2d]">
        <button className="text-xl font-light tracking-wide text-white transition hover:text-gray-300 sm:text-2xl">
          Custom Order Your Mustang
        </button>
      </div>

    </section>
  );
};

export default Hero;