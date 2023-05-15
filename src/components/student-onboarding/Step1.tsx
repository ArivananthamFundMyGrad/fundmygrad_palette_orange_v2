import React, { Dispatch } from "react";

interface step1Props {
  currentStep: string;
  setCurrentStep: Dispatch<React.SetStateAction<string>>;
  option: string;
  setOption: Dispatch<React.SetStateAction<string>>;
}

function Step1({ option, setCurrentStep, setOption }: step1Props) {
  return (
    <div className="tabanddesk:max-w-custom600 tabanddesk:min-w-custom600 mobile:px-4 w-full">
      <div className="w-full">
        <h1 className="text-2xl font-gola font-semibold text-button-text">
          Select your admission status
        </h1>
        <p className="text-sm font-gola font-normal opacity-50 mt-2">
          This will help us tailor fundmygrad for you
        </p>
        <ul className="mt-6 grid w-full">
          <li onClick={() => setOption("1")}>
            <input
              type="radio"
              id="option-1"
              name="hosting"
              value="option-1"
              className="hidden peer"
              required
            />
            <label
              style={{ height: "64px" }}
              htmlFor="option-1"
              className={`${
                option === "1"
                  ? "bg-tab-background border border-primary-color"
                  : "bg-white"
              } inline-flex items-center justify-between w-full p-5 border border-gray-200 rounded-lg cursor-pointer  hover:text-gray-600 hover:bg-gray-100`}
            >
              <div className="block">
                <div
                  className={`${
                    option === "1" ? "text-primary-color" : "text-black"
                  } w-full text-base font-medium font-gola`}
                >
                  Yet to apply for colleges
                </div>
              </div>
              {option === "1" && <img src="../Tick.svg" alt="Tick" />}
            </label>
          </li>
          <li onClick={() => setOption("2")} className="mt-3">
            <input
              type="radio"
              id="option-2"
              name="hosting"
              value="option-2"
              className="hidden peer"
            />
            <label
              style={{ height: "64px" }}
              htmlFor="option-2"
              className={`${
                option === "2"
                  ? "bg-tab-background border border-primary-color"
                  : "bg-white"
              } inline-flex items-center justify-between w-full p-5 border border-gray-200 rounded-lg cursor-pointer  hover:text-gray-600 hover:bg-gray-100`}
            >
              <div className="block">
                <div
                  className={`${
                    option === "2" ? "text-primary-color" : "text-black"
                  } w-full text-base font-medium font-gola`}
                >
                  In the process of applying to colleges
                </div>
              </div>
              {option === "2" && <img src="../Tick.svg" alt="Tick" />}
            </label>
          </li>
          <li onClick={() => setOption("3")} className="mt-3">
            <input
              type="radio"
              id="option-3"
              name="hosting"
              value="option-3"
              className="hidden peer"
            />
            <label
              style={{ height: "64px" }}
              htmlFor="option-3"
              className={`${
                option === "3"
                  ? "bg-tab-background border border-primary-color"
                  : "bg-white"
              } inline-flex items-center justify-between w-full p-5 border border-gray-200 rounded-lg cursor-pointer  hover:text-gray-600 hover:bg-gray-100`}
            >
              <div className="block">
                <div
                  className={`${
                    option === "3" ? "text-primary-color" : "text-black"
                  } w-full text-base font-medium font-gola`}
                >
                  Awaiting response from colleges
                </div>
              </div>
              {option === "3" && <img src="../Tick.svg" alt="Tick" />}
            </label>
          </li>
          <li onClick={() => setOption("4")} className="mt-3">
            <input
              type="radio"
              id="option-4"
              name="hosting"
              value="option-4"
              className="hidden peer"
            />
            <label
              style={{ height: "64px" }}
              htmlFor="option-4"
              className={`${
                option === "4"
                  ? "bg-tab-background border border-primary-color"
                  : "bg-white"
              } inline-flex items-center justify-between w-full p-5 border border-gray-200 rounded-lg cursor-pointer  hover:text-gray-600 hover:bg-gray-100`}
            >
              <div className="block">
                <div
                  className={`${
                    option === "4" ? "text-primary-color" : "text-black"
                  } w-full text-base font-medium font-gola`}
                >
                  Admission received
                </div>
              </div>
              {option === "4" && <img src="../Tick.svg" alt="Tick" />}
            </label>
          </li>
        </ul>
      </div>
      <div className="w-full flex justify-end	">
        <button
          onClick={() => setCurrentStep("2")}
          type="button"
          className="h-10 max-w-custom120 mt-6 w-full font-gola text-white bg-primary-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Step1;
