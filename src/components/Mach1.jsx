import React from "react";
import { CheckCircle } from "lucide-react";
import Mach1EngineImage from "../assets/mach1-engine.png";

const Mach1 = () => {
  const features = [
    "480 horsepower at 7,000 rpm",
    "420 lb.-ft. of torque* at 4,600rpm",
    "Two side heat exchanges for track endurance",
    "6-speed manual transmission with rev-matching",
  ];

  return (
    <section className="w-full overflow-hidden bg-white">

      {/* Main Content */}
      <div className="container mx-auto flex flex-col px-6 py-12 sm:px-10 sm:py-16 lg:flex-row lg:items-center lg:gap-12 lg:px-12 lg:py-20">

        {/* =========================
            LEFT CONTENT
        ========================== */}
        <div className="w-full lg:w-[45%]">

          {/* Title */}
          <h2 className="text-4xl font-light text-gray-900 sm:text-5xl lg:text-5xl">
            Mach 1
          </h2>

          {/* Engine Information */}
          <div className="mt-7">

            <p className="text-lg font-medium text-gray-900 sm:text-xl lg:text-2xl">
              5.0L Tri-VCT V8
            </p>

            <p className="mt-2 max-w-[560px] text-base leading-7 text-gray-700 sm:text-lg sm:leading-8 lg:text-xl lg:leading-9">
              The pinnacle of 5-liter performance, this engine is uniquely
              tuned andcalibrated for speed, And with the Mach 1
              Handling Package.
            </p>

          </div>

          {/* Features */}
          <ul className="mt-9 space-y-5">

            {features.map((feature, index) => (
              <li
                key={index}
                className="flex items-center gap-4 text-base text-gray-800 sm:text-lg lg:text-xl"
              >

                <CheckCircle
                  size={22}
                  className="shrink-0 fill-[#28723b] text-white sm:h-6 sm:w-6"
                />

                <span>{feature}</span>

              </li>
            ))}

          </ul>

        </div>


        {/* =========================
            ENGINE IMAGE
        ========================== */}
        <div className="mt-10 flex w-full items-center justify-center sm:mt-12 lg:mt-0 lg:w-[55%]">

          <img
            src={Mach1EngineImage}
            alt="Ford Mustang Mach 1 Engine"
            className="
              h-auto
              w-full
              max-w-[700px]
              object-contain
              sm:max-w-[750px]
              lg:max-w-[800px]
            "
          />

        </div>

      </div>

    </section>
  );
};

export default Mach1;