import React, { useState } from "react";
import Head from "next/head";
import { Select, useMediaQuery } from "@chakra-ui/react";
import AdminTelemarketingSidebar from "@/components/reusable/AdminTelemarketingSidebar";
import AdminTelemarketingMobileSidebar from "@/components/reusable/AdminTelemarketingMobileSidebar";

function dataupload() {
  const [isMobile] = useMediaQuery("(max-width: 767px)");
  const [isOpen, setIsOpen] = useState(false);
  const [isDataUploaded, setIsDataUploaded] = useState(false);
  const onOpen = () => {
    setIsOpen(true);
  };
  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex w-full">
      <Head>
        <title>Data Upload</title>
      </Head>
      {!isMobile && <AdminTelemarketingSidebar />}
      <div className="w-full flex justify-center">
        <div className="w-full min-h-screen flex flex-col items-center">
          <div className="bg-white tabanddesk:px-10 pt-3 pb-3 tabanddesk:w-full mobile:w-11/12 flex justify-between">
            <img width={120} src="../logo.svg" alt="" />
            <img src="../avatar.svg" alt="" />
          </div>
          <div className="bg-[#F1F4FA] w-full min-h-screen relative px-5 pb-20">
            <div className="mobile:hidden flex items-center justify-between mt-10">
              <span className="font-gola text-[28px] font-bold">Data Upload</span>
              <button
                onClick={() => setIsDataUploaded(true)}
                type="button"
                className="h-10 mt-5 font-gola text-white bg-primary-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
              >
                <div className="flex items-center">
                  <svg
                    width="18px"
                    height="18px"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title />
                    <g id="Complete">
                      <g id="upload">
                        <g>
                          <path
                            d="M3,12.3v7a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2v-7"
                            fill="none"
                            stroke="#fff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          />
                          <g>
                            <polyline
                              data-name="Right"
                              fill="none"
                              id="Right-2"
                              points="7.9 6.7 12 2.7 16.1 6.7"
                              stroke="#fff"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                            />
                            <line
                              fill="none"
                              stroke="#fff"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              x1="12"
                              x2="12"
                              y1="16.3"
                              y2="4.8"
                            />
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                  &nbsp;
                  {"Upload Data"}
                </div>
              </button>
            </div>
            <div className="tabanddesk:hidden">
              <div className="mt-5 w-full flex justify-between">
                <div className="flex w-full items-center">
                  <img onClick={onOpen} src="../menu.svg" alt="Menu Icon" />
                  <span className="ml-5 font-gola text-2xl font-bold">
                    Data Upload
                  </span>
                </div>
                <div>
                <button
                  onClick={() => setIsDataUploaded(true)}
                  type="button"
                  className="w-[150px] text-center h-10 font-gola text-white bg-primary-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                >
                  <div className="flex items-center">
                    <svg
                      width="18px"
                      height="18px"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title />
                      <g id="Complete">
                        <g id="upload">
                          <g>
                            <path
                              d="M3,12.3v7a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2v-7"
                              fill="none"
                              stroke="#fff"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                            />
                            <g>
                              <polyline
                                data-name="Right"
                                fill="none"
                                id="Right-2"
                                points="7.9 6.7 12 2.7 16.1 6.7"
                                stroke="#fff"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                              />
                              <line
                                fill="none"
                                stroke="#fff"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                x1="12"
                                x2="12"
                                y1="16.3"
                                y2="4.8"
                              />
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                    &nbsp;
                    {"Upload Data"}
                  </div>
                </button>
              </div>
              </div>
             
            </div>
            {isDataUploaded && (
              <>
                <div className="tablet:hidden mobile:hidden bg-white rounded-t-lg mt-10 w-full relative overflow-x-auto">
                  <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase border-b">
                      <tr>
                        <th className="w-[20%]" scope="col">
                          <div className="flex items-center justify-between border-r-[1px] p-[16px]">
                            <span className="capitalize text-sm font-gola font-medium text-[#767676DE]/[.87] mr-3">
                              Name
                            </span>
                            <input
                              checked
                              id="default-checkbox"
                              type="checkbox"
                              value=""
                              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                            />
                          </div>
                        </th>
                        <th scope="col" className="w-[20%]">
                          <div className="flex items-center justify-between border-r-[1px] p-[16px]">
                            <span className="capitalize text-sm font-gola font-medium text-[#767676DE]/[.87] mr-3">
                              Phone Number
                            </span>
                            <input
                              checked
                              id="default-checkbox"
                              type="checkbox"
                              value=""
                              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                            />
                          </div>
                        </th>
                        <th scope="col" className="w-[20%]">
                          <div className="flex items-center justify-between border-r-[1px] p-[16px]">
                            <span className="capitalize text-sm font-gola font-medium text-[#767676DE]/[.87] mr-3">
                              Loan Amount
                            </span>
                            <input
                              checked
                              id="default-checkbox"
                              type="checkbox"
                              value=""
                              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                            />
                          </div>
                        </th>
                        <th scope="col" className="w-[20%]">
                          <div className="flex items-center justify-between border-r-[1px] p-[16px]">
                            <span className="capitalize text-sm font-gola font-medium text-[#767676DE]/[.87] mr-3">
                              Location
                            </span>
                            <input
                              id="default-checkbox"
                              type="checkbox"
                              value=""
                              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                            />
                          </div>
                        </th>
                        <th scope="col" className="w-[20%]">
                          <div className="flex items-center justify-between border-r-[1px] p-[16px]">
                            <span className="capitalize text-sm font-gola font-medium text-[#767676DE]/[.87] mr-3">
                              University
                            </span>
                            <input
                              id="default-checkbox"
                              type="checkbox"
                              value=""
                              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                            />
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
                        <td className="px-6 py-4 font-gola text-[14px] font-medium text-black">
                          ₹ 20,00,000
                        </td>
                        <td className="px-6 py-4">
                          <p className="font-gola text-sm font-medium text-black">
                            Coimbatore,
                          </p>
                          <p className="font-gola text-xs font-medium text-[#7E7E7E] mt-1">
                            Tamil Nadu - 641604
                          </p>
                        </td>
                        <td className="px-6 py-4 mr-2 font-medium font-gola text-black text-[14px]">
                          The University of Melbourne
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
                        <td className="px-6 py-4 font-gola text-[14px] font-medium text-black">
                          ₹ 20,00,000
                        </td>
                        <td className="px-6 py-4">
                          <p className="font-gola text-sm font-medium text-black">
                            Coimbatore,
                          </p>
                          <p className="font-gola text-xs font-medium text-[#7E7E7E] mt-1">
                            Tamil Nadu - 641604
                          </p>
                        </td>
                        <td className="px-6 py-4 mr-2 font-medium font-gola text-black text-[14px]">
                          The University of Melbourne
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
                        <td className="px-6 py-4 font-gola text-[14px] font-medium text-black">
                          ₹ 20,00,000
                        </td>
                        <td className="px-6 py-4">
                          <p className="font-gola text-sm font-medium text-black">
                            Coimbatore,
                          </p>
                          <p className="font-gola text-xs font-medium text-[#7E7E7E] mt-1">
                            Tamil Nadu - 641604
                          </p>
                        </td>
                        <td className="px-6 py-4 mr-2 font-medium font-gola text-black text-[14px]">
                          The University of Melbourne
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
                        <td className="px-6 py-4 font-gola text-[14px] font-medium text-black">
                          ₹ 20,00,000
                        </td>
                        <td className="px-6 py-4">
                          <p className="font-gola text-sm font-medium text-black">
                            Coimbatore,
                          </p>
                          <p className="font-gola text-xs font-medium text-[#7E7E7E] mt-1">
                            Tamil Nadu - 641604
                          </p>
                        </td>
                        <td className="px-6 py-4 mr-2 font-medium font-gola text-black text-[14px]">
                          The University of Melbourne
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
                        <td className="px-6 py-4 font-gola text-[14px] font-medium text-black">
                          ₹ 20,00,000
                        </td>
                        <td className="px-6 py-4">
                          <p className="font-gola text-sm font-medium text-black">
                            Coimbatore,
                          </p>
                          <p className="font-gola text-xs font-medium text-[#7E7E7E] mt-1">
                            Tamil Nadu - 641604
                          </p>
                        </td>
                        <td className="px-6 py-4 mr-2 font-medium font-gola text-black text-[14px]">
                          The University of Melbourne
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
                        <td className="px-6 py-4 font-gola text-[14px] font-medium text-black">
                          ₹ 20,00,000
                        </td>
                        <td className="px-6 py-4">
                          <p className="font-gola text-sm font-medium text-black">
                            Coimbatore,
                          </p>
                          <p className="font-gola text-xs font-medium text-[#7E7E7E] mt-1">
                            Tamil Nadu - 641604
                          </p>
                        </td>
                        <td className="px-6 py-4 mr-2 font-medium font-gola text-black text-[14px]">
                          The University of Melbourne
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
                        <td className="px-6 py-4 font-gola text-[14px] font-medium text-black">
                          ₹ 20,00,000
                        </td>
                        <td className="px-6 py-4">
                          <p className="font-gola text-sm font-medium text-black">
                            Coimbatore,
                          </p>
                          <p className="font-gola text-xs font-medium text-[#7E7E7E] mt-1">
                            Tamil Nadu - 641604
                          </p>
                        </td>
                        <td className="px-6 py-4 mr-2 font-medium font-gola text-black text-[14px]">
                          The University of Melbourne
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
                        <td className="px-6 py-4 font-gola text-[14px] font-medium text-black">
                          ₹ 20,00,000
                        </td>
                        <td className="px-6 py-4">
                          <p className="font-gola text-sm font-medium text-black">
                            Coimbatore,
                          </p>
                          <p className="font-gola text-xs font-medium text-[#7E7E7E] mt-1">
                            Tamil Nadu - 641604
                          </p>
                        </td>
                        <td className="px-6 py-4 mr-2 font-medium font-gola text-black text-[14px]">
                          The University of Melbourne
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
                        <td className="px-6 py-4 font-gola text-[14px] font-medium text-black">
                          ₹ 20,00,000
                        </td>
                        <td className="px-6 py-4">
                          <p className="font-gola text-sm font-medium text-black">
                            Coimbatore,
                          </p>
                          <p className="font-gola text-xs font-medium text-[#7E7E7E] mt-1">
                            Tamil Nadu - 641604
                          </p>
                        </td>
                        <td className="px-6 py-4 mr-2 font-medium font-gola text-black text-[14px]">
                          The University of Melbourne
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
                        <td className="px-6 py-4 font-gola text-[14px] font-medium text-black">
                          ₹ 20,00,000
                        </td>
                        <td className="px-6 py-4">
                          <p className="font-gola text-sm font-medium text-black">
                            Coimbatore,
                          </p>
                          <p className="font-gola text-xs font-medium text-[#7E7E7E] mt-1">
                            Tamil Nadu - 641604
                          </p>
                        </td>
                        <td className="px-6 py-4 mr-2 font-medium font-gola text-black text-[14px]">
                          The University of Melbourne
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
                        Loan Amount
                      </span>
                      <span className="text-[#292929] font-medium text-base font-gola">
                        ₹ 20,00,000
                      </span>
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
                        University
                      </span>
                      <span className="text-[#292929] font-medium text-base font-gola">
                        The University of Melbourne
                      </span>
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
                        Loan Amount
                      </span>
                      <span className="text-[#292929] font-medium text-base font-gola">
                        ₹ 20,00,000
                      </span>
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
                        University
                      </span>
                      <span className="text-[#292929] font-medium text-base font-gola">
                        The University of Melbourne
                      </span>
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
                        Loan Amount
                      </span>
                      <span className="text-[#292929] font-medium text-base font-gola">
                        ₹ 20,00,000
                      </span>
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
                        University
                      </span>
                      <span className="text-[#292929] font-medium text-base font-gola">
                        The University of Melbourne
                      </span>
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
                        Loan Amount
                      </span>
                      <span className="text-[#292929] font-medium text-base font-gola">
                        ₹ 20,00,000
                      </span>
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
                        University
                      </span>
                      <span className="text-[#292929] font-medium text-base font-gola">
                        The University of Melbourne
                      </span>
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
                        Loan Amount
                      </span>
                      <span className="text-[#292929] font-medium text-base font-gola">
                        ₹ 20,00,000
                      </span>
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
                        University
                      </span>
                      <span className="text-[#292929] font-medium text-base font-gola">
                        The University of Melbourne
                      </span>
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
                        Loan Amount
                      </span>
                      <span className="text-[#292929] font-medium text-base font-gola">
                        ₹ 20,00,000
                      </span>
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
                        University
                      </span>
                      <span className="text-[#292929] font-medium text-base font-gola">
                        The University of Melbourne
                      </span>
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
                        Loan Amount
                      </span>
                      <span className="text-[#292929] font-medium text-base font-gola">
                        ₹ 20,00,000
                      </span>
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
                        University
                      </span>
                      <span className="text-[#292929] font-medium text-base font-gola">
                        The University of Melbourne
                      </span>
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
                        Loan Amount
                      </span>
                      <span className="text-[#292929] font-medium text-base font-gola">
                        ₹ 20,00,000
                      </span>
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
                        University
                      </span>
                      <span className="text-[#292929] font-medium text-base font-gola">
                        The University of Melbourne
                      </span>
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
                        Loan Amount
                      </span>
                      <span className="text-[#292929] font-medium text-base font-gola">
                        ₹ 20,00,000
                      </span>
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
                        University
                      </span>
                      <span className="text-[#292929] font-medium text-base font-gola">
                        The University of Melbourne
                      </span>
                    </div>
                  </div>
                </div>
              </>
            )}
            {!isDataUploaded && (
              <div className="w-full justify-center">
                <span className="font-gola text-md font-medium text-center mt-10 text-black opacity-50">
                  Please upload your data to categorize
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
      <AdminTelemarketingMobileSidebar isOpen={isOpen} onClose={onClose} />
    </div>
  );
}

export default dataupload;
