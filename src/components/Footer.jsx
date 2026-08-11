import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import FooterImage from "../assets/footer.png";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#151515] text-white">
      {/* Main Footer Content */}
      <div className="relative mx-auto min-h-[540px] container px-6 sm:px-10 lg:px-20">
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
          <img src={FooterImage} alt="Mustang" className="h-full w-full" />
        </div>

        {/* Bottom Navigation */}
        <div className=" mt-55">
          <div className="flex flex-col items-center gap-7 border-b border-gray-700 pb-7 md:flex-row md:justify-center md:gap-8 mt-20">
            {/* Logo */}
            <a href="#" className="shrink-0">
              <img src="/logo.png" alt="Ford" className="w-20 sm:w-24" />
            </a>

            {/* Links */}
            <nav className="flex flex-wrap justify-center gap-x-7 gap-y-4 text-lg text-gray-300 sm:gap-x-9">
              <a href="#" className="transition hover:text-white">
                Dealership
              </a>

              <a href="#" className="transition hover:text-white">
                Support
              </a>

              <a href="#" className="transition hover:text-white">
                Experience Ford
              </a>

              <a href="#" className="transition hover:text-white">
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
