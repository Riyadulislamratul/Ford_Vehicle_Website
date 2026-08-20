import React from "react";
import { CheckCircle } from "lucide-react";
import GTEngineImage from "../assets/gt-engine.png";

const GT = () => {
  const features = [
    "460 horsepower",
    "420 lb.-ft. of tire-squealing torque*",
    "Port fuel direct injection",
  ];

  return (
    <section className="w-full overflow-hidden bg-white">

      {/* Main Content */}
      <div className="mx-auto flex min-h-[600px] container flex-col items-center gap-54 px-6 py-12 sm:px-10 sm:py-16 lg:flex-row lg:px-12 lg:py-16">

        {/* =========================
            ENGINE IMAGE
        ========================== */}
        <div className="flex w-full items-center justify-center lg:w-[55%]">

          <img
            src={GTEngineImage}
            alt="Ford Mustang GT Engine"
            className="h-auto w-[85%] max-w-[650px] object-contain sm:w-[80%] lg:w-full"
          />

        </div>


        {/* =========================
            TEXT CONTENT
        ========================== */}
        <div className="mt-10 w-full lg:mt-0 lg:w-[45%]">

          {/* GT */}
          <h2 className="text-4xl font-light text-gray-900 sm:text-5xl lg:text-6xl">
            GT
          </h2>


          {/* Engine Information */}
          <div className="mt-7">

            <p className="text-lg font-medium text-gray-900 sm:text-xl lg:text-2xl">
              5.0L Ti-VCT V8
            </p>

            <p className="mt-2 text-base leading-7 text-gray-700 sm:text-lg lg:text-xl">
              An engine that comes standard with a hit of adrenaline.
            </p>

          </div>


          {/* Features */}
          <ul className="mt-9 space-y-6">

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

      </div>

    </section>
  );
};

export default GT;