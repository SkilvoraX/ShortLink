import React from "react";
import ParallaxImage from "./FooterTopImage";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <>
      <ParallaxImage />
    <footer className="bg-[#012945] text-white flex md:flex-row flex-col font-kanit">
      {/* Footer Top - Logo and Description */}
      <div className="container md:w-[75%] pt-[120px] pb-[40px] mb:pl-[60px] mx-auto px-6 py-12 md:flex-row md:justify-between md:items-start gap-8">

        {/* Footer Links */}
        <div className="flex md:flex-row flex-col px-[15px] pb-[40px] md:pb-[80px] gap-6 justify-between">
          <div className="md:w-1/3 flex flex-col  items-start gap-4">
            <a href="https://skilvorax.com/">
              <img
                src="https://skilvorax.com/wp-content/uploads/2023/12/white-logo-e1764952441463.png"
                alt="SkilvoraX Logo"
                className="w-[279px]"
              />
            </a>
            <p className="text-[16px]/[23.5px] font-400 text-[#999]">
              Expert tech mentors delivering one-on-one learning, corporate
              training, tech consultation, and project support.
            </p>
            <div className="flex gap-4 mt-2">
              <a href="#" target="_blank" aria-label="Facebook">
                <FaFacebookF className="w-5 h-5 hover:text-blue-500" />
              </a>
              <a href="https://x.com/skilvoraX" target="_blank" aria-label="Twitter">
                <FaTwitter className="w-5 h-5 hover:text-blue-400" />
              </a>
              <a href="http://Instagram.com/skilvorax" target="_blank" aria-label="Instagram">
                <FaInstagram className="w-5 h-5 hover:text-pink-500" />
              </a>
              <a href="https://www.linkedin.com/company/skilvorax/" target="_blank" aria-label="LinkedIn">
                <FaLinkedinIn className="w-5 h-5 hover:text-blue-700" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[20px]/[28.5px] text-[#fff] font-semibold mb-[20px]">Information</h4>
            <ul className="space-y-1">
              <li>
                <a href="https://skilvorax.com/about-us" className="text-[#999] hover:text-[#fff]">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="https://skilvorax.com/axtra-portfolio/arteck-lyon-conseil/"
                  className="text-[#999] hover:text-[#fff]"
                >
                  Services
                </a>
              </li>
              <li>
                <a href="https://skilvorax.com/contact-us" className="text-[#999] hover:text-[#fff]">
                  Contact
                </a>
              </li>
              <li>
                <a href="/login" className="text-[#999] hover:text-[#fff]">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-[20px]">Get in Touch</h4>
            <p className="text-[#999] hover:text-[#fff] text-[16px] ">hello@skilvorax.com</p>
          </div>
        </div>
        {/* Footer Bottom */}
      <div className="hidden md:block bg-[#012945] py-6 pl-[15px] md:pt-[40px] text-sm text-[16px] text-[#999]">
        © 2025 | All rights reserved by SkilvoraX
      </div>
      </div>

      <div className="md:w-1/3 md:block flex justify-center align-center pt-[120px] md:pl-6 pb-[40px] flex flex-col gap-4 bg-[#fff]">
          <h2 className="text-[32px] w-full md:max-w-[285px] text-[#012945] font-medium mb-6 text-center md:text-left">Ready to start? Tell us what you need.</h2>
          <a
            href="https://skilvorax.com/contact-us"
            target="_blank"
            className="mx-auto md:ml-[30px] font-semibold h-[168px] w-[168px] flex items-center justify-center border rounded-full transition text-[#012945] hover:border-[#C9F31D] hover:bg-[#C9F31D]"
          >
            Contact Us
          </a>
      </div>
          <div className="md:hidden block bg-[#012945] py-6 pl-[15px] md:pt-[40px] text-sm text-[16px] text-center text-[#fff]">
        © 2025 | All rights reserved by SkilvoraX
      </div>
    </footer>
    </>
  );
};

export default Footer;
