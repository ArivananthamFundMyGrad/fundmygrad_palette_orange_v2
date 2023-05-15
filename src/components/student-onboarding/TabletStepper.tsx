import React from "react";

function TabletStepper({ currentStep }: { currentStep: string }) {
  return (
    <div>
      <ol
        style={{
          minHeight: "40px",
          maxHeight: "40px",
          marginBottom: "80px",
        }}
        className="desktop:hidden mobile:hidden flex items-center tabanddesk:min-w-custom600 mobile:w-full ml-10"
      >
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
          {currentStep === "1" && (
            <div className="absolute text-center -bottom-10 -left-12">
              Admission Status
            </div>
          )}
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
          {currentStep === "2" && (
            <div className="absolute text-primary-color text-center -bottom-10 -left-8">
              Course Details
            </div>
          )}
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
          {currentStep === "3" && (
            <div className="absolute  text-primary-color text-center -bottom-10 -left-8">
              Loan Details
            </div>
          )}
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
          {currentStep === "4" && (
            <div className="absolute  text-primary-color text-center -bottom-14 -left-8">
              Co-applicant Details
            </div>
          )}
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
          {currentStep === "5" && (
            <div className="absolute  text-primary-color text-center -bottom-14 -left-8">
              Education Qualification
            </div>
          )}
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
          {currentStep === "6" && (
            <div className="absolute  text-primary-color text-center -bottom-10 -left-8">
              Test Scores
            </div>
          )}
        </li>
        <li className="relative flex items-center w-full">
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
          {currentStep === "7" && (
            <div className="absolute  text-primary-color text-center -bottom-14 -left-8">
              Work Experience
            </div>
          )}
        </li>
      </ol>
    </div>
  );
}

export default TabletStepper;
