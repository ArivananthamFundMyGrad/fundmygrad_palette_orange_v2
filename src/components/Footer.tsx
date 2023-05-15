import React from "react";

function Footer() {
  return (
    <div className="w-full flex flex justify-center">
      <div className="tabanddesk:w-10/12 desktop:max-w-custom1300 mobile:w-11/12 flex mobile:flex-col tabanddesk:justify-between tabanddesk:py-12 mobile:pt-12 mobile:pb-6">
        <img
          className="mobile:w-2/5 tabanddesk:h-8"
          src="./footerlogo.svg"
          alt="Footer Logo"
        />
        <div className="flex items-center mobile:justify-between mobile:mt-5">
          <div className="flex">
            <img
              style={{ width: "24px", height: "20px" }}
              src="./twitter.png"
              alt="Twitter Icon"
            />
            <img
              className="tabanddesk:ml-8 mobile:ml-4"
              style={{ width: "20px", height: "20px" }}
              src="./linkedin.png"
              alt="Linkedin Icon"
            />
          </div>

          <div className="ml-8">
            <p className="font-golo text-footer-color text-base font-medium">
              contact@fundmygrad.com
            </p>
            <p className="text-right font-golo text-footer-color text-base font-medium">
              +91 9988776654
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
