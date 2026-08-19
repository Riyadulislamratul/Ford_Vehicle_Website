import React from "react";
import { CheckCircle } from "lucide-react";
import PowerDoesMatterImage from "../assets/engine-1.png";

const PowerDoesMatter = () => {
  const features = [
    "310 horsepower",
    "350 lb.-ft. of torque*",
    "Turbocharging and direct injection",
    "Twin independent variable camshaft timing (Ti-VCT)",
    "Twin independent variable camshaft timing (Ti-VCT)",
  ];

  return (
    <section className="w-full overflow-hidden bg-white">

      {/* Section Header */}
      <div className="flex h-11 items-center justify-center bg-[#292d2d]">
        <h2 className="text-2xl font-light tracking-wide text-white sm:text-xl">
          POWER DOES MATTER
        </h2>
      </div>

      {/* Intro */}
      <div className="mx-auto container px-6 pt-5 text-center sm:px-8 sm:pt-6">
        <p className="text-2xl leading-6 text-gray-800 sm:text-base">
          At the heart of every Mustang is a high-powered engine. Mustang
          offers four available engines,
          <br className="hidden sm:block" />
          including the 5.2L supercharged V8.
        </p>
      </div>

      {/* Main Content */}
      <div className="mx-auto flex container flex-col px-6 pb-12 pt-10 sm:px-10 sm:pt-12 lg:flex-row lg:items-center lg:gap-10 lg:px-12 lg:pb-16">

        {/* Left Content */}
        <div className="w-full lg:w-[45%]">

          {/* Engine Name */}
          <h3 className="text-3xl font-light text-gray-900 sm:text-3xl">
            ExhoBoost
            <sup className="ml-0.5 text-xs">®</sup>
          </h3>

          {/* Description */}
          <p className="mt-5 max-w-[530px] text-2xl leading-6 text-gray-800 sm:text-base">
            It's a first Ecoboost® engine powered by Ford Performance
            and it's not afraid to prove it. The 2.3L high-performance
            engine differentiates itself with a slightly larger twin-scroll
            turbo compressor.
          </p>

          {/* Features */}
          <ul className="mt-6 space-y-3">
            {features.map((feature, index) => (
              <li
                key={index}
                className="flex items-center gap-3 text-lg text-gray-800 sm:text-base"
              >
                <CheckCircle
                  size={15}
                  className="shrink-0 fill-[#28723b] text-white"
                />

                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Image */}
        <div className="mt-10 flex h-[260px] w-full items-center justify-center sm:h-[330px] lg:mt-0 lg:h-[350px] lg:w-[55%]">

          {/* Add your engine image here later */}
          {/* <div className="flex h-full w-full items-center justify-center bg-gray-50 text-sm text-gray-400">
            Engine Image
          </div> */}

          <img
            src={PowerDoesMatterImage}
            alt="Ford EcoBoost Engine"
            className="h-full w-full object-contain"
          />
         

        </div>

      </div>

    </section>
  );
};

export default PowerDoesMatter;