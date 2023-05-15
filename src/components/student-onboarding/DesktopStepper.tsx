import React from "react";
import { useRouter } from "next/router";

function DesktopStepper({ currentStep }: { currentStep: string }) {
  const router = useRouter();
  return (
    <div className="tablet:hidden mobile:hidden w-4/12 desktop:min-w-[350px] relative overflow-hidden desktop:max-w-custom460 bg-light-color h-full">
      <img
        onClick={() => router.push("/")}
        className="cursor-pointer pl-12 pt-6"
        width={160}
        src="/logo.svg"
        alt="fundmygrad logo"
      />
      <div className=" w-full pt-10 flex justify-center">
        <div className="h-full" style={{ width: "250px" }}>
          <h1 className="text-4xl font-gola font-semibold text-onboarding-text">
            Let's Get Started
          </h1>
          <div className="ml-5 mt-5">
            <ol className="relative text-gray-500 border-l border-gray-200">
              <li className="mb-10 ml-6">
                <span
                  className={`${
                    currentStep === "1"
                      ? "bg-primary-color text-white"
                      : "bg-white"
                  } absolute font-gola flex items-center justify-center w-8 h-8 rounded-full -left-4 `}
                >
                  {currentStep !== "1" && parseInt(currentStep) > 1 ? (
                    <img src="/GreenTick.svg" />
                  ) : (
                    "1"
                  )}
                </span>
                <h3 className="pl-2 pt-1 text-base font-gola font-normal text-black leading-tight">
                  Admission Status
                </h3>
              </li>
              <li className="mb-10 ml-6">
                <span
                  className={`${
                    currentStep === "2"
                      ? "bg-primary-color text-white"
                      : "bg-white"
                  } absolute font-gola flex items-center justify-center w-8 h-8 rounded-full -left-4 `}
                >
                  {currentStep !== "2" && parseInt(currentStep) > 2 ? (
                    <img src="/GreenTick.svg" />
                  ) : (
                    "2"
                  )}
                </span>
                <h3 className="pl-2 pt-1 text-base font-gola font-normal text-black leading-tight">
                  Course Details
                </h3>
              </li>
              <li className="mb-10 ml-6">
                <span
                  className={`${
                    currentStep === "3"
                      ? "bg-primary-color text-white"
                      : "bg-white"
                  } absolute font-gola flex items-center justify-center w-8 h-8 rounded-full -left-4 `}
                >
                  {currentStep !== "3" && parseInt(currentStep) > 3 ? (
                    <img src="/GreenTick.svg" />
                  ) : (
                    "3"
                  )}
                </span>
                <h3 className="pl-2 pt-1 text-base font-gola font-normal text-black leading-tight">
                  Loan Details
                </h3>
              </li>
              <li className="mb-10 ml-6">
                <span
                  className={`${
                    currentStep === "4"
                      ? "bg-primary-color text-white"
                      : "bg-white"
                  } absolute font-gola flex items-center justify-center w-8 h-8 rounded-full -left-4 `}
                >
                  {currentStep !== "4" && parseInt(currentStep) > 4 ? (
                    <img src="/GreenTick.svg" />
                  ) : (
                    "4"
                  )}
                </span>
                <h3 className="pl-2 pt-1 text-base font-gola font-normal text-black leading-tight">
                  Co-applicant Details
                </h3>
              </li>
              <li className="mb-10 ml-6">
                <span
                  className={`${
                    currentStep === "5"
                      ? "bg-primary-color text-white"
                      : "bg-white"
                  } absolute font-gola flex items-center justify-center w-8 h-8 rounded-full -left-4 `}
                >
                  {currentStep !== "5" && parseInt(currentStep) > 5 ? (
                    <img src="/GreenTick.svg" />
                  ) : (
                    "5"
                  )}
                </span>
                <h3 className="pl-2 pt-1 text-base font-gola font-normal text-black leading-tight">
                  Education Qualification
                </h3>
              </li>
              <li className="mb-10 ml-6">
                <span
                  className={`${
                    currentStep === "6"
                      ? "bg-primary-color text-white"
                      : "bg-white"
                  } absolute font-gola flex items-center justify-center w-8 h-8 rounded-full -left-4 `}
                >
                  {currentStep !== "6" && parseInt(currentStep) > 6 ? (
                    <img src="/GreenTick.svg" />
                  ) : (
                    "6"
                  )}
                </span>
                <h3 className="pl-2 pt-1 text-base font-gola font-normal text-black leading-tight">
                  Test Scores
                </h3>
              </li>
              <li className="ml-6">
                <span
                  className={`${
                    currentStep === "7"
                      ? "bg-primary-color text-white"
                      : "bg-white"
                  } absolute font-gola flex items-center justify-center w-8 h-8 rounded-full -left-4 `}
                >
                  {false ? <img src="/GreenTick.svg" /> : "7"}
                </span>
                <h3 className="pl-2 pt-1 text-base font-gola font-normal text-black leading-tight">
                  Work Experience
                </h3>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <img
        style={{ width: "500px", bottom: "-100px", left: "-100px" }}
        className="absolute"
        src="/OnboardingPattern.svg"
      />
      <img
        style={{ width: "150px", bottom: "20px", right: "30px" }}
        className="absolute"
        src="/StudentOnboarding.svg"
      />
    </div>
  );
}

export default DesktopStepper;
