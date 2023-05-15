import React, { Dispatch } from 'react'

interface step4Props {
    currentStep: string;
    setCurrentStep: Dispatch<React.SetStateAction<string>>;
    option: string;
    setOption: Dispatch<React.SetStateAction<string>>;
  }
  
  function Step4({ option, setCurrentStep, setOption }: step4Props) {
  return (
    <div className="tabanddesk:max-w-custom600 tabanddesk:min-w-custom600 mobile:px-4 w-full">
    <div className="w-full">
      <h1 className="text-2xl font-gola font-semibold text-button-text">
        Co-applicant Details
      </h1>
      <p className="text-sm font-gola font-normal opacity-50 mt-2">
        This will help us tailor fundmygrad for you
      </p>
      <div>
        <p className="font-gola text-sm	font-normal text-subtext opacity-70 mt-5">
          Co-applicant relation
        </p>
        <div style={{ height: "48px" }} className="flex mt-1.5">
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option selected>Father</option>
          </select>
        </div>
      </div>
      <div>
        <p className="text-sm	font-normal text-subtext opacity-70 mt-3">
          Income Type
        </p>
        <div style={{ height: "48px" }} className="flex mt-1.5">
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option selected>Salaried</option>
          </select>
        </div>
      </div>
      <div>
        <p className="text-sm	font-normal text-subtext opacity-70 mt-3">
          Income (per annum){" "}
        </p>
        <div className="mt-2">
          <input
            type="text"
            id="input-group-1"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="₹ 100000"
          />
        </div>
      </div>
      <div>
        <p className="font-gola text-sm	font-normal text-subtext opacity-70 mt-5">
          Enter mobile number
        </p>
        <div style={{ height: "48px" }} className="flex mt-1.5">
          <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
            INR (+91)
          </span>
          <input
            value={9876544213}
            type="text"
            id="website-admin"
            className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  "
          />
        </div>
      </div>
      <div>
        <p className="text-sm	font-normal text-subtext opacity-70 mt-3">
          Email
        </p>
        <div className="mt-2">
          <input
            type="text"
            id="input-group-1"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="mugilanelango123@gmail.com"
          />
        </div>
      </div>
    </div>
    <div className="w-full flex justify-between	">
      <button
        onClick={() => setCurrentStep("3")}
        type="button"
        className="h-10 max-w-custom120 mt-6 w-full font-gola text-primary-color bg-light-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
      >
        Back
      </button>
      <button
        onClick={() => setCurrentStep("5")}
        type="button"
        className="h-10 max-w-custom120 mt-6 w-full font-gola text-white bg-primary-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
      >
        Next
      </button>
    </div>
  </div>
  )
}

export default Step4