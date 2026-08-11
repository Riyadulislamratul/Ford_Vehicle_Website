import React from "react";
import { Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="w-full overflow-hidden bg-white">

      {/* =====================================================
          LARGE SCREEN
          YOUR ORIGINAL DESIGN — NOT CHANGED
      ====================================================== */}
      <div className="relative hidden min-h-[520px] lg:block">

        {/* Hero Content */}
        <div className="relative z-10 flex py-6 flex-col justify-between">

          {/* Heading */}
          <div className="px-8 pt-10 sm:px-12 sm:pt-12 lg:w-[52%] lg:px-20 lg:pt-12">
            <h1 className="font-light leading-[0.95]">

              <span className="block text-6xl text-[#003478] sm:text-5xl lg:text-6xl">
                THE FUTURE OF
              </span>

              <span className="block text-6xl font-medium text-[#f5a000] sm:text-5xl lg:text-6xl mt-5">
                EXHILARATION
              </span>

            </h1>
          </div>

          {/* Mustang Title Bars */}
          <div className="absolute left-0 top-[155px] w-full lg:top-[156px]">

            <div className="flex h-[70px] items-center bg-[#292d2d] w-full absolute left-[-387px] top-[117px]">
              <h2 className="text-2xl font-light tracking-wide text-white sm:text-3xl lg:text-6xl pl-120">
                FORD MUSTANG

                <span className="ml-2 text-xl sm:text-2xl lg:text-3xl">
                  2021
                </span>
              </h2>
            </div>

            <div className="mt-3 h-[70px] bg-[#292d2d] absolute -left-[385px] top-[195px] w-full" />

          </div>

          {/* Buttons */}
          <div className="mb-24 flex items-center gap-6 px-8 sm:px-12 lg:mb-20 lg:px-20 mt-70">

            {/* Build & Price */}
            <button className="bg-[#003478] px-7 py-4 text-lg font-medium text-white transition hover:bg-[#00285c]">
              Build & Price
            </button>

            {/* Watch Video */}
            <button className="flex items-center gap-4 text-lg text-[#111] transition hover:text-[#003478]">

              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#003478] text-white">
                <Play size={12} fill="currentColor" />
              </span>

              <span>Watch Video</span>

            </button>

          </div>

        </div>

        {/* Image */}
        <div className="absolute right-0 -top-11 hidden lg:block h-[760px]">

          <img
            src="/mustang.png"
            alt="Ford Mustang"
            className="h-full w-full object-cover"
          />

        </div>

      </div>


      {/* =====================================================
          TABLET + MOBILE
          COMPLETELY SEPARATE RESPONSIVE DESIGN
      ====================================================== */}
      <div className="block lg:hidden">

        {/* Heading */}
        <div className="px-6 pt-10 sm:px-10 sm:pt-12">

          <h1 className="font-light leading-[0.95]">

            <span className="block text-4xl text-[#003478] sm:text-5xl">
              THE FUTURE OF
            </span>

            <span className="mt-3 block text-4xl font-medium text-[#f5a000] sm:text-5xl">
              EXHILARATION
            </span>

          </h1>

        </div>


        {/* Mustang Image */}
        <div className="mt-8 w-full overflow-hidden sm:mt-10">

          <img
            src="/mustang.png"
            alt="Ford Mustang"
            className="h-auto w-full object-cover"
          />

        </div>


        {/* Mustang Title */}
        <div className="mt-0 bg-[#292d2d]">

          <div className="flex min-h-[65px] items-center px-6 sm:min-h-[75px] sm:px-10">

            <h2 className="text-2xl font-light tracking-wide text-white sm:text-3xl">

              FORD MUSTANG

              <span className="ml-2 text-lg sm:text-2xl">
                2021
              </span>

            </h2>

          </div>

          {/* Second Dark Bar */}
          <div className="h-[20px] sm:h-[25px]" />

        </div>


        {/* Buttons */}
        <div className="flex flex-wrap items-center gap-6 px-6 py-10 sm:px-10 sm:py-12">

          {/* Build & Price */}
          <button className="bg-[#003478] px-6 py-4 text-sm font-medium text-white transition hover:bg-[#00285c] sm:px-7 sm:text-base">
            Build & Price
          </button>

          {/* Watch Video */}
          <button className="flex items-center gap-3 text-sm text-[#111] transition hover:text-[#003478] sm:text-base">

            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#003478] text-white">
              <Play size={12} fill="currentColor" />
            </span>

            <span>Watch Video</span>

          </button>

        </div>

      </div>


      {/* =====================================================
          BOTTOM CTA
      ====================================================== */}
      <div className="flex h-[55px] items-center justify-center bg-[#292d2d] mt-10 lg:mt-25">

        <button className="px-4 text-center text-xl font-light tracking-wide text-white transition hover:text-gray-300 sm:text-2xl">
          Custom Order Your Mustang
        </button>

      </div>

    </section>
  );
};

export default Hero;