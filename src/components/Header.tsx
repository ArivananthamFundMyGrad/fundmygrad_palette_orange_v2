import React from "react";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();
  return (
    <div className="bg-[#FFE1CF] w-full flex flex-col items-center">
      <div
        style={{ zIndex: "9999" }}
        className="fixed bg-[#FFE1CF] w-full flex justify-center"
      >
        <div className="desktop:max-w-custom1300 w-11/12 flex justify-between tabanddesk:py-5 mobile:py-4">
          <img width={180} src="./logo.svg" alt="fundmygrad logo" />
          <div className="mobile:hidden flex">
            <button
              type="button"
              className="h-10 mr-5 font-gola text-button-text hover:text-black border border-border-color focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
            >
              <img width={20} src="./whatsapp.png" alt="Whatsapp Image" />
              &nbsp; Need assitance?
            </button>
            <button
              onClick={() => router.push("/student-auth")}
              type="button"
              className="h-10 font-gola	text-white bg-primary-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
            >
              Student Login
            </button>
          </div>
          <div className="tabanddesk:hidden flex">
            <button
              type="button"
              className="mr-3 font-gola text-button-text hover:text-black font-medium rounded-lg text-sm text-center inline-flex items-center"
            >
              <img width={30} src="./whatsapp.png" alt="Whatsapp Image" />
            </button>
            <button
              type="button"
              onClick={() => router.push("/student-auth")}
              className="font-gola text-button-text hover:text-black font-medium rounded-lg text-sm text-center inline-flex items-center"
            >
              <img width={40} src="./profileAvatar.svg" alt="Profile Avatar" />
            </button>
          </div>
        </div>
        {/* Header */}
      </div>
      <div className="tabanddesk:w-11/12 desktop:max-w-custom1300 mobile:w-width95 flex tabanddesk:pt-20 mobile:pt-16 justify-between">
        <div className=" mobile:my-10 tabanddesk:w-1/2 mobile:w-full flex mobile:flex-col items-center">
          <div className="tabanddesk:hidden w-full flex justify-center mb-16">
            <img width={"80%"} src="./header.svg" alt="Header Image" />
          </div>
          <h1 className="mobile:mb-5 tabanddesk:pr-10 tablet:text-4xl mobile:text-4xl tablet:leading-relaxed desktop:lineheight67 desktop:text-size56 font-gola font-bold">
            We make finding a bank loan to{" "}
            <span className="text-primary-color">fund</span> your study overseas
            easier
          </h1>
        </div>
        <div className="mobile:hidden w-1/2 py-16">
          <img
            className="ml-20"
            width={"80%"}
            src="./header.svg"
            alt="Header Image"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
