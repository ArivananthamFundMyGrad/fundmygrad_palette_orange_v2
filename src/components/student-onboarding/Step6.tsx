import React, { Dispatch } from 'react'

interface step6Props {
    currentStep: string;
    setCurrentStep: Dispatch<React.SetStateAction<string>>;
    option: string;
    setOption: Dispatch<React.SetStateAction<string>>;
  }
  
  function Step6({ option, setCurrentStep, setOption }: step6Props) {
  return (
    <div className="tabanddesk:max-w-custom600 tabanddesk:min-w-custom600 mobile:px-4 w-full">
    <div className="w-full">
      <h1 className="text-2xl font-gola font-semibold text-button-text">
        Education details{" "}
      </h1>
      <p className="text-sm font-gola font-normal opacity-50 mt-2">
        This will help us tailor fundmygrad for you
      </p>
      <div className="mt-5">
        <h1 className="text-base font-gola font-medium">Test 1</h1>
        <div className="w-full justify-between flex items-center">
          <div style={{ width: "49%" }}>
            <p className="text-sm	font-normal text-subtext opacity-70 mt-3">
              Test
            </p>
            <div style={{ height: "48px" }} className="flex mt-1.5">
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-10"
              >
                <option selected>GRE</option>
              </select>
            </div>
          </div>
          <div style={{ width: "49%" }}>
            <p className="text-sm font-normal text-subtext opacity-70 mt-3">
              Score
            </p>
            <div style={{ height: "48px" }} className="flex mt-1.5">
              <input
                type="text"
                id="website-admin"
                className="rounded-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  "
                placeholder="179"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <h1 className="text-base font-gola font-medium">Test 2</h1>
        <div className="w-full justify-between flex items-center">
          <div style={{ width: "49%" }}>
            <p className="text-sm	font-normal text-subtext opacity-70 mt-3">
              Test
            </p>
            <div style={{ height: "48px" }} className="flex mt-1.5">
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-10"
              >
                <option selected>GMAT</option>
              </select>
            </div>
          </div>
          <div style={{ width: "49%" }}>
            <p className="text-sm font-normal text-subtext opacity-70 mt-3">
              Score
            </p>
            <div style={{ height: "48px" }} className="flex mt-1.5">
              <input
                type="text"
                id="website-admin"
                className="rounded-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  "
                placeholder="189"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <h1 className="text-base font-gola font-medium">Test 3</h1>
        <div className="w-full justify-between flex items-center">
          <div style={{ width: "49%" }}>
            <p className="text-sm	font-normal text-subtext opacity-70 mt-3">
              Test
            </p>
            <div style={{ height: "48px" }} className="flex mt-1.5">
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-10"
              >
                <option selected>IELTS</option>
              </select>
            </div>
          </div>
          <div style={{ width: "49%" }}>
            <p className="text-sm font-normal text-subtext opacity-70 mt-3">
              Score
            </p>
            <div style={{ height: "48px" }} className="flex mt-1.5">
              <input
                type="text"
                id="website-admin"
                className="rounded-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  "
                placeholder="159"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <span className="text-base font-gola font-semibold text-primary-color mt-3">
      Add one more test score
    </span>
    <div className="w-full flex justify-between	">
      <button
        onClick={() => setCurrentStep("5")}
        type="button"
        className="h-10 max-w-custom120 mt-6 w-full font-gola text-primary-color bg-light-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
      >
        Back
      </button>
      <button
        onClick={() => setCurrentStep("7")}
        type="button"
        className="h-10 max-w-custom120 mt-6 w-full font-gola text-white bg-primary-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
      >
        Next
      </button>
    </div>
  </div>
  )
}

export default Step6