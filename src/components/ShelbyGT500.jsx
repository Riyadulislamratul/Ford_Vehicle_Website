import React from "react";
import { CheckCircle } from "lucide-react";
import ShelbyEngineImage from "../assets/shelby-engine.png";

const ShelbyGT500 = () => {
  const features = [
    "760 horsepower",
    "625 lb.-ft. of torque*",
  ];

  return (
    <section className="w-full overflow-hidden bg-white">

      {/* Main Content */}
      <div className="container mx-auto flex flex-col px-6 py-12 sm:px-10 sm:py-16 lg:flex-row lg:items-center lg:gap-12 lg:px-12 lg:py-20">

        {/* =========================
            ENGINE IMAGE
        ========================== */}
        <div className="flex w-full items-center justify-center lg:w-[55%]">

          <img
            src={ShelbyEngineImage}
            alt="Shelby GT500 Engine"
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


        {/* =========================
            TEXT CONTENT
        ========================== */}
        <div className="mt-10 w-full lg:mt-0 lg:w-[45%]">

          {/* Title */}
          <h2 className="text-3xl font-light text-gray-900 sm:text-4xl lg:text-5xl">
            Shelby
            <sup className="ml-1 text-base sm:text-lg">
              ®
            </sup>{" "}
            GT500
            <sup className="ml-1 text-base sm:text-lg">
              ®
            </sup>
          </h2>


          {/* Description */}
          <div className="mt-7">

            <p className="max-w-[550px] text-base leading-7 text-gray-800 sm:text-lg sm:leading-8 lg:text-xl lg:leading-9">
              5.2L supercharged cross-plane crank V8.
              <br />
              Top-of-the-line power that you can feel.
            </p>

          </div>


          {/* Features */}
          <ul className="mt-8 space-y-5">

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


          {/* Standard Text */}
          <p className="mt-8 text-base text-gray-800 sm:text-lg lg:text-xl">
            Standard on the Shelby GT500
          </p>

        </div>

      </div>

    </section>
  );
};

export default ShelbyGT500;