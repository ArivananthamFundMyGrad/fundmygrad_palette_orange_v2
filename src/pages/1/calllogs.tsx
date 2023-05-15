import React, { useState } from "react";
import Head from "next/head";
import { Select, useMediaQuery } from "@chakra-ui/react";
import AdminTelemarketingSidebar from "@/components/reusable/AdminTelemarketingSidebar";
import AdminTelemarketingMobileSidebar from "@/components/reusable/AdminTelemarketingMobileSidebar";

function applicants() {
  const [isMobile] = useMediaQuery("(max-width: 767px)");
  const [isOpen, setIsOpen] = useState(false);
  const onOpen = () => {
    setIsOpen(true);
  };
  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex w-full">
      <Head>
        <title>Calls Log</title>
      </Head>
      {!isMobile && <AdminTelemarketingSidebar />}
      <div className="w-full flex justify-center">
        <div className="w-full min-h-screen flex flex-col items-center">
          <div className="bg-white tabanddesk:px-10 pt-3 pb-3 tabanddesk:w-full mobile:w-11/12 flex justify-between">
            <img width={120} src="../logo.svg" alt="" />
            <img src="../avatar.svg" alt="" />
          </div>
          <div className="bg-[#F1F4FA] w-full relative px-10 pb-20">
            <div className="mobile:hidden flex items-center mt-10">
              <span className="font-gola text-[28px] font-bold">Call Logs</span>
              <div className="ml-5 relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_56_3185)">
                      <rect
                        width="14"
                        height="14"
                        fill="white"
                        fillOpacity="0.01"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.47653 10.8907C8.49572 11.5892 7.29583 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6C12 7.29583 11.5892 8.49572 10.8907 9.47653L13.7071 12.2929C14.0976 12.6834 14.0976 13.3166 13.7071 13.7071C13.3166 14.0976 12.6834 14.0976 12.2929 13.7071L9.47653 10.8907ZM10 6C10 8.20914 8.20914 10 6 10C3.79086 10 2 8.20914 2 6C2 3.79086 3.79086 2 6 2C8.20914 2 10 3.79086 10 6Z"
                        fill="#6B778C"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_56_3185">
                        <rect width="14" height="14" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <input
                  type="text"
                  id="input-group-1"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                  placeholder="Search"
                />
              </div>
            </div>
            <div className="tabanddesk:hidden">
              <div className="mt-5 flex justify-between">
                <div className="flex items-center mb-10">
                  <img onClick={onOpen} src="../menu.svg" alt="Menu Icon" />
                  <span className="ml-5 font-gola text-2xl font-bold">
                    Applicants
                  </span>
                </div>
                <img src="/SearchIcon.svg" alt="Search Icon" />
              </div>
              <div className="w-full mt-5">
                <Select bg="white">
                  <option value="option1">All</option>
                </Select>
              </div>
              <div className="flex items-center mt-5">
                <input
                  defaultChecked
                  id="checked-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="checked-checkbox"
                  className="ml-2 text-sm font-medium text-[#202020] font-gola"
                >
                  Only show ‘With Collateral’
                </label>
              </div>
            </div>
            <div className="tablet:hidden mobile:hidden bg-white rounded-t-lg mt-10 w-full relative overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase border-b">
                  <tr>
                    <th className="w-[20%]" scope="col">
                      <div className="flex items-center justify-between border-r-[1px] p-[16px]">
                        <span className="capitalize text-sm font-gola font-medium text-[#767676DE]/[.87] mr-3">
                          Name
                        </span>
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 6L10.9425 4.9425L6.75 9.1275V0H5.25V9.1275L1.065 4.935L0 6L6 12L12 6Z"
                            fill="#767676"
                            fillOpacity="0.87"
                          />
                        </svg>
                      </div>
                    </th>
                    <th scope="col" className="w-[20%]">
                      <div className="flex items-center justify-between border-r-[1px] p-[16px]">
                        <span className="capitalize text-sm font-gola font-medium text-[#767676DE]/[.87] mr-3">
                          Phone Number
                        </span>
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 6L10.9425 4.9425L6.75 9.1275V0H5.25V9.1275L1.065 4.935L0 6L6 12L12 6Z"
                            fill="#767676"
                            fillOpacity="0.87"
                          />
                        </svg>
                      </div>
                    </th>
                    <th scope="col" className="w-[20%]">
                      <div className="flex items-center justify-between border-r-[1px] p-[16px]">
                        <span className="capitalize text-sm font-gola font-medium text-[#767676DE]/[.87] mr-3">
                          Answered / Not
                        </span>
                        <div className="flex items-center">
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 6L10.9425 4.9425L6.75 9.1275V0H5.25V9.1275L1.065 4.935L0 6L6 12L12 6Z"
                              fill="#767676"
                              fillOpacity="0.87"
                            />
                          </svg>
                          <img
                            className="ml-3"
                            src="/filterIcon.svg"
                            alt="Filter Icon"
                          />
                        </div>
                      </div>
                    </th>
                    <th scope="col" className="w-[20%]">
                      <div className="flex items-center justify-between border-r-[1px] p-[16px]">
                        <span className="capitalize text-sm font-gola font-medium text-[#767676DE]/[.87] mr-3">
                          Location
                        </span>
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 6L10.9425 4.9425L6.75 9.1275V0H5.25V9.1275L1.065 4.935L0 6L6 12L12 6Z"
                            fill="#767676"
                            fillOpacity="0.87"
                          />
                        </svg>
                      </div>
                    </th>
                    <th scope="col" className="w-[20%]">
                      <div className="flex items-center justify-between border-r-[1px] p-[16px]">
                        <span className="capitalize text-sm font-gola font-medium text-[#767676DE]/[.87] mr-3">
                          Converted / Not
                        </span>
                        <div className="flex items-center">
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 6L10.9425 4.9425L6.75 9.1275V0H5.25V9.1275L1.065 4.935L0 6L6 12L12 6Z"
                              fill="#767676"
                              fillOpacity="0.87"
                            />
                          </svg>
                          <img
                            className="ml-3"
                            src="/filterIcon.svg"
                            alt="Filter Icon"
                          />
                        </div>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b">
                    <th scope="row" className="px-6 py-4">
                      <span className="font-gola text-sm font-medium text-black">
                        Arun Kumar
                      </span>
                    </th>
                    <td className="px-6 py-4 font-gola text-sm font-medium text-black">
                      +91 9786564432
                    </td>
                    <td className="px-6 py-4 font-gola text-sm font-medium text-black">
                      <div className="w-[150px] rounded-full justify-center flex bg-[#FFF0D4] px-2 py-1 items-center">
                        <span className="mr-2 font-gola text-[14px] text-[#C96D02]">
                          Not Answered
                        </span>
                        <img src="/PointedDown.svg" alt="Pointed Down" />
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-gola text-sm font-medium text-black">
                        Coimbatore,
                      </span>
                      <span className="font-gola text-xs font-medium text-[#7E7E7E] mt-1">
                        Tamil Nadu - 641604
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="w-[150px] rounded-full justify-center flex bg-[#FFF0D4] px-2 py-1 items-center">
                        <span className="mr-2 font-gola text-[14px] text-[#C96D02]">
                          Not Converted
                        </span>
                        <img src="/PointedDown.svg" alt="Pointed Down" />
                      </div>
                    </td>
                  </tr>
                  <tr className="bg-white border-b">
                    <th scope="row" className="px-6 py-4">
                      <span className="font-gola text-sm font-medium text-black">
                        Arun Kumar
                      </span>
                    </th>
                    <td className="px-6 py-4 font-gola text-sm font-medium text-black">
                      +91 9786564432
                    </td>
                    <td className="px-6 py-4 font-gola text-sm font-medium text-black">
                      <div className="w-[150px] rounded-full justify-center flex bg-[#EDFFEA] px-2 py-1 items-center">
                        <span className="mr-2 font-gola text-[14px] text-[#128400]">
                          Answered
                        </span>
                        <img src="/PointedDown.svg" alt="Pointed Down" />
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-gola text-sm font-medium text-black">
                        Coimbatore,
                      </span>
                      <span className="font-gola text-xs font-medium text-[#7E7E7E] mt-1">
                        Tamil Nadu - 641604
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="w-[150px] rounded-full justify-center flex bg-[#EDFFEA] px-2 py-1 items-center">
                        <span className="mr-2 font-gola text-[14px] text-[#128400]">
                          Converted
                        </span>
                        <img src="/PointedDown.svg" alt="Pointed Down" />
                      </div>
                    </td>
                  </tr>
                  <tr className="bg-white border-b">
                    <th scope="row" className="px-6 py-4">
                      <span className="font-gola text-sm font-medium text-black">
                        Arun Kumar
                      </span>
                    </th>
                    <td className="px-6 py-4 font-gola text-sm font-medium text-black">
                      +91 9786564432
                    </td>
                    <td className="px-6 py-4 font-gola text-sm font-medium text-black">
                      <div className="w-[150px] rounded-full justify-center flex bg-[#FFF0D4] px-2 py-1 items-center">
                        <span className="mr-2 font-gola text-[14px] text-[#C96D02]">
                          Not Answered
                        </span>
                        <img src="/PointedDown.svg" alt="Pointed Down" />
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-gola text-sm font-medium text-black">
                        Coimbatore,
                      </span>
                      <span className="font-gola text-xs font-medium text-[#7E7E7E] mt-1">
                        Tamil Nadu - 641604
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="w-[150px] rounded-full justify-center flex bg-[#FFF0D4] px-2 py-1 items-center">
                        <span className="mr-2 font-gola text-[14px] text-[#C96D02]">
                          Not Converted
                        </span>
                        <img src="/PointedDown.svg" alt="Pointed Down" />
                      </div>
                    </td>
                  </tr>
                  <tr className="bg-white border-b">
                    <th scope="row" className="px-6 py-4">
                      <span className="font-gola text-sm font-medium text-black">
                        Arun Kumar
                      </span>
                    </th>
                    <td className="px-6 py-4 font-gola text-sm font-medium text-black">
                      +91 9786564432
                    </td>
                    <td className="px-6 py-4 font-gola text-sm font-medium text-black">
                      <div className="w-[150px] rounded-full justify-center flex bg-[#EDFFEA] px-2 py-1 items-center">
                        <span className="mr-2 font-gola text-[14px] text-[#128400]">
                          Answered
                        </span>
                        <img src="/PointedDown.svg" alt="Pointed Down" />
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-gola text-sm font-medium text-black">
                        Coimbatore,
                      </span>
                      <span className="font-gola text-xs font-medium text-[#7E7E7E] mt-1">
                        Tamil Nadu - 641604
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="w-[150px] rounded-full justify-center flex bg-[#EDFFEA] px-2 py-1 items-center">
                        <span className="mr-2 font-gola text-[14px] text-[#128400]">
                          Converted
                        </span>
                        <img src="/PointedDown.svg" alt="Pointed Down" />
                      </div>
                    </td>
                  </tr>
                  <tr className="bg-white border-b">
                    <th scope="row" className="px-6 py-4">
                      <span className="font-gola text-sm font-medium text-black">
                        Arun Kumar
                      </span>
                    </th>
                    <td className="px-6 py-4 font-gola text-sm font-medium text-black">
                      +91 9786564432
                    </td>
                    <td className="px-6 py-4 font-gola text-sm font-medium text-black">
                      <div className="w-[150px] rounded-full justify-center flex bg-[#FFF0D4] px-2 py-1 items-center">
                        <span className="mr-2 font-gola text-[14px] text-[#C96D02]">
                          Not Answered
                        </span>
                        <img src="/PointedDown.svg" alt="Pointed Down" />
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-gola text-sm font-medium text-black">
                        Coimbatore,
                      </span>
                      <span className="font-gola text-xs font-medium text-[#7E7E7E] mt-1">
                        Tamil Nadu - 641604
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="w-[150px] rounded-full justify-center flex bg-[#FFF0D4] px-2 py-1 items-center">
                        <span className="mr-2 font-gola text-[14px] text-[#C96D02]">
                          Not Converted
                        </span>
                        <img src="/PointedDown.svg" alt="Pointed Down" />
                      </div>
                    </td>
                  </tr>
                  <tr className="bg-white border-b">
                    <th scope="row" className="px-6 py-4">
                      <span className="font-gola text-sm font-medium text-black">
                        Arun Kumar
                      </span>
                    </th>
                    <td className="px-6 py-4 font-gola text-sm font-medium text-black">
                      +91 9786564432
                    </td>
                    <td className="px-6 py-4 font-gola text-sm font-medium text-black">
                      <div className="w-[150px] rounded-full justify-center flex bg-[#EDFFEA] px-2 py-1 items-center">
                        <span className="mr-2 font-gola text-[14px] text-[#128400]">
                          Answered
                        </span>
                        <img src="/PointedDown.svg" alt="Pointed Down" />
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-gola text-sm font-medium text-black">
                        Coimbatore,
                      </span>
                      <span className="font-gola text-xs font-medium text-[#7E7E7E] mt-1">
                        Tamil Nadu - 641604
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="w-[150px] rounded-full justify-center flex bg-[#EDFFEA] px-2 py-1 items-center">
                        <span className="mr-2 font-gola text-[14px] text-[#128400]">
                          Converted
                        </span>
                        <img src="/PointedDown.svg" alt="Pointed Down" />
                      </div>
                    </td>
                  </tr>
                  <tr className="bg-white border-b">
                    <th scope="row" className="px-6 py-4">
                      <span className="font-gola text-sm font-medium text-black">
                        Arun Kumar
                      </span>
                    </th>
                    <td className="px-6 py-4 font-gola text-sm font-medium text-black">
                      +91 9786564432
                    </td>
                    <td className="px-6 py-4 font-gola text-sm font-medium text-black">
                      <div className="w-[150px] rounded-full justify-center flex bg-[#FFF0D4] px-2 py-1 items-center">
                        <span className="mr-2 font-gola text-[14px] text-[#C96D02]">
                          Not Answered
                        </span>
                        <img src="/PointedDown.svg" alt="Pointed Down" />
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-gola text-sm font-medium text-black">
                        Coimbatore,
                      </span>
                      <span className="font-gola text-xs font-medium text-[#7E7E7E] mt-1">
                        Tamil Nadu - 641604
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="w-[150px] rounded-full justify-center flex bg-[#FFF0D4] px-2 py-1 items-center">
                        <span className="mr-2 font-gola text-[14px] text-[#C96D02]">
                          Not Converted
                        </span>
                        <img src="/PointedDown.svg" alt="Pointed Down" />
                      </div>
                    </td>
                  </tr>
                  <tr className="bg-white border-b">
                    <th scope="row" className="px-6 py-4">
                      <span className="font-gola text-sm font-medium text-black">
                        Arun Kumar
                      </span>
                    </th>
                    <td className="px-6 py-4 font-gola text-sm font-medium text-black">
                      +91 9786564432
                    </td>
                    <td className="px-6 py-4 font-gola text-sm font-medium text-black">
                      <div className="w-[150px] rounded-full justify-center flex bg-[#EDFFEA] px-2 py-1 items-center">
                        <span className="mr-2 font-gola text-[14px] text-[#128400]">
                          Answered
                        </span>
                        <img src="/PointedDown.svg" alt="Pointed Down" />
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-gola text-sm font-medium text-black">
                        Coimbatore,
                      </span>
                      <span className="font-gola text-xs font-medium text-[#7E7E7E] mt-1">
                        Tamil Nadu - 641604
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="w-[150px] rounded-full justify-center flex bg-[#EDFFEA] px-2 py-1 items-center">
                        <span className="mr-2 font-gola text-[14px] text-[#128400]">
                          Converted
                        </span>
                        <img src="/PointedDown.svg" alt="Pointed Down" />
                      </div>
                    </td>
                  </tr>
                  <tr className="bg-white border-b">
                    <th scope="row" className="px-6 py-4">
                      <span className="font-gola text-sm font-medium text-black">
                        Arun Kumar
                      </span>
                    </th>
                    <td className="px-6 py-4 font-gola text-sm font-medium text-black">
                      +91 9786564432
                    </td>
                    <td className="px-6 py-4 font-gola text-sm font-medium text-black">
                      <div className="w-[150px] rounded-full justify-center flex bg-[#FFF0D4] px-2 py-1 items-center">
                        <span className="mr-2 font-gola text-[14px] text-[#C96D02]">
                          Not Answered
                        </span>
                        <img src="/PointedDown.svg" alt="Pointed Down" />
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-gola text-sm font-medium text-black">
                        Coimbatore,
                      </span>
                      <span className="font-gola text-xs font-medium text-[#7E7E7E] mt-1">
                        Tamil Nadu - 641604
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="w-[150px] rounded-full justify-center flex bg-[#FFF0D4] px-2 py-1 items-center">
                        <span className="mr-2 font-gola text-[14px] text-[#C96D02]">
                          Not Converted
                        </span>
                        <img src="/PointedDown.svg" alt="Pointed Down" />
                      </div>
                    </td>
                  </tr>
                  <tr className="bg-white rounded-b-lg border-b">
                    <th scope="row" className="px-6 py-4">
                      <span className="font-gola text-sm font-medium text-black">
                        Arun Kumar
                      </span>
                    </th>
                    <td className="px-6 py-4 font-gola text-sm font-medium text-black">
                      +91 9786564432
                    </td>
                    <td className="px-6 py-4 font-gola text-sm font-medium text-black">
                      <div className="w-[150px] rounded-full justify-center flex bg-[#EDFFEA] px-2 py-1 items-center">
                        <span className="mr-2 font-gola text-[14px] text-[#128400]">
                          Answered
                        </span>
                        <img src="/PointedDown.svg" alt="Pointed Down" />
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-gola text-sm font-medium text-black">
                        Coimbatore,
                      </span>
                      <span className="font-gola text-xs font-medium text-[#7E7E7E] mt-1">
                        Tamil Nadu - 641604
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="w-[150px] rounded-full justify-center flex bg-[#EDFFEA] px-2 py-1 items-center">
                        <span className="mr-2 font-gola text-[14px] text-[#128400]">
                          Converted
                        </span>
                        <img src="/PointedDown.svg" alt="Pointed Down" />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="desktop:hidden min-h-screen mt-5 grid tablet:grid-cols-2 gap-3">
              <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                <div className="flex item-center mb-2">
                  <h5 className=" mr-3 text-base font-semibold text-[#313131]">
                    Arun Kumar
                  </h5>
                </div>

                <div className="flex items-center justify-between mt-3">
                  <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                    Phone Number
                  </span>
                  <span className="text-[#292929] font-medium text-base font-gola">
                    +91 9786564432
                  </span>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                    Answered / Not
                  </span>
                  <div className="w-[150px] rounded-full justify-center flex bg-[#FFF0D4] px-2 py-1 items-center">
                    <span className="mr-2 font-gola text-[14px] text-[#C96D02]">
                      Not Converted
                    </span>
                    <img src="/PointedDown.svg" alt="Pointed Down" />
                  </div>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                    Location
                  </span>
                  <div>
                    <span className="text-[#292929] font-medium text-base font-gola">
                      Coimbatore
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                    Converted / Not
                  </span>
                  <div className="w-[150px] rounded-full justify-center flex bg-[#FFF0D4] px-2 py-1 items-center">
                    <span className="mr-2 font-gola text-[14px] text-[#C96D02]">
                      Not Converted
                    </span>
                    <img src="/PointedDown.svg" alt="Pointed Down" />
                  </div>
                </div>
              </div>
              <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                <div className="flex item-center mb-2">
                  <h5 className=" mr-3 text-base font-semibold text-[#313131]">
                    Arun Kumar
                  </h5>
                </div>

                <div className="flex items-center justify-between mt-3">
                  <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                    Phone Number
                  </span>
                  <span className="text-[#292929] font-medium text-base font-gola">
                    +91 9786564432
                  </span>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                    Answered / Not
                  </span>
                  <div className="w-[150px] rounded-full justify-center flex bg-[#EDFFEA] px-2 py-1 items-center">
                    <span className="mr-2 font-gola text-[14px] text-[#128400]">
                      Answered
                    </span>
                    <img src="/PointedDown.svg" alt="Pointed Down" />
                  </div>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                    Location
                  </span>
                  <div>
                    <span className="text-[#292929] font-medium text-base font-gola">
                      Coimbatore
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                    Converted / Not
                  </span>
                  <div className="w-[150px] rounded-full justify-center flex bg-[#EDFFEA] px-2 py-1 items-center">
                    <span className="mr-2 font-gola text-[14px] text-[#128400]">
                      Converted
                    </span>
                    <img src="/PointedDown.svg" alt="Pointed Down" />
                  </div>
                </div>
              </div>
              <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                <div className="flex item-center mb-2">
                  <h5 className=" mr-3 text-base font-semibold text-[#313131]">
                    Arun Kumar
                  </h5>
                </div>

                <div className="flex items-center justify-between mt-3">
                  <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                    Phone Number
                  </span>
                  <span className="text-[#292929] font-medium text-base font-gola">
                    +91 9786564432
                  </span>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                    Answered / Not
                  </span>
                  <div className="w-[150px] rounded-full justify-center flex bg-[#FFF0D4] px-2 py-1 items-center">
                    <span className="mr-2 font-gola text-[14px] text-[#C96D02]">
                      Not Converted
                    </span>
                    <img src="/PointedDown.svg" alt="Pointed Down" />
                  </div>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                    Location
                  </span>
                  <div>
                    <span className="text-[#292929] font-medium text-base font-gola">
                      Coimbatore
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                    Converted / Not
                  </span>
                  <div className="w-[150px] rounded-full justify-center flex bg-[#FFF0D4] px-2 py-1 items-center">
                    <span className="mr-2 font-gola text-[14px] text-[#C96D02]">
                      Not Converted
                    </span>
                    <img src="/PointedDown.svg" alt="Pointed Down" />
                  </div>
                </div>
              </div>
              <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                <div className="flex item-center mb-2">
                  <h5 className=" mr-3 text-base font-semibold text-[#313131]">
                    Arun Kumar
                  </h5>
                </div>

                <div className="flex items-center justify-between mt-3">
                  <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                    Phone Number
                  </span>
                  <span className="text-[#292929] font-medium text-base font-gola">
                    +91 9786564432
                  </span>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                    Answered / Not
                  </span>
                  <div className="w-[150px] rounded-full justify-center flex bg-[#EDFFEA] px-2 py-1 items-center">
                    <span className="mr-2 font-gola text-[14px] text-[#128400]">
                      Answered
                    </span>
                    <img src="/PointedDown.svg" alt="Pointed Down" />
                  </div>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                    Location
                  </span>
                  <div>
                    <span className="text-[#292929] font-medium text-base font-gola">
                      Coimbatore
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                    Converted / Not
                  </span>
                  <div className="w-[150px] rounded-full justify-center flex bg-[#EDFFEA] px-2 py-1 items-center">
                    <span className="mr-2 font-gola text-[14px] text-[#128400]">
                      Converted
                    </span>
                    <img src="/PointedDown.svg" alt="Pointed Down" />
                  </div>
                </div>
              </div>
              <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                <div className="flex item-center mb-2">
                  <h5 className=" mr-3 text-base font-semibold text-[#313131]">
                    Arun Kumar
                  </h5>
                </div>

                <div className="flex items-center justify-between mt-3">
                  <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                    Phone Number
                  </span>
                  <span className="text-[#292929] font-medium text-base font-gola">
                    +91 9786564432
                  </span>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                    Answered / Not
                  </span>
                  <div className="w-[150px] rounded-full justify-center flex bg-[#FFF0D4] px-2 py-1 items-center">
                    <span className="mr-2 font-gola text-[14px] text-[#C96D02]">
                      Not Converted
                    </span>
                    <img src="/PointedDown.svg" alt="Pointed Down" />
                  </div>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                    Location
                  </span>
                  <div>
                    <span className="text-[#292929] font-medium text-base font-gola">
                      Coimbatore
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                    Converted / Not
                  </span>
                  <div className="w-[150px] rounded-full justify-center flex bg-[#FFF0D4] px-2 py-1 items-center">
                    <span className="mr-2 font-gola text-[14px] text-[#C96D02]">
                      Not Converted
                    </span>
                    <img src="/PointedDown.svg" alt="Pointed Down" />
                  </div>
                </div>
              </div>
              <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                <div className="flex item-center mb-2">
                  <h5 className=" mr-3 text-base font-semibold text-[#313131]">
                    Arun Kumar
                  </h5>
                </div>

                <div className="flex items-center justify-between mt-3">
                  <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                    Phone Number
                  </span>
                  <span className="text-[#292929] font-medium text-base font-gola">
                    +91 9786564432
                  </span>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                    Answered / Not
                  </span>
                  <div className="w-[150px] rounded-full justify-center flex bg-[#EDFFEA] px-2 py-1 items-center">
                    <span className="mr-2 font-gola text-[14px] text-[#128400]">
                      Answered
                    </span>
                    <img src="/PointedDown.svg" alt="Pointed Down" />
                  </div>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                    Location
                  </span>
                  <div>
                    <span className="text-[#292929] font-medium text-base font-gola">
                      Coimbatore
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                    Converted / Not
                  </span>
                  <div className="w-[150px] rounded-full justify-center flex bg-[#EDFFEA] px-2 py-1 items-center">
                    <span className="mr-2 font-gola text-[14px] text-[#128400]">
                      Converted
                    </span>
                    <img src="/PointedDown.svg" alt="Pointed Down" />
                  </div>
                </div>
              </div>
              <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                <div className="flex item-center mb-2">
                  <h5 className=" mr-3 text-base font-semibold text-[#313131]">
                    Arun Kumar
                  </h5>
                </div>

                <div className="flex items-center justify-between mt-3">
                  <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                    Phone Number
                  </span>
                  <span className="text-[#292929] font-medium text-base font-gola">
                    +91 9786564432
                  </span>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                    Answered / Not
                  </span>
                  <div className="w-[150px] rounded-full justify-center flex bg-[#FFF0D4] px-2 py-1 items-center">
                    <span className="mr-2 font-gola text-[14px] text-[#C96D02]">
                      Not Converted
                    </span>
                    <img src="/PointedDown.svg" alt="Pointed Down" />
                  </div>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                    Location
                  </span>
                  <div>
                    <span className="text-[#292929] font-medium text-base font-gola">
                      Coimbatore
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                    Converted / Not
                  </span>
                  <div className="w-[150px] rounded-full justify-center flex bg-[#FFF0D4] px-2 py-1 items-center">
                    <span className="mr-2 font-gola text-[14px] text-[#C96D02]">
                      Not Converted
                    </span>
                    <img src="/PointedDown.svg" alt="Pointed Down" />
                  </div>
                </div>
              </div>
              <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                <div className="flex item-center mb-2">
                  <h5 className=" mr-3 text-base font-semibold text-[#313131]">
                    Arun Kumar
                  </h5>
                </div>

                <div className="flex items-center justify-between mt-3">
                  <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                    Phone Number
                  </span>
                  <span className="text-[#292929] font-medium text-base font-gola">
                    +91 9786564432
                  </span>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                    Answered / Not
                  </span>
                  <div className="w-[150px] rounded-full justify-center flex bg-[#EDFFEA] px-2 py-1 items-center">
                    <span className="mr-2 font-gola text-[14px] text-[#128400]">
                      Answered
                    </span>
                    <img src="/PointedDown.svg" alt="Pointed Down" />
                  </div>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                    Location
                  </span>
                  <div>
                    <span className="text-[#292929] font-medium text-base font-gola">
                      Coimbatore
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                    Converted / Not
                  </span>
                  <div className="w-[150px] rounded-full justify-center flex bg-[#EDFFEA] px-2 py-1 items-center">
                    <span className="mr-2 font-gola text-[14px] text-[#128400]">
                      Converted
                    </span>
                    <img src="/PointedDown.svg" alt="Pointed Down" />
                  </div>
                </div>
              </div>
              <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                <div className="flex item-center mb-2">
                  <h5 className=" mr-3 text-base font-semibold text-[#313131]">
                    Arun Kumar
                  </h5>
                </div>

                <div className="flex items-center justify-between mt-3">
                  <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                    Phone Number
                  </span>
                  <span className="text-[#292929] font-medium text-base font-gola">
                    +91 9786564432
                  </span>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                    Answered / Not
                  </span>
                  <div className="w-[150px] rounded-full justify-center flex bg-[#FFF0D4] px-2 py-1 items-center">
                    <span className="mr-2 font-gola text-[14px] text-[#C96D02]">
                      Not Converted
                    </span>
                    <img src="/PointedDown.svg" alt="Pointed Down" />
                  </div>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                    Location
                  </span>
                  <div>
                    <span className="text-[#292929] font-medium text-base font-gola">
                      Coimbatore
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                    Converted / Not
                  </span>
                  <div className="w-[150px] rounded-full justify-center flex bg-[#FFF0D4] px-2 py-1 items-center">
                    <span className="mr-2 font-gola text-[14px] text-[#C96D02]">
                      Not Converted
                    </span>
                    <img src="/PointedDown.svg" alt="Pointed Down" />
                  </div>
                </div>
              </div>
              <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                <div className="flex item-center mb-2">
                  <h5 className=" mr-3 text-base font-semibold text-[#313131]">
                    Arun Kumar
                  </h5>
                </div>

                <div className="flex items-center justify-between mt-3">
                  <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                    Phone Number
                  </span>
                  <span className="text-[#292929] font-medium text-base font-gola">
                    +91 9786564432
                  </span>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                    Answered / Not
                  </span>
                  <div className="w-[150px] rounded-full justify-center flex bg-[#EDFFEA] px-2 py-1 items-center">
                    <span className="mr-2 font-gola text-[14px] text-[#128400]">
                      Answered
                    </span>
                    <img src="/PointedDown.svg" alt="Pointed Down" />
                  </div>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                    Location
                  </span>
                  <div>
                    <span className="text-[#292929] font-medium text-base font-gola">
                      Coimbatore
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                    Converted / Not
                  </span>
                  <div className="w-[150px] rounded-full justify-center flex bg-[#EDFFEA] px-2 py-1 items-center">
                    <span className="mr-2 font-gola text-[14px] text-[#128400]">
                      Converted
                    </span>
                    <img src="/PointedDown.svg" alt="Pointed Down" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AdminTelemarketingMobileSidebar isOpen={isOpen} onClose={onClose} />
    </div>
  );
}

export default applicants;
