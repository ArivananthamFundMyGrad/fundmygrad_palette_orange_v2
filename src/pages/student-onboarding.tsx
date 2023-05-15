import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Step1 from "@/components/student-onboarding/Step1";
import Step2 from "@/components/student-onboarding/Step2";
import Step3 from "@/components/student-onboarding/Step3";
import Step4 from "@/components/student-onboarding/Step4";
import Step5 from "@/components/student-onboarding/Step5";
import Step6 from "@/components/student-onboarding/Step6";
import Step7 from "@/components/student-onboarding/Step7";
import DesktopStepper from "@/components/student-onboarding/DesktopStepper";
import TabletStepper from "@/components/student-onboarding/TabletStepper";
import MobileStepper from "@/components/student-onboarding/MobileStepper";
import HelpModal from "@/components/student-onboarding/HelpModal";

function StudentOnboarding() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState("1");
  const [option, setOption] = useState("1");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onModalClose = () => {
    setIsModalOpen(false);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };
  return (
    <>
      <Head>
        <title>Student Onboarding</title>
      </Head>
      <div className="w-screen h-screen flex">
        <DesktopStepper currentStep={currentStep} />
        <div className="tablet:pt-32 mobile:pt-32 relative w-full h-full flex tablet:flex-col mobile:flex-col desktop:justify-center items-center">
          <img
            onClick={() => router.push("/")}
            className="cursor-pointer absolute pt-2 top-5 left-10 desktop:hidden mobile:hidden"
            width={160}
            src="./logo.svg"
            alt="fundmygrad logo"
          />
          <img
            onClick={() => router.push("/")}
            className="cursor-pointer absolute pt-7 top-0 left-5 tabanddesk:hidden"
            width={130}
            src="./logo.svg"
            alt="fundmygrad logo"
          />
          <div
            onClick={openModal}
            style={{ width: "188px" }}
            className="cursor-pointer mobile:hidden absolute top-5 right-10 bg-secondary-color flex items-center border border-button-text rounded-lg py-2 px-3"
          >
            <img src="../Assitance.svg" alt="Contact Image" />
            <h1 className="ml-3 font-gola text-white font-semibold text-base">
              Need Guidance?
            </h1>
          </div>
          <div
            onClick={openModal}
            style={{ width: "158px" }}
            className="cursor-pointer tabanddesk:hidden absolute top-5 right-5 bg-secondary-color flex items-center border border-button-text rounded-lg py-2 px-1.5"
          >
            <img src="../Assitance.svg" alt="Contact Image" />
            <h1 className="ml-3 font-gola text-white font-semibold text-sm">
              Need Guidance?
            </h1>
          </div>
          <TabletStepper currentStep={currentStep} />
          <MobileStepper currentStep={currentStep} />
          {currentStep === "1" && (
            <Step1
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
              option={option}
              setOption={setOption}
            />
          )}
          {currentStep === "2" && (
            <Step2
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
              option={option}
              setOption={setOption}
            />
          )}
          {currentStep === "3" && (
            <Step3
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
              option={option}
              setOption={setOption}
            />
          )}
          {currentStep === "4" && (
            <Step4
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
              option={option}
              setOption={setOption}
            />
          )}
          {currentStep === "5" && (
            <Step5
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
              option={option}
              setOption={setOption}
            />
          )}
          {currentStep === "6" && (
            <Step6
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
              option={option}
              setOption={setOption}
            />
          )}
          {currentStep === "7" && (
            <Step7
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
              option={option}
              setOption={setOption}
            />
          )}
        </div>
        <HelpModal isModalOpen={isModalOpen} onModalClose={onModalClose} />
      </div>
    </>
  );
}

export default StudentOnboarding;
