import React, { useState } from "react";
import Head from "next/head";
import {
  Drawer,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import StudentPortalTopbar from "@/components/reusable/StudentPortalTopbar";
import StudentPortalMobileSidebar from "@/components/reusable/StudentPortalMobileSidebar";
import { Select } from "@chakra-ui/select";
import screens from "@/utils/screens";
import { useRouter } from "next/router";

function offers() {
  const [activeTab, setActiveTab] = useState("1");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const onSidebarOpen = () => {
    setIsSidebarOpen(true);
  };
  const onSidebarClose = () => {
    setIsSidebarOpen(false);
  };
  const { isMobile } = screens();

  const [isTablet1] = useMediaQuery(["(min-width: 768px)"]);
  const [isDesktop1] = useMediaQuery(["(min-width: 1024px)"]);

  return (
    <div className="w-full flex flex-col items-center desktop:bg-[#F1F4FA]">
      <Head>
        <title>Loan Offers</title>
      </Head>
      {!isMobile && <StudentPortalTopbar />}
      {isMobile && (
        <StudentPortalMobileSidebar
          isOpen={isSidebarOpen}
          onClose={onSidebarClose}
        />
      )}
      <div className="w-full mb-5 tabanddesk:px-10 mobile:px-3 min-h-screen">
        <div className="desktop:hidden flex flex-col justify-center mt-10">
          <div className="mobile:hidden flex items-center">
            <h1 className="font-gola text-[28px] font-bold">Loan Offers</h1>
          </div>
          <div className="flex items-center tablet:hidden justify-between">
            <div className="flex">
              <img
                className="mr-5"
                onClick={onSidebarOpen}
                src="../menu.svg"
                alt="Menu Icon"
              />
              <span className="text-2xl font-gola font-bold">Loan Offers</span>
            </div>
            <div
              className="cursor-pointer"
              onClick={() => router.push("/studentprofile")}
            >
              <img
                className="bg-[#F5F9FF] rounded-full p-[11px]"
                src="/ProfileIcon.svg"
                alt="Avatar"
              />
            </div>
          </div>
          <div className="flex mt-3">
            <div className="tablet:w-2/5 mobile:w-[60%]">
              <Select bg="white">
                <option value="option1">University Of Calofornia</option>
              </Select>
            </div>
            <div className="ml-5 flex items-center bg-[#EEEEEE] px-3 py-1.5 rounded-full">
              <span className="font-gola text-[14px] font-medium text-[#254472]">
                Yet to apply
              </span>
              <img className="pl-2" src="/dropdown.svg" alt="dropdown icon" />
            </div>
          </div>
          <div className="mobile:hidden flex mt-5">
            <div className="min-w-[626px] flex items-center bg-[#F9F9F9] border-[1px] border-[#CECECE] p-1 rounded-md">
              <div
                onClick={() => setActiveTab("1")}
                className={`${
                  activeTab === "1"
                    ? "bg-white p-1.5 rounded-md drop-shadow-md	"
                    : "p-1.5"
                } cursor-pointer flex items-center`}
              >
                <div className="flex px-2">
                  <span className="text-sm font-gola text-[#202020] pl-2">
                    Standard Offers &nbsp;
                    <span className="font-gola text-sm text-[#A3A3A3]">
                      (28)
                    </span>
                  </span>
                  <span className="ml-[10px] text-[10px] font-gola text-[#6B37FF] bg-[#F8E2FF] px-[6px] py-[2px] rounded-lg">
                    7 New
                  </span>
                </div>
              </div>
              <div
                onClick={() => setActiveTab("2")}
                className={`${
                  activeTab === "2"
                    ? "bg-white p-1.5 rounded-md drop-shadow-md	"
                    : "p-1.5"
                } cursor-pointer flex items-center ml-3`}
              >
                <div className="flex px-2">
                  <span className="text-sm font-gola text-[#202020]">
                    Banks Applied &nbsp;
                    <span className="font-gola text-sm text-[#A3A3A3]">
                      (03)
                    </span>
                  </span>
                  <span className="ml-[10px] text-[10px] font-gola text-[#FE4646] bg-[#FFE9E9] px-[6px] py-[2px] rounded-lg">
                    2!
                  </span>
                </div>
              </div>
              <div
                onClick={() => setActiveTab("3")}
                className={`${
                  activeTab === "3"
                    ? "bg-white p-1.5 rounded-md drop-shadow-md	"
                    : "p-1.5"
                } cursor-pointer flex items-center ml-3`}
              >
                <div className="flex px-2">
                  <span className="text-sm font-gola text-[#202020]">
                    Bids &nbsp;
                    <span className="font-gola text-sm text-[#A3A3A3]">
                      (03)
                    </span>
                  </span>
                  <span className="ml-[10px] text-[10px] font-gola text-[#6B37FF] bg-[#F8E2FF] px-[6px] py-[2px] rounded-lg">
                    7 New
                  </span>
                  <span className="ml-[10px] text-[10px] font-gola text-[#FE4646] bg-[#FFE9E9] px-[6px] py-[2px] rounded-lg">
                    2!
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="tablet:hidden flex mt-5">
            <div className="min-w-full flex items-center bg-[#F9F9F9] border-[1px] border-[#CECECE] py-1 rounded-md">
              <div
                onClick={() => setActiveTab("1")}
                className={`${
                  activeTab === "1" ? "bg-white  rounded-md drop-shadow-md" : ""
                } cursor-pointer flex items-center w-[33%] justify-center`}
              >
                <div className="flex py-2">
                  <span className="text-sm font-gola text-[#202020] pl-0.5">
                    Offers
                    <span className="font-gola text-sm text-[#A3A3A3]">
                      (28+2 N)
                    </span>
                  </span>
                </div>
              </div>
              <div
                onClick={() => setActiveTab("2")}
                className={`${
                  activeTab === "2" ? "bg-white  rounded-md drop-shadow-md" : ""
                } cursor-pointer flex items-center w-[33%] justify-center`}
              >
                <div className="flex py-2">
                  <span className="text-sm font-gola text-[#202020]">
                    Applied
                    <span className="font-gola text-sm text-[#A3A3A3]">
                      (03)
                    </span>
                  </span>
                  <span className="ml-[5px] text-[10px] font-gola text-[#FE4646] bg-[#FFE9E9] px-[6px] py-[2px] rounded-lg">
                    !
                  </span>
                </div>
              </div>
              <div
                onClick={() => setActiveTab("3")}
                className={`${
                  activeTab === "3" ? "bg-white  rounded-md drop-shadow-md	" : ""
                } cursor-pointer flex items-center ml-3 w-[33%] justify-center`}
              >
                <div className="flex py-2">
                  <span className="text-sm font-gola text-[#202020]">
                    Bids
                    <span className="font-gola text-sm text-[#A3A3A3]">
                      (03+2N)
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex mt-3 items-center">
            <div className="relative  w-full">
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
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                placeholder="Search"
              />
            </div>
            <img className="ml-[12px]" src="/filter_alt.svg" alt="Filter Image" />
            </div>
            {/* <div className="flex items-center mt-5">
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
                No Collateral
              </label>
            </div> */}
          </div>
        </div>
        <div className="mobile:hidden tablet:hidden flex flex-col justify-center mt-10">
          <div className="flex items-center">
            <span className="font-gola text-[28px] font-bold">Loan Offers</span>
            <div className="w-1/5 ml-5">
              <Select bg="white">
                <option value="option1">University Of Calofornia</option>
              </Select>
            </div>
            <div className="ml-5 flex items-center bg-[#EEEEEE] px-3 py-1.5 rounded-full">
              <span className="font-gola text-[14px] font-medium text-[#254472]">
                Yet to apply
              </span>
              <img className="pl-2" src="/dropdown.svg" alt="dropdown icon" />
            </div>
          </div>
          <div className="flex mt-5">
            <div className="min-w-[626px] flex items-center bg-[#F9F9F9] border-[1px] border-[#CECECE] p-1 rounded-md">
              <div
                onClick={() => setActiveTab("1")}
                className={`${
                  activeTab === "1"
                    ? "bg-white p-1.5 rounded-md drop-shadow-md	"
                    : "p-1.5"
                } cursor-pointer flex items-center`}
              >
                <div className="flex px-2">
                  <span className="text-sm font-gola text-[#202020] pl-2">
                    Standard Offers &nbsp;
                    <span className="font-gola text-sm text-[#A3A3A3]">
                      (28)
                    </span>
                  </span>
                  <span className="ml-[10px] text-[10px] font-gola text-[#6B37FF] bg-[#F8E2FF] px-[6px] py-[2px] rounded-lg">
                    7 New
                  </span>
                </div>
              </div>
              <div
                onClick={() => setActiveTab("2")}
                className={`${
                  activeTab === "2"
                    ? "bg-white p-1.5 rounded-md drop-shadow-md	"
                    : "p-1.5"
                } cursor-pointer flex items-center ml-3`}
              >
                <div className="flex px-2">
                  <span className="text-sm font-gola text-[#202020]">
                    Banks Applied &nbsp;
                    <span className="font-gola text-sm text-[#A3A3A3]">
                      (03)
                    </span>
                  </span>
                  <span className="ml-[10px] text-[10px] font-gola text-[#FE4646] bg-[#FFE9E9] px-[6px] py-[2px] rounded-lg">
                    2!
                  </span>
                </div>
              </div>
              <div
                onClick={() => setActiveTab("3")}
                className={`${
                  activeTab === "3"
                    ? "bg-white p-1.5 rounded-md drop-shadow-md	"
                    : "p-1.5"
                } cursor-pointer flex items-center ml-3`}
              >
                <div className="flex px-2">
                  <span className="text-sm font-gola text-[#202020]">
                    Bids &nbsp;
                    <span className="font-gola text-sm text-[#A3A3A3]">
                      (03)
                    </span>
                  </span>
                  <span className="ml-[10px] text-[10px] font-gola text-[#6B37FF] bg-[#F8E2FF] px-[6px] py-[2px] rounded-lg">
                    7 New
                  </span>
                  <span className="ml-[10px] text-[10px] font-gola text-[#FE4646] bg-[#FFE9E9] px-[6px] py-[2px] rounded-lg">
                    2!
                  </span>
                </div>
              </div>
            </div>
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
            <div className="ml-5 relative">
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.70639 6.8275L10.9464 2.5875C11.0401 2.49454 11.1145 2.38394 11.1653 2.26208C11.216 2.14022 11.2422 2.00951 11.2422 1.8775C11.2422 1.74549 11.216 1.61478 11.1653 1.49292C11.1145 1.37107 11.0401 1.26046 10.9464 1.1675C10.759 0.98125 10.5056 0.876709 10.2414 0.876709C9.9772 0.876709 9.72375 0.98125 9.53639 1.1675L5.99639 4.7075L2.45639 1.1675C2.26903 0.98125 2.01557 0.876709 1.75139 0.876709C1.4872 0.876709 1.23375 0.98125 1.04639 1.1675C0.953708 1.26094 0.880383 1.37176 0.830618 1.49359C0.780853 1.61543 0.755629 1.74589 0.75639 1.8775C0.755629 2.00911 0.780853 2.13957 0.830618 2.26141C0.880382 2.38324 0.953708 2.49406 1.04639 2.5875L5.28639 6.8275C5.37935 6.92123 5.48995 6.99562 5.61181 7.04639C5.73367 7.09716 5.86438 7.1233 5.99639 7.1233C6.1284 7.1233 6.25911 7.09716 6.38097 7.04639C6.50282 6.99562 6.61343 6.92123 6.70639 6.8275Z"
                    fill="#989898"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="input-group-1"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Latest"
              />
            </div>
            <div className="flex items-center ml-5">
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
                No Collateral
              </label>
            </div>
          </div>
        </div>
        {activeTab === "1" && (
          <>
            <div
              className="rounded-md mt-10 bg-white"
              style={{
                border: "1px solid #DBDBDB",
                padding: "16px",
                boxShadow: "0px 4px 4px rgba(139, 139, 139, 0.25)",
              }}
            >
              <div className="w-full flex justify-between">
                <div className="flex mobile:flex-col">
                  <img width={40} src="../axis.svg" alt="" />
                  <div className="tabanddesk:pl-4 mobile:pt-3">
                    <span className="text-[#292929] text-xl font-gola font-semibold">
                      Axis Bank
                    </span>
                    <div className="flex">
                      <img width={20} src="../bolt.svg" alt="" />
                      <p className="text-xs font-gola text-[#2E2E2E]">
                        High Success Rate
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex mobile:flex-col mobile:justify-end items-center">
                  <p className="text-sm font-gola font-semibold opacity-30">
                    Max. loan amount
                  </p>
                  <span className="ml-5 text-2xl font-gola font-semibold text-[#292929]">
                    ₹2 crores
                  </span>
                </div>
              </div>
              <div
                style={{
                  border: "1px dashed #DADADA",
                  margin: "20px 0",
                }}
              ></div>
              <div className="flex tablet:flex-col mobile:flex-col justify-between">
                <div className="flex justify-between mobile:mb-5 tablet:mb-5 desktop:w-[30%]">
                  <div>
                    <p className="mt-[12px] text-sm font-gola font-semibold opacity-30">
                      Interest Rate
                    </p>
                    <p className="mt-[12px] text-sm font-gola font-semibold opacity-30">
                      Tenure
                    </p>
                    <p className="mt-[12px] text-sm font-gola font-semibold opacity-30">
                      Emi Range
                    </p>
                  </div>
                  <div>
                    <p className="mt-[12px] text-right text-sm font-gola font-semibold text-[#292929]">
                      from 9.85% p.a
                    </p>
                    <p className="mt-[12px] text-right text-sm font-gola font-semibold text-[#292929]">
                      8 to 10 yrs (PG)
                    </p>
                    <p className="mt-[12px] text-right text-sm font-gola font-semibold text-[#292929]">
                      ₹2,00,000 to ₹3,00,000
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    border: "1px solid #DFDCDC",
                  }}
                ></div>
                <div className="flex justify-between mobile:mb-5 tablet:mb-5 desktop:w-[30%]">
                  <div>
                    <p className="mt-[12px] text-sm font-gola font-semibold opacity-30">
                      Interest Rate
                    </p>
                    <p className="mt-[12px] text-sm font-gola font-semibold opacity-30">
                      Tenure
                    </p>
                    <p className="mt-[12px] text-sm font-gola font-semibold opacity-30">
                      Emi Range
                    </p>
                  </div>
                  <div>
                    <p className="mt-[12px] text-right text-sm font-gola font-semibold text-[#292929]">
                      from 9.85% p.a
                    </p>
                    <p className="mt-[12px] text-right text-sm font-gola font-semibold text-[#292929]">
                      2 weeks
                    </p>
                    <p className="mt-[12px] text-right text-sm font-gola font-semibold text-[#292929]">
                      2%+GST (non-refundable)
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    border: "1px solid #DFDCDC",
                  }}
                ></div>
                <div className="flex justify-between desktop:w-[30%]">
                  <div>
                    <p className="mt-[12px] text-sm font-gola font-semibold opacity-30">
                      Repayment Type
                    </p>
                    <p className="mt-[12px] text-sm font-gola font-semibold opacity-30">
                      Collateral
                    </p>
                  </div>
                  <div>
                    <p className="mt-[12px] text-right text-sm font-gola font-semibold text-[#292929]">
                      After Course completion
                    </p>
                    <p className="mt-[12px] text-right text-sm font-gola font-semibold text-[#292929]">
                      Fixed Deposit, Fresh Property
                    </p>
                  </div>
                </div>
              </div>
              <div
                style={{
                  border: "1px dashed #DADADA",
                  marginTop: "30px",
                }}
              ></div>
              <div className="flex justify-end w-full">
                <button
                  onClick={onOpen}
                  type="button"
                  className="h-10 mt-5 font-gola	text-white bg-primary-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                >
                  <div className="flex items-center">
                    {"View & Apply"}
                    <img className="pl-3" src="../rightIcon.svg" alt="" />
                  </div>
                </button>
              </div>
            </div>
            <div
              className="rounded-md mt-10 bg-white"
              style={{
                border: "1px solid #DBDBDB",
                padding: "16px",
                boxShadow: "0px 4px 4px rgba(139, 139, 139, 0.25)",
              }}
            >
              <div className="w-full flex justify-between">
                <div className="flex mobile:flex-col">
                  <img src="../hdfc.svg" alt="" />
                  <div className="tabanddesk:pl-4 mobile:pt-3">
                    <span className="text-[#292929] text-xl font-gola font-semibold">
                      HDFC Bank
                    </span>
                    <div className="flex">
                      <img src="../star.svg" alt="" />
                      <p className="text-xs font-gola text-[#2E2E2E]">
                        Top Choice
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex mobile:flex-col mobile:justify-end items-center">
                  <p className="text-sm font-gola font-semibold opacity-30">
                    Max. loan amount
                  </p>
                  <span className="ml-5 text-2xl font-gola font-semibold text-[#292929]">
                    ₹2 crores
                  </span>
                </div>
              </div>
              <div
                style={{
                  border: "1px dashed #DADADA",
                  margin: "20px 0",
                }}
              ></div>
              <div className="flex tablet:flex-col mobile:flex-col justify-between">
                <div className="flex justify-between mobile:mb-5 tablet:mb-5 desktop:w-[30%]">
                  <div>
                    <p className="mt-[12px] text-sm font-gola font-semibold opacity-30">
                      Interest Rate
                    </p>
                    <p className="mt-[12px] text-sm font-gola font-semibold opacity-30">
                      Tenure
                    </p>
                    <p className="mt-[12px] text-sm font-gola font-semibold opacity-30">
                      Emi Range
                    </p>
                  </div>
                  <div>
                    <p className="mt-[12px] text-right text-sm font-gola font-semibold text-[#292929]">
                      from 9.85% p.a
                    </p>
                    <p className="mt-[12px] text-right text-sm font-gola font-semibold text-[#292929]">
                      8 to 10 yrs (PG)
                    </p>
                    <p className="mt-[12px] text-right text-sm font-gola font-semibold text-[#292929]">
                      ₹2,00,000 to ₹3,00,000
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    border: "1px solid #DFDCDC",
                  }}
                ></div>
                <div className="flex justify-between mobile:mb-5 tablet:mb-5 desktop:w-[30%]">
                  <div>
                    <p className="mt-[12px] text-sm font-gola font-semibold opacity-30">
                      Interest Rate
                    </p>
                    <p className="mt-[12px] text-sm font-gola font-semibold opacity-30">
                      Tenure
                    </p>
                    <p className="mt-[12px] text-sm font-gola font-semibold opacity-30">
                      Emi Range
                    </p>
                  </div>
                  <div>
                    <p className="mt-[12px] text-right text-sm font-gola font-semibold text-[#292929]">
                      from 9.85% p.a
                    </p>
                    <p className="mt-[12px] text-right text-sm font-gola font-semibold text-[#292929]">
                      2 weeks
                    </p>
                    <p className="mt-[12px] text-right text-sm font-gola font-semibold text-[#292929]">
                      2%+GST (non-refundable)
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    border: "1px solid #DFDCDC",
                  }}
                ></div>
                <div className="flex justify-between desktop:w-[30%]">
                  <div>
                    <p className="mt-[12px] text-sm font-gola font-semibold opacity-30">
                      Repayment Type
                    </p>
                    <p className="mt-[12px] text-sm font-gola font-semibold opacity-30">
                      Collateral
                    </p>
                  </div>
                  <div>
                    <p className="mt-[12px] text-right text-sm font-gola font-semibold text-[#292929]">
                      After Course completion
                    </p>
                    <p className="mt-[12px] text-right text-sm font-gola font-semibold text-[#292929]">
                      Fixed Deposit, Fresh Property
                    </p>
                  </div>
                </div>
              </div>
              <div
                style={{
                  border: "1px dashed #DADADA",
                  marginTop: "30px",
                }}
              ></div>
              <div className="flex justify-end w-full">
                <button
                  onClick={onOpen}
                  type="button"
                  className="h-10 mt-5 font-gola	text-white bg-primary-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                >
                  <div className="flex items-center">
                    {"View & Apply"}
                    <img className="pl-3" src="../rightIcon.svg" alt="" />
                  </div>
                </button>
              </div>
            </div>
          </>
        )}
        {activeTab === "2" && (
          <>
            <div
              className="rounded-md mt-10 bg-white"
              style={{
                border: "1px solid #DBDBDB",
                padding: "16px",
                boxShadow: "0px 4px 4px rgba(139, 139, 139, 0.25)",
              }}
            >
              <div className="w-full flex justify-between">
                <div className="flex mobile:flex-col">
                  <img width={40} src="../axis.svg" alt="" />
                  <div className="tabanddesk:pl-4 mobile:pt-3">
                    <span className="text-[#292929] text-xl font-gola font-semibold">
                      Axis Bank
                    </span>
                    <div className="flex">
                      <img width={20} src="../bolt.svg" alt="" />
                      <p className="text-xs font-gola text-[#2E2E2E]">
                        High Success Rate
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex mobile:flex-col mobile:justify-end items-center">
                  <p className="text-sm font-gola font-semibold opacity-30">
                    Max. loan amount
                  </p>
                  <span className="ml-5 text-2xl font-gola font-semibold text-[#292929]">
                    ₹2 crores
                  </span>
                </div>
              </div>
              <div
                style={{
                  border: "1px dashed #DADADA",
                  margin: "20px 0",
                }}
              ></div>
              <div className="flex tablet:flex-col mobile:flex-col justify-between">
                <div className="flex justify-between mobile:mb-5 tablet:mb-5 desktop:w-[30%]">
                  <div>
                    <p className="mt-[12px] text-sm font-gola font-semibold opacity-30">
                      Interest Rate
                    </p>
                    <p className="mt-[12px] text-sm font-gola font-semibold opacity-30">
                      Tenure
                    </p>
                    <p className="mt-[12px] text-sm font-gola font-semibold opacity-30">
                      Emi Range
                    </p>
                  </div>
                  <div>
                    <p className="mt-[12px] text-right text-sm font-gola font-semibold text-[#292929]">
                      from 9.85% p.a
                    </p>
                    <p className="mt-[12px] text-right text-sm font-gola font-semibold text-[#292929]">
                      8 to 10 yrs (PG)
                    </p>
                    <p className="mt-[12px] text-right text-sm font-gola font-semibold text-[#292929]">
                      ₹2,00,000 to ₹3,00,000
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    border: "1px solid #DFDCDC",
                  }}
                ></div>
                <div className="flex justify-between mobile:mb-5 tablet:mb-5 desktop:w-[30%]">
                  <div>
                    <p className="mt-[12px] text-sm font-gola font-semibold opacity-30">
                      Interest Rate
                    </p>
                    <p className="mt-[12px] text-sm font-gola font-semibold opacity-30">
                      Tenure
                    </p>
                    <p className="mt-[12px] text-sm font-gola font-semibold opacity-30">
                      Emi Range
                    </p>
                  </div>
                  <div>
                    <p className="mt-[12px] text-right text-sm font-gola font-semibold text-[#292929]">
                      from 9.85% p.a
                    </p>
                    <p className="mt-[12px] text-right text-sm font-gola font-semibold text-[#292929]">
                      2 weeks
                    </p>
                    <p className="mt-[12px] text-right text-sm font-gola font-semibold text-[#292929]">
                      2%+GST (non-refundable)
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    border: "1px solid #DFDCDC",
                  }}
                ></div>
                <div className="flex justify-between desktop:w-[30%]">
                  <div>
                    <p className="mt-[12px] text-sm font-gola font-semibold opacity-30">
                      Repayment Type
                    </p>
                    <p className="mt-[12px] text-sm font-gola font-semibold opacity-30">
                      Collateral
                    </p>
                  </div>
                  <div>
                    <p className="mt-[12px] text-right text-sm font-gola font-semibold text-[#292929]">
                      After Course completion
                    </p>
                    <p className="mt-[12px] text-right text-sm font-gola font-semibold text-[#292929]">
                      Fixed Deposit, Fresh Property
                    </p>
                  </div>
                </div>
              </div>
              <div
                style={{
                  border: "1px dashed #DADADA",
                  marginTop: "30px",
                }}
              ></div>
              <div className="flex items-center justify-between w-full mt-5">
                <div className="flex item-center">
                  <span className="text-sm font-gola font-medium text-[#0747A6] bg-[#B3D4FF] py-1 px-2 rounded-md">
                    In Progress
                  </span>
                </div>
                <button
                  type="button"
                  className="h-10 font-gola	text-white bg-primary-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                >
                  <div className="flex items-center">
                    {"View"}
                    <img className="pl-3" src="../rightIcon.svg" alt="" />
                  </div>
                </button>
              </div>
            </div>
            <div
              className="rounded-md mt-10 bg-white"
              style={{
                border: "1px solid #DBDBDB",
                padding: "16px",
                boxShadow: "0px 4px 4px rgba(139, 139, 139, 0.25)",
              }}
            >
              <div className="w-full flex justify-between">
                <div className="flex mobile:flex-col">
                  <img src="../hdfc.svg" alt="" />
                  <div className="tabanddesk:pl-4 mobile:pt-3">
                    <span className="text-[#292929] text-xl font-gola font-semibold">
                      HDFC Bank
                    </span>
                    <div className="flex">
                      <img src="../star.svg" alt="" />
                      <p className="text-xs font-gola text-[#2E2E2E]">
                        Top Choice
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex mobile:flex-col mobile:justify-end items-center">
                  <p className="text-sm font-gola font-semibold opacity-30">
                    Max. loan amount
                  </p>
                  <span className="ml-5 text-2xl font-gola font-semibold text-[#292929]">
                    ₹2 crores
                  </span>
                </div>
              </div>
              <div
                style={{
                  border: "1px dashed #DADADA",
                  margin: "20px 0",
                }}
              ></div>
              <div className="flex tablet:flex-col mobile:flex-col justify-between">
                <div className="flex justify-between mobile:mb-5 tablet:mb-5 desktop:w-[30%]">
                  <div>
                    <p className="mt-[12px] text-sm font-gola font-semibold opacity-30">
                      Interest Rate
                    </p>
                    <p className="mt-[12px] text-sm font-gola font-semibold opacity-30">
                      Tenure
                    </p>
                    <p className="mt-[12px] text-sm font-gola font-semibold opacity-30">
                      Emi Range
                    </p>
                  </div>
                  <div>
                    <p className="mt-[12px] text-right text-sm font-gola font-semibold text-[#292929]">
                      from 9.85% p.a
                    </p>
                    <p className="mt-[12px] text-right text-sm font-gola font-semibold text-[#292929]">
                      8 to 10 yrs (PG)
                    </p>
                    <p className="mt-[12px] text-right text-sm font-gola font-semibold text-[#292929]">
                      ₹2,00,000 to ₹3,00,000
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    border: "1px solid #DFDCDC",
                  }}
                ></div>
                <div className="flex justify-between mobile:mb-5 tablet:mb-5 desktop:w-[30%]">
                  <div>
                    <p className="mt-[12px] text-sm font-gola font-semibold opacity-30">
                      Interest Rate
                    </p>
                    <p className="mt-[12px] text-sm font-gola font-semibold opacity-30">
                      Tenure
                    </p>
                    <p className="mt-[12px] text-sm font-gola font-semibold opacity-30">
                      Emi Range
                    </p>
                  </div>
                  <div>
                    <p className="mt-[12px] text-right text-sm font-gola font-semibold text-[#292929]">
                      from 9.85% p.a
                    </p>
                    <p className="mt-[12px] text-right text-sm font-gola font-semibold text-[#292929]">
                      2 weeks
                    </p>
                    <p className="mt-[12px] text-right text-sm font-gola font-semibold text-[#292929]">
                      2%+GST (non-refundable)
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    border: "1px solid #DFDCDC",
                  }}
                ></div>
                <div className="flex justify-between desktop:w-[30%]">
                  <div>
                    <p className="mt-[12px] text-sm font-gola font-semibold opacity-30">
                      Repayment Type
                    </p>
                    <p className="mt-[12px] text-sm font-gola font-semibold opacity-30">
                      Collateral
                    </p>
                  </div>
                  <div>
                    <p className="mt-[12px] text-right text-sm font-gola font-semibold text-[#292929]">
                      After Course completion
                    </p>
                    <p className="mt-[12px] text-right text-sm font-gola font-semibold text-[#292929]">
                      Fixed Deposit, Fresh Property
                    </p>
                  </div>
                </div>
              </div>
              <div
                style={{
                  border: "1px dashed #DADADA",
                  marginTop: "30px",
                }}
              ></div>
              <div className="flex items-center justify-between w-full mt-5">
                <div>
                  <span className="text-sm font-gola font-medium text-[#FF2222] bg-[#FFECEC] py-1 px-2 rounded-md">
                    Upload Documents
                  </span>
                </div>
                <button
                  type="button"
                  className="h-10 font-gola	text-white bg-primary-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                >
                  <div className="flex items-center">
                    {"View"}
                    <img className="pl-3" src="../rightIcon.svg" alt="" />
                  </div>
                </button>
              </div>
            </div>
          </>
        )}
        {activeTab === "3" && (
          <>
            <div className="tablet:hidden mobile:hidden bg-white rounded-t-lg mt-10 w-full relative overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase border-b">
                  <tr>
                    <th className="w-[20%]" scope="col">
                      <div className="flex items-center justify-between border-r-[1px] p-[16px]">
                        <span className="capitalize text-sm font-gola font-medium text-[#767676DE]/[.87] mr-3">
                          Applicant Name
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
                    <th scope="col" className="w-[15%]">
                      <div className="flex items-center justify-between border-r-[1px] p-[16px]">
                        <span className="capitalize text-sm font-gola font-medium text-[#767676DE]/[.87] mr-3">
                          Status
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
                          Documents Upload
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
                    <th scope="col" className="w-[15%]">
                      <div className="flex items-center justify-between border-r-[1px] p-[16px]">
                        <span className="capitalize text-sm font-gola font-medium text-[#767676DE]/[.87] mr-3">
                          Bids
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
                          Latest Offer
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
                        </div>
                      </div>
                    </th>
                    <th scope="col" className="w-[10%]">
                      <div className="flex items-center justify-between border-r-[1px] p-[16px]">
                        <span className="capitalize text-sm font-gola font-medium text-[#767676DE]/[.87] mr-3">
                          Action
                        </span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b">
                    <th scope="row" className="px-6 py-4 flex items-center">
                      <img src="/axis.svg" alt="Axis Bank" />
                      <span className="ml-5 font-gola text-[14px] font-medium text-[#272727]">
                        Axis Bank
                      </span>
                    </th>
                    <td className="px-6 py-4 font-gola text-sm font-medium text-[#272727]">
                      -
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-gola text-[14px] font-medium text-[#272727]">
                        Uploaded All
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-gola text-sm font-medium text-[#272727]">
                        3rd offer
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-gola text-[14px] font-medium text-[#272727]">
                        ₹40,00,000 | 9.85% | 24months
                      </span>
                    </td>
                    <td>
                      <button
                        type="button"
                        className="ml-3 h-10 mt-5 font-gola	text-white bg-primary-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                      >
                        Accept
                      </button>
                    </td>
                  </tr>
                  <tr className="bg-white rounded-b-lg border-b">
                    <th scope="row" className="px-6 py-4 flex items-center">
                      <img src="/hdfc.svg" alt="HDFC Bank" />
                      <span className="ml-5 font-gola text-[14px] font-medium text-[#272727]">
                        HDFC Bank
                      </span>
                    </th>
                    <td className="px-6 py-4">
                      <span className="w-[90px] rounded-full font-gola text-[14px] font-medium text-[#128400] bg-[#EDFFEA] px-2 py-1">
                        Accepted
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-gola text-[14px] font-medium text-[#272727]">
                        Uploaded All
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-gola text-sm font-medium text-[#272727]">
                        2nd offer
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-gola text-[14px] font-medium text-[#272727]">
                        ₹40,00,000 | 9.85% | 24months
                      </span>
                    </td>
                    <td>
                      <button
                        type="button"
                        className="ml-3 h-10 font-gola border border-[#D5D5D5] text-[#0057E4] bg-[#F5F9FF] font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                      >
                        View
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="desktop:hidden mt-10">
              <div
                className="py-[20px] px-[12px]"
                style={{
                  border: " 1px solid #EEEEEE",
                  boxShadow: "0px 4px 4px rgba(184, 184, 184, 0.25)",
                  borderRadius: "10px",
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img src="/axis.svg" alt="Axis Bank" />
                    <span className="ml-5 font-gola text-[14px] font-medium text-[#272727]">
                      Axis Bank
                    </span>
                  </div>
                  <span className="font-gola text-[14px] text-[#128400] font-medium bg-[#EDFFEA] py-[4px] px-[12px] w-[90px] rounded-full">
                    Accepted
                  </span>
                </div>
                <div className="mt-[15px]">
                  <span className="font-gola text-[#767676DE] text-sm font-medium">
                    Document Uploads:
                  </span>
                  <span className="font-gola text-[#272727] text-[14px] font-bold">
                    Uploaded All
                  </span>
                </div>
                <div className="mt-[15px]">
                  <div className="flex items-center">
                    <span className="font-gola text-[#767676DE] text-sm font-medium">
                      Latest Offer (3rd Offer)
                    </span>
                    <span className="ml-3 bg-[#FBEFFF] font-gola text-[14px] text-center w-[65px] font-medium px[12px] py-[5px] rounded-full text-[#6B37FF]">
                      Latest
                    </span>
                  </div>
                  <span className="font-gola text-[#272727] text-[14px] font-bold">
                    {" "}
                    ₹40,00,000 | 9.85% | 24months
                  </span>
                </div>
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="mt-3 h-10 font-gola border border-[#D5D5D5] text-[#0057E4] bg-[#F5F9FF] font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                  >
                    View
                  </button>
                </div>
              </div>
              <div
                className="py-[20px] px-[12px] mt-5"
                style={{
                  border: " 1px solid #EEEEEE",
                  boxShadow: "0px 4px 4px rgba(184, 184, 184, 0.25)",
                  borderRadius: "10px",
                }}
              >
                <div className="flex items-center">
                  <img src="/hdfc.svg" alt="Axis Bank" />
                  <span className="ml-5 font-gola text-[14px] font-medium text-[#272727]">
                    HDFC Bank
                  </span>
                </div>
                <div className="mt-[15px]">
                  <span className="font-gola text-[#767676DE] text-sm font-medium">
                    Document Uploads:
                  </span>
                  <span className="font-gola text-[#272727] text-[14px] font-bold">
                    -
                  </span>
                </div>
                <div className="mt-[15px]">
                  <div className="flex items-center">
                    <span className="font-gola text-[#767676DE] text-sm font-medium">
                      Latest Offer (2nd Offer)
                    </span>
                    <span className="ml-3 bg-[#FBEFFF] font-gola text-[14px] text-center w-[65px] font-medium px[12px] py-[5px] rounded-full text-[#6B37FF]">
                      Latest
                    </span>
                  </div>
                  <span className="font-gola text-[#272727] text-[14px] font-bold">
                    {" "}
                    ₹40,00,000 | 9.85% | 24months
                  </span>
                </div>
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="ml-3 h-10 mt-5 font-gola	text-white bg-primary-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                  >
                    Accept
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <Drawer
        isOpen={isOpen}
        variant={
          isDesktop1
            ? "desktopDrawer"
            : isTablet1
            ? "tabletDrawer"
            : "mobileDrawer"
        }
        placement="right"
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <div className="w-full p-6 min-h-screen">
            <div className="flex justify-between">
              <span className="text-3xl font-semibold font-gola">Loan Offers</span>
              <img
                onClick={onClose}
                className="cursor-pointer"
                src="../close.svg"
                alt="Close Icon"
              />
            </div>
            <div
              style={{ border: "1px solid #E8E8E8", marginTop: "20px" }}
            ></div>
            <div className="flex flex-col tabanddesk:h-[90%] justify-between">
              <div className="flex mobile:flex-col justify-between">
                <div className="desktop:w-[40%]">
                  <div className="flex items-center mt-5">
                    <img src="../axis.svg" alt="" />
                    <div className="pl-4">
                      <span className="text-[#292929] text-xl font-gola font-semibold">
                        Axis Bank
                      </span>
                    </div>
                  </div>
                  <div className=" flex justify-between items-center mt-5">
                    <p className="text-sm font-gola font-semibold opacity-30">
                      Max. loan amount
                    </p>
                    <span className="ml-5 text-2xl font-gola font-semibold text-[#292929]">
                      ₹2 crores
                    </span>
                  </div>
                  <div
                    style={{ border: "1px solid #E8E8E8", margin: "20px 0" }}
                  ></div>
                  <div className="flex justify-between">
                    <div>
                      <p className="mt-[12px] text-sm font-gola font-semibold opacity-30">
                        Interest Rate
                      </p>
                      <p className="mt-[12px] text-sm font-gola font-semibold opacity-30">
                        Tenure
                      </p>
                      <p className="mt-[12px] text-sm font-gola font-semibold opacity-30">
                        Emi Range
                      </p>
                      <p className="mt-[12px] text-sm font-gola font-semibold opacity-30">
                        Processing Time
                      </p>
                      <p className="mt-[12px] text-sm font-gola font-semibold opacity-30">
                        Processing Fee
                      </p>
                      <p className="mt-[12px] text-sm font-gola font-semibold opacity-30">
                        Repayment Type
                      </p>
                      <p className="mt-[12px] text-sm font-gola font-semibold opacity-30">
                        Collateral
                      </p>
                    </div>
                    <div>
                      <p className="mt-[12px] text-right  text-sm font-gola font-semibold text-[#292929]">
                        from 9.85% p.a
                      </p>
                      <p className="mt-[12px] text-right  text-sm font-gola font-semibold text-[#292929]">
                        8 to 10 years
                      </p>
                      <p className="mt-[12px] text-right  text-sm font-gola font-semibold text-[#292929]">
                        ₹2,00,000 - ₹3,00,000
                      </p>
                      <p className="mt-[12px] text-right  text-sm font-gola font-semibold text-[#292929]">
                        2 weeks
                      </p>
                      <p className="mt-[12px] text-right  text-sm font-gola font-semibold text-[#292929]">
                        2%+GST (non-refundable)
                      </p>
                      <p className="mt-[12px] text-right  text-sm font-gola font-semibold text-[#292929]">
                        After Course completion
                      </p>
                      <p className="mt-[12px] text-right  text-sm font-gola font-semibold text-[#292929]">
                        Fixed Deposit, Fresh Property
                      </p>
                    </div>
                  </div>
                </div>
                <div className="min-w-[48%]">
                  <span className="mt-[26px] text-[20px] font-gola font-semibold text-[#313131]">
                    Required Documents
                  </span>
                  <div className="flex items-center mt-3">
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
                      Fetch from your saved documents
                    </label>
                  </div>
                  <div className="mt-10">
                    <div className="flex tabanddesk:justify-between">
                      <span className="mobile:w-[120px] tabanddesk:w-[40%] text-base font-gola font-normal">
                        Aadhar Card
                      </span>
                      <div className="flex tabanddesk:w-[60%] tabanddesk:justify-between">
                        <span className="mobile:w-[65px] text-[#A3A3A3] ">
                          1/2 files
                        </span>
                        <div className="flex tabanddesk:w-[150px] mobile:w-[120px] justify-start">
                          <span className="ml-3 text-[#FF2222] text-sm font-medium bg-[#FFECEC] px-2 py-1 rounded-md">
                            Pending
                          </span>
                        </div>
                        <img
                          className="ml-10"
                          src="../rightIconGray.svg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        border: "1px solid #E8E8E8",
                        margin: "15px 0",
                      }}
                    ></div>
                    <div className="flex tabanddesk:justify-between mt-3">
                      <span className="mobile:w-[120px] text-base font-gola font-normal">
                        Voter ID
                      </span>
                      <div className="flex tabanddesk:w-[60%] tabanddesk:justify-between">
                        <span className="mobile:w-[65px] text-[#A3A3A3] ">
                          2/2 files
                        </span>
                        <div className="flex tabanddesk:w-[150px] mobile:w-[120px] justify-start">
                          <span className="ml-3 text-[#1EA808] text-sm font-medium bg-[#E6FFE2] px-2 py-1 rounded-md">
                            Uploaded All
                          </span>
                        </div>
                        <img
                          className="ml-10"
                          src="../rightIconGray.svg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        border: "1px solid #E8E8E8",
                        margin: "15px 0",
                      }}
                    ></div>
                    <div className="flex tabanddesk:justify-between mt-3">
                      <span className="mobile:w-[120px] text-base font-gola font-normal">
                        PAN Card
                      </span>
                      <div className="flex tabanddesk:w-[60%] tabanddesk:justify-between">
                        <span className="mobile:w-[65px] text-[#A3A3A3] ">
                          1/2 files
                        </span>
                        <div className="flex tabanddesk:w-[150px] mobile:w-[120px] justify-start">
                          <span className="ml-3 text-[#FF2222] text-sm font-medium bg-[#FFECEC] px-2 py-1 rounded-md">
                            Pending
                          </span>
                        </div>
                        <img
                          className="ml-10"
                          src="../rightIconGray.svg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        border: "1px solid #E8E8E8",
                        margin: "15px 0",
                      }}
                    ></div>
                    <div className="flex tabanddesk:justify-between mt-3">
                      <div>
                        <span className="mobile:w-[120px] text-base font-gola font-normal">
                          Work Experience
                        </span>
                      </div>

                      <div className="flex tabanddesk:w-[60%] tabanddesk:justify-between mobile:justify-start">
                        <span className="mobile:w-[65px] text-[#A3A3A3] ">
                          1/2 files
                        </span>
                        <div className="flex tabanddesk:w-[150px] mobile:w-[120px] justify-start">
                          <span className=" mobile:h-[28px] ml-3 text-[#FF2222] text-sm font-medium bg-[#FFECEC] px-2 py-1 rounded-md">
                            Pending
                          </span>
                        </div>
                        <img
                          className="ml-10 mobile h-[15px]"
                          src="../rightIconGray.svg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        border: "1px solid #E8E8E8",
                        margin: "15px 0",
                      }}
                    ></div>
                    <div className="flex tabanddesk:justify-between mt-3">
                      <span className="mobile:w-[120px] text-base font-gola font-normal">
                        College Degree
                      </span>
                      <div className="flex tabanddesk:w-[60%] tabanddesk:justify-between">
                        <span className="text-[#A3A3A3] mobile:w-[65px]">
                          2/2 files
                        </span>
                        <div className="flex tabanddesk:w-[150px] mobile:w-[120px] justify-start">
                          <span className="ml-3 text-[#1EA808] text-sm font-medium bg-[#E6FFE2] px-2 py-1 rounded-md">
                            Uploaded All
                          </span>
                        </div>
                        <img
                          className="ml-10"
                          src="../rightIconGray.svg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="h-10 font-gola	text-white bg-primary-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
              >
                Apply
              </button>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default offers;
