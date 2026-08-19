import React from "react";
import { CheckCircle } from "lucide-react";
import EngineImage from "../assets/engine-1.png";

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
      <div className="flex h-12 items-center justify-center bg-[#292d2d]">
        <h2 className="text-xl font-light tracking-wide text-white sm:text-2xl">
          POWER DOES MATTER
        </h2>
      </div>

      {/* Intro */}
      <div className="mx-auto max-w-5xl px-6 pt-6 text-center sm:px-8 sm:pt-7">
        <p className="text-base leading-7 text-gray-800 sm:text-lg sm:leading-8">
          At the heart of every Mustang is a high-powered engine. Mustang
          offers four available engines,
          <br className="hidden sm:block" />
          including the 5.2L supercharged V8.
        </p>
      </div>

      {/* Main Content */}
      <div className="mx-auto flex max-w-6xl flex-col px-6 pb-14 pt-12 sm:px-10 sm:pt-14 lg:flex-row lg:items-center lg:gap-12 lg:px-12 lg:pb-16">

        {/* Left Content */}
        <div className="w-full lg:w-[45%]">

          {/* Engine Name */}
          <h3 className="text-3xl font-light text-gray-900 sm:text-4xl">
            ExhoBoost
            <sup className="ml-1 text-sm">®</sup>
          </h3>

          {/* Description */}
          <p className="mt-6 max-w-[500px] text-base leading-7 text-gray-800 sm:text-lg sm:leading-8">
            It's a first Ecoboost® engine powered by Ford Performance
            and it's not afraid to prove it. The 2.3L high-performance
            engine differentiates itself with a slightly larger twin-scroll
            turbo compressor.
          </p>

          {/* Features */}
          <ul className="mt-7 space-y-4">
            {features.map((feature, index) => (
              <li
                key={index}
                className="flex items-center gap-3 text-base text-gray-800 sm:text-lg"
              >
                <CheckCircle
                  size={19}
                  className="shrink-0 fill-[#28723b] text-white sm:h-5 sm:w-5"
                />

                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Image */}
        <div className="mt-10 flex h-[280px] w-full items-center justify-center sm:h-[350px] lg:mt-0 lg:h-[380px] lg:w-[55%]">

          {/* Add your engine image here */}
          {/* <div className="flex h-full w-full items-center justify-center bg-gray-50 text-base text-gray-400">
            Engine Image
          </div> */}

          
          <img
            src={EngineImage}
            alt="Ford EcoBoost Engine"
            className="h-full w-full object-contain"
          />
         

        </div>

      </div>

    </section>
  );
};

export default PowerDoesMatter;