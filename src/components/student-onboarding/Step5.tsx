import React, { Dispatch } from 'react'

interface step5Props {
    currentStep: string;
    setCurrentStep: Dispatch<React.SetStateAction<string>>;
    option: string;
    setOption: Dispatch<React.SetStateAction<string>>;
  }
  
  function Step5({ option, setCurrentStep, setOption }: step5Props) {
  return (
    <div className="tabanddesk:max-w-custom600 tabanddesk:min-w-custom600 mobile:px-4 w-full">
    <div className="w-full">
      <h1 className="text-2xl font-gola font-semibold text-button-text">
        Education details{" "}
      </h1>
      <p className="text-sm font-gola font-normal opacity-50 mt-2">
        This will help us tailor fundmygrad for you
      </p>
      <div>
        <p className="font-gola text-sm	font-normal text-subtext opacity-70 mt-5">
          School / College Name
        </p>
        <div className="mt-2">
          <input
            type="text"
            id="input-group-1"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Vishveswara College of engineering"
          />
        </div>
      </div>
      <div>
        <p className="text-sm	font-normal text-subtext opacity-70 mt-3">
          Highest Level of Previous education details{" "}
        </p>
        <div style={{ height: "48px" }} className="flex mt-1.5">
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option selected>B.E</option>
          </select>
        </div>
      </div>

      <div>
        <p className="text-sm	font-normal text-subtext opacity-70 mt-3">
          Degree Name
        </p>
        <div className="mt-2">
          <input
            type="text"
            id="input-group-1"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Computer Science"
          />
        </div>
      </div>
      <div>
        <p className="text-sm	font-normal text-subtext opacity-70 mt-3">
          Scores (CGPA 10 or 4point / in percentage)
        </p>
        <div className="mt-2">
          <input
            type="text"
            id="input-group-1"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="9"
          />
        </div>
      </div>
      <div>
        <p className="text-sm	font-normal text-subtext opacity-70 mt-3">
          Backlogs, if any{" "}
        </p>
        <div style={{ height: "48px" }} className="flex mt-1.5">
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option selected>Yes</option>
          </select>
        </div>
      </div>
    </div>
    <div className="w-full flex justify-between	">
      <button
        onClick={() => setCurrentStep("4")}
        type="button"
        className="h-10 max-w-custom120 mt-6 w-full font-gola text-primary-color bg-light-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
      >
        Back
      </button>
      <button
        onClick={() => setCurrentStep("6")}
        type="button"
        className="h-10 max-w-custom120 mt-6 w-full font-gola text-white bg-primary-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
      >
        Next
      </button>
    </div>
  </div>
  )
}

export default Step5