import React, { Dispatch } from 'react'

interface step2Props {
    currentStep: string;
    setCurrentStep: Dispatch<React.SetStateAction<string>>;
    option: string;
    setOption: Dispatch<React.SetStateAction<string>>;
  }
  
  function Step2({ option, setCurrentStep, setOption }: step2Props) {
  return (
    <div>
        <div className="tabanddesk:max-w-custom600 tabanddesk:min-w-custom600 mobile:px-4 w-full">
              <div className="w-full">
                <h1 className="text-2xl font-gola font-semibold text-button-text">
                  Course Details
                </h1>
                <p className="text-sm font-gola font-normal opacity-50 mt-2">
                  This will help us tailor fundmygrad for you
                </p>
                <p className="text-sm font-gola	font-normal text-subtext opacity-70 mt-5">
                  When does the program start?
                </p>
                <div className="relative mt-3">
                  <input
                    type="text"
                    id="input-group-1"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="name@flowbite.com"
                  />
                  <div className="absolute inset-y-0 right-3 flex items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                  </div>
                </div>
                <div>
                  <div>
                    <p className="text-sm font-gola	font-normal text-subtext opacity-70 mt-3">
                      Select University
                    </p>
                    <div style={{ height: "48px" }} className="flex mt-1.5">
                      <select
                        id="countries"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      >
                        <option selected>Select</option>
                      </select>
                    </div>
                  </div>

                  <div className="w-full justify-between flex items-center">
                    <div style={{ width: "49%" }}>
                      <p className="font-gola text-sm	font-normal text-subtext opacity-70 mt-5">
                        Select Program
                      </p>
                      <div style={{ height: "48px" }} className="flex mt-1.5">
                        <select
                          id="countries"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-10"
                        >
                          <option selected>Select</option>
                        </select>
                      </div>
                    </div>
                    <div style={{ width: "49%" }}>
                      <p className="text-sm font-normal text-subtext opacity-70 mt-5">
                        Enter Course Name
                      </p>
                      <div style={{ height: "48px" }} className="flex mt-1.5">
                        <input
                          type="text"
                          id="website-admin"
                          className="rounded-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  "
                          placeholder="MBA"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="font-gola text-sm	font-normal text-subtext opacity-70 mt-5">
                      Course Duration (in months)
                    </p>
                    <div style={{ height: "48px" }} className="flex mt-1.5">
                      <input
                        type="text"
                        id="website-admin"
                        className="rounded-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  "
                        placeholder="Ex: 2 Months"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-between	">
                <button
                  onClick={() => setCurrentStep("1")}
                  type="button"
                  className="h-10 max-w-custom120 mt-6 w-full font-gola text-primary-color bg-light-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                >
                  Back
                </button>
                <button
                  onClick={() => setCurrentStep("3")}
                  type="button"
                  className="h-10 max-w-custom120 mt-6 w-full font-gola text-white bg-primary-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                >
                  Next
                </button>
              </div>
            </div>
    </div>
  )
}

export default Step2