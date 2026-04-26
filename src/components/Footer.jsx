import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlagUsa } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Top Section */}
      <div
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="bg-[var(--color-lightBlue)] w-full text-center py-4 cursor-pointer hover:bg-[#4a5c70]">
        <p className="text-white text-xs">Back to top</p>
      </div>
      {/* Middle Section */}
      <div className="bg-[var(--color-lightBlue)] w-full flex justify-center py-5">
        <div className="max-w-[1200px] w-full flex flex-wrap justify-center">
          <div className="w-full sm:w-1/2 lg:w-auto px-8 text-left">
            <h3 className="font-bold text-white mt-3">Get to Know Us</h3>
            <ul className="text-xs cursor-pointer m-1 text-white">
              <li className="m-2 hover:underline">Careers</li>
              <li className="m-2 hover:underline">Amazon Newsletter</li>
              <li className="m-2 hover:underline">About Amazon</li>
              <li className="m-2 hover:underline">Accessibility</li>
              <li className="m-2 hover:underline">Sustainability</li>
              <li className="m-2 hover:underline">Press Center</li>
              <li className="m-2 hover:underline">Investor Relations</li>
              <li className="m-2 hover:underline">Amazon Devices</li>
              <li className="m-2 hover:underline">Amazon Science</li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 lg:w-auto px-8 text-left">
            <h3 className="font-bold text-white mt-3">Make Money With Us</h3>
            <ul className="text-xs cursor-pointer m-1 text-white">
              <li className="m-2 hover:underline">Sell on Amazon</li>
              <li className="m-2 hover:underline">Sell apps on Amazon</li>
              <li className="m-2 hover:underline">Supply to Amazon</li>
              <li className="m-2 hover:underline">Protect & Build Your Brand</li>
              <li className="m-2 hover:underline">Sustainability</li>
              <li className="m-2 hover:underline">Become an Affiliate</li>
              <li className="m-2 hover:underline">Become a Delivery Driver</li>
              <li className="m-2 hover:underline">Start a Package Delivery Business</li>
              <li className="m-2 hover:underline">Advertise Your Products</li>
              <li className="m-2 hover:underline">Self Publish with Us</li>
              <li className="m-2 hover:underline">Become an Amazon Hub Partner</li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 lg:w-auto px-8 text-left">
            <h3 className="font-bold text-white mt-3">Amazon Payment Products</h3>
            <ul className="text-xs cursor-pointer m-1 text-white">
              <li className="m-2 hover:underline">Amazon Visa</li>
              <li className="m-2 hover:underline">Amazon Store Card</li>
              <li className="m-2 hover:underline">Amazon Secured Card</li>
              <li className="m-2 hover:underline">Amazon Business Card</li>
              <li className="m-2 hover:underline">Shop with Points</li>
              <li className="m-2 hover:underline">Credit Card Marketplace</li>
              <li className="m-2 hover:underline">Reload Your Balance</li>
              <li className="m-2 hover:underline">Gift Cards</li>
              <li className="m-2 hover:underline">Amazon Currency Converter</li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 lg:w-auto px-8 text-left">
            <h3 className="font-bold text-white mt-3">Let Us Help You</h3>
            <ul className="text-xs cursor-pointer m-1 text-[var(--color-background)]">
              <li className="m-2 hover:underline">Your Account</li>
              <li className="m-2 hover:underline">Your Orders</li>
              <li className="m-2 hover:underline">Shipping Rates & Policies</li>
              <li className="m-2 hover:underline">Amazon Prime</li>
              <li className="m-2 hover:underline">Returns and Replacements</li>
              <li className="m-2 hover:underline">Manage Your Content and Devices</li>
              <li className="m-2 hover:underline">Recalls and Product Safety Alerts</li>
              <li className="m-2 hover:underline">Registry & Gift List</li>
              <li className="m-2 hover:underline">Help</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Bottom Section */}
      <div className="bg-[var(--color-lightBlue)] w-full">
        <hr className="border-t border-white opacity-30" />
        <div className="flex justify-center items-center flex-wrap gap-6 py-8">
          <figure className="cursor-pointer mr-2">
            <img className="h-8 w-auto" src="/amazon.png" alt="Amazon" />
          </figure>
          <select className="text-white border border-white p-2 rounded bg-transparent" name="Language" id="Language">
            <option value="english">English</option>
            <option value="spanish">Español</option>
          </select>
          <div className="border border-white rounded p-2 text-white text-sm flex items-center gap-2">
            <FontAwesomeIcon icon={faFlagUsa} />
            <span>United States</span>
          </div>
        </div>
      </div>
      {/* Final Footer Links & Copyright */}
      <div className="bg-[var(--color-primary)] w-full py-8">
        <div className="max-w-[1200px] w-full mx-auto px-8">
          <ul className="text-white text-xs flex justify-center flex-wrap gap-4 cursor-pointer">
            <li className="hover:underline">Conditions of Use</li>
            <li className="hover:underline">Privacy Notice</li>
            <li className="hover:underline">Consumer Health Data Privacy Disclosure</li>
            <li className="hover:underline">Your Ads Privacy Choices</li>
          </ul>
        </div>
        <div className="flex justify-center mt-3">
          <p className="text-xs text-white">© 1996-2026, Amazon.com, Inc. or its affiliates</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
