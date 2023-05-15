import React from "react";

function MobileStepper({ currentStep }: { currentStep: string }) {
  return (
    <div className="desktop:hidden tablet:hidden w-full px-4 mb-10">
      <ol className=" flex items-center w-full">
        <li className="relative flex w-full items-center text-blue-600 after:content-[''] after:w-full after:h-1 after:border-b after:border-light-color after:border-4 after:inline-block ">
          <span
            className={`${
              currentStep === "1"
                ? "bg-primary-color text-white"
                : "bg-light-color text-black"
            } flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-22 shrink-0 `}
          >
            {currentStep !== "1" && parseInt(currentStep) > 1 ? (
              <img src="../GreenTick.svg" />
            ) : (
              "1"
            )}
          </span>
        </li>
        <li className="relative flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-light-color after:border-4 after:inline-block ">
          <span
            className={`${
              currentStep === "2"
                ? "bg-primary-color text-white"
                : "bg-light-color text-black"
            } flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-22 shrink-0 `}
          >
            {currentStep !== "2" && parseInt(currentStep) > 2 ? (
              <img src="../GreenTick.svg" />
            ) : (
              "2"
            )}
          </span>
        </li>
        <li className="relative flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-light-color after:border-4 after:inline-block ">
          <span
            className={`${
              currentStep === "3"
                ? "bg-primary-color text-white"
                : "bg-light-color text-black"
            } flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-22 shrink-0 `}
          >
            {currentStep !== "3" && parseInt(currentStep) > 3 ? (
              <img src="../GreenTick.svg" />
            ) : (
              "3"
            )}
          </span>
        </li>
        <li className="relative flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-light-color after:border-4 after:inline-block ">
          <span
            className={`${
              currentStep === "4"
                ? "bg-primary-color text-white"
                : "bg-light-color text-black"
            } flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-22 shrink-0 `}
          >
            {currentStep !== "4" && parseInt(currentStep) > 4 ? (
              <img src="../GreenTick.svg" />
            ) : (
              "4"
            )}
          </span>
        </li>
        <li className="relative flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-light-color after:border-4 after:inline-block ">
          <span
            className={`${
              currentStep === "5"
                ? "bg-primary-color text-white"
                : "bg-light-color text-black"
            } flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-22 shrink-0 `}
          >
            {currentStep !== "5" && parseInt(currentStep) > 5 ? (
              <img src="../GreenTick.svg" />
            ) : (
              "5"
            )}
          </span>
        </li>
        <li className="relative flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-light-color after:border-4 after:inline-block ">
          <span
            className={`${
              currentStep === "6"
                ? "bg-primary-color text-white"
                : "bg-light-color text-black"
            } flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-22 shrink-0 `}
          >
            {currentStep !== "6" && parseInt(currentStep) > 6 ? (
              <img src="../GreenTick.svg" />
            ) : (
              "6"
            )}
          </span>
        </li>
        <li className="relative flex items-center">
          <span
            className={`${
              currentStep === "7"
                ? "bg-primary-color text-white"
                : "bg-light-color text-black"
            } flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-22 shrink-0 `}
          >
            {currentStep !== "7" && parseInt(currentStep) > 7 ? (
              <img src="../GreenTick.svg" />
            ) : (
              "7"
            )}
          </span>
        </li>
      </ol>
    </div>
  );
}

export default MobileStepper;
