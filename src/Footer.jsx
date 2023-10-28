import React from "react";
import X from "./assets/x.png";
import facebook from "./assets/facebook.png";
import instagram from "./assets/instagram.png";

const Footer = () => {
  return (
    <footer className="bg-[#161616] py-20">
      <div className="grid grid-cols-3  md:grid-cols-2 sm:grid-cols-1 gap-12 w-[1100px] max-w-[90%] mx-auto">
        <div>
          <a href="#" className="text-[60px] font-bold italic">
            Logo
          </a>
          <p className="text-lg font-thin">
            We are the best in fitness service and we provide you best of our
            instructors all over the state.
          </p>
          <ul className="flex gap-6 mt-6">
            <li>
              <a href="#">
                <img
                  src={X}
                  alt="x"
                  className="w-[30px] aspect-square object-cover"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src={facebook}
                  alt="facebook"
                  className="w-[30px] aspect-square object-cover"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src={instagram}
                  alt="instagram"
                  className="w-[30px] aspect-square object-cover"
                />
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-bold">Quick Links</h2>
          <ul className="mt-8">
            <li className="mb-3 text-lg hover:text-purple-500">
              <a href="#">Location</a>
            </li>
            <li className="mb-3 text-lg hover:text-purple-500">
              <a href="#">Promotion</a>
            </li>
            <li className="mb-3 text-lg hover:text-purple-500">
              <a href="#">Corporate Plan</a>
            </li>
            <li className="mb-3 text-lg hover:text-purple-500">
              <a href="#">Membership Plan</a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-bold">Working Hours</h2>

          <ul className="mt-8">
            <li className="flex justify-between mb-4">
              <span>Monday - Friday</span>
              <span>6am - 9pm</span>
            </li>
            <li className="flex justify-between mb-4">
              <span>Saturday</span>
              <span>6am - 8pm</span>
            </li>
            <li className="flex justify-between mb-4">
              <span>Public Holidays</span>
              <span>7am - 8pm</span>
            </li>
            <li className="flex justify-between mb-4">
              <span>Cleaning</span>
              <span>2pm - 3pm, Daily</span>
            </li>
            <li className="flex justify-between mb-4">
              <span>Close</span>
              <span>Dec 25 & 26, Jan 1</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
