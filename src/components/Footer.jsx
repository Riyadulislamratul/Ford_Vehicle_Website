import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import FooterImage from "../assets/footer.png";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#151515] text-white">

      {/* =====================================================
          LARGE SCREEN DESIGN
          Your original design is preserved
      ====================================================== */}
      <div className="relative mx-auto hidden min-h-[540px] container px-6 sm:px-10 lg:block lg:px-20">

        {/* Content */}
        <div className="relative z-10 max-w-[580px] pt-16 sm:pt-20 lg:pt-24">

          {/* Heading */}
          <h2 className="text-3xl font-light leading-[1.2] sm:text-4xl lg:text-[38px]">
            Quality means doing it right
            <br />
            when no one is looking
            <span className="ml-2 text-sm text-gray-400 sm:text-base">
              – Henry Ford
            </span>
          </h2>

          {/* Description */}
          <p className="mt-8 max-w-[430px] text-lg leading-7 text-gray-300">
            Our dealership takes your privacy seriously and is committed to
            safeguarding your privacy online. Because we do gather certain types
            of information from you.
          </p>

          {/* Contact Button */}
          <button className="mt-8 bg-[#003478] px-8 py-4 text-lg font-medium text-white transition hover:bg-[#00285c]">
            Contact For Queries
          </button>
        </div>

        {/* Mustang Image */}
        <div className="absolute -right-119.75 top-8 hidden h-[584px] w-[1352px] lg:block">
          <img
            src={FooterImage}
            alt="Mustang"
            className="h-full w-full"
          />
        </div>

        {/* Bottom Navigation */}
        <div className="mt-55">

          <div className="mt-20 flex flex-col items-center gap-7 border-b border-gray-700 pb-7 md:flex-row md:justify-center md:gap-8">

            {/* Logo */}
            <a href="#" className="shrink-0">
              <img
                src="/logo.png"
                alt="Ford"
                className="w-20 sm:w-24"
              />
            </a>

            {/* Links */}
            <nav className="flex flex-wrap justify-center gap-x-7 gap-y-4 text-lg text-gray-300 sm:gap-x-9">

              <a
                href="#"
                className="transition hover:text-white"
              >
                Dealership
              </a>

              <a
                href="#"
                className="transition hover:text-white"
              >
                Support
              </a>

              <a
                href="#"
                className="transition hover:text-white"
              >
                Experience Ford
              </a>

              <a
                href="#"
                className="transition hover:text-white"
              >
                Shopping Tools
              </a>

            </nav>

            {/* Social Icons */}
            <div className="flex items-center gap-5">

              <a
                href="#"
                aria-label="Facebook"
                className="transition hover:text-gray-400"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="transition hover:text-gray-400"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="transition hover:text-gray-400"
              >
                <FaYoutube />
              </a>

            </div>
          </div>

          {/* Copyright */}
          <p className="py-10 text-center text-[20px] text-gray-500">
            Copyright © 2026 All Rights Reserved. Developed by{" "}
            <a
              href="https://riyadulislamratul-pearl-omega-kwze47xo7e.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#003478] hover:underline"
            >
              Riyadul Islam Ratul
            </a>
          </p>

        </div>
      </div>


      {/* =====================================================
          TABLET + MOBILE
          Separate responsive design
      ====================================================== */}
      <div className="block lg:hidden">

        {/* Content */}
        <div className="px-6 py-12 sm:px-10 sm:py-16">

          {/* Heading */}
          <h2 className="text-3xl font-light leading-[1.2] sm:text-4xl">

            Quality means doing it right
            <br />

            when no one is looking

            <span className="ml-2 text-sm text-gray-400 sm:text-base">
              – Henry Ford
            </span>

          </h2>


          {/* Description */}
          <p className="mt-6 max-w-[600px] text-base leading-7 text-gray-300 sm:text-lg">
            Our dealership takes your privacy seriously and is committed to
            safeguarding your privacy online. Because we do gather certain types
            of information from you.
          </p>


          {/* Contact Button */}
          <button className="mt-7 bg-[#003478] px-7 py-4 text-base font-medium text-white transition hover:bg-[#00285c] sm:text-lg">
            Contact For Queries
          </button>

        </div>


        {/* Responsive Mustang Image */}
        <div className="w-full overflow-hidden">

          <img
            src={FooterImage}
            alt="Mustang"
            className="h-auto w-full object-cover object-center"
          />

        </div>


        {/* Mobile/Tablet Navigation */}
        <div className="px-6 py-10 sm:px-10">

          <div className="flex flex-col items-center gap-8 border-b border-gray-700 pb-8">

            {/* Logo */}
            <a href="#" className="shrink-0">
              <img
                src="/logo.png"
                alt="Ford"
                className="w-20 sm:w-24"
              />
            </a>


            {/* Links */}
            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-5 text-base text-gray-300 sm:gap-x-9 sm:text-lg">

              <a
                href="#"
                className="transition hover:text-white"
              >
                Dealership
              </a>

              <a
                href="#"
                className="transition hover:text-white"
              >
                Support
              </a>

              <a
                href="#"
                className="transition hover:text-white"
              >
                Experience Ford
              </a>

              <a
                href="#"
                className="transition hover:text-white"
              >
                Shopping Tools
              </a>

            </nav>


            {/* Social Icons */}
            <div className="flex items-center gap-7">

              <a
                href="#"
                aria-label="Facebook"
                className="text-lg transition hover:text-gray-400"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="text-lg transition hover:text-gray-400"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="text-lg transition hover:text-gray-400"
              >
                <FaYoutube />
              </a>

            </div>

          </div>


          {/* Copyright */}
          <p className="py-8 text-center text-sm leading-6 text-gray-500 sm:text-base">

            Copyright © 2026 All Rights Reserved.
            <br className="sm:hidden" />

            {" "}Developed by{" "}

            <a
              href="https://riyadulislamratul-pearl-omega-kwze47xo7e.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#003478] hover:underline"
            >
              Riyadul Islam Ratul
            </a>

          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;