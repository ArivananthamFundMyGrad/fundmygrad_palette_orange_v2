import React, { Dispatch } from 'react'

interface step7Props {
    currentStep: string;
    setCurrentStep: Dispatch<React.SetStateAction<string>>;
    option: string;
    setOption: Dispatch<React.SetStateAction<string>>;
  }
  
  function Step7({ option, setCurrentStep, setOption }: step7Props) {
  return (
    <div className="tabanddesk:max-w-custom600 tabanddesk:min-w-custom600 mobile:px-4 w-full">
    <div className="w-full">
      <span className="text-2xl font-gola font-semibold text-button-text">
        Work Experience
      </span>
      <p className="text-sm font-gola font-normal opacity-50 mt-2">
        This will help us tailor fundmygrad for you
      </p>
      <div>
        <p className="font-gola text-sm	font-normal text-subtext opacity-70 mt-5">
          Previous Work Experience (in months)
        </p>
        <div className="mt-2">
          <input
            type="text"
            id="input-group-1"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="8"
          />
        </div>
      </div>
      <div>
        <p className="text-sm	font-normal text-subtext opacity-70 mt-3">
          Salary (in rupees){" "}
        </p>
        <div className="mt-2">
          <input
            type="text"
            id="input-group-1"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="₹3,00,000"
          />
        </div>
      </div>
    </div>
    <div className="w-full flex justify-between">
      <button
        onClick={() => setCurrentStep("6")}
        type="button"
        className="h-10 max-w-custom120 mt-6 w-full font-gola text-primary-color bg-light-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
      >
        Back
      </button>
      <button
        type="button"
        className="h-10 max-w-custom120 mt-6 w-full font-gola text-white bg-primary-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
      >
        Submit
      </button>
    </div>
  </div>
  )
}

export default Step7