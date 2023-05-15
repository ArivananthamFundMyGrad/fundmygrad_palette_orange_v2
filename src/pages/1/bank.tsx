import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Drawer, DrawerContent, DrawerOverlay } from "@chakra-ui/modal";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/tabs";

function bank() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isUserSidebarOpen, setIsUserSidebarOpen] = useState(false);

  const onUserSidebarOpen = () => {
    setIsUserSidebarOpen(true);
  };

  const onUserSidebarClose = () => {
    setIsUserSidebarOpen(false);
  };

  const onOpen = () => {
    setIsOpen(true);
  };
  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex w-full">
      <Head>
        <title>Dashboard</title>
      </Head>
      <div className="w-full flex justify-center">
        <div className="w-full min-h-screen flex flex-col items-center">
          <div className="bg-white tabanddesk:px-10 pt-3 pb-3 tabanddesk:w-full mobile:w-11/12 flex justify-between">
            <img width={120} src="../logo.svg" alt="" />
            <img src="../avatar.svg" alt="" />
          </div>
          <div className="w-full px-10">
            <div className="tabanddesk:hidden flex items-center mb-10">
              <img onClick={onOpen} src="../menu.svg" alt="Menu Icon" />
              <span className="ml-5 font-gola text-2xl font-bold">Organization/Users</span>
            </div>
            <span className="mobile:hidden font-gola text-2xl font-bold mb-5">
              Organization/Users
            </span>
            <Tabs>
              <TabList>
                <Tab
                  _selected={{
                    color: "#0052CC",
                    borderBottom: "2px solid #0052CC",
                  }}
                >
                  <span className="font-gola text-sm font-semibold">
                    Organizations
                  </span>
                </Tab>
                <Tab
                  _selected={{
                    color: "#0052CC",
                    borderBottom: "2px solid #0052CC",
                  }}
                >
                  <span className="font-gola text-sm font-semibold">Users</span>
                </Tab>
              </TabList>
              <TabPanels>
                <TabPanel style={{ padding: "0" }}>
                  <div>
                    <div className="flex justify-between w-full mt-5">
                      <div className="relative">
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
                      <button
                      onClick={onOpen}
                        type="button"
                        className="h-10 font-gola	text-white bg-primary-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                      >
                        <div className="flex items-center">
                          <img
                            className="pr-3"
                            src="../AddIcon.svg"
                            alt="Add Icon"
                          />
                          {"New Organization"}
                        </div>
                      </button>
                    </div>
                    <div className="mobile:hidden tablet:hidden mt-10 relative overflow-x-auto">
                      <table className="w-full text-sm text-left text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase border-b">
                          <tr>
                            <th scope="col" className="px-[0.5rem] py-3">
                              <div className="flex items-center">
                                <span className="capitalize text-sm font-gola font-medium text-[#767676DE]/[.87] mr-3">
                                  Organization Name
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
                            <th scope="col" className="px-[0.5rem] py-3">
                              <div className="flex items-center">
                                <span className="capitalize text-sm font-gola font-medium text-[#767676DE]/[.87] mr-3">
                                  Mobile Number
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

                            <th scope="col" className="px-[0.5rem] py-3">
                              <div className="flex items-center">
                                <span className="capitalize text-sm font-gola font-medium text-[#767676DE]/[.87] mr-3">
                                  Email Address
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

                            <th scope="col" className="px-[0.5rem] py-3">
                              <div className="flex items-center">
                                <span className="capitalize text-sm font-gola font-medium text-[#767676DE]/[.87] mr-3">
                                  Last Online Time
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
                            <th scope="col" className="px-[0.5rem] py-3">
                              <div className="flex items-center">
                                <span className="capitalize text-sm font-gola font-medium text-[#767676DE]/[.87] mr-3">
                                  Account Status
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
                            <th scope="col" className="px-[0.5rem] py-3">
                              <div className="flex items-center">
                                <span className="capitalize text-sm font-gola font-medium text-[#767676DE]/[.87]">
                                  Action
                                </span>
                              </div>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="bg-white border-b">
                            <th scope="row" className="px-[0.5rem] py-4">
                              <span className="font-gola text-sm font-medium text-black">
                                HDFC Bank
                              </span>
                            </th>
                            <td scope="row" className="px-[0.5rem] py-4">
                              <span className="font-gola text-sm font-medium text-black">
                                +91 9789654189
                              </span>
                            </td>
                            <td scope="row" className="px-[0.5rem] py-4">
                              <span className="font-gola text-sm font-medium text-black">
                                southchennai@hdfc.com
                              </span>
                            </td>
                            <td className="px-[0.5rem] py-4 font-gola text-sm font-medium text-black">
                              01/05/2023 08:34:54
                            </td>
                            <td className="px-[0.5rem] py-4 font-gola text-sm font-medium text-black">
                              Active
                            </td>
                            <td>
                              <button
                                onClick={() =>
                                  router.push("/organizationprofile")
                                }
                                type="button"
                                className="h-10 font-gola	text-white bg-primary-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                              >
                                View
                              </button>
                            </td>
                          </tr>
                          <tr className="bg-white border-b">
                            <th scope="row" className="px-[0.5rem] py-4">
                              <span className="font-gola text-sm font-medium text-black">
                                HDFC Bank
                              </span>
                            </th>
                            <td scope="row" className="px-[0.5rem] py-4">
                              <span className="font-gola text-sm font-medium text-black">
                                +91 9789654189
                              </span>
                            </td>
                            <td scope="row" className="px-[0.5rem] py-4">
                              <span className="font-gola text-sm font-medium text-black">
                                southchennai@hdfc.com
                              </span>
                            </td>
                            <td className="px-[0.5rem] py-4 font-gola text-sm font-medium text-black">
                              01/05/2023 08:34:54
                            </td>
                            <td className="px-[0.5rem] py-4 font-gola text-sm font-medium text-black">
                              Active
                            </td>
                            <td>
                              <button
                                onClick={() =>
                                  router.push("/organizationprofile")
                                }
                                type="button"
                                className="h-10 font-gola	text-white bg-primary-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                              >
                                View
                              </button>
                            </td>
                          </tr>
                          <tr className="bg-white border-b">
                            <th scope="row" className="px-[0.5rem] py-4">
                              <span className="font-gola text-sm font-medium text-black">
                                HDFC Bank
                              </span>
                            </th>
                            <td scope="row" className="px-[0.5rem] py-4">
                              <span className="font-gola text-sm font-medium text-black">
                                +91 9789654189
                              </span>
                            </td>
                            <td scope="row" className="px-[0.5rem] py-4">
                              <span className="font-gola text-sm font-medium text-black">
                                southchennai@hdfc.com
                              </span>
                            </td>
                            <td className="px-[0.5rem] py-4 font-gola text-sm font-medium text-black">
                              01/05/2023 08:34:54
                            </td>
                            <td className="px-[0.5rem] py-4 font-gola text-sm font-medium text-black">
                              Active
                            </td>
                            <td>
                              <button
                                onClick={() =>
                                  router.push("/organizationprofile")
                                }
                                type="button"
                                className="h-10 font-gola	text-white bg-primary-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                              >
                                View
                              </button>
                            </td>
                          </tr>
                          <tr className="bg-white border-b">
                            <th scope="row" className="px-[0.5rem] py-4">
                              <span className="font-gola text-sm font-medium text-black">
                                HDFC Bank
                              </span>
                            </th>
                            <td scope="row" className="px-[0.5rem] py-4">
                              <span className="font-gola text-sm font-medium text-black">
                                +91 9789654189
                              </span>
                            </td>
                            <td scope="row" className="px-[0.5rem] py-4">
                              <span className="font-gola text-sm font-medium text-black">
                                southchennai@hdfc.com
                              </span>
                            </td>
                            <td className="px-[0.5rem] py-4 font-gola text-sm font-medium text-black">
                              01/05/2023 08:34:54
                            </td>
                            <td className="px-[0.5rem] py-4 font-gola text-sm font-medium text-black">
                              Active
                            </td>
                            <td>
                              <button
                                onClick={() =>
                                  router.push("/organizationprofile")
                                }
                                type="button"
                                className="h-10 font-gola	text-white bg-primary-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                              >
                                View
                              </button>
                            </td>
                          </tr>
                          <tr className="bg-white border-b">
                            <th scope="row" className="px-[0.5rem] py-4">
                              <span className="font-gola text-sm font-medium text-black">
                                HDFC Bank
                              </span>
                            </th>
                            <td scope="row" className="px-[0.5rem] py-4">
                              <span className="font-gola text-sm font-medium text-black">
                                +91 9789654189
                              </span>
                            </td>
                            <td scope="row" className="px-[0.5rem] py-4">
                              <span className="font-gola text-sm font-medium text-black">
                                southchennai@hdfc.com
                              </span>
                            </td>
                            <td className="px-[0.5rem] py-4 font-gola text-sm font-medium text-black">
                              01/05/2023 08:34:54
                            </td>
                            <td className="px-[0.5rem] py-4 font-gola text-sm font-medium text-black">
                              Active
                            </td>
                            <td>
                              <button
                                onClick={() =>
                                  router.push("/organizationprofile")
                                }
                                type="button"
                                className="h-10 font-gola	text-white bg-primary-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                              >
                                View
                              </button>
                            </td>
                          </tr>
                          <tr className="bg-white border-b">
                            <th scope="row" className="px-[0.5rem] py-4">
                              <span className="font-gola text-sm font-medium text-black">
                                HDFC Bank
                              </span>
                            </th>
                            <td scope="row" className="px-[0.5rem] py-4">
                              <span className="font-gola text-sm font-medium text-black">
                                +91 9789654189
                              </span>
                            </td>
                            <td scope="row" className="px-[0.5rem] py-4">
                              <span className="font-gola text-sm font-medium text-black">
                                southchennai@hdfc.com
                              </span>
                            </td>
                            <td className="px-[0.5rem] py-4 font-gola text-sm font-medium text-black">
                              01/05/2023 08:34:54
                            </td>
                            <td className="px-[0.5rem] py-4 font-gola text-sm font-medium text-black">
                              Active
                            </td>
                            <td>
                              <button
                                onClick={() =>
                                  router.push("/organizationprofile")
                                }
                                type="button"
                                className="h-10 font-gola	text-white bg-primary-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                              >
                                View
                              </button>
                            </td>
                          </tr>
                          <tr className="bg-white border-b">
                            <th scope="row" className="px-[0.5rem] py-4">
                              <span className="font-gola text-sm font-medium text-black">
                                HDFC Bank
                              </span>
                            </th>
                            <td scope="row" className="px-[0.5rem] py-4">
                              <span className="font-gola text-sm font-medium text-black">
                                +91 9789654189
                              </span>
                            </td>
                            <td scope="row" className="px-[0.5rem] py-4">
                              <span className="font-gola text-sm font-medium text-black">
                                southchennai@hdfc.com
                              </span>
                            </td>
                            <td className="px-[0.5rem] py-4 font-gola text-sm font-medium text-black">
                              01/05/2023 08:34:54
                            </td>
                            <td className="px-[0.5rem] py-4 font-gola text-sm font-medium text-black">
                              Active
                            </td>
                            <td>
                              <button
                                onClick={() =>
                                  router.push("/organizationprofile")
                                }
                                type="button"
                                className="h-10 font-gola	text-white bg-primary-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                              >
                                View
                              </button>
                            </td>
                          </tr>
                          <tr className="bg-white border-b">
                            <th scope="row" className="px-[0.5rem] py-4">
                              <span className="font-gola text-sm font-medium text-black">
                                HDFC Bank
                              </span>
                            </th>
                            <td scope="row" className="px-[0.5rem] py-4">
                              <span className="font-gola text-sm font-medium text-black">
                                +91 9789654189
                              </span>
                            </td>
                            <td scope="row" className="px-[0.5rem] py-4">
                              <span className="font-gola text-sm font-medium text-black">
                                southchennai@hdfc.com
                              </span>
                            </td>
                            <td className="px-[0.5rem] py-4 font-gola text-sm font-medium text-black">
                              01/05/2023 08:34:54
                            </td>
                            <td className="px-[0.5rem] py-4 font-gola text-sm font-medium text-black">
                              Active
                            </td>
                            <td>
                              <button
                                onClick={() =>
                                  router.push("/organizationprofile")
                                }
                                type="button"
                                className="h-10 font-gola	text-white bg-primary-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                              >
                                View
                              </button>
                            </td>
                          </tr>
                          <tr className="bg-white border-b">
                            <th scope="row" className="px-[0.5rem] py-4">
                              <span className="font-gola text-sm font-medium text-black">
                                HDFC Bank
                              </span>
                            </th>
                            <td scope="row" className="px-[0.5rem] py-4">
                              <span className="font-gola text-sm font-medium text-black">
                                +91 9789654189
                              </span>
                            </td>
                            <td scope="row" className="px-[0.5rem] py-4">
                              <span className="font-gola text-sm font-medium text-black">
                                southchennai@hdfc.com
                              </span>
                            </td>
                            <td className="px-[0.5rem] py-4 font-gola text-sm font-medium text-black">
                              01/05/2023 08:34:54
                            </td>
                            <td className="px-[0.5rem] py-4 font-gola text-sm font-medium text-black">
                              Active
                            </td>
                            <td>
                              <button
                                onClick={() =>
                                  router.push("/organizationprofile")
                                }
                                type="button"
                                className="h-10 font-gola	text-white bg-primary-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                              >
                                View
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="desktop:hidden mt-5 grid tablet:grid-cols-2 gap-5">
                      <div className="cursor-pointer block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                        <div className="flex item-center mb-2">
                          <h5 className=" mr-3 text-base font-semibold text-[#313131]">
                            Nikhil Mathew
                          </h5>
                          <img src="/rightIconGray.svg" alt="" />
                        </div>

                        <p className="font-gola text-sm text-[#7E7E7E]">
                          Coimbatore, TN - 641606
                        </p>
                        <div className="flex items-center justify-between mt-3">
                          <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                            Last Offer
                          </span>
                          <div className="flex flex-col items-end">
                            <span className="text-[#292929] font-medium text-base font-gola">
                              ₹40,00,000
                            </span>
                            <p className="font-gola text-sm text-[#7E7E7E]">
                              9.85% | 24months
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                          <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                            Documents
                          </span>
                          <span className="font-gola text-sm font-medium text-[#ED3B3B] bg-[#FFECEC] w-[94px] text-center rounded-lg">
                            2 pending
                          </span>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                          <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                            Status
                          </span>
                          <span className="font-gola text-sm font-medium text-[#C96D02] bg-[#FFF0D4] w-[160px] text-center rounded-lg">
                            Not Yet Accepted
                          </span>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                          <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                            Contact
                          </span>
                          <span className="text-right text-[#292929] font-medium text-base font-gola">
                            +91 9867676678
                          </span>
                        </div>
                        <div className="flex items-center justify-end mt-5">
                          <button
                            onClick={() =>
                              router.push("/viewapplicationstatus")
                            }
                            type="button"
                            className="h-10 font-gola border border-[#D5D5D5] text-[#0057E4] bg-[#F5F9FF] font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                          >
                            View
                          </button>
                        </div>
                      </div>
                      <div className="cursor-pointer block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                        <div className="flex item-center mb-2">
                          <h5 className=" mr-3 text-base font-semibold text-[#313131]">
                            Nikhil Mathew
                          </h5>
                          <img src="/rightIconGray.svg" alt="" />
                        </div>

                        <p className="font-gola text-sm text-[#7E7E7E]">
                          Coimbatore, TN - 641606
                        </p>
                        <div className="flex items-center justify-between mt-3">
                          <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                            Last Offer
                          </span>
                          <div className="flex flex-col items-end">
                            <span className="text-[#292929] font-medium text-base font-gola">
                              ₹40,00,000
                            </span>
                            <p className="font-gola text-sm text-[#7E7E7E]">
                              9.85% | 24months
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                          <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                            Documents
                          </span>
                          <span className="font-gola text-sm font-medium text-[#ED3B3B] bg-[#FFECEC] w-[94px] text-center rounded-lg">
                            2 pending
                          </span>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                          <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                            Status
                          </span>
                          <span className="font-gola text-sm font-medium text-[#C96D02] bg-[#FFF0D4] w-[160px] text-center rounded-lg">
                            Not Yet Accepted
                          </span>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                          <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                            Contact
                          </span>
                          <span className="text-right text-[#292929] font-medium text-base font-gola">
                            +91 9867676678
                          </span>
                        </div>
                        <div className="flex items-center justify-end mt-5">
                          <button
                            onClick={() =>
                              router.push("/viewapplicationstatus")
                            }
                            type="button"
                            className="h-10 font-gola border border-[#D5D5D5] text-[#0057E4] bg-[#F5F9FF] font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                          >
                            View
                          </button>
                        </div>
                      </div>
                      <div className="cursor-pointer block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                        <div className="flex item-center mb-2">
                          <h5 className=" mr-3 text-base font-semibold text-[#313131]">
                            Nikhil Mathew
                          </h5>
                          <img src="/rightIconGray.svg" alt="" />
                        </div>

                        <p className="font-gola text-sm text-[#7E7E7E]">
                          Coimbatore, TN - 641606
                        </p>
                        <div className="flex items-center justify-between mt-3">
                          <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                            Last Offer
                          </span>
                          <div className="flex flex-col items-end">
                            <span className="text-[#292929] font-medium text-base font-gola">
                              ₹40,00,000
                            </span>
                            <p className="font-gola text-sm text-[#7E7E7E]">
                              9.85% | 24months
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                          <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                            Documents
                          </span>
                          <span className="font-gola text-sm font-medium text-[#ED3B3B] bg-[#FFECEC] w-[94px] text-center rounded-lg">
                            2 pending
                          </span>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                          <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                            Status
                          </span>
                          <span className="font-gola text-sm font-medium text-[#C96D02] bg-[#FFF0D4] w-[160px] text-center rounded-lg">
                            Not Yet Accepted
                          </span>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                          <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                            Contact
                          </span>
                          <span className="text-right text-[#292929] font-medium text-base font-gola">
                            +91 9867676678
                          </span>
                        </div>
                        <div className="flex items-center justify-end mt-5">
                          <button
                            onClick={() =>
                              router.push("/viewapplicationstatus")
                            }
                            type="button"
                            className="h-10 font-gola border border-[#D5D5D5] text-[#0057E4] bg-[#F5F9FF] font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                          >
                            View
                          </button>
                        </div>
                      </div>
                      <div className="cursor-pointer block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                        <div className="flex item-center mb-2">
                          <h5 className=" mr-3 text-base font-semibold text-[#313131]">
                            Nikhil Mathew
                          </h5>
                          <img src="/rightIconGray.svg" alt="" />
                        </div>

                        <p className="font-gola text-sm text-[#7E7E7E]">
                          Coimbatore, TN - 641606
                        </p>
                        <div className="flex items-center justify-between mt-3">
                          <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                            Last Offer
                          </span>
                          <div className="flex flex-col items-end">
                            <span className="text-[#292929] font-medium text-base font-gola">
                              ₹40,00,000
                            </span>
                            <p className="font-gola text-sm text-[#7E7E7E]">
                              9.85% | 24months
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                          <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                            Documents
                          </span>
                          <span className="font-gola text-sm font-medium text-[#ED3B3B] bg-[#FFECEC] w-[94px] text-center rounded-lg">
                            2 pending
                          </span>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                          <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                            Status
                          </span>
                          <span className="font-gola text-sm font-medium text-[#C96D02] bg-[#FFF0D4] w-[160px] text-center rounded-lg">
                            Not Yet Accepted
                          </span>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                          <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                            Contact
                          </span>
                          <span className="text-right text-[#292929] font-medium text-base font-gola">
                            +91 9867676678
                          </span>
                        </div>
                        <div className="flex items-center justify-end mt-5">
                          <button
                            onClick={() =>
                              router.push("/viewapplicationstatus")
                            }
                            type="button"
                            className="h-10 font-gola border border-[#D5D5D5] text-[#0057E4] bg-[#F5F9FF] font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                          >
                            View
                          </button>
                        </div>
                      </div>
                      <div className="cursor-pointer block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                        <div className="flex item-center mb-2">
                          <h5 className=" mr-3 text-base font-semibold text-[#313131]">
                            Nikhil Mathew
                          </h5>
                          <img src="/rightIconGray.svg" alt="" />
                        </div>

                        <p className="font-gola text-sm text-[#7E7E7E]">
                          Coimbatore, TN - 641606
                        </p>
                        <div className="flex items-center justify-between mt-3">
                          <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                            Last Offer
                          </span>
                          <div className="flex flex-col items-end">
                            <span className="text-[#292929] font-medium text-base font-gola">
                              ₹40,00,000
                            </span>
                            <p className="font-gola text-sm text-[#7E7E7E]">
                              9.85% | 24months
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                          <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                            Documents
                          </span>
                          <span className="font-gola text-sm font-medium text-[#ED3B3B] bg-[#FFECEC] w-[94px] text-center rounded-lg">
                            2 pending
                          </span>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                          <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                            Status
                          </span>
                          <span className="font-gola text-sm font-medium text-[#C96D02] bg-[#FFF0D4] w-[160px] text-center rounded-lg">
                            Not Yet Accepted
                          </span>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                          <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                            Contact
                          </span>
                          <span className="text-right text-[#292929] font-medium text-base font-gola">
                            +91 9867676678
                          </span>
                        </div>
                        <div className="flex items-center justify-end mt-5">
                          <button
                            onClick={() =>
                              router.push("/viewapplicationstatus")
                            }
                            type="button"
                            className="h-10 font-gola border border-[#D5D5D5] text-[#0057E4] bg-[#F5F9FF] font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                          >
                            View
                          </button>
                        </div>
                      </div>
                      <div className="cursor-pointer block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                        <div className="flex item-center mb-2">
                          <h5 className=" mr-3 text-base font-semibold text-[#313131]">
                            Nikhil Mathew
                          </h5>
                          <img src="/rightIconGray.svg" alt="" />
                        </div>

                        <p className="font-gola text-sm text-[#7E7E7E]">
                          Coimbatore, TN - 641606
                        </p>
                        <div className="flex items-center justify-between mt-3">
                          <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                            Last Offer
                          </span>
                          <div className="flex flex-col items-end">
                            <span className="text-[#292929] font-medium text-base font-gola">
                              ₹40,00,000
                            </span>
                            <p className="font-gola text-sm text-[#7E7E7E]">
                              9.85% | 24months
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                          <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                            Documents
                          </span>
                          <span className="font-gola text-sm font-medium text-[#ED3B3B] bg-[#FFECEC] w-[94px] text-center rounded-lg">
                            2 pending
                          </span>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                          <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                            Status
                          </span>
                          <span className="font-gola text-sm font-medium text-[#C96D02] bg-[#FFF0D4] w-[160px] text-center rounded-lg">
                            Not Yet Accepted
                          </span>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                          <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                            Contact
                          </span>
                          <span className="text-right text-[#292929] font-medium text-base font-gola">
                            +91 9867676678
                          </span>
                        </div>
                        <div className="flex items-center justify-end mt-5">
                          <button
                            onClick={() =>
                              router.push("/viewapplicationstatus")
                            }
                            type="button"
                            className="h-10 font-gola border border-[#D5D5D5] text-[#0057E4] bg-[#F5F9FF] font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                          >
                            View
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel style={{ padding: "0" }}>
                  <div>
                    <div className="flex justify-between w-full mt-5">
                      <div className="relative">
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
                      <button
                      onClick={onUserSidebarOpen}
                        type="button"
                        className="h-10 font-gola	text-white bg-primary-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                      >
                        <div className="flex items-center">
                          <img
                            className="pr-3"
                            src="../AddIcon.svg"
                            alt="Add Icon"
                          />
                          {"New User"}
                        </div>
                      </button>
                    </div>
                    <div className="mobile:hidden tablet:hidden mt-10 relative overflow-x-auto">
                      <table className="w-full text-sm text-left text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase border-b">
                          <tr>
                            <th scope="col" className="px-[0.5rem] py-3">
                              <div className="flex items-center">
                                <span className="capitalize text-sm font-gola font-medium text-[#767676DE]/[.87] mr-3">
                                  Organization Name
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
                            <th scope="col" className="px-[0.5rem] py-3">
                              <div className="flex items-center">
                                <span className="capitalize text-sm font-gola font-medium text-[#767676DE]/[.87] mr-3">
                                  Mobile Number
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

                            <th scope="col" className="px-[0.5rem] py-3">
                              <div className="flex items-center">
                                <span className="capitalize text-sm font-gola font-medium text-[#767676DE]/[.87] mr-3">
                                  Email Address
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

                            <th scope="col" className="px-[0.5rem] py-3">
                              <div className="flex items-center">
                                <span className="capitalize text-sm font-gola font-medium text-[#767676DE]/[.87] mr-3">
                                  Last Online Time
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
                            <th scope="col" className="px-[0.5rem] py-3">
                              <div className="flex items-center">
                                <span className="capitalize text-sm font-gola font-medium text-[#767676DE]/[.87] mr-3">
                                  Account Status
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
                            <th scope="col" className="px-[0.5rem] py-3">
                              <div className="flex items-center">
                                <span className="capitalize text-sm font-gola font-medium text-[#767676DE]/[.87]">
                                  Action
                                </span>
                              </div>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="bg-white border-b">
                            <th scope="row" className="px-[0.5rem] py-4">
                              <span className="font-gola text-sm font-medium text-black">
                                Ramkumar
                              </span>
                            </th>
                            <td scope="row" className="px-[0.5rem] py-4">
                              <span className="font-gola text-sm font-medium text-black">
                                +91 9789654457
                              </span>
                            </td>
                            <td scope="row" className="px-[0.5rem] py-4">
                              <span className="font-gola text-sm font-medium text-black">
                                ramkumar@hdfc.com
                              </span>
                            </td>
                            <td className="px-[0.5rem] py-4 font-gola text-sm font-medium text-black">
                              03/04/2023 01:23:12
                            </td>
                            <td className="px-[0.5rem] py-4 font-gola text-sm font-medium text-black">
                              Active
                            </td>
                            <td>
                              <button
                                onClick={() =>
                                  router.push("/organizationprofile")
                                }
                                type="button"
                                className="h-10 font-gola	text-white bg-primary-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                              >
                                View
                              </button>
                            </td>
                          </tr>
                          <tr className="bg-white border-b">
                            <th scope="row" className="px-[0.5rem] py-4">
                              <span className="font-gola text-sm font-medium text-black">
                                Ramkumar
                              </span>
                            </th>
                            <td scope="row" className="px-[0.5rem] py-4">
                              <span className="font-gola text-sm font-medium text-black">
                                +91 9789654457
                              </span>
                            </td>
                            <td scope="row" className="px-[0.5rem] py-4">
                              <span className="font-gola text-sm font-medium text-black">
                                ramkumar@hdfc.com
                              </span>
                            </td>
                            <td className="px-[0.5rem] py-4 font-gola text-sm font-medium text-black">
                              03/04/2023 01:23:12
                            </td>
                            <td className="px-[0.5rem] py-4 font-gola text-sm font-medium text-black">
                              Active
                            </td>
                            <td>
                              <button
                                onClick={() =>
                                  router.push("/organizationprofile")
                                }
                                type="button"
                                className="h-10 font-gola	text-white bg-primary-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                              >
                                View
                              </button>
                            </td>
                          </tr>
                          <tr className="bg-white border-b">
                            <th scope="row" className="px-[0.5rem] py-4">
                              <span className="font-gola text-sm font-medium text-black">
                                Ramkumar
                              </span>
                            </th>
                            <td scope="row" className="px-[0.5rem] py-4">
                              <span className="font-gola text-sm font-medium text-black">
                                +91 9789654457
                              </span>
                            </td>
                            <td scope="row" className="px-[0.5rem] py-4">
                              <span className="font-gola text-sm font-medium text-black">
                                ramkumar@hdfc.com
                              </span>
                            </td>
                            <td className="px-[0.5rem] py-4 font-gola text-sm font-medium text-black">
                              03/04/2023 01:23:12
                            </td>
                            <td className="px-[0.5rem] py-4 font-gola text-sm font-medium text-black">
                              Active
                            </td>
                            <td>
                              <button
                                onClick={() =>
                                  router.push("/organizationprofile")
                                }
                                type="button"
                                className="h-10 font-gola	text-white bg-primary-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                              >
                                View
                              </button>
                            </td>
                          </tr>
                          <tr className="bg-white border-b">
                            <th scope="row" className="px-[0.5rem] py-4">
                              <span className="font-gola text-sm font-medium text-black">
                                Ramkumar
                              </span>
                            </th>
                            <td scope="row" className="px-[0.5rem] py-4">
                              <span className="font-gola text-sm font-medium text-black">
                                +91 9789654457
                              </span>
                            </td>
                            <td scope="row" className="px-[0.5rem] py-4">
                              <span className="font-gola text-sm font-medium text-black">
                                ramkumar@hdfc.com
                              </span>
                            </td>
                            <td className="px-[0.5rem] py-4 font-gola text-sm font-medium text-black">
                              03/04/2023 01:23:12
                            </td>
                            <td className="px-[0.5rem] py-4 font-gola text-sm font-medium text-black">
                              Active
                            </td>
                            <td>
                              <button
                                onClick={() =>
                                  router.push("/organizationprofile")
                                }
                                type="button"
                                className="h-10 font-gola	text-white bg-primary-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                              >
                                View
                              </button>
                            </td>
                          </tr>
                          <tr className="bg-white border-b">
                            <th scope="row" className="px-[0.5rem] py-4">
                              <span className="font-gola text-sm font-medium text-black">
                                Ramkumar
                              </span>
                            </th>
                            <td scope="row" className="px-[0.5rem] py-4">
                              <span className="font-gola text-sm font-medium text-black">
                                +91 9789654457
                              </span>
                            </td>
                            <td scope="row" className="px-[0.5rem] py-4">
                              <span className="font-gola text-sm font-medium text-black">
                                ramkumar@hdfc.com
                              </span>
                            </td>
                            <td className="px-[0.5rem] py-4 font-gola text-sm font-medium text-black">
                              03/04/2023 01:23:12
                            </td>
                            <td className="px-[0.5rem] py-4 font-gola text-sm font-medium text-black">
                              Active
                            </td>
                            <td>
                              <button
                                onClick={() =>
                                  router.push("/organizationprofile")
                                }
                                type="button"
                                className="h-10 font-gola	text-white bg-primary-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                              >
                                View
                              </button>
                            </td>
                          </tr>
                          <tr className="bg-white border-b">
                            <th scope="row" className="px-[0.5rem] py-4">
                              <span className="font-gola text-sm font-medium text-black">
                                Ramkumar
                              </span>
                            </th>
                            <td scope="row" className="px-[0.5rem] py-4">
                              <span className="font-gola text-sm font-medium text-black">
                                +91 9789654457
                              </span>
                            </td>
                            <td scope="row" className="px-[0.5rem] py-4">
                              <span className="font-gola text-sm font-medium text-black">
                                ramkumar@hdfc.com
                              </span>
                            </td>
                            <td className="px-[0.5rem] py-4 font-gola text-sm font-medium text-black">
                              03/04/2023 01:23:12
                            </td>
                            <td className="px-[0.5rem] py-4 font-gola text-sm font-medium text-black">
                              Active
                            </td>
                            <td>
                              <button
                                onClick={() =>
                                  router.push("/organizationprofile")
                                }
                                type="button"
                                className="h-10 font-gola	text-white bg-primary-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                              >
                                View
                              </button>
                            </td>
                          </tr>
                          <tr className="bg-white border-b">
                            <th scope="row" className="px-[0.5rem] py-4">
                              <span className="font-gola text-sm font-medium text-black">
                                Ramkumar
                              </span>
                            </th>
                            <td scope="row" className="px-[0.5rem] py-4">
                              <span className="font-gola text-sm font-medium text-black">
                                +91 9789654457
                              </span>
                            </td>
                            <td scope="row" className="px-[0.5rem] py-4">
                              <span className="font-gola text-sm font-medium text-black">
                                ramkumar@hdfc.com
                              </span>
                            </td>
                            <td className="px-[0.5rem] py-4 font-gola text-sm font-medium text-black">
                              03/04/2023 01:23:12
                            </td>
                            <td className="px-[0.5rem] py-4 font-gola text-sm font-medium text-black">
                              Active
                            </td>
                            <td>
                              <button
                                onClick={() =>
                                  router.push("/organizationprofile")
                                }
                                type="button"
                                className="h-10 font-gola	text-white bg-primary-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                              >
                                View
                              </button>
                            </td>
                          </tr>
                          <tr className="bg-white border-b">
                            <th scope="row" className="px-[0.5rem] py-4">
                              <span className="font-gola text-sm font-medium text-black">
                                Ramkumar
                              </span>
                            </th>
                            <td scope="row" className="px-[0.5rem] py-4">
                              <span className="font-gola text-sm font-medium text-black">
                                +91 9789654457
                              </span>
                            </td>
                            <td scope="row" className="px-[0.5rem] py-4">
                              <span className="font-gola text-sm font-medium text-black">
                                ramkumar@hdfc.com
                              </span>
                            </td>
                            <td className="px-[0.5rem] py-4 font-gola text-sm font-medium text-black">
                              03/04/2023 01:23:12
                            </td>
                            <td className="px-[0.5rem] py-4 font-gola text-sm font-medium text-black">
                              Active
                            </td>
                            <td>
                              <button
                                onClick={() =>
                                  router.push("/organizationprofile")
                                }
                                type="button"
                                className="h-10 font-gola	text-white bg-primary-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                              >
                                View
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </div>
        </div>
        <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            size={"md"}
          >
            <DrawerOverlay />
            <DrawerContent>
              <div className="flex flex-col h-full w-full justify-between">
              <div className="p-5">
                <div className="w-full flex items-center justify-between">
                  <span className="text-2xl font-gola font-semibold">Offer</span>
                  <img
                    onClick={onClose}
                    className="cursor-pointer"
                    src="../close.svg"
                    alt="Close Icon"
                  />
                </div>
                <div>
                  <p className="text-sm font-normal text-subtext opacity-70 mt-5">
                   New Organization Name
                  </p>
                  <div style={{ height: "48px" }} className="flex mt-1.5">
                    <input
                      type="text"
                      id="website-admin"
                      className="rounded-lg bg-gray-50 border text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                      placeholder="HDFC Bank"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-sm font-normal text-subtext opacity-70 mt-5">
                    Phone Number
                  </p>
                  <div style={{ height: "48px" }} className="flex mt-1.5">
                    <input
                      type="text"
                      id="website-admin"
                      className="rounded-lg bg-gray-50 border text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                      placeholder="+91 987654677"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-sm font-normal text-subtext opacity-70 mt-5">
                    Email
                  </p>
                  <div style={{ height: "48px" }} className="flex mt-1.5">
                    <input
                      type="text"
                      id="website-admin"
                      className="rounded-lg bg-gray-50 border text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                      placeholder="johndoe@gmail.com"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-sm font-normal text-subtext opacity-70 mt-5">
                    Password
                  </p>
                  <div style={{ height: "48px" }} className="flex mt-1.5">
                    <input
                      type="text"
                      id="website-admin"
                      className="rounded-lg bg-gray-50 border text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                      placeholder="********"
                    />
                  </div>
                </div>
              </div>
              <div className="p-5 w-full">
              <button
                onClick={onClose}
                type="button"
                className="w-full h-10 font-gola	text-white bg-primary-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
              >
                Submit
              </button>
              </div>
              </div>
            </DrawerContent>
          </Drawer>
          <Drawer
            isOpen={isUserSidebarOpen}
            placement="right"
            onClose={onUserSidebarClose}
            size={"md"}
          >
            <DrawerOverlay />
            <DrawerContent>
              <div className="flex flex-col h-full w-full justify-between">
              <div className="p-5">
                <div className="w-full flex items-center justify-between">
                  <span className="text-2xl font-gola font-semibold">Offer</span>
                  <img
                    onClick={onUserSidebarClose}
                    className="cursor-pointer"
                    src="../close.svg"
                    alt="Close Icon"
                  />
                </div>
                <div>
                  <p className="text-sm font-normal text-subtext opacity-70 mt-5">
                   User Name
                  </p>
                  <div style={{ height: "48px" }} className="flex mt-1.5">
                    <input
                      type="text"
                      id="website-admin"
                      className="rounded-lg bg-gray-50 border text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                      placeholder="Ex: Dinesh"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-sm font-normal text-subtext opacity-70 mt-5">
                    Phone Number
                  </p>
                  <div style={{ height: "48px" }} className="flex mt-1.5">
                    <input
                      type="text"
                      id="website-admin"
                      className="rounded-lg bg-gray-50 border text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                      placeholder="+91 987654677"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-sm font-normal text-subtext opacity-70 mt-5">
                    Email
                  </p>
                  <div style={{ height: "48px" }} className="flex mt-1.5">
                    <input
                      type="text"
                      id="website-admin"
                      className="rounded-lg bg-gray-50 border text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                      placeholder="johndoe@gmail.com"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-sm font-normal text-subtext opacity-70 mt-5">
                    Password
                  </p>
                  <div style={{ height: "48px" }} className="flex mt-1.5">
                    <input
                      type="text"
                      id="website-admin"
                      className="rounded-lg bg-gray-50 border text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                      placeholder="********"
                    />
                  </div>
                </div>
              </div>
              <div className="p-5 w-full">
              <button
                onClick={onClose}
                type="button"
                className="w-full h-10 font-gola	text-white bg-primary-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
              >
                Submit
              </button>
              </div>
              </div>
            </DrawerContent>
          </Drawer>
      </div>
    </div>
  );
}

export default bank;
