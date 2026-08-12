import React from "react";

const CustomOrder = () => {
  const steps = [
    {
      number: "1",
      title: "Build & Price Your Vehicle",
      description:
        "Choose model, trim & options to create your custom order.",
      color: "bg-[#5141d8]",
    },
    {
      number: "2",
      title: "Share With Your Dealer",
      description:
        "When you're finished building, submit your vehicle to your local dealer.",
      color: "bg-[#ff5a3d]",
    },
    {
      number: "3",
      title: "Place Your Order",
      description:
        "Your dealer will contact you. Answer the questions before placing your order.",
      color: "bg-[#68cbea]",
    },
  ];

  const specifications = [
    {
      title: "Starting At",
      value: "$27,205",
    },
    {
      title: "EPA-Est. MPG City/Hwy",
      value: "21/30",
    },
    {
      title: "Seating For",
      value: "4",
    },
  ];

  return (
    <section className="w-full bg-white px-5 py-8 sm:px-8 lg:px-10">

      {/* Heading */}
      <div className="text-center">
        <p className="text-base text-gray-900 sm:text-lg">
          Get the vehicle you want with an online custom order.
        </p>
      </div>

      {/* Steps */}
      <div className="mx-auto mt-5 grid max-w-5xl grid-cols-1 md:grid-cols-3">

        {steps.map((step, index) => (
          <React.Fragment key={step.number}>

            <div className="mx-auto flex min-h-[168px] w-full max-w-[350px]  flex-col items-center rounded-md border border-gray-100 bg-white px-5 py-6 shadow-sm">

              {/* Number */}
              <div
                className={`flex h-7 w-7 items-center justify-center rounded-full ${step.color} text-lg text-white`}
              >
                {step.number}
              </div>

              {/* Title */}
              <h3 className="mt-3 text-center text-lg font-semibold text-gray-900">
                {step.title}
              </h3>

              {/* Description */}
              <p className="mt-3 max-w-[220px] text-center text-[25px] leading-[1.3] text-gray-700">
                {step.description}
              </p>

              {/* Learn More */}
              <a
                href="#"
                className="mt-auto text-[25px] text-[#ff5a3d] transition hover:underline"
              >
                Learn more&nbsp; ›
              </a>
            </div>

            {/* Divider */}
            {index < steps.length - 1 && (
              <div className="mx-auto hidden h-[118px] w-px self-center bg-gray-300 md:block" />
            )}

          </React.Fragment>
        ))}
      </div>

      {/* Buttons */}
      <div className="mt-8 flex flex-col items-center gap-2">

        <button className="bg-[#003478] px-5 py-2.5 text-lg text-white transition hover:bg-[#00285c]">
          Create Your Custom Order
        </button>

        <a
          href="#"
          className="text-lg text-[#0071bc] underline transition hover:text-[#003478]"
        >
          Custom Order Explained
        </a>

      </div>

      {/* Specifications */}
      <div className="mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-8">

        {specifications.map((spec) => (
          <div
            key={spec.title}
            className="flex min-h-[80px] flex-col items-center justify-center rounded-lg bg-white px-4 py-3 shadow-[0_8px_25px_rgba(0,0,0,0.08)]"
          >
            <p className="text-lg font-semibold text-gray-900">
              {spec.title}
            </p>

            <p className="mt-1 text-5xl font-light text-gray-900 sm:text-4xl">
              {spec.value}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
};

export default CustomOrder;