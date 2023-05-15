import React, { useState } from "react";

function About() {
  const [currentTab, setCurrentTab] = useState("1");
  return (
    <div className="w-full flex flex justify-center relative">
      <div className="aboutblob"></div>
      <div className="desktop:w-10/12 desktop:max-w-custom1500 tablet:w-11/12 mobile:w-11/12	flex flex-col items-center">
        <h1 className="mt-12 text-primary-color text-2xl font-semibold font-gola">
          HOW IT WORKS
        </h1>
        <div className="flex mobile:flex-col-reverse w-full tabanddesk:my-20 mobile:my-10">
          <div className="desktop:w-1/2 tablet:w-1/2 w-full tabanddesk:mr-10">
            <div
              onClick={() => setCurrentTab("1")}
              className={`transition-all ease-in-out duration-500 cursor-pointer opacity-100 w-full flex items-center py-5 px-5 tababdedesk:mr-16 ${
                currentTab === "1"
                  ? "bg-tab-color border border-tab-border-color rounded-md"
                  : ""
              }`}
            >
              <h2
                className={`transition-all ease-in-out duration-500 font-gola desktop:text-2xl tablet:text-xl font-semibold rounded-full bg-grey-bg tabanddesk:w-14 tabanddesk:h-14 flex items-center justify-center
                ${
                  currentTab === "1"
                    ? "bg-primary-color text-white"
                    : "bg-grey-bg text-black"
                }
                `}
                style={{ minWidth: "55px", height: "55px" }}
              >
                01
              </h2>
              <div className="ml-6">
                <h2 className="font-gola desktop:text-size28 tablet:text-xl font-semibold">
                  Fill the application
                </h2>
                <p className="font-gola text-base font-light">
                  Sign up and create your profile
                </p>
              </div>
            </div>
            <div
              onClick={() => setCurrentTab("2")}
              className={`transition-all ease-in-out duration-500  opacity-100 cursor-pointer flex items-center py-5 px-5 tababdedesk:mr-16 ${
                currentTab === "2"
                  ? "bg-tab-color border border-tab-border-color rounded-md"
                  : ""
              }`}
            >
              <h2
                className={`transition-all ease-in-out duration-500 font-gola desktop:text-2xl tablet:text-xl font-semibold rounded-full bg-grey-bg tabanddesk:w-14 tabanddesk:h-14 flex items-center justify-center
                ${
                  currentTab === "2"
                    ? "bg-primary-color text-white"
                    : "bg-grey-bg text-black"
                }
                `}
                style={{ minWidth: "55px", height: "55px" }}
              >
                02
              </h2>
              <div className="ml-6">
                <h2 className="font-gola desktop:text-size28 tablet:text-xl font-semibold">
                  Let the banks bid
                </h2>
                <p className="font-gola text-base font-light">
                  Wait for the banks to bid for your application
                </p>
              </div>
            </div>
            <div
              onClick={() => setCurrentTab("3")}
              className={`transition-all ease-in-out duration-500 opacity-100 cursor-pointer flex items-center py-5 px-5 tababdedesk:mr-16 ${
                currentTab === "3"
                  ? "bg-tab-color border border-tab-border-color rounded-md"
                  : ""
              }`}
            >
              <h2
                className={`transition-all ease-in-out duration-500 font-gola desktop:text-2xl tablet:text-xl font-semibold rounded-full bg-grey-bg tabanddesk:w-14 tabanddesk:h-14 flex items-center justify-center
                ${
                  currentTab === "3"
                    ? "bg-primary-color text-white"
                    : "bg-grey-bg text-black"
                }
                `}
                style={{ minWidth: "55px", height: "55px" }}
              >
                03
              </h2>
              <div className="ml-6">
                <h2 className="font-gola desktop:text-size28 tablet:text-xl font-semibold">
                  Accept a bid
                </h2>
                <p className="font-gola text-base font-light">
                  Choose from various loan offers from banks
                </p>
              </div>
            </div>
            <div
              onClick={() => setCurrentTab("4")}
              className={`transition-all ease-in-out duration-500 opacity-100 cursor-pointer flex items-center py-5 px-5 tababdedesk:mr-16 ${
                currentTab === "4"
                  ? "bg-tab-color border border-tab-border-color rounded-md"
                  : ""
              }`}
            >
              <h2
                className={`transition-all ease-in-out duration-500 font-gola desktop:text-2xl tablet:text-xl font-semibold rounded-full bg-grey-bg tabanddesk:w-14 tabanddesk:h-14 flex items-center justify-center
                ${
                  currentTab === "4"
                    ? "bg-primary-color text-white"
                    : "bg-grey-bg text-black"
                }
                `}
                style={{ minWidth: "55px", height: "55px" }}
              >
                04
              </h2>
              <div className="ml-6">
                <h2 className="font-gola desktop:text-size28 tablet:text-xl font-semibold">
                  Choose Best Offers
                </h2>
                <p className="font-gola text-base font-light">
                  Choose from various loan offers from banks
                </p>
              </div>
            </div>
          </div>
          <div className="desktop:w-1/2 tablet:w-1/2 transition-all ease-in-out duration-500 flex items-center mobile:mb-10 h-full">
            <img
              className="opacity-100"
              src={`${currentTab === "1" ? "./tab1.png" : "./tab2.png"}`}
              alt="Tab 1"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
