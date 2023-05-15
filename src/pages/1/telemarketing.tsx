import TelemarketingSidebar from "@/components/reusable/TelemarketingSidebar";
import AdminTelemarketingMobileSidebar from "@/components/reusable/AdminTelemarketingMobileSidebar";
import AdminTelemarketingSidebar from "@/components/reusable/AdminTelemarketingSidebar";
import TelemarketingMobileSidebar from "@/components/reusable/TelemarketingMobileSidebar";
import { Select, useMediaQuery } from "@chakra-ui/react";
import Head from "next/head";
import React, { useState } from "react";

function telemarketing() {
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
        <title>Telemarketing Dashboard</title>
      </Head>
      {!isMobile && <AdminTelemarketingSidebar />}
      <div className="bg-[#F1F4FA] w-full tabanddesk:h-screen flex justify-center">
        <div className="w-full flex flex-col items-center">
          <div className="bg-white tabanddesk:px-10 mobile:pl-[16px] mobile:pr-[16px] pt-3 pb-3 w-full flex justify-between">
            <img width={120} src="../logo.svg" alt="" />
            <img src="../avatar.svg" alt="" />
          </div>
          <div className="w-full max-w-custom1500 tabanddesk:px-10 mobile:pl-[16px] mobile:pr-[16px]  bg-[#F1F4FA] h-full mt-5">
            <div className="tabanddesk:hidden">
              <div className="flex items-center mb-10">
                <img onClick={onOpen} src="../menu.svg" alt="Menu Icon" />
                <span className="ml-5 font-gola text-2xl font-bold">
                  Users List
                </span>
              </div>
            </div>
            <div className="flex justify-between">
              <span className="mobile:hidden font-gola text-2xl font-bold">
                Users List
              </span>
            </div>
            <div className="tabanddesk:hidden">
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
                          Last Active Date
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
                          Session Timing
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
                          Successful Conversion
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
                      <div className="flex items-center justify-between p-[16px]">
                        <span className="capitalize text-sm font-gola font-medium text-[#767676DE]/[.87] mr-3">
                          Action
                        </span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b">
                    <th scope="row" className="px-6 py-4">
                      <span className="font-gola text-sm font-medium text-black">
                        Ritesh
                      </span>
                    </th>
                    <td className="px-6 py-4 font-gola text-sm font-medium text-black">
                      03/05/2023
                    </td>
                    <td className="px-6 py-4 font-gola text-[14px] font-medium text-black">
                      08:25:23
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-gola text-sm font-medium text-black">
                        10 Students Converted
                      </span>
                    </td>
                    <td className="px-[16px]">
                      <button
                        onClick={onOpen}
                        type="button"
                        className=" font-gola text-white bg-primary-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 focus:outline-none"
                      >
                        {"View"}
                      </button>
                    </td>
                  </tr>
                  <tr className="bg-white border-b">
                    <th scope="row" className="px-6 py-4">
                      <span className="font-gola text-sm font-medium text-black">
                        Ritesh
                      </span>
                    </th>
                    <td className="px-6 py-4 font-gola text-sm font-medium text-black">
                      03/05/2023
                    </td>
                    <td className="px-6 py-4 font-gola text-[14px] font-medium text-black">
                      08:25:23
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-gola text-sm font-medium text-black">
                        10 Students Converted
                      </span>
                    </td>
                    <td className="px-[16px]">
                      <button
                        onClick={onOpen}
                        type="button"
                        className=" font-gola text-white bg-primary-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 focus:outline-none"
                      >
                        {"View"}
                      </button>
                    </td>
                  </tr>
                  <tr className="bg-white border-b">
                    <th scope="row" className="px-6 py-4">
                      <span className="font-gola text-sm font-medium text-black">
                        Ritesh
                      </span>
                    </th>
                    <td className="px-6 py-4 font-gola text-sm font-medium text-black">
                      03/05/2023
                    </td>
                    <td className="px-6 py-4 font-gola text-[14px] font-medium text-black">
                      08:25:23
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-gola text-sm font-medium text-black">
                        10 Students Converted
                      </span>
                    </td>
                    <td className="px-[16px]">
                      <button
                        onClick={onOpen}
                        type="button"
                        className=" font-gola text-white bg-primary-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 focus:outline-none"
                      >
                        {"View"}
                      </button>
                    </td>
                  </tr>
                  <tr className="bg-white border-b">
                    <th scope="row" className="px-6 py-4">
                      <span className="font-gola text-sm font-medium text-black">
                        Ritesh
                      </span>
                    </th>
                    <td className="px-6 py-4 font-gola text-sm font-medium text-black">
                      03/05/2023
                    </td>
                    <td className="px-6 py-4 font-gola text-[14px] font-medium text-black">
                      08:25:23
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-gola text-sm font-medium text-black">
                        10 Students Converted
                      </span>
                    </td>
                    <td className="px-[16px]">
                      <button
                        onClick={onOpen}
                        type="button"
                        className=" font-gola text-white bg-primary-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 focus:outline-none"
                      >
                        {"View"}
                      </button>
                    </td>
                  </tr>
                  <tr className="bg-white border-b">
                    <th scope="row" className="px-6 py-4">
                      <span className="font-gola text-sm font-medium text-black">
                        Ritesh
                      </span>
                    </th>
                    <td className="px-6 py-4 font-gola text-sm font-medium text-black">
                      03/05/2023
                    </td>
                    <td className="px-6 py-4 font-gola text-[14px] font-medium text-black">
                      08:25:23
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-gola text-sm font-medium text-black">
                        10 Students Converted
                      </span>
                    </td>
                    <td className="px-[16px]">
                      <button
                        onClick={onOpen}
                        type="button"
                        className=" font-gola text-white bg-primary-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 focus:outline-none"
                      >
                        {"View"}
                      </button>
                    </td>
                  </tr>
                  <tr className="bg-white border-b">
                    <th scope="row" className="px-6 py-4">
                      <span className="font-gola text-sm font-medium text-black">
                        Ritesh
                      </span>
                    </th>
                    <td className="px-6 py-4 font-gola text-sm font-medium text-black">
                      03/05/2023
                    </td>
                    <td className="px-6 py-4 font-gola text-[14px] font-medium text-black">
                      08:25:23
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-gola text-sm font-medium text-black">
                        10 Students Converted
                      </span>
                    </td>
                    <td className="px-[16px]">
                      <button
                        onClick={onOpen}
                        type="button"
                        className=" font-gola text-white bg-primary-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 focus:outline-none"
                      >
                        {"View"}
                      </button>
                    </td>
                  </tr>
                  <tr className="bg-white border-b">
                    <th scope="row" className="px-6 py-4">
                      <span className="font-gola text-sm font-medium text-black">
                        Ritesh
                      </span>
                    </th>
                    <td className="px-6 py-4 font-gola text-sm font-medium text-black">
                      03/05/2023
                    </td>
                    <td className="px-6 py-4 font-gola text-[14px] font-medium text-black">
                      08:25:23
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-gola text-sm font-medium text-black">
                        10 Students Converted
                      </span>
                    </td>
                    <td className="px-[16px]">
                      <button
                        onClick={onOpen}
                        type="button"
                        className=" font-gola text-white bg-primary-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 focus:outline-none"
                      >
                        {"View"}
                      </button>
                    </td>
                  </tr>
                  <tr className="bg-white border-b">
                    <th scope="row" className="px-6 py-4">
                      <span className="font-gola text-sm font-medium text-black">
                        Ritesh
                      </span>
                    </th>
                    <td className="px-6 py-4 font-gola text-sm font-medium text-black">
                      03/05/2023
                    </td>
                    <td className="px-6 py-4 font-gola text-[14px] font-medium text-black">
                      08:25:23
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-gola text-sm font-medium text-black">
                        10 Students Converted
                      </span>
                    </td>
                    <td className="px-[16px]">
                      <button
                        onClick={onOpen}
                        type="button"
                        className=" font-gola text-white bg-primary-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 focus:outline-none"
                      >
                        {"View"}
                      </button>
                    </td>
                  </tr>
                  <tr className="bg-white border-b">
                    <th scope="row" className="px-6 py-4">
                      <span className="font-gola text-sm font-medium text-black">
                        Ritesh
                      </span>
                    </th>
                    <td className="px-6 py-4 font-gola text-sm font-medium text-black">
                      03/05/2023
                    </td>
                    <td className="px-6 py-4 font-gola text-[14px] font-medium text-black">
                      08:25:23
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-gola text-sm font-medium text-black">
                        10 Students Converted
                      </span>
                    </td>
                    <td className="px-[16px]">
                      <button
                        onClick={onOpen}
                        type="button"
                        className=" font-gola text-white bg-primary-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 focus:outline-none"
                      >
                        {"View"}
                      </button>
                    </td>
                  </tr>
                  <tr className="bg-white border-b">
                    <th scope="row" className="px-6 py-4">
                      <span className="font-gola text-sm font-medium text-black">
                        Ritesh
                      </span>
                    </th>
                    <td className="px-6 py-4 font-gola text-sm font-medium text-black">
                      03/05/2023
                    </td>
                    <td className="px-6 py-4 font-gola text-[14px] font-medium text-black">
                      08:25:23
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-gola text-sm font-medium text-black">
                        10 Students Converted
                      </span>
                    </td>
                    <td className="px-[16px]">
                      <button
                        onClick={onOpen}
                        type="button"
                        className=" font-gola text-white bg-primary-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 focus:outline-none"
                      >
                        {"View"}
                      </button>
                    </td>
                  </tr>

                </tbody>
              </table>
            </div>
            <div className="desktop:hidden mt-5 grid tablet:grid-cols-2 gap-3">
              <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                <div className="flex item-center mb-2">
                  <h5 className=" mr-3 text-base font-semibold text-[#313131]">
                    Ritesh
                  </h5>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                    Last Active Date
                  </span>
                  <span className="text-[#292929] font-medium text-base font-gola">
                    03/05/2023
                  </span>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                    Session Timing
                  </span>
                  <span className="text-[#292929] font-medium text-base font-gola">
                    08:50:23
                  </span>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                    Successful Conversion
                  </span>
                  <div>
                    <span className="text-[#292929] font-medium text-base font-gola">
                      10 Students
                    </span>
                  </div>
                </div>
              </div>
              <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                <div className="flex item-center mb-2">
                  <h5 className=" mr-3 text-base font-semibold text-[#313131]">
                    Ritesh
                  </h5>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                    Last Active Date
                  </span>
                  <span className="text-[#292929] font-medium text-base font-gola">
                    03/05/2023
                  </span>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                    Session Timing
                  </span>
                  <span className="text-[#292929] font-medium text-base font-gola">
                    08:50:23
                  </span>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                    Successful Conversion
                  </span>
                  <div>
                    <span className="text-[#292929] font-medium text-base font-gola">
                      10 Students
                    </span>
                  </div>
                </div>
              </div>
              <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                <div className="flex item-center mb-2">
                  <h5 className=" mr-3 text-base font-semibold text-[#313131]">
                    Ritesh
                  </h5>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                    Last Active Date
                  </span>
                  <span className="text-[#292929] font-medium text-base font-gola">
                    03/05/2023
                  </span>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                    Session Timing
                  </span>
                  <span className="text-[#292929] font-medium text-base font-gola">
                    08:50:23
                  </span>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                    Successful Conversion
                  </span>
                  <div>
                    <span className="text-[#292929] font-medium text-base font-gola">
                      10 Students
                    </span>
                  </div>
                </div>
              </div>
              <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                <div className="flex item-center mb-2">
                  <h5 className=" mr-3 text-base font-semibold text-[#313131]">
                    Ritesh
                  </h5>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                    Last Active Date
                  </span>
                  <span className="text-[#292929] font-medium text-base font-gola">
                    03/05/2023
                  </span>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                    Session Timing
                  </span>
                  <span className="text-[#292929] font-medium text-base font-gola">
                    08:50:23
                  </span>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                    Successful Conversion
                  </span>
                  <div>
                    <span className="text-[#292929] font-medium text-base font-gola">
                      10 Students
                    </span>
                  </div>
                </div>
              </div>
              <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                <div className="flex item-center mb-2">
                  <h5 className=" mr-3 text-base font-semibold text-[#313131]">
                    Ritesh
                  </h5>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                    Last Active Date
                  </span>
                  <span className="text-[#292929] font-medium text-base font-gola">
                    03/05/2023
                  </span>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                    Session Timing
                  </span>
                  <span className="text-[#292929] font-medium text-base font-gola">
                    08:50:23
                  </span>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                    Successful Conversion
                  </span>
                  <div>
                    <span className="text-[#292929] font-medium text-base font-gola">
                      10 Students
                    </span>
                  </div>
                </div>
              </div>
              <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                <div className="flex item-center mb-2">
                  <h5 className=" mr-3 text-base font-semibold text-[#313131]">
                    Ritesh
                  </h5>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                    Last Active Date
                  </span>
                  <span className="text-[#292929] font-medium text-base font-gola">
                    03/05/2023
                  </span>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                    Session Timing
                  </span>
                  <span className="text-[#292929] font-medium text-base font-gola">
                    08:50:23
                  </span>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                    Successful Conversion
                  </span>
                  <div>
                    <span className="text-[#292929] font-medium text-base font-gola">
                      10 Students
                    </span>
                  </div>
                </div>
              </div>
              <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                <div className="flex item-center mb-2">
                  <h5 className=" mr-3 text-base font-semibold text-[#313131]">
                    Ritesh
                  </h5>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                    Last Active Date
                  </span>
                  <span className="text-[#292929] font-medium text-base font-gola">
                    03/05/2023
                  </span>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                    Session Timing
                  </span>
                  <span className="text-[#292929] font-medium text-base font-gola">
                    08:50:23
                  </span>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                    Successful Conversion
                  </span>
                  <div>
                    <span className="text-[#292929] font-medium text-base font-gola">
                      10 Students
                    </span>
                  </div>
                </div>
              </div>
              <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                <div className="flex item-center mb-2">
                  <h5 className=" mr-3 text-base font-semibold text-[#313131]">
                    Ritesh
                  </h5>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                    Last Active Date
                  </span>
                  <span className="text-[#292929] font-medium text-base font-gola">
                    03/05/2023
                  </span>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                    Session Timing
                  </span>
                  <span className="text-[#292929] font-medium text-base font-gola">
                    08:50:23
                  </span>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                    Successful Conversion
                  </span>
                  <div>
                    <span className="text-[#292929] font-medium text-base font-gola">
                      10 Students
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <AdminTelemarketingMobileSidebar isOpen={isOpen} onClose={onClose} />
      </div>
    </div>
  );
}

export default telemarketing;
